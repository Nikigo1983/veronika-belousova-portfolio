import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";

type Package = {
  title: string;
  summary: string;
  points: string[];
};

export async function Deployment() {
  const t = await getTranslations("deployment");
  const packages = t.raw("packages") as Package[];

  return (
    <section id="deployment" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="pill-badge">{t("label")}</span>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{t("intro")}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.title} delay={i * 0.08}>
              <article className="surface-card flex h-full flex-col p-7 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">{pkg.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{pkg.summary}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {pkg.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-fg/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-secondary mt-8 w-full">
                  {t("cta")}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
