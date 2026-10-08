"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-page-surface" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pill-badge"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {t("badge")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-6 max-w-2xl font-display text-[clamp(2.1rem,5.2vw,3.6rem)] font-semibold leading-[1.12] tracking-tight text-fg"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {t("tagline")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-4 max-w-xl text-sm font-medium text-ink-soft sm:text-base"
          >
            {t("support")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#contact" className="btn-primary">
              {t("ctaPrimary")}
            </a>
            <a href="#case-study" className="btn-secondary">
              {t("ctaSecondary")}
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-white p-3 shadow-[0_28px_70px_-36px_rgba(20,21,26,0.45)] sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem]">
              <Image
                src="/nika2.jpg"
                alt={t("photoAlt")}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-top"
              />
            </div>
            <p className="mt-4 px-1 pb-1 text-sm font-medium text-muted">{t("role")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
