import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://mohammadaosaf.com";

export const metadata: Metadata = {
  title: {
    default: "Mohammad Aosaf",
    template: "%s — Mohammad Aosaf",
  },
  description:
    "AI & Full-Stack Engineer building production agentic AI systems end to end — multi-agent reasoning, RAG pipelines, and scalable full-stack platforms.",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Mohammad Aosaf",
    title: "Mohammad Aosaf",
    description:
      "AI & Full-Stack Engineer building production agentic AI systems end to end.",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Mohammad Aosaf — AI & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Aosaf",
    description:
      "AI & Full-Stack Engineer building production agentic AI systems end to end.",
    images: [`${BASE_URL}/opengraph-image`],
    creator: "@Hertz_7",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full`}>
      <body className="min-h-full bg-[var(--ground)] text-[var(--slate)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-[var(--ground)] focus:text-xs focus:tracking-[0.18em] focus:uppercase focus:rounded-sm"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
