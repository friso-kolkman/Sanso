import fs from 'fs';
import path from 'path';

// Database file path
const dbPath = path.join(process.cwd(), 'data', 'clinic.json');

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.dirname(dbPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Initialize database with default data
function initDatabase() {
  ensureDataDir();
  
  if (!fs.existsSync(dbPath)) {
    const defaultData = {
      clinicSettings: {
        id: 1,
        clinicTimezone: 'Europe/Rome',
        slotMinutes: 60,
        availableSlotMinutes: [60, 75, 90],
        bufferMinutes: 15,
        maxDaysInAdvance: 60,
        minLeadMinutes: 1440,
        businessHoursJson: JSON.stringify({
          mon: [{ start: '08:00', end: '18:00' }],
          tue: [{ start: '08:00', end: '18:00' }],
          wed: [{ start: '08:00', end: '18:00' }],
          thu: [{ start: '08:00', end: '18:00' }],
          fri: [{ start: '08:00', end: '18:00' }],
          sat: [{ start: '09:00', end: '13:00' }],
          sun: []
        }),
        closedDatesJson: JSON.stringify(['2025-12-25', '2025-12-26']),
        adminEmail: 'admin@hbotclinic.com',
        emailFrom: 'HBOT Clinic <no-reply@hbotclinic.com>',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      appointments: []
    };
    
    fs.writeFileSync(dbPath, JSON.stringify(defaultData, null, 2));
  }
}

// Read database
function readDatabase() {
  initDatabase();
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
}

// Write database
function writeDatabase(data) {
  ensureDataDir();
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

// Get clinic settings
function getClinicSettings() {
  const db = readDatabase();
  return db.clinicSettings;
}

// Update clinic settings
function updateClinicSettings(settings) {
  const db = readDatabase();
  db.clinicSettings = { ...db.clinicSettings, ...settings, updatedAt: new Date().toISOString() };
  writeDatabase(db);
  return db.clinicSettings;
}

// Get appointments
function getAppointments() {
  const db = readDatabase();
  return db.appointments.sort((a, b) => new Date(b.startAt) - new Date(a.startAt));
}

// Create appointment
function createAppointment(appointment) {
  const db = readDatabase()
  const newAppointment = {
    ...appointment,
    googleEventId: null, // Will be set when synced with Google Calendar
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  db.appointments.push(newAppointment)
  writeDatabase(db)
  return newAppointment
}

// Update appointment
function updateAppointment(appointmentId, updates) {
  const db = readDatabase()
  const appointmentIndex = db.appointments.findIndex(apt => apt.id === appointmentId)
  
  if (appointmentIndex === -1) {
    throw new Error('Appointment not found')
  }
  
  db.appointments[appointmentIndex] = {
    ...db.appointments[appointmentIndex],
    ...updates,
    updatedAt: new Date().toISOString()
  }
  
  writeDatabase(db)
  return db.appointments[appointmentIndex]
}

// Update appointment Google Calendar ID
function updateAppointmentGoogleEventId(appointmentId, googleEventId) {
  return updateAppointment(appointmentId, { googleEventId })
}

export {
  initDatabase,
  getClinicSettings,
  updateClinicSettings,
  getAppointments,
  createAppointment,
  updateAppointment,
  updateAppointmentGoogleEventId
}; 