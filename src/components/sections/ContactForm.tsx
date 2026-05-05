"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(false);
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzdorkwo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSent(true);
    } catch {
      setError(t("formError"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-muted">
          {t("formName")}
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3.5 text-fg outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50"
          placeholder=""
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-muted">
          {t("formEmail")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3.5 text-fg outline-none transition-colors focus:border-accent/50"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-muted">
          {t("formMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-border bg-white/[0.03] px-4 py-3.5 text-fg outline-none transition-colors focus:border-accent/50"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-accent/40 bg-accent-soft py-4 text-sm font-medium tracking-wide text-accent transition-colors hover:border-accent hover:bg-accent/20 sm:w-auto sm:px-12"
      >
        {submitting ? t("formSubmitting") : t("formSubmit")}
      </button>
      <AnimatePresence>
        {sent ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-muted"
          >
            {t("formSuccess")}
          </motion.p>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {error ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-300"
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
