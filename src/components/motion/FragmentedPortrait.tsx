"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { HERO_ASSEMBLE, HERO_GRID } from "./heroAssemble";

const COLS = HERO_GRID.cols;
const ROWS = HERO_GRID.rows;

function jitter(r: number, c: number, salt: number) {
  const v = Math.sin(r * 12.9898 + c * 78.233 + salt * 2.718) * 43758.5453;
  return v - Math.floor(v);
}

type FragmentedPortraitProps = {
  imageSrc: string;
  alt: string;
  className?: string;
  /** Синхронная сборка с боковыми блоками кода (общий useInView) */
  assemble: boolean;
};

/**
 * Каждая ячейка — одна и та же картинка с object-fit: cover и сдвигом,
 * без background-size на плитках (из‑за этого фото «тянулось»).
 */
export function FragmentedPortrait({ imageSrc, alt, className, assemble }: FragmentedPortraitProps) {
  const reduceMotion = useReducedMotion();

  const tiles = useMemo(() => {
    const list: { r: number; c: number; key: string }[] = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        list.push({ r, c, key: `${r}-${c}` });
      }
    }
    return list;
  }, []);

  if (reduceMotion) {
    return (
      <div className={className} role="img" aria-label={alt}>
        <img src={imageSrc} alt="" className="h-full w-full object-cover" draggable={false} />
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      role="img"
      aria-label={alt}
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
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
    >
      {tiles.map(({ r, c, key }) => {
        const jx = jitter(r, c, 1) * 2 - 1;
        const jy = jitter(r, c, 2) * 2 - 1;
        const jr = jitter(r, c, 3) * 2 - 1;
        const scatter = 52 + jitter(r, c, 4) * 38;

        return (
          <motion.div
            key={key}
            aria-hidden
            variants={{
              hidden: {
                x: jx * scatter,
                y: jy * scatter,
                rotate: jr * 22,
                opacity: 0.22,
                scale: 0.82,
              },
              visible: {
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  duration: HERO_ASSEMBLE.pieceDuration,
                  ease: HERO_ASSEMBLE.ease,
                },
              },
            }}
            className="relative min-h-0 min-w-0 overflow-hidden ring-1 ring-inset ring-black/20"
            style={{ willChange: "transform, opacity" }}
          >
            <img
              src={imageSrc}
              alt=""
              draggable={false}
              className="pointer-events-none absolute max-h-none max-w-none object-cover"
              style={{
                width: `${COLS * 100}%`,
                height: `${ROWS * 100}%`,
                left: `${-c * 100}%`,
                top: `${-r * 100}%`,
              }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
