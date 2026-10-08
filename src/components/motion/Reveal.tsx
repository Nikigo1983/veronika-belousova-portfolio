"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

function subscribe() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

/**
 * Animates only after client hydration so SSR HTML matches the first client render
 * (avoids framer-motion hydration mismatches from initial/transform styles).
 */
export function Reveal({ children, delay = 0, className, ...rest }: RevealProps) {
  const isClient = useIsClient();
  const reduceMotion = useReducedMotion();

  if (!isClient || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
