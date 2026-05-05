"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

export type ServiceItem = { title: string; detail: string };

type ServiceAccordionProps = {
  items: ServiceItem[];
};

export function ServiceAccordion({ items }: ServiceAccordionProps) {
  const t = useTranslations("services");
  const baseId = useId();
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <ul className="mx-auto mt-14 max-w-3xl space-y-3">
      {items.map((item, i) => {
        const isOpen = open[i] ?? false;
        const panelId = `${baseId}-panel-${i}`;
        const headerId = `${baseId}-header-${i}`;
        const n = String(i + 1).padStart(2, "0");

        return (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-32px" }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-2xl border border-border bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-accent/25"
          >
            <div className="grid grid-cols-[minmax(0,2.75rem)_1fr] items-start gap-x-4 sm:gap-x-5">
              <span
                className="justify-self-end pt-5 font-display text-xl tabular-nums leading-none text-accent/45 sm:pt-6 sm:text-2xl"
                aria-hidden
              >
                {n}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-normal sm:text-lg">
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen((s) => ({ ...s, [i]: !isOpen }))}
                    className="flex w-full items-start justify-between gap-4 py-5 pr-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:py-6 sm:pr-7"
                  >
                    <span className="min-w-0 font-display text-lg leading-snug text-fg transition-colors group-hover:text-accent sm:text-xl">
                      {item.title}
                    </span>
                    <span className="shrink-0 pt-0.5 text-[10px] font-medium uppercase tracking-[0.28em] text-muted underline decoration-transparent decoration-1 underline-offset-[6px] transition group-hover:text-fg/90 group-hover:decoration-accent/35">
                      {isOpen ? t("collapseItem") : t("expandItem")}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border/80 pb-6 pr-5 pt-1 sm:pr-7 sm:pb-7">
                        <p className="text-sm leading-relaxed text-muted sm:text-base sm:leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}
