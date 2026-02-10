import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import { getTranslations } from "@/lib/server/locale";
import { TranslationsProvider } from "./providers/TranslationsProvider";
import "./globals.css";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600"],
});

const bodySans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Maison Atelier",
  description: "A curated maison for timeless silhouettes.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale, messages } = await getTranslations();

  return (
    <html lang={locale}>
      <body className={`${displaySerif.variable} ${bodySans.variable} antialiased`}>
        <TranslationsProvider locale={locale} messages={messages}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
