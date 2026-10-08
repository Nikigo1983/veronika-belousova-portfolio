"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const t = useTranslations("header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: "en" | "ru") {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-white/70 p-1 shadow-sm">
      {(["en", "ru"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchTo(code)}
          className={[
            "min-w-[2.35rem] rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors",
            locale === code
              ? "bg-accent text-white shadow-sm"
              : "text-muted hover:text-fg",
          ].join(" ")}
          aria-pressed={locale === code}
        >
          {code === "en" ? t("langEn") : t("langRu")}
        </button>
      ))}
    </div>
  );
}
