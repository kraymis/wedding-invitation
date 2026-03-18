"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { motion, AnimatePresence } from "framer-motion"
import { FloralDivider } from "@/components/floral-divider"
import { Check, Heart, Loader2, Minus, Plus } from "lucide-react"
import { ConfettiExplosion } from "@/components/confetti"
import { useLanguage } from "@/components/language-context"

interface RSVPFormData {
  name: string
  attending: "yes" | "no" | ""
  guests: number
  message: string
}

export function RsvpSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<RSVPFormData>({
    name: "",
    attending: "",
    guests: 1,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setErrorMessage("")

    if (!formData.name.trim()) {
      setErrorMessage(t.rsvp.validation.nameRequired)
      return
    }

    if (!formData.attending) {
      setErrorMessage(t.rsvp.validation.attendingRequired)
      return
    }

    setIsSubmitting(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("emailjs_not_configured")
      }

      const attendanceLabel = formData.attending === "yes" ? "Oui" : "Non"

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          attending: attendanceLabel,
          guests: formData.guests,
          message: formData.message || "(Aucun message)",
          wedding: "Oussama & Wafae",
        },
        {
          publicKey,
        }
      )

      setIsSubmitted(true)
    } catch (error) {
      if (error instanceof Error && error.message === "emailjs_not_configured") {
        setErrorMessage("EmailJS n'est pas configuré. Vérifiez les variables NEXT_PUBLIC_EMAILJS_*.")
      } else {
        setErrorMessage(t.rsvp.errorMessage)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const adjustGuests = (delta: number) => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.max(1, Math.min(10, prev.guests + delta)),
    }))
  }

  return (
    <section id="rsvp" className="relative overflow-hidden bg-cream py-14 md:py-32">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-rose/8 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-rose/6 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="mb-4 text-sm uppercase tracking-[0.2em] text-gold"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t.rsvp.eyebrow}
          </motion.p>
          <motion.h2
            className="mb-6 font-serif text-4xl italic text-foreground md:text-6xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {t.rsvp.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <FloralDivider className="mx-auto w-40 md:w-56" />
          </motion.div>
          <motion.p
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            {t.rsvp.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative rounded-sm border-2 border-gold/40 bg-ivory p-8 text-center shadow-xl md:p-12"
              >
                <ConfettiExplosion />
                <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-gold" />
                <div className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-gold" />
                <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-gold" />
                <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-gold" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold"
                >
                  <Check className="h-10 w-10 text-ivory" />
                </motion.div>
                <h3 className="mb-4 font-serif text-2xl text-foreground md:text-3xl">{t.rsvp.successTitle}</h3>
                <p className="mb-4 text-muted-foreground">{t.rsvp.successMessage}</p>
                <div className="flex items-center justify-center gap-2 text-gold">
                  <Heart className="h-5 w-5 fill-current" />
                  <span className="font-serif italic">{t.rsvp.coupleDisplay}</span>
                  <Heart className="h-5 w-5 fill-current" />
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="relative rounded-sm border-2 border-gold/30 bg-ivory p-6 shadow-xl md:p-8"
                style={{
                  background: "linear-gradient(180deg, #faf8f5 0%, #f5f0e8 100%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-gold" />
                <div className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-gold" />
                <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-gold" />
                <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-gold" />

                <motion.div
                  className="space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="name" className="mb-2 block text-sm uppercase tracking-wider text-foreground">
                      {t.rsvp.fields.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                      className="min-h-12 w-full rounded-sm border border-gold/30 bg-cream px-4 py-3 text-[16px] text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
                      placeholder={t.rsvp.fields.namePlaceholder}
                    />
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <label className="mb-3 block text-sm uppercase tracking-wider text-foreground">
                      {t.rsvp.fields.attendingLabel}
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, attending: "yes" }))}
                        className={`min-h-12 flex-1 rounded-full border-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] ${
                          formData.attending === "yes"
                            ? "border-gold bg-gold text-ivory"
                            : "border-gold/30 text-foreground hover:border-gold/50"
                        }`}
                      >
                        {t.rsvp.fields.yes}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, attending: "no" }))}
                        className={`min-h-12 flex-1 rounded-full border-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] ${
                          formData.attending === "no"
                            ? "border-gold bg-gold text-ivory"
                            : "border-gold/30 text-foreground hover:border-gold/50"
                        }`}
                      >
                        {t.rsvp.fields.no}
                      </button>
                    </div>
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <label className="mb-2 block text-sm uppercase tracking-wider text-foreground">
                      {t.rsvp.fields.guestsLabel}
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => adjustGuests(-1)}
                        className="flex h-12 w-12 min-h-12 min-w-12 items-center justify-center rounded-sm border-2 border-gold/30 text-gold transition-all duration-200 hover:scale-[1.03] hover:border-gold active:scale-[0.97]"
                        aria-label={t.rsvp.fields.guestsDecreaseAria}
                      >
                        <Minus className="h-5 w-5" />
                      </button>
                      <span className="w-16 text-center font-serif text-2xl text-foreground">{formData.guests}</span>
                      <button
                        type="button"
                        onClick={() => adjustGuests(1)}
                        className="flex h-12 w-12 min-h-12 min-w-12 items-center justify-center rounded-sm border-2 border-gold/30 text-gold transition-all duration-200 hover:scale-[1.03] hover:border-gold active:scale-[0.97]"
                        aria-label={t.rsvp.fields.guestsIncreaseAria}
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="message" className="mb-2 block text-sm uppercase tracking-wider text-foreground">
                      {t.rsvp.fields.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                      className="min-h-28 w-full resize-none rounded-sm border border-gold/30 bg-cream px-4 py-3 text-[16px] text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
                      placeholder={t.rsvp.fields.messagePlaceholder}
                    />
                  </motion.div>

                  {errorMessage ? <p className="text-sm text-red-700">{errorMessage}</p> : null}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-sm bg-gradient-to-r from-gold via-gold to-gold-dark py-4 font-semibold uppercase tracking-wider text-ivory transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        {t.rsvp.sending}
                      </>
                    ) : (
                      t.rsvp.submit
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
