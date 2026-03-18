import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionDivider from "./SectionDivider";

export default function WelcomeSection() {
  const { t } = useLanguage();
  return (
    <section className="section-padding bg-cream text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-heading text-[1.9rem] text-gold md:text-5xl"
      >
        {t.welcome.title}
      </motion.h2>
      <SectionDivider />
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-base leading-7 md:text-xl"
      >
        {t.welcome.text}
      </motion.p>
    </section>
  );
}
