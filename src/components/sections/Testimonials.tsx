import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";

type Item = {
  context: string;
  quote: string;
  name: string;
  role: string;
};

export async function Testimonials() {
  const t = await getTranslations("testimonials");
  const items = t.raw("items") as Item[];

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            {t("label")}
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
            {t("heading")}
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-gradient-to-b from-white/[0.03] to-transparent p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="mb-6 flex items-baseline gap-4 border-b border-border/70 pb-5 sm:gap-5">
                  <span
                    className="shrink-0 font-display text-3xl tabular-nums leading-none text-accent/35 sm:text-4xl"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="min-w-0 text-xs font-medium uppercase leading-snug tracking-[0.2em] text-muted">
                    {item.context}
                  </p>
                </div>
                <blockquote className="relative flex-1 border-l border-accent/25 pl-5 text-base leading-relaxed text-muted">
                  <span className="text-fg/90">“{item.quote}”</span>
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-6">
                  <p className="font-medium text-fg">{item.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
