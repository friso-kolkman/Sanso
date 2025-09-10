import { google } from 'googleapis'
import { authenticate } from '@google-cloud/local-auth'
import path from 'path'
import fs from 'fs'

// Google Calendar API configuration
const SCOPES = ['https://www.googleapis.com/auth/calendar']
const TOKEN_PATH = path.join(process.cwd(), 'data', 'google-token.json')
const CREDENTIALS_PATH = path.join(process.cwd(), 'data', 'google-credentials.json')

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.dirname(TOKEN_PATH)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Load saved credentials
function loadSavedCredentialsIfExist() {
  try {
    if (fs.existsSync(TOKEN_PATH)) {
      const content = fs.readFileSync(TOKEN_PATH, 'utf8')
      const credentials = JSON.parse(content)
      return google.auth.fromJSON(credentials)
    }
  } catch (err) {
    console.error('Error loading saved credentials:', err)
  }
  return null
}

// Save credentials for future use
function saveCredentials(client) {
  ensureDataDir()
  const content = fs.readFileSync(CREDENTIALS_PATH, 'utf8')
  const keys = JSON.parse(content)
  const key = keys.installed || keys.web
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  })
  fs.writeFileSync(TOKEN_PATH, payload)
}

// Authenticate with Google
async function authorize() {
  let client = loadSavedCredentialsIfExist()
  if (client) {
    return client
  }

  // Check if credentials file exists
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error('Google credentials file not found. Please add google-credentials.json to the data folder.')
  }

  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  })

  if (client.credentials) {
    saveCredentials(client)
  }
  return client
}

// Create Google Calendar service
async function getCalendarService() {
  const auth = await authorize()
  return google.calendar({ version: 'v3', auth })
}

// Create calendar event from appointment
function createCalendarEvent(appointment, clinicSettings) {
  const startTime = new Date(appointment.startAt)
  const endTime = new Date(appointment.endAt)
  
  return {
    summary: `HBOT Session - ${appointment.fullName}`,
    description: `Hyperbaric Oxygen Therapy Session\n\nPatient: ${appointment.fullName}\nEmail: ${appointment.email}\nPhone: ${appointment.phone || 'Not provided'}\nNotes: ${appointment.notes || 'None'}\nStatus: ${appointment.status}`,
    start: {
      dateTime: startTime.toISOString(),
      timeZone: appointment.timezone || clinicSettings.clinicTimezone,
    },
    end: {
      dateTime: endTime.toISOString(),
      timeZone: appointment.timezone || clinicSettings.clinicTimezone,
    },
    attendees: [
      { email: appointment.email, displayName: appointment.fullName },
      { email: clinicSettings.adminEmail, displayName: 'Clinic Staff' }
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 }, // 24 hours before
        { method: 'popup', minutes: 60 }, // 1 hour before
      ],
    },
    colorId: appointment.status === 'CONFIRMED' ? '2' : '11', // Green for confirmed, Red for pending
  }
}

// Add appointment to Google Calendar
export async function addAppointmentToCalendar(appointment, clinicSettings) {
  try {
    const calendar = await getCalendarService()
    const event = createCalendarEvent(appointment, clinicSettings)
    
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      sendUpdates: 'all',
    })

    console.log('✅ Appointment added to Google Calendar:', response.data.id)
    return response.data
  } catch (error) {
    console.error('❌ Error adding appointment to Google Calendar:', error)
    throw error
  }
}

// Update appointment in Google Calendar
export async function updateAppointmentInCalendar(googleEventId, appointment, clinicSettings) {
  try {
    const calendar = await getCalendarService()
    const event = createCalendarEvent(appointment, clinicSettings)
    
    const response = await calendar.events.update({
      calendarId: 'primary',
      eventId: googleEventId,
      resource: event,
      sendUpdates: 'all',
    })

    console.log('✅ Appointment updated in Google Calendar:', response.data.id)
    return response.data
  } catch (error) {
    console.error('❌ Error updating appointment in Google Calendar:', error)
    throw error
  }
}

// Delete appointment from Google Calendar
export async function deleteAppointmentFromCalendar(googleEventId) {
  try {
    const calendar = await getCalendarService()
    
    await calendar.events.delete({
      calendarId: 'primary',
      eventId: googleEventId,
      sendUpdates: 'all',
    })

    console.log('✅ Appointment deleted from Google Calendar:', googleEventId)
    return true
  } catch (error) {
    console.error('❌ Error deleting appointment from Google Calendar:', error)
    throw error
  }
}

// Get upcoming events from Google Calendar
export async function getUpcomingEvents(maxResults = 10) {
  try {
    const calendar = await getCalendarService()
    const now = new Date()
    
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: now.toISOString(),
      maxResults: maxResults,
      singleEvents: true,
      orderBy: 'startTime',
    })

    return response.data.items || []
  } catch (error) {
    console.error('❌ Error fetching upcoming events from Google Calendar:', error)
    throw error
  }
}

// Sync all appointments with Google Calendar
export async function syncAllAppointments(appointments, clinicSettings) {
  try {
    const calendar = await getCalendarService()
    const results = []
    
    for (const appointment of appointments) {
      try {
        const event = createCalendarEvent(appointment, clinicSettings)
        const response = await calendar.events.insert({
          calendarId: 'primary',
          resource: event,
          sendUpdates: 'none', // Don't send updates during bulk sync
        })
        
        results.push({
          appointmentId: appointment.id,
          googleEventId: response.data.id,
          success: true
        })
        
        console.log(`✅ Synced appointment ${appointment.id} to Google Calendar`)
      } catch (error) {
        console.error(`❌ Failed to sync appointment ${appointment.id}:`, error)
        results.push({
          appointmentId: appointment.id,
          success: false,
          error: error.message
        })
      }
    }
    
    return results
  } catch (error) {
    console.error('❌ Error during bulk sync:', error)
    throw error
  }
}

// Check if Google Calendar is configured
export function isGoogleCalendarConfigured() {
  return fs.existsSync(CREDENTIALS_PATH) && fs.existsSync(TOKEN_PATH)
}

// Get authentication status
export async function getAuthStatus() {
  try {
    if (!isGoogleCalendarConfigured()) {
      return { configured: false, authenticated: false, message: 'Google Calendar not configured' }
    }
    
    const auth = await authorize()
    return { configured: true, authenticated: true, message: 'Successfully authenticated' }
  } catch (error) {
    return { configured: true, authenticated: false, message: error.message }
  }
} 