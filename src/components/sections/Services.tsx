import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceAccordion, type ServiceItem } from "./ServiceAccordion";

export async function Services() {
  const t = await getTranslations("services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section id="solutions" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="pill-badge">{t("label")}</span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{t("intro")}</p>
        </Reveal>
        <ServiceAccordion items={items} />
      </div>
    </section>
  );
}
