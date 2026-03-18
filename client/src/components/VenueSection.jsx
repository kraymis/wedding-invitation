import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionDivider from "./SectionDivider";

const MAP_URL =
  "https://www.google.com/maps?q=Salle%20des%20f%C3%AAtes%20Dar%20Soltane%2C%20Es%20S%C3%A9nia%2C%20Oran&output=embed";
const DIRECTIONS_URL = "https://maps.app.goo.gl/BMXn5nTfmNrewcmt9";

function Corner({ className = "" }) {
  return (
    <svg className={`ornate-corner ${className}`} viewBox="0 0 84 84" aria-hidden="true">
      <path d="M9 75C38 73 62 50 75 9M16 68C36 64 53 49 67 16M25 59C38 55 48 42 58 25" />
      <path d="M20 20c4-10 16-12 23-4 2-7 13-10 18-3 4 5 3 12-4 18-8 7-23 10-37 9 0-11 0-15 0-20z" />
    </svg>
  );
}

export default function VenueSection() {
  const { t } = useLanguage();
  return (
    <section id="venue" className="section-padding bg-cream">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center font-heading text-[1.9rem] text-gold md:text-5xl"
      >
        {t.venue.title}
      </motion.h2>
      <SectionDivider />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden"
      >
        <div
          className="h-[350px] w-full bg-cover bg-center md:h-[500px] md:bg-fixed"
          style={{ backgroundImage: "url('/assets/images/dar-soltane.jpg')" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#FAF7F2_100%)]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-6 text-center font-heading text-[1.8rem] text-gold md:text-[2.5rem]"
      >
        {t.venue.name}
      </motion.p>
      <SectionDivider />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto mt-4 max-w-5xl rounded border-2 border-gold shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
      >
        <Corner className="left-0 top-0" />
        <Corner className="right-0 top-0 rotate-90" />
        <Corner className="bottom-0 left-0 -rotate-90" />
        <Corner className="bottom-0 right-0 rotate-180" />
        <iframe
          title={t.venue.mapTitle}
          src={MAP_URL}
          className="h-[300px] w-full rounded md:h-[450px] lg:h-[500px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </motion.div>

      <div className="mt-6 text-center">
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-base inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-base font-semibold text-dark"
        >
          {t.venue.directions}
        </a>
      </div>
    </section>
  );
}
