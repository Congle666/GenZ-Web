"use client";

import { motion } from "framer-motion";
import { env } from "@/lib/env";

// Floating Zalo call-to-action with pulse animation.
export function FloatingZalo() {
  return (
    <a
      href={env.zaloLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat Zalo"
      className="fixed bottom-6 right-6 z-50"
    >
      <span className="relative flex h-14 w-14 items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-full bg-gold/50"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ivory shadow-soft">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 2C6.48 2 2 5.94 2 10.77c0 2.7 1.4 5.1 3.6 6.67-.14.6-.54 2.13-.62 2.46-.1.4.14.4.3.3.12-.08 1.93-1.3 2.7-1.83.96.26 1.97.4 3.02.4 5.52 0 10-3.94 10-8.77S17.52 2 12 2z" />
          </svg>
        </span>
      </span>
    </a>
  );
}
