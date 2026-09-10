import type { Metadata } from "next";
import { Newsreader, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mohammad Aosaf — AI & Full-Stack Engineer",
  description:
    "Portfolio of Mohammad Aosaf — AI & Full-Stack Engineer building production agentic AI systems end to end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${instrumentSans.variable} ${ibmPlexMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--ground)] text-[var(--prose)]">
        {children}
      </body>
    </html>
  );
}
