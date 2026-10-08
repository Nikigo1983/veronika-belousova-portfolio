import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {year} Veronika Belousova. {t("rights")}
        </p>
        <a href="#hero" className="font-medium text-accent transition-colors hover:text-accent-strong">
          {t("scrollToTop")}
        </a>
      </div>
    </footer>
  );
}
