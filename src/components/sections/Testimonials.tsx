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
    <section id="testimonials" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="pill-badge">{t("label")}</span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            {t("heading")}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <figure className="surface-card flex h-full flex-col p-7 sm:p-8">
                <div className="mb-5 flex items-baseline gap-4 border-b border-border pb-4">
                  <span className="shrink-0 font-display text-3xl tabular-nums leading-none text-accent/35" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="min-w-0 text-xs font-semibold uppercase leading-snug tracking-[0.16em] text-muted">
                    {item.context}
                  </p>
                </div>
                <blockquote className="relative flex-1 border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-muted sm:text-base">
                  <span className="text-fg/90">“{item.quote}”</span>
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-semibold text-fg">{item.name}</p>
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
