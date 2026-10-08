import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";

const CERTIFICATE_SRC = [
  "/certificates/Ser1.jpg",
  "/certificates/Ser2.jpg",
  "/certificates/Ser3.jpg",
] as const;

export async function About() {
  const t = await getTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];
  const certificateAlts = t.raw("certificateAlts") as string[];

  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="pill-badge">{t("label")}</span>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
            {t("heading")}
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">{t("role")}</p>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-14 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {t("educationTitle")}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="surface-card p-8">
              <p className="font-display text-xl font-semibold text-fg">{t("edu1School")}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t("edu1Meta")}</p>
            </div>
            <div className="surface-card p-8">
              <p className="font-display text-xl font-semibold text-fg">{t("edu2School")}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t("edu2Meta")}</p>
            </div>
          </div>

          <p
            id="certificates"
            className="mt-14 scroll-mt-28 text-xs font-semibold uppercase tracking-[0.22em] text-accent"
          >
            {t("certificatesTitle")}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {CERTIFICATE_SRC.map((src, i) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-3 transition-colors hover:border-accent/40"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={src}
                    alt={certificateAlts[i] ?? `Certificate ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="mt-2 block text-center text-[0.65rem] font-semibold uppercase tracking-widest text-muted opacity-0 transition-opacity group-hover:opacity-100">
                  {t("certificateOpenHint")}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
