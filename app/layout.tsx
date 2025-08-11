
import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RVHB — ONE TOUCH Meetings Room Blocks",
  description:
    "Room blocks for meetings handled in ONE TOUCH. We source, negotiate, and present the best hotel options—at no cost to you.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RVHB — ONE TOUCH Meetings Room Blocks",
    description:
      "Room blocks for meetings handled in ONE TOUCH. We source, negotiate, and present the best hotel options—at no cost to you.",
    type: "website",
    locale: "en_US",
    url: "/",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RVHB — ONE TOUCH Meetings Room Blocks",
    description:
      "Room blocks for meetings handled in ONE TOUCH. We source, negotiate, and present the best hotel options—at no cost to you.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-blue-700 px-3 py-2 rounded">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
