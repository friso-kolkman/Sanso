import { NextRequest, NextResponse } from 'next/server'
import { getClinicSettings } from '@/lib/database'
import { 
  addAppointmentToCalendar, 
  updateAppointmentInCalendar, 
  deleteAppointmentFromCalendar 
} from '@/lib/google-calendar'

export async function POST(request: NextRequest) {
  try {
    const { action, appointment, googleEventId } = await request.json()
    const clinicSettings = getClinicSettings()

    if (!clinicSettings) {
      return NextResponse.json(
        { error: 'Clinic settings not found' },
        { status: 404 }
      )
    }

    let result
    switch (action) {
      case 'create':
        result = await addAppointmentToCalendar(appointment, clinicSettings)
        break
      case 'update':
        if (!googleEventId) {
          return NextResponse.json(
            { error: 'Google Event ID required for updates' },
            { status: 400 }
          )
        }
        result = await updateAppointmentInCalendar(googleEventId, appointment, clinicSettings)
        break
      case 'delete':
        if (!googleEventId) {
          return NextResponse.json(
            { error: 'Google Event ID required for deletion' },
            { status: 400 }
          )
        }
        result = await deleteAppointmentFromCalendar(googleEventId)
        break
      default:
        return NextResponse.json(
          { error: 'Invalid action. Must be create, update, or delete' },
          { status: 400 }
        )
    }

    return NextResponse.json({
      message: `Appointment ${action}d successfully`,
      result
    })

  } catch (error) {
    console.error(`❌ Error with Google Calendar appointment operation:`, error)
    return NextResponse.json(
      { error: 'Failed to perform Google Calendar operation', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 