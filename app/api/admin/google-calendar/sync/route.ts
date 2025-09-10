import { NextRequest, NextResponse } from 'next/server'
import { getAppointments, getClinicSettings } from '@/lib/database'
import { syncAllAppointments, getAuthStatus } from '@/lib/google-calendar'

export async function POST(request: NextRequest) {
  try {
    // Check authentication status
    const authStatus = await getAuthStatus()
    if (!authStatus.authenticated) {
      return NextResponse.json(
        { error: 'Google Calendar not authenticated', details: authStatus.message },
        { status: 401 }
      )
    }

    // Get all appointments and clinic settings
    const appointments = getAppointments()
    const clinicSettings = getClinicSettings()

    if (!clinicSettings) {
      return NextResponse.json(
        { error: 'Clinic settings not found' },
        { status: 404 }
      )
    }

    // Sync appointments with Google Calendar
    const results = await syncAllAppointments(appointments, clinicSettings)
    
    const successCount = results.filter(r => r.success).length
    const failureCount = results.filter(r => !r.success).length

    console.log(`✅ Google Calendar sync completed: ${successCount} successful, ${failureCount} failed`)

    return NextResponse.json({
      message: 'Sync completed',
      results,
      summary: {
        total: appointments.length,
        successful: successCount,
        failed: failureCount
      }
    })

  } catch (error) {
    console.error('❌ Error syncing with Google Calendar:', error)
    return NextResponse.json(
      { error: 'Failed to sync with Google Calendar', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const authStatus = await getAuthStatus()
    return NextResponse.json(authStatus)
  } catch (error) {
    console.error('❌ Error checking Google Calendar status:', error)
    return NextResponse.json(
      { error: 'Failed to check status', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 