import mongoose from "mongoose";

const rsvpSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    attending: { type: Boolean, required: true },
    guests: { type: Number, required: true, min: 1 },
    message: { type: String, default: "", trim: true },
    language: { type: String, enum: ["fr", "en"], default: "fr" }
  },
  { timestamps: true }
);

export const Rsvp = mongoose.model("Rsvp", rsvpSchema);
