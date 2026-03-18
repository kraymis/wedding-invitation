import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface RSVPData {
  name: string
  attending: "yes" | "no"
  guests: number
  message: string
}

const RECIPIENT_EMAIL = "mm_maachi@esi.dz"
const RSVP_SUBJECT = "Nouvelle confirmation RSVP — Oussama & Wafae"

export async function POST(request: Request) {
  try {
    const data: RSVPData = await request.json()

    if (!data.name?.trim() || !data.attending) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      )
    }

    const host = process.env.SMTP_HOST || process.env.MAIL_HOST
    const port = Number(process.env.SMTP_PORT || process.env.MAIL_PORT || 587)
    const user = process.env.SMTP_USER || process.env.MAIL_USERNAME
    const pass = process.env.SMTP_PASS || process.env.MAIL_PASSWORD
    const fromEmail =
      process.env.RSVP_FROM_EMAIL ||
      process.env.MAIL_FROM_ADDRESS ||
      process.env.SMTP_USER ||
      process.env.MAIL_USERNAME ||
      "no-reply@wedding.local"

    if (!host || !user || !pass || Number.isNaN(port)) {
      return NextResponse.json(
        { error: "Configuration SMTP manquante ou invalide" },
        { status: 500 }
      )
    }

    const secure =
      (process.env.SMTP_SECURE || process.env.MAIL_SECURE || "").toLowerCase() === "true"

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    })

    const guests = Math.max(1, Number(data.guests || 1))
    const attendingLabel = data.attending === "yes" ? "Oui" : "Non"

    await transporter.sendMail({
      from: fromEmail,
      to: RECIPIENT_EMAIL,
      subject: RSVP_SUBJECT,
      text: [
        `Nom: ${data.name}`,
        `Présence: ${attendingLabel}`,
        `Nombre d'invités: ${guests}`,
        `Message: ${data.message || "(Aucun message)"}`,
      ].join("\n"),
      html: `
        <h2>${RSVP_SUBJECT}</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Présence:</strong> ${attendingLabel}</p>
        <p><strong>Nombre d'invités:</strong> ${guests}</p>
        <p><strong>Message:</strong> ${data.message || "(Aucun message)"}</p>
      `,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: "Merci ! Votre confirmation a bien été envoyée.",
        data: {
          name: data.name,
          attending: data.attending,
          guests,
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("RSVP Error:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    )
  }
}
