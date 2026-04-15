"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Fade/rise on scroll-into-view. Honors prefers-reduced-motion.
export function Reveal({
  children,
  index = 0,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  index?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion(Tag as any);
  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      custom={index}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
