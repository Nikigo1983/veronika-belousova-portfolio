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
    <section id="about" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            {t("label")}
          </p>

          <aside className="relative mt-8 max-w-3xl overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/[0.07] via-white/[0.02] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-accent via-accent/70 to-accent/25"
              aria-hidden
            />
            <div className="relative pl-7 pr-8 py-10 sm:pl-9 sm:pr-12 sm:py-12">
              <h2 className="font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl md:text-[1.75rem] md:leading-snug">
                {t("trustTitle")}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                {trustParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </aside>

          <p className="mt-14 text-xs font-medium uppercase tracking-[0.35em] text-accent">
            {t("educationTitle")}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="rounded-2xl border border-border bg-white/[0.02] p-8">
              <p className="font-display text-xl text-fg">{t("edu1School")}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t("edu1Meta")}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white/[0.02] p-8">
              <p className="font-display text-xl text-fg">{t("edu2School")}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t("edu2Meta")}</p>
            </div>
          </div>

          <p
            id="certificates"
            className="mt-14 scroll-mt-28 text-xs font-medium uppercase tracking-[0.35em] text-accent"
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
                className="group relative overflow-hidden rounded-2xl border border-border bg-[#0f0f0f] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-accent/35"
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
                <span className="mt-2 block text-center text-[0.65rem] font-medium uppercase tracking-widest text-muted opacity-0 transition-opacity group-hover:opacity-100">
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
