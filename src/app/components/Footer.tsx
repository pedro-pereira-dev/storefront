"use client";

import { useTranslations } from "../providers/TranslationsProvider";

export function Footer() {
  const { t } = useTranslations();
  const copy = t("footer.copy");
  const contact = t("footer.contact");
  const email = t("footer.contact.email");
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/40 px-6 py-10 text-center text-xs uppercase tracking-[0.35em] text-ink-muted">
      <p className="text-ink-strong">{copy}</p>
      <p className="mt-2">
        {contact} · <a className="text-ink-soft" href={`mailto:${email}`}>{email}</a>
      </p>
    </footer>
  );
}
