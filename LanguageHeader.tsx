// components/LanguageHeader.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Mathematics · Law · Finance",
  "Matemáticas · Derecho · Finanzas",
  "Mathématiques · Droit · Finance",
  "数学 · 法律 · 金融",
];

export default function LanguageHeader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-12 flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl tracking-wide"
        >
          {words[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
