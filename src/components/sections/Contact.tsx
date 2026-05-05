import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "./ContactForm";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
              {t("label")}
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
              {t("heading")}
            </h2>
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">{t("languagesLabel")}</p>
              <p className="mt-2 text-lg font-normal tracking-tight text-fg sm:text-xl">{t("languagesLead")}</p>
            </div>
            <div className="mt-8 border-t border-border pt-8 text-sm text-muted sm:pt-10">
              <span>{t("location")}</span>
            </div>
            <div className="mt-12 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">{t("emailLabel")}</p>
                <a
                  href={`mailto:${t("email")}`}
                  className="mt-2 inline-block text-lg text-fg transition-colors hover:text-accent"
                >
                  {t("email")}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">{t("linkedinLabel")}</p>
                <a
                  href={t("linkedinHref")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-lg text-fg transition-colors hover:text-accent"
                >
                  {t("linkedinLink")}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">{t("messengerLabel")}</p>
                <a
                  href={`tel:${t("phoneTel")}`}
                  className="mt-2 inline-block text-lg text-fg tabular-nums transition-colors hover:text-accent"
                >
                  {t("phoneDisplay")}
                </a>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  <a
                    href={t("whatsappHref")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {t("whatsappLink")}
                  </a>
                  <a
                    href={t("telegramHref")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {t("telegramLink")}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-border bg-white/[0.02] p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
