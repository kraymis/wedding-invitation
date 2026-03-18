import { useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useLanguage } from "../context/LanguageContext";
import SectionDivider from "./SectionDivider";

const initialForm = { fullName: "", attending: true, guests: 1, message: "" };

export default function RSVPSection() {
  const { t, language } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.fullName.trim()) {
      toast.error(t.messages.validationName);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language })
      });

      if (!response.ok) throw new Error("Request failed");
      confetti({ particleCount: 180, spread: 90, origin: { y: 0.65 } });
      toast.success(t.messages.success);
      setForm(initialForm);
    } catch {
      toast.error(t.messages.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="section-padding bg-cream">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center font-heading text-[1.9rem] text-gold md:text-5xl"
      >
        {t.rsvp.title}
      </motion.h2>
      <SectionDivider />

      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto grid max-w-3xl gap-4 rounded-lg border border-gold/40 bg-white/60 p-4 md:p-6"
      >
        <motion.label
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="grid gap-2"
        >
          <span className="text-sm md:text-base">{t.rsvp.fullName}</span>
          <input
            value={form.fullName}
            onChange={(e) => setForm((v) => ({ ...v, fullName: e.target.value }))}
            placeholder={t.rsvp.fullNamePlaceholder}
            className="min-h-12 rounded border border-gold/30 px-3 text-base outline-none focus:border-gold"
          />
        </motion.label>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="grid gap-2"
        >
          <span className="text-sm md:text-base">{t.rsvp.attending}</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setForm((v) => ({ ...v, attending: true }))}
              className={`btn-base rounded-full px-5 py-2 ${form.attending ? "bg-gold text-dark" : "border border-gold/50"}`}
            >
              {t.rsvp.yes}
            </button>
            <button
              type="button"
              onClick={() => setForm((v) => ({ ...v, attending: false }))}
              className={`btn-base rounded-full px-5 py-2 ${!form.attending ? "bg-gold text-dark" : "border border-gold/50"}`}
            >
              {t.rsvp.no}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="grid gap-2"
        >
          <span className="text-sm md:text-base">{t.rsvp.guests}</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setForm((v) => ({ ...v, guests: Math.max(1, v.guests - 1) }))}
              className="btn-base rounded-full border border-gold px-4 py-2"
            >
              -
            </button>
            <span className="w-10 text-center text-lg">{form.guests}</span>
            <button
              type="button"
              onClick={() => setForm((v) => ({ ...v, guests: v.guests + 1 }))}
              className="btn-base rounded-full border border-gold px-4 py-2"
            >
              +
            </button>
          </div>
        </motion.div>

        <motion.label
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="grid gap-2"
        >
          <span className="text-sm md:text-base">{t.rsvp.message}</span>
          <textarea
            value={form.message}
            onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
            placeholder={t.rsvp.messagePlaceholder}
            rows={4}
            className="min-h-12 rounded border border-gold/30 p-3 text-base outline-none focus:border-gold"
          />
        </motion.label>

        <button
          type="submit"
          disabled={loading}
          className="btn-base rounded-full bg-gold px-6 py-3 text-base font-semibold text-dark [background-size:200%_100%] [background-image:linear-gradient(110deg,#C9A84C, #e6d08f, #C9A84C)] hover:animate-shimmer"
        >
          {loading ? t.rsvp.submitting : t.rsvp.submit}
        </button>
      </motion.form>
    </section>
  );
}
