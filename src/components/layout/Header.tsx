"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

/** Primary desktop nav — FAQ remains on-page, linked from mobile menu only. */
const desktopNavKeys = [
  { href: "#capabilities", key: "capabilities" as const },
  { href: "#case-study", key: "caseStudy" as const },
  { href: "#process", key: "process" as const },
  { href: "#about", key: "about" as const },
  { href: "#contact", key: "contact" as const },
];

const mobileNavKeys = [
  ...desktopNavKeys.slice(0, 4),
  { href: "#faq", key: "faq" as const },
  desktopNavKeys[4],
];

export function Header() {
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
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
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-border bg-[#f4f3ef]/90 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(20,21,26,0.28)]"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:h-[4.25rem] sm:gap-4 sm:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 transition-opacity hover:opacity-85"
          onClick={() => {
            setOpen(false);
            const { pathname, search, hash } = window.location;
            if (hash) window.history.replaceState(null, "", `${pathname}${search}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-[11px] font-bold tracking-[0.14em] text-white">
            {tHeader("brand")}
          </span>
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate text-sm font-bold tracking-tight text-fg">{tHeader("brandName")}</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.12em] text-muted xl:block">
              {tHeader("brandTag")}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex xl:gap-2"
          aria-label="Primary"
        >
          {desktopNavKeys.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="rounded-lg px-2 py-1.5 text-[0.8125rem] font-medium text-muted transition-colors hover:text-fg xl:px-2.5 xl:text-sm"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a href="#contact" className="btn-primary hidden px-4 py-2.5 text-xs sm:inline-flex lg:px-5">
            {t("cta")}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-white/70 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("menuClose") : t("menuOpen")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-4 bg-fg transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-fg transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-4 bg-fg transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border bg-[#f4f3ef]/98 backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5">
              {mobileNavKeys.map(({ href, key }) => (
                <a
                  key={key}
                  href={href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-accent-soft hover:text-fg"
                  onClick={() => setOpen(false)}
                >
                  {t(key)}
                </a>
              ))}
              <a href="#contact" className="btn-primary mt-3" onClick={() => setOpen(false)}>
                {t("cta")}
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
