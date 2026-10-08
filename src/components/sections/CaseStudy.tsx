import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";

export async function CaseStudy() {
  const t = await getTranslations("caseStudy");
  const capabilities = t.raw("capabilities") as string[];
  const placeholders = t.raw("screenshotPlaceholders") as string[];

  return (
    <section id="case-study" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="pill-badge">{t("label")}</span>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
              {t("heading")}
            </h2>
            <div className="inline-flex shrink-0 items-center rounded-2xl bg-[#111318] px-5 py-4 shadow-[0_18px_40px_-28px_rgba(20,21,26,0.55)]">
              <Image
                src="/brand/spiora-logo.png"
                alt={t("logoAlt")}
                width={240}
                height={72}
                className="h-11 w-auto sm:h-12"
              />
            </div>
          </div>
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
          <div className="mt-14">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-fg">{t("screenshotsTitle")}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {t("screenshotsIntro")}
                </p>
              </div>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {placeholders.map((label, i) => (
                <li
                  key={label}
                  className="flex min-h-[10.5rem] flex-col justify-between rounded-2xl border border-dashed border-border bg-white/55 p-5 sm:min-h-[12rem]"
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {t("screenshotSlot", { n: String(i + 1).padStart(2, "0") })}
                    </p>
                    <p className="mt-3 font-display text-base font-semibold text-fg">{label}</p>
                  </div>
                  <p className="text-xs leading-relaxed text-muted">{t("screenshotPlaceholderHint")}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <a href="#contact" className="btn-primary mt-10 inline-flex">
            {t("cta")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
