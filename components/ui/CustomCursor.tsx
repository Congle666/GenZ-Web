"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

// Ghost cursor that enlarges & shows label when hovering elements with [data-cursor].
export function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.3 });

  const [active, setActive] = useState(false);
  const [label, setLabel] = useState<string>("");
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on touch devices.
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) {
      setEnabled(false);
      return;
    }

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (el) {
        setActive(true);
        setLabel(el.dataset.cursor || "");
      } else {
        setActive(false);
        setLabel("");
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[60] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    >
      <motion.div
        animate={{
          width: active ? 96 : 12,
          height: active ? 96 : 12,
          backgroundColor: active ? "#C9A96E" : "#FDF8F3",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center rounded-full text-[10px] uppercase tracking-widest text-ink font-medium"
      >
        {active && label}
      </motion.div>
    </motion.div>
  );
}
