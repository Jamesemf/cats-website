import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cats on a Map — Every neighbourhood cat. Mapped.",
  description:
    "Snap a photo, let AI identify the cat, and build your collection. Cats on a Map is a Pokémon Go-style game for the cats on your street — coming soon to iOS & Android.",
  openGraph: {
    title: "Cats on a Map",
    description:
      "Snap a photo, let AI identify the cat, and build your collection — every neighbourhood cat, mapped.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
