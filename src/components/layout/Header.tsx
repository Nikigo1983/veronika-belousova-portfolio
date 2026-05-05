"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navKeys = [
  { href: "#hero", key: "home" as const },
  { href: "#portfolio", key: "portfolio" as const },
  { href: "#about", key: "about" as const },
  { href: "#services", key: "services" as const },
  { href: "#testimonials", key: "testimonials" as const },
  { href: "#contact", key: "contact" as const },
];

export function Header() {
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-border bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:gap-6 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.2em] text-fg transition-colors hover:text-accent"
          onClick={() => {
            setOpen(false);
            const { pathname, search, hash } = window.location;
            if (hash) {
              window.history.replaceState(null, "", `${pathname}${search}`);
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {tHeader("brand")}
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navKeys.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {t(key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("menuClose") : t("menuOpen")}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-px w-4 bg-fg transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span className={`block h-px w-4 bg-fg transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-4 bg-fg transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6">
              {navKeys.map(({ href, key }) => (
                <a
                  key={key}
                  href={href}
                  className="rounded-xl px-3 py-3 text-base text-muted transition-colors hover:bg-white/[0.04] hover:text-fg"
                  onClick={() => setOpen(false)}
                >
                  {t(key)}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
