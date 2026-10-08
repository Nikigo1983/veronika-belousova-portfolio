"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";

function subscribe() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export function Hero() {
  const t = useTranslations("hero");
  const isClient = useIsClient();
  const reduceMotion = useReducedMotion();
  const motionOn = isClient && !reduceMotion;

  const badge = (
    <span className="pill-badge">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      {t("badge")}
    </span>
  );

  const title = (
    <h1 className="mt-5 max-w-[20rem] font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.22] tracking-tight text-fg text-pretty sm:max-w-lg md:max-w-[32rem]">
      {t("title")}
    </h1>
  );

  const tagline = (
    <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-[1.05rem] sm:leading-relaxed">
      {t("tagline")}
    </p>
  );

  const support = (
    <p className="mt-3 max-w-lg text-sm font-medium leading-snug text-ink-soft sm:text-[0.95rem]">
      {t("support")}
    </p>
  );

  const ctas = (
    <div className="mt-8 flex flex-wrap gap-3">
      <a href="#contact" className="btn-primary">
        {t("ctaPrimary")}
      </a>
      <a href="#case-study" className="btn-secondary">
        {t("ctaSecondary")}
        <span aria-hidden>→</span>
      </a>
    </div>
  );

  const visual = (
    <div className="relative mx-auto w-full max-w-[15.5rem] sm:max-w-[16.5rem] lg:ml-auto lg:mr-0 lg:max-w-[18rem]">
      <div className="relative rounded-[1.25rem] border border-border/80 bg-white p-2 shadow-[0_14px_40px_-28px_rgba(20,21,26,0.35)] sm:p-2.5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[0.95rem]">
          <Image
            src="/nika2.jpg"
            alt={t("photoAlt")}
            fill
            priority
            sizes="(max-width: 1024px) 264px, 288px"
            className="object-cover object-top"
          />
        </div>
        <p className="mt-2.5 px-1.5 pb-0.5 text-[0.78rem] font-medium leading-snug text-muted sm:text-[0.8125rem]">
          {t("role")}
        </p>
      </div>
    </div>
  );

  return (
    <section id="hero" className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-28 md:pb-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-page-surface" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-10 xl:gap-14">
        <div className="min-w-0">
          {motionOn ? (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {badge}
            </motion.div>
          ) : (
            badge
          )}

          {motionOn ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              {title}
            </motion.div>
          ) : (
            title
          )}

          {motionOn ? (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              {tagline}
            </motion.div>
          ) : (
            tagline
          )}

          {motionOn ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
            >
              {support}
            </motion.div>
          ) : (
            support
          )}

          {motionOn ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
            >
              {ctas}
            </motion.div>
          ) : (
            ctas
          )}
        </div>

        {motionOn ? (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-center lg:justify-self-end"
          >
            {visual}
          </motion.div>
        ) : (
          <div className="justify-self-center lg:justify-self-end">{visual}</div>
        )}
      </div>
    </section>
  );
}
