import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "./ContactForm";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="pill-badge">{t("label")}</span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
              {t("heading")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{t("intro")}</p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t("languagesLabel")}</p>
              <p className="mt-2 text-lg font-medium tracking-tight text-fg sm:text-xl">{t("languagesLead")}</p>
            </div>
            <div className="mt-6 border-t border-border pt-6 text-sm text-muted">
              <span>{t("location")}</span>
            </div>

            <div className="mt-10 space-y-7">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">{t("emailLabel")}</p>
                <a
                  href={`mailto:${t("email")}`}
                  className="mt-2 inline-block text-lg font-medium text-fg transition-colors hover:text-accent"
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
                  className="mt-2 inline-block text-lg font-medium text-fg transition-colors hover:text-accent"
                >
                  {t("linkedinLink")}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">{t("messengerLabel")}</p>
                <a
                  href={`tel:${t("phoneTel")}`}
                  className="mt-2 inline-block text-lg font-medium tabular-nums text-fg transition-colors hover:text-accent"
                >
                  {t("phoneDisplay")}
                </a>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  <a
                    href={t("whatsappHref")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {t("whatsappLink")}
                  </a>
                  <a
                    href={t("telegramHref")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {t("telegramLink")}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="surface-card p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
