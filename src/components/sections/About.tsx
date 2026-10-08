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
  const trustParagraphs = t.raw("trustParagraphs") as string[];
  const certificateAlts = t.raw("certificateAlts") as string[];

  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="pill-badge">{t("label")}</span>

          <aside className="relative mt-8 max-w-3xl overflow-hidden rounded-[1.75rem] border border-accent/20 bg-gradient-to-br from-accent/[0.1] via-white to-white shadow-[0_20px_50px_-30px_rgba(109,77,255,0.35)]">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-accent via-accent/70 to-teal"
              aria-hidden
            />
            <div className="relative pl-7 pr-8 py-10 sm:pl-9 sm:pr-12 sm:py-12">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl md:leading-snug">
                {t("trustTitle")}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                {trustParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </aside>

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
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-sm transition-colors hover:border-accent/40"
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
