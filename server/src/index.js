import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import rsvpRouter from "./routes/rsvp.js";

dotenv.config();
const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json());
app.use("/api/rsvp", rsvpRouter);
app.get("/api/health", (_req, res) => res.status(200).json({ ok: true }));

async function start() {
  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
