import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionDivider from "./SectionDivider";

export default function ProgramSection() {
  const { t } = useLanguage();

  return (
    <section id="programme" className="section-padding bg-cream text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-heading text-[1.9rem] text-gold md:text-5xl"
      >
        {t.programme.title}
      </motion.h2>
      <SectionDivider />
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {t.programme.events.map((event, index) => (
          <motion.article
            key={event.title}
            initial={{ opacity: 0, x: index % 2 ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-lg border border-gold/40 bg-white/60 p-5 text-left"
          >
            <h3 className="font-heading text-3xl text-dark">{event.title}</h3>
            <p className="mt-2 text-base leading-7">{event.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
