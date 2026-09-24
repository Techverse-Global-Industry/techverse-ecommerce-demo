import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import { LocalizedBanner } from "@/components/LocalizedBanner";

export const metadata: Metadata = {
  title: "TechVerse Commerce & Distribution — Demo",
  description:
    "A fictional TechVerse marketplace for retailers, wholesalers and distribution teams.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <LanguageProvider>
          <LocalizedBanner />
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
