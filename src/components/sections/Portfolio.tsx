import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { PortfolioCard } from "./PortfolioCard";

type Project = { title: string; description: string; url: string };

const PROJECT_PREVIEW_IMAGES = [
  "/portfolio/horse1.png",
  "/portfolio/website1.png",
  "/portfolio/website2.png",
  "/portfolio/Sharp_Spice1.png",
  "/portfolio/space_sol1.png",
] as const;
const PROJECT_IMAGE_FIT = ["cover", "cover", "cover", "cover", "cover"] as const;
const PROJECT_IMAGE_POSITION = ["top", "top", "top", "top", "left"] as const;

export async function Portfolio() {
  const t = await getTranslations("portfolio");
  const projects = t.raw("projects") as Project[];

  return (
    <section id="portfolio" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="pill-badge">{t("label")}</span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{t("intro")}</p>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <PortfolioCard
              key={project.url}
              title={project.title}
              description={project.description}
              url={project.url}
              imageSrc={PROJECT_PREVIEW_IMAGES[i] ?? PROJECT_PREVIEW_IMAGES[0]}
              imageFit={PROJECT_IMAGE_FIT[i] ?? "cover"}
              imagePosition={PROJECT_IMAGE_POSITION[i] ?? "top"}
              visitLabel={t("visitSite")}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
