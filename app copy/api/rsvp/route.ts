import { NextResponse } from "next/server"

interface RSVPData {
  name: string
  email: string
  attending: string
  guests: number
  meal: string
  message: string
}

// In-memory storage for demo purposes
// In production, replace with actual database (MongoDB, etc.)
const rsvpSubmissions: RSVPData[] = []

export async function POST(request: Request) {
  try {
    const data: RSVPData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.attending) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Store the RSVP (in production, save to database)
    rsvpSubmissions.push({
      ...data,
      guests: data.guests || 1,
    })

    console.log("RSVP Received:", data)
    console.log("Total submissions:", rsvpSubmissions.length)

    return NextResponse.json(
      { 
        success: true, 
        message: "RSVP received successfully",
        data: {
          name: data.name,
          attending: data.attending,
          guests: data.guests,
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("RSVP Error:", error)
    return NextResponse.json(
      { error: "Failed to process RSVP" },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Optional: Get all RSVPs (for admin use)
  return NextResponse.json({
    total: rsvpSubmissions.length,
    attending: rsvpSubmissions.filter(r => r.attending === "yes").length,
    declining: rsvpSubmissions.filter(r => r.attending === "no").length,
  })
}
