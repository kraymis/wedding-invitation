import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionDivider from "./SectionDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="section-padding bg-cream text-center">
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="font-heading text-3xl text-gold md:text-5xl">
        {t.hero.names}
      </motion.p>
      <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mt-4 font-heading text-[2.5rem] leading-tight text-dark md:text-6xl">
        {t.hero.title}
      </motion.h1>
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base leading-7 md:text-xl">
        {t.hero.subtitle}
      </motion.p>
      <SectionDivider />
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="font-heading text-2xl text-gold md:text-4xl">
        {t.hero.date}
      </motion.p>
    </section>
  );
}
