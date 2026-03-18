import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function Corner({ className = "" }) {
  return (
    <svg className={`ornate-corner ${className}`} viewBox="0 0 84 84" aria-hidden="true">
      <path d="M9 75C38 73 62 50 75 9M16 68C36 64 53 49 67 16M25 59C38 55 48 42 58 25" />
      <path d="M20 20c4-10 16-12 23-4 2-7 13-10 18-3 4 5 3 12-4 18-8 7-23 10-37 9 0-11 0-15 0-20z" />
    </svg>
  );
}

function DecorativeSurface() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        clipPath:
          "polygon(0.5% 1.2%, 12% 0.3%, 28% 1.8%, 45% 0.2%, 62% 1.5%, 78% 0.4%, 94% 1.1%, 99.2% 2%, 98.8% 15%, 99.5% 35%, 98.7% 58%, 99.3% 78%, 98.9% 96%, 87% 99.5%, 71% 98.2%, 54% 99.7%, 38% 98.4%, 22% 99.6%, 8% 98.8%, 0.8% 97%, 0.2% 80%, 1.1% 60%, 0.3% 40%, 1.2% 20%)"
      }}
    >
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="paper-grain-strong">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <filter id="paper-grain-soft">
          <feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <div className="absolute inset-0 bg-[#E8D5A3]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,#f4e7c2_0%,rgba(232,213,163,0)_46%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(196,168,130,0.3)_0%,rgba(196,168,130,0)_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_64%,rgba(196,168,130,0.3)_0%,rgba(196,168,130,0)_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_76%,rgba(196,168,130,0.3)_0%,rgba(196,168,130,0)_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,213,163,0)_38%,rgba(139,105,20,0.62)_100%)]" />

      <div className="absolute inset-0 opacity-[0.18] mix-blend-multiply" style={{ filter: "url(#paper-grain-strong)" }} />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply" style={{ filter: "url(#paper-grain-soft)" }} />

      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(60,30,5,0.6)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(40,20,4,0.42)]" />

      <div className="pointer-events-none absolute inset-[10px] border-[3px] border-[#C9A84C] shadow-[inset_0_0_8px_rgba(201,168,76,0.3)]" />
      <div className="pointer-events-none absolute inset-[22px] border border-[#C9A84C] shadow-[inset_0_0_8px_rgba(201,168,76,0.3)]" />

      <div className="pointer-events-none absolute inset-x-[22px] top-[22px] h-px bg-[repeating-linear-gradient(to_right,#C9A84C_0,#C9A84C_2px,transparent_2px,transparent_12px)]" />
      <div className="pointer-events-none absolute inset-x-[22px] bottom-[22px] h-px bg-[repeating-linear-gradient(to_right,#C9A84C_0,#C9A84C_2px,transparent_2px,transparent_12px)]" />
      <div className="pointer-events-none absolute inset-y-[22px] left-[22px] w-px bg-[repeating-linear-gradient(to_bottom,#C9A84C_0,#C9A84C_2px,transparent_2px,transparent_12px)]" />
      <div className="pointer-events-none absolute inset-y-[22px] right-[22px] w-px bg-[repeating-linear-gradient(to_bottom,#C9A84C_0,#C9A84C_2px,transparent_2px,transparent_12px)]" />

      <Corner className="left-2 top-2" />
      <Corner className="right-2 top-2 rotate-90" />
      <Corner className="bottom-2 left-2 -rotate-90" />
      <Corner className="bottom-2 right-2 rotate-180" />

      <div
        className="pointer-events-none absolute left-1/2 top-[14px] h-[46%] w-[74%] -translate-x-1/2"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          background: "linear-gradient(180deg, #d6b37a 0%, #c4a060 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.55)",
          boxShadow: "inset 0 -10px 22px rgba(60,30,5,0.2)",
        }}
      />

      <svg className="absolute inset-x-0 top-1/3 mx-auto h-4 w-72 text-[#C9A84C]" viewBox="0 0 288 16" aria-hidden="true">
        <path d="M0 8H128M160 8H288" stroke="currentColor" strokeWidth="1.2" />
        <path d="M144 2l6 6-6 6-6-6z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <svg className="absolute inset-x-0 top-2/3 mx-auto h-4 w-72 text-[#C9A84C]" viewBox="0 0 288 16" aria-hidden="true">
        <path d="M0 8H128M160 8H288" stroke="currentColor" strokeWidth="1.2" />
        <path d="M144 2l6 6-6 6-6-6z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      <div className="absolute inset-16 opacity-5">
        <svg viewBox="0 0 600 400" className="h-full w-full text-[#2C1810]" aria-hidden="true">
          <path
            d="M20 80c140-40 280 50 430 0M30 160c130-50 260 80 420 10M40 240c150-30 250 50 410 20M45 320c170-40 250 40 400 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

export default function EnvelopeGate({ onOpened }) {
  const { t } = useLanguage();
  const [opening, setOpening] = useState(false);

  const stampSize = useMemo(() => (window.innerWidth >= 768 ? 130 : 100), []);

  const trigger = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => onOpened(), 3000);
  };

  return (
    <div className="fixed inset-0 z-[90] m-0 h-screen w-screen overflow-hidden [perspective:1000px]">
      <motion.div
        className="absolute inset-0"
        animate={
          opening
            ? { scale: [1, 1, 1.08], rotateX: [0, 0, 2], rotateY: [0, 0, -2] }
            : { scale: 1, rotateX: 0, rotateY: 0 }
        }
        transition={{ duration: 0.8, times: [0, 0.375, 1], ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ clipPath: "inset(0 0 50% 0)" }}
          animate={opening ? { y: [0, 0, -window.innerHeight * 1.1] } : { y: 0 }}
          transition={{ duration: 2, times: [0, 0.55, 1], ease: "easeIn" }}
        >
          <DecorativeSurface />
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{ clipPath: "inset(50% 0 0 0)" }}
          animate={opening ? { y: [0, 0, window.innerHeight * 1.1] } : { y: 0 }}
          transition={{ duration: 2, times: [0, 0.55, 1], ease: "easeIn" }}
        >
          <DecorativeSurface />
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center"
          animate={
            opening
              ? { x: [0, -3, 3, -3, 3, -3, 0, 0], opacity: [1, 1, 1, 1, 1, 1, 1, 0] }
              : { x: 0, opacity: 1 }
          }
          transition={{
            duration: opening ? 1.2 : 0.3,
            ease: "easeInOut",
            times: opening ? [0, 0.04, 0.08, 0.12, 0.16, 0.2, 0.25, 1] : undefined
          }}
        >
          <motion.img
            src="/assets/images/stamp.png"
            alt=""
            onClick={trigger}
            className="cursor-pointer rounded-full object-cover"
            style={{ width: stampSize, height: stampSize }}
            animate={{ boxShadow: ["0 0 10px #C9A84C", "0 0 25px #C9A84C", "0 0 10px #C9A84C"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 35px #C9A84C" }}
          />

          <p className="mt-5 font-heading text-sm italic text-dark/70">{t.envelope.clickPrompt}</p>
          <p className="animate-bounceSoft text-dark/70">{t.envelope.arrow}</p>
        </motion.div>

        {opening && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-30 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ delay: 0.8, duration: 0.3 }}
          />
        )}
      </motion.div>
    </div>
  );
}
