import { Router } from "express";
import nodemailer from "nodemailer";
import { Rsvp } from "../models/Rsvp.js";

const router = Router();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

router.post("/", async (req, res) => {
  const { fullName, attending, guests, message = "", language = "fr" } = req.body;

  if (!fullName?.trim()) return res.status(400).json({ message: "Invalid fullName" });
  if (typeof attending !== "boolean") return res.status(400).json({ message: "Invalid attending value" });
  if (!Number.isInteger(guests) || guests < 1) return res.status(400).json({ message: "Invalid guests" });

  try {
    await Rsvp.create({ fullName: fullName.trim(), attending, guests, message: message.trim(), language });

    const subject = "Nouvelle confirmation RSVP — Oussama & Wafae";
    const text = [
      `Nom: ${fullName}`,
      `Présence: ${attending ? "Oui" : "Non"}`,
      `Invités: ${guests}`,
      `Message: ${message || "-"}`,
      `Langue: ${language}`
    ].join("\n");

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: "mm_maachi@esi.dz",
      subject,
      text
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ message: error.message || "Server error" });
  }
});

export default router;
