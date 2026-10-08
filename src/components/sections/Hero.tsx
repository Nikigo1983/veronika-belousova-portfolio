"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-page-glow" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
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
            className="mt-6 font-display text-[clamp(2.4rem,6vw,4.35rem)] font-semibold leading-[1.08] tracking-tight text-fg"
          >
            <span className="block text-accent-strong">{t("titleLine1")}</span>
            <span className="mt-2 block text-[0.72em] font-medium text-fg/85">{t("titleLine2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#contact" className="btn-primary">
              {t("ctaContact")}
            </a>
            <a href="#solutions" className="btn-secondary">
              {t("ctaWork")}
              <span aria-hidden>→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8 text-sm text-muted"
          >
            <span>{t("point1")}</span>
            <span>{t("point2")}</span>
            <span>{t("point3")}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/20 via-teal/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 p-3 shadow-[0_30px_80px_-28px_rgba(85,51,232,0.45)] backdrop-blur-sm sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
              <Image
                src="/nika2.jpg"
                alt={t("photoAlt")}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1b1633]/35 via-transparent to-white/10" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-white/90 px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">{t("cardLabel1")}</p>
                <p className="mt-1 text-sm font-semibold text-fg">{t("cardValue1")}</p>
              </div>
              <div className="rounded-2xl border border-border bg-white/90 px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal">{t("cardLabel2")}</p>
                <p className="mt-1 text-sm font-semibold text-fg">{t("cardValue2")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
