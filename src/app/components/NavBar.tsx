"use client";

import { useMemo, useState } from "react";
import { SectionLinkMenu } from "./SectionLinkMenu";
import { MenuIcon } from "./icons/Menu";
import { CartIcon } from "./icons/Cart";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "../providers/TranslationsProvider";

type SectionLink = {
  id: string;
  labelKey: string;
};

type NavBarProps = {
  sections: SectionLink[];
};

export function NavBar({ sections }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslations();

  const sectionOptions = useMemo(() => sections, [sections]);

  const handleSectionClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 flex justify-center px-4 pt-8 pb-8">
      <nav
        className="flex h-16 w-full max-w-6xl items-center justify-between border border-white/10 bg-black/5 px-6 text-xs uppercase tracking-[0.5em] text-ink-muted backdrop-blur-xl"
        style={{ borderRadius: 0 }}
      >
        <button
          className="relative flex items-center gap-3 text-ink-strong"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <MenuIcon />
          <span>{t("nav.menu")}</span>
        </button>
        <div className="flex flex-col items-center">
          <span className="font-display text-base tracking-[0.6em] text-ink-strong">
            {t("brand.name")}
          </span>
          <span className="text-[0.5rem] tracking-[0.6em] text-ink-muted">
            {t("brand.since")}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher onChange={() => setMenuOpen(false)} />
          <button aria-label={t("nav.cart")} className="text-ink-strong">
            <CartIcon />
          </button>
        </div>
      </nav>

      <SectionLinkMenu
        sections={sectionOptions}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSelect={handleSectionClick}
      />
    </div>
  );
}
