"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin brand-colored scroll progress rail. It communicates page depth without covering content. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.25 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-signal via-white to-electric"
      style={{ scaleX }}
    />
  );
}
