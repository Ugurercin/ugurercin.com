"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function StaggerChildren({ children, className }: Props) {
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={STAGGER_CONTAINER}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export { STAGGER_ITEM as staggerItemVariants } from "@/lib/motion";
export const StaggerItem = motion.div;
