"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type DigitalToolCardProps = {
  title: string;
  description: string;
  url?: string;
  visitLabel: string;
  highlights?: string[];
  imageSrc: string;
  index: number;
};

function displayHost(href: string) {
  try {
    const host = new URL(href).hostname;
    return host.startsWith("www.") ? host.slice(4) : host;
  } catch {
    return href;
  }
}

export function DigitalToolCard({
  title,
  description,
  url,
  visitLabel,
  highlights = [],
  imageSrc,
  index,
}: DigitalToolCardProps) {
  const host = url ? displayHost(url) : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-2xl border border-border bg-white/[0.02] transition-shadow hover:border-accent/35 hover:shadow-[0_24px_80px_-24px_rgba(201,169,98,0.12)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0c0c]">
        <Image
          src={imageSrc}
          alt={`${title} — preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-80 transition-opacity duration-500 group-hover:opacity-95"
          aria-hidden
        />
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`${title} — ${visitLabel}`}
          />
        ) : null}
      </div>
      <div className="relative z-20 p-8">
        <h3 className="font-display text-2xl text-fg transition-colors group-hover:text-accent">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        {highlights.length > 0 ? (
          <ul className="mt-5 space-y-2.5 border-t border-border/70 pt-5">
            {highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 transition hover:decoration-accent"
          >
            <span>{visitLabel}</span>
            {host ? <span className="font-normal text-muted no-underline">{host}</span> : null}
            <span className="no-underline" aria-hidden>
              ↗
            </span>
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
