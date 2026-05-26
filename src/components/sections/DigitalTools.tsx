import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { DigitalToolCard } from "./DigitalToolCard";

type Project = {
  title: string;
  description: string;
  url?: string;
  visitLabel: string;
  highlights?: string[];
};

const PROJECT_PREVIEW_IMAGES = ["/portfolio/anketa2.png", "/portfolio/app_emigrant.jpg"] as const;

export async function DigitalTools() {
  const t = await getTranslations("digitalTools");
  const projects = t.raw("projects") as Project[];

  return (
    <section id="digital-tools" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">{t("label")}</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
            {t("heading")}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{t("intro")}</p>
        </Reveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <DigitalToolCard
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.url || undefined}
              visitLabel={project.visitLabel}
              highlights={project.highlights}
              imageSrc={PROJECT_PREVIEW_IMAGES[i] ?? PROJECT_PREVIEW_IMAGES[0]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
