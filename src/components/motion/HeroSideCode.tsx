"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HERO_ASSEMBLE } from "./heroAssemble";

type Side = "left" | "right";

type Cell = { key: string; content: ReactNode };

function cellJitter(side: Side, index: number, channel: number) {
  const s = side === "left" ? 0 : 11;
  const v = Math.sin(index * 19.1 + s * 3.3 + channel * 7.77) * 10000;
  return v - Math.floor(v);
}

const leftCells: Cell[] = [
  {
    key: "l1",
    content: (
      <>
        <span className="text-sky-400/85">{"'use client'"}</span>
        <span className="text-muted">;</span>
      </>
    ),
  },
  {
    key: "l2",
    content: (
      <>
        <span className="text-sky-400/85">import</span> <span className="text-fg/90">{"{"}</span>{" "}
        <span className="text-accent">motion</span> <span className="text-fg/90">{"}"}</span>{" "}
        <span className="text-sky-400/85">from</span> <span className="text-accent/90">&apos;framer-motion&apos;</span>
        <span className="text-muted">;</span>
      </>
    ),
  },
  {
    key: "l3",
    content: (
      <>
        <span className="text-sky-400/85">import</span> <span className="text-accent/90">Image</span>{" "}
        <span className="text-sky-400/85">from</span> <span className="text-accent/90">&apos;next/image&apos;</span>
        <span className="text-muted">;</span>
      </>
    ),
  },
  {
    key: "l4",
    content: <span className="text-muted opacity-40"> </span>,
  },
  {
    key: "l5",
    content: (
      <>
        <span className="text-sky-400/85">export</span> <span className="text-sky-400/85">function</span>{" "}
        <span className="text-amber-200/90">Hero</span>
        <span className="text-muted">() {"{"}</span>
      </>
    ),
  },
  {
    key: "l6",
    content: (
      <>
        <span className="text-muted">{"  "}</span>
        <span className="text-sky-400/85">return</span> <span className="text-muted">(</span>
      </>
    ),
  },
  {
    key: "l7",
    content: (
      <>
        <span className="text-muted">{"    "}</span>
        <span className="text-fuchsia-300/80">&lt;</span>
        <span className="text-sky-300/90">section</span> <span className="text-accent/80">className</span>
        <span className="text-fuchsia-300/80">=</span>
        <span className="text-accent/90">&quot;luxury&quot;</span> <span className="text-fuchsia-300/80">/&gt;</span>
      </>
    ),
  },
  {
    key: "l8",
    content: (
      <>
        <span className="text-muted">{"  "}</span>
        <span className="text-muted">);</span>
      </>
    ),
  },
];

const rightCells: Cell[] = [
  {
    key: "r1",
    content: (
      <>
        <span className="text-sky-400/85">import</span> <span className="text-fg/90">{"{"}</span>{" "}
        <span className="text-accent">defineRouting</span> <span className="text-fg/90">{"}"}</span>{" "}
        <span className="text-sky-400/85">from</span> <span className="text-accent/90">&apos;next-intl/routing&apos;</span>
        <span className="text-muted">;</span>
      </>
    ),
  },
  {
    key: "r2",
    content: (
      <>
        <span className="text-sky-400/85">export const</span> <span className="text-amber-200/90">routing</span>{" "}
        <span className="text-muted">=</span> <span className="text-accent">defineRouting</span>
        <span className="text-muted">({"{"}</span>
      </>
    ),
  },
  {
    key: "r3",
    content: (
      <>
        <span className="text-muted">{"  "}</span>
        <span className="text-fg/80">locales</span>
        <span className="text-muted">: [</span>
        <span className="text-accent/90">&apos;en&apos;</span>
        <span className="text-muted">, </span>
        <span className="text-accent/90">&apos;ru&apos;</span>
        <span className="text-muted">],</span>
      </>
    ),
  },
  {
    key: "r4",
    content: (
      <>
        <span className="text-muted">{"  "}</span>
        <span className="text-fg/80">defaultLocale</span>
        <span className="text-muted">: </span>
        <span className="text-accent/90">&apos;en&apos;</span>
        <span className="text-muted">,</span>
      </>
    ),
  },
  {
    key: "r5",
    content: (
      <>
        <span className="text-muted">{"  "}</span>
        <span className="text-fg/80">localePrefix</span>
        <span className="text-muted">: </span>
        <span className="text-accent/90">&apos;as-needed&apos;</span>
        <span className="text-muted">,</span>
      </>
    ),
  },
  {
    key: "r6",
    content: <span className="text-muted">{"});"}</span>,
  },
  {
    key: "r7",
    content: <span className="text-muted opacity-40"> </span>,
  },
  {
    key: "r8",
    content: (
      <>
        <span className="text-sky-400/85">export const</span> <span className="text-amber-200/90">config</span>{" "}
        <span className="text-muted">= {"{"}</span> <span className="text-fg/80">matcher</span>
        <span className="text-muted">: [</span>
        <span className="text-accent/90">&apos;/&apos;</span>
        <span className="text-muted">] {"}"};</span>
      </>
    ),
  },
];

export function CodeCellStrip({ side, assemble }: { side: Side; assemble: boolean }) {
  const reduceMotion = useReducedMotion();
  const cells = side === "left" ? leftCells : rightCells;

  if (reduceMotion) {
    return (
      <div
        className="flex w-[2.125rem] shrink-0 flex-col gap-0.5 sm:w-9 sm:gap-1 md:w-10 lg:w-11"
        aria-hidden
      >
        {cells.map(({ key, content }) => (
          <div
            key={key}
            className="rounded-md border border-border/40 bg-[#0e0e0e] px-0.5 py-1 font-mono text-[0.5rem] leading-[1.3] text-fg/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-1 sm:py-1.5 sm:text-[0.58rem] sm:leading-[1.35] md:text-[0.62rem]"
          >
            {content}
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="flex w-[2.125rem] shrink-0 flex-col gap-0.5 sm:w-9 sm:gap-1 md:w-10 lg:w-11"
      aria-hidden
      initial="hidden"
      animate={assemble ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: HERO_ASSEMBLE.delayChildren,
            staggerChildren: HERO_ASSEMBLE.staggerChildren,
          },
        },
      }}
    >
      {cells.map(({ key, content }, index) => {
        const jx = cellJitter(side, index, 1) * 2 - 1;
        const jy = cellJitter(side, index, 2) * 2 - 1;
        const jr = cellJitter(side, index, 3) * 2 - 1;
        const scatter = 36 + cellJitter(side, index, 4) * 28;
        const baseX = side === "left" ? -1 : 1;

        return (
          <motion.div
            key={key}
            variants={{
              hidden: {
                opacity: 0.2,
                x: baseX * scatter + jx * 18,
                y: jy * scatter * 0.85,
                rotate: jr * 16,
                scale: 0.88,
                filter: "blur(5px)",
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: HERO_ASSEMBLE.pieceDuration,
                  ease: HERO_ASSEMBLE.ease,
                },
              },
            }}
            className="rounded-md border border-border/40 bg-[#0e0e0e] px-0.5 py-1 font-mono text-[0.5rem] leading-[1.3] text-fg/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-1 sm:py-1.5 sm:text-[0.58rem] sm:leading-[1.35] md:text-[0.62rem]"
          >
            {content}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
