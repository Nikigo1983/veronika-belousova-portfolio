import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";

export async function CaseStudy() {
  const t = await getTranslations("caseStudy");
  const capabilities = t.raw("capabilities") as string[];

  return (
    <section id="case-study" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="pill-badge">{t("label")}</span>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            {t("heading")}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-fg">{t("contextTitle")}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{t("context")}</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-fg">{t("solutionTitle")}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{t("solution")}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="surface-card h-full p-7 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-fg">{t("capabilitiesTitle")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t("capabilitiesNote")}</p>
              <ul className="mt-6 space-y-3">
                {capabilities.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-border pt-5 text-xs leading-relaxed text-muted">
                {t("disclaimer")}
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <a href="#contact" className="btn-primary mt-10 inline-flex">
            {t("cta")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
