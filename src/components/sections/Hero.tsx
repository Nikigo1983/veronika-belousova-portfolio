"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const HeroVisualCluster = dynamic(
  () => import("@/components/sections/HeroVisualCluster").then((m) => m.HeroVisualCluster),
  {
    ssr: false,
    loading: () => (
      <div className="flex w-full max-w-full items-stretch justify-center gap-1 px-0.5 sm:max-w-[min(100%,40rem)] sm:gap-1.5 md:max-w-[min(100%,42rem)] md:gap-2 lg:ml-auto lg:max-w-[min(100%,48rem)] lg:justify-end xl:max-w-[min(100%,52rem)]">
        <div className="w-[2.125rem] shrink-0 sm:w-9 md:w-10 lg:w-11" />
        <div className="relative aspect-square w-[min(68vw,13.5rem)] shrink-0 overflow-hidden rounded-[1.25rem] bg-white/[0.05] ring-1 ring-inset ring-white/[0.08] min-[400px]:w-[min(66vw,14.25rem)] sm:w-[min(58vw,15.75rem)] sm:rounded-[1.75rem] md:w-[min(48vw,17.5rem)] md:rounded-[2rem] lg:mx-auto lg:w-[min(19rem,calc(100%-7rem))] xl:w-[21rem] animate-pulse" />
        <div className="w-[2.125rem] shrink-0 sm:w-9 md:w-10 lg:w-11" />
      </div>
    ),
  },
);

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-24 sm:pb-24 sm:pt-32 md:pb-28 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_70%_10%,rgba(201,169,98,0.1),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(255,255,255,0.04),transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:items-end md:gap-x-8 md:gap-y-8 lg:grid lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 xl:gap-x-14">
          <div className="order-2 flex flex-col md:order-none lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-accent"
            >
              {t("title")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.35rem,7vw,5.25rem)] font-medium leading-[1.05] tracking-tight text-fg"
            >
              {t("name")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:mt-8 sm:text-lg md:text-xl"
            >
              {t("tagline")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-accent/40 bg-accent-soft px-8 py-3.5 text-sm font-medium tracking-wide text-accent transition-colors hover:border-accent hover:bg-accent/20"
              >
                {t("ctaWork")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-sm font-medium tracking-wide text-fg transition-colors hover:border-accent/50 hover:text-accent"
              >
                {t("ctaContact")}
              </a>
            </motion.div>
          </div>

          <div className="relative order-1 mx-auto w-full md:order-none lg:col-span-6 lg:flex lg:justify-end">
            <HeroVisualCluster imageSrc="/nika2.jpg" photoAlt={t("photoAlt")} />
          </div>
        </div>
      </div>
    </section>
  );
}
