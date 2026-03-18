import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WEDDING_DATE_ISO } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import SectionDivider from "./SectionDivider";

function getDiff() {
  const diff = Math.max(0, new Date(WEDDING_DATE_ISO).getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function CountdownSection() {
  const { t, language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(getDiff);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getDiff()), 1000);
    return () => clearInterval(timer);
  }, []);

  const items = useMemo(
    () => [
      { value: timeLeft.days, label: t.countdown.days },
      { value: timeLeft.hours, label: t.countdown.hours },
      { value: timeLeft.minutes, label: t.countdown.minutes },
      { value: timeLeft.seconds, label: t.countdown.seconds }
    ],
    [timeLeft, t]
  );

  return (
    <section className="section-padding bg-cream text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-heading text-[1.9rem] text-gold md:text-5xl"
      >
        {t.countdown.title}
      </motion.h2>
      <SectionDivider />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={language}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="mx-auto grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {items.map((item, idx) => (
            <motion.div
              key={`unit-${idx}`}
              initial={{ opacity: 0, x: idx % 2 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              className="rounded-lg border border-gold/50 bg-white/50 p-4"
            >
              <motion.p className="font-heading text-4xl text-dark md:text-5xl">{String(item.value).padStart(2, "0")}</motion.p>
              <motion.p className="mt-2 text-sm md:text-base">{item.label}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
