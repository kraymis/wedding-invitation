import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CountdownSection from "./components/CountdownSection";
import EnvelopeGate from "./components/EnvelopeGate";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProgramSection from "./components/ProgramSection";
import RSVPSection from "./components/RSVPSection";
import ScrollProgress from "./components/ScrollProgress";
import VenueSection from "./components/VenueSection";
import WelcomeSection from "./components/WelcomeSection";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const [opened, setOpened] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
  }, [t.meta.title]);

  return (
    <div className="min-h-screen bg-cream">
      <ScrollProgress />
      <AnimatePresence>{!opened && <EnvelopeGate onOpened={() => setOpened(true)} />}</AnimatePresence>

      <motion.main
        initial={{ opacity: 0, scale: 0.97 }}
        animate={opened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: opened ? 0 : 0 }}
      >
        <Navbar />
        <HeroSection />
        <WelcomeSection />
        <CountdownSection />
        <ProgramSection />
        <VenueSection />
        <RSVPSection />
        <Footer />
      </motion.main>
    </div>
  );
}
