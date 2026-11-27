import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Kigali Green Roots | Community Tree Planting in Kigali",
  description:
    "Plant trees, meet your neighbors, and help Kigali thrive. Join Kigali Green Roots every second Saturday.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`h-full antialiased ${bodyFont.variable} ${displayFont.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
