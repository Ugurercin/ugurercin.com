"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface Props {
  target: number;
  duration?: number;
  suffix?: string;
}

export default function CountUp({ target, duration = 1200, suffix = "" }: Props) {
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(shouldReduce ? target : 0);

  useEffect(() => {
    if (!isInView || shouldReduce) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out expo — matches the rest of the site's easing
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(target);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration, shouldReduce]);

  return <span ref={ref}>{value}{suffix}</span>;
}
