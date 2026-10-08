import type { ReactNode } from "react";
import type { Viewport } from "next";
import { headers } from "next/headers";
import { Literata, Manrope } from "next/font/google";
import { routing } from "@/i18n/routing";
import "./globals.css";

const display = Literata({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#6d4dff",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const h = await headers();
  const locale = h.get("X-NEXT-INTL-LOCALE") ?? routing.defaultLocale;

  return (
    <html
      lang={locale}
      className={`${display.variable} ${sans.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
