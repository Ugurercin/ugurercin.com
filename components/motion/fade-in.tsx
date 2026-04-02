"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SECTION_VARIANTS, DUR_SLOW, EASE_OUT_EXPO } from "@/lib/motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className }: Props) {
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={SECTION_VARIANTS}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ duration: DUR_SLOW, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}
