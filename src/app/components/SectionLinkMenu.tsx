"use client";

import { useTranslations } from "../providers/TranslationsProvider";

type SectionLink = {
  id: string;
  labelKey: string;
};

type SectionLinkMenuProps = {
  sections: SectionLink[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
};

export function SectionLinkMenu({ sections, isOpen, onClose, onSelect }: SectionLinkMenuProps) {
  const { t } = useTranslations();
  if (!isOpen) return null;

  return (
    <div className="absolute left-4 right-4 top-24 mx-auto w-full max-w-sm border border-white/10 bg-obsidian-soft/80 p-4 text-center text-sm tracking-[0.35em] text-ink-strong">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => {
            onSelect(section.id);
            onClose();
          }}
          className="block w-full py-3 text-ink-strong transition hover:text-ink-soft"
        >
          {t(section.labelKey)}
        </button>
      ))}
    </div>
  );
}
