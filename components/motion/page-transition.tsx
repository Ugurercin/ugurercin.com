"use client";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { usePathname } from "next/navigation";
import { PAGE_VARIANTS, DUR_BASE, EASE_OUT_EXPO } from "@/lib/motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <LayoutGroup>
      <div style={{ overflowX: "hidden" }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            className="will-animate"
            variants={PAGE_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: DUR_BASE,
              ease: EASE_OUT_EXPO,
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}
