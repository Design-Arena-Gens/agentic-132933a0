import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { cx } from "@lib/utils";
import { Navigation } from "@components/navigation";
import { Footer } from "@components/footer";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Ketch Wellness | Luxury Holistic Gym in Oklahoma City",
  description:
    "Ketch Wellness offers discreet, holistic strength and restoration experiences for affluent women in Oklahoma City seeking lasting transformation without quick fixes.",
  keywords: [
    "luxury gym",
    "holistic wellness",
    "Oklahoma City",
    "women's fitness",
    "postpartum strength"
  ],
  authors: [{ name: "Ketch Wellness" }],
  openGraph: {
    title: "Ketch Wellness | Luxury Holistic Gym in Oklahoma City",
    description:
      "Discreet, data-driven training and nourishment strategies for women over 30, designed by dietetics expert Hannah on Western Avenue.",
    url: "https://agentic-132933a0.vercel.app",
    siteName: "Ketch Wellness",
    locale: "en_US",
    type: "website"
  },
  metadataBase: new URL("https://agentic-132933a0.vercel.app")
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cx(display.variable, sans.variable)}>
      <body className="bg-gradient-to-b from-[#faf7f2] to-[#f2e6d8]">
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
