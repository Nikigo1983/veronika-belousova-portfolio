import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";

export async function Results() {
  const t = await getTranslations("results");

  return (
    <section id="results" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            {t("label")}
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
            {t("heading")}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.05}>
            <p className="text-xl leading-relaxed text-muted sm:text-2xl">{t("p1")}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-xl leading-relaxed text-fg/90 sm:text-2xl">{t("p2")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
