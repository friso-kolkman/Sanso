import { NextRequest, NextResponse } from 'next/server'
import { getUpcomingEvents } from '@/lib/google-calendar'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const maxResults = parseInt(searchParams.get('maxResults') || '10')
    
    const events = await getUpcomingEvents(maxResults)
    
    // Format events for display
    const formattedEvents = events.map(event => ({
      id: event.id,
      summary: event.summary,
      description: event.description,
      start: event.start?.dateTime || event.start?.date,
      end: event.end?.dateTime || event.end?.date,
      attendees: event.attendees || [],
      status: event.status,
      htmlLink: event.htmlLink
    }))

    return NextResponse.json({
      events: formattedEvents,
      count: formattedEvents.length
    })

  } catch (error) {
    console.error('❌ Error fetching Google Calendar events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 