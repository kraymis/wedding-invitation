import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="section-padding bg-dark text-center text-cream">
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-heading text-4xl text-gold"
      >
        {t.footer.monogram}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-2 text-base"
      >
        {t.footer.date}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto mt-3 max-w-2xl text-base leading-7 md:text-lg"
      >
        {t.footer.quote}
      </motion.p>
      <p className="mt-2 text-gold">{t.footer.heart}</p>
    </footer>
  );
}
