import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";

type Item = { title: string; detail: string };

export async function WhyCustom() {
  const t = await getTranslations("whyCustom");
  const items = t.raw("items") as Item[];

  return (
    <section id="why-custom" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="pill-badge">{t("label")}</span>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{t("intro")}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="border-l-2 border-accent/40 pl-5 sm:pl-6">
                <h3 className="font-display text-xl font-semibold text-fg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
