import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";

type AdvantageItem = { title: string; detail: string };

export async function Advantages() {
  const t = await getTranslations("advantages");
  const items = t.raw("items") as AdvantageItem[];

  return (
    <section id="advantages" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            {t("label")}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
            {t("heading")}
          </h2>
        </Reveal>
        <ol className="mt-16 max-w-4xl list-none space-y-0">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <li className="grid grid-cols-[minmax(0,2.75rem)_1fr] gap-x-5 gap-y-2 border-b border-border py-8 last:border-b-0 sm:grid-cols-[minmax(0,3rem)_1fr] sm:gap-x-6 sm:py-10">
                <span
                  className="justify-self-end font-display text-2xl tabular-nums leading-none text-accent/50 sm:text-3xl"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-medium leading-snug text-fg sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted sm:text-[1.0625rem]">{item.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
