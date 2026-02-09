import { promises as fs } from "fs";
import path from "path";

export type HeroImage = {
  id: string;
  src: string;
  alt: string;
};

const dataFilePath = path.join(
  process.cwd(),
  "public",
  "data",
  "hero-images.txt",
);

const FALLBACK_IMAGE: HeroImage = {
  id: "fallback",
  src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1600&q=80",
  alt: "Editorial look from the atelier collection",
};

function buildAltText(url: string, index: number): string {
  try {
    const label = new URL(url).pathname
      .split("/")
      .pop()
      ?.split("-")
      .slice(0, 3)
      .join(" ")
      .replace(/\.[^.]+$/, "")
      .trim();

    if (label) {
      return `${label} look`;
    }
  } catch {
    // Ignore parsing issues and fall back to generic text.
  }

  return `Editorial look ${index + 1}`;
}

export async function getHeroImages(): Promise<HeroImage[]> {
  try {
    const file = await fs.readFile(dataFilePath, "utf-8");

    const images = file
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((src, index) => ({
        id: `${index}-${src}`,
        src,
        alt: buildAltText(src, index),
      }));

    if (images.length === 0) {
      return [FALLBACK_IMAGE];
    }

    return images;
  } catch (error) {
    console.error("Failed to read hero images file", error);
    return [FALLBACK_IMAGE];
  }
}
