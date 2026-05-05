"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FragmentedPortrait } from "@/components/motion/FragmentedPortrait";
import { CodeCellStrip } from "@/components/motion/HeroSideCode";
import { getAssembleOneWayMs, HERO_CYCLE } from "@/components/motion/heroAssemble";

type Props = {
  imageSrc: string;
  photoAlt: string;
};

export function HeroVisualCluster({ imageSrc, photoAlt }: Props) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(triggerRef, { amount: 0.12, margin: "0px 0px -8% 0px" });
  const [assemble, setAssemble] = useState(false);

  useEffect(() => {
    if (!inView) return undefined;

    const oneWayMs = getAssembleOneWayMs();
    let cancelled = false;

    async function cycle() {
      while (!cancelled) {
        setAssemble(true);
        await new Promise<void>((r) => {
          setTimeout(r, oneWayMs + HERO_CYCLE.holdAssembledMs);
        });
        if (cancelled) break;
        setAssemble(false);
        await new Promise<void>((r) => {
          setTimeout(r, oneWayMs + HERO_CYCLE.holdScatteredMs);
        });
      }
    }

    void cycle();

    return () => {
      cancelled = true;
    };
  }, [inView]);

  return (
    <motion.div
      ref={triggerRef}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full max-w-full items-stretch justify-center gap-1 px-0.5 sm:max-w-[min(100%,40rem)] sm:gap-1.5 md:max-w-[min(100%,42rem)] md:gap-2 lg:ml-auto lg:max-w-[min(100%,48rem)] lg:justify-end xl:max-w-[min(100%,52rem)]"
    >
      <div className="flex shrink-0 self-stretch">
        <CodeCellStrip side="left" assemble={assemble} />
      </div>

      <div
        className="relative aspect-square w-[min(68vw,13.5rem)] shrink-0 overflow-hidden rounded-[1.25rem] min-[400px]:w-[min(66vw,14.25rem)] sm:w-[min(58vw,15.75rem)] sm:rounded-[1.75rem] md:w-[min(48vw,17.5rem)] md:rounded-[2rem] lg:mx-auto lg:w-[min(19rem,calc(100%-7rem))] xl:w-[21rem]"
        style={{ boxShadow: "0 40px 100px -40px rgba(0,0,0,0.75), 0 0 0 1px rgba(201,169,98,0.12)" }}
      >
        <FragmentedPortrait
          imageSrc={imageSrc}
          alt={photoAlt}
          assemble={assemble}
          className="absolute inset-0 bg-bg"
        />
        <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] ring-1 ring-inset ring-white/[0.08]" />
        <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] bg-gradient-to-t from-bg via-transparent to-transparent opacity-90 sm:opacity-80" />
        <div className="pointer-events-none absolute -inset-px z-10 rounded-[inherit] bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex shrink-0 self-stretch">
        <CodeCellStrip side="right" assemble={assemble} />
      </div>
    </motion.div>
  );
}
