import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511994672773?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";
const INSTAGRAM_URL = "https://www.instagram.com/lucasmontanari.hof/";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const floatAnimation = {
  y: [0, -3, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const buttons = [
  {
    id: "instagram",
    href: INSTAGRAM_URL,
    label: "Ver Instagram",
    icon: <InstagramIcon />,
    bg: "bg-[hsl(25,12%,40%)]",
  },
  {
    id: "whatsapp",
    href: WHATSAPP_URL,
    label: "Agendar via WhatsApp",
    icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />,
    bg: "bg-[hsl(24,30%,55%)]",
  },
];

const FloatingSocial = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-3">
      {buttons.map((btn, idx) => (
        <motion.div
          key={btn.id}
          animate={floatAnimation}
          style={{ animationDelay: `${idx * 0.5}s` }}
          className="relative"
          onMouseEnter={() => setHoveredId(btn.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Tooltip — desktop only */}
          <AnimatePresence>
            {hoveredId === btn.id && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.2 }}
                className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-md bg-foreground/90 text-background text-xs font-sans tracking-wide shadow-lg"
              >
                {btn.label}
              </motion.span>
            )}
          </AnimatePresence>

          <motion.a
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={btn.label}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className={`${btn.bg} text-white w-11 h-11 md:w-13 md:h-13 rounded-full flex items-center justify-center shadow-[0_4px_20px_-4px_hsla(24,30%,50%,0.35)] hover:shadow-[0_6px_28px_-4px_hsla(24,30%,50%,0.5)] transition-shadow duration-250`}
          >
            {btn.icon}
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSocial;
