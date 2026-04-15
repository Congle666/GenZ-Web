"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// One-time intro curtain: ivory sheet splits revealing hero.
// Uses sessionStorage so it doesn't replay on SPA navigation.
export function IntroCurtain() {
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("genz_intro_seen");
    if (seen) {
      setShow(false);
      return;
    }
    setShow(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      sessionStorage.setItem("genz_intro_seen", "1");
      setShow(false);
      document.body.style.overflow = "";
    }, 2400);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Top half */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-x-0 top-0 h-1/2 bg-ivory"
          />
          {/* Bottom half */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-ivory"
          />
          {/* Center brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-4 block h-px bg-gold"
            />
            <p className="font-script text-4xl md:text-5xl text-gold">
              GenZ Làm Cưới
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-widest text-ink/50">
              Wedding Decor Studio · Since 2020
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
