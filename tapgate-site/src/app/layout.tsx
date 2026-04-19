import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "500", "600"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "TapGate | Your phone is your gate remote",
    template: "%s | TapGate",
  },
  description:
    "TapGate turns your phone into your gate remote. Retrofits any residential gate in about 10 minutes. Share access by text message — no fobs, no codes, no fumbling.",
  metadataBase: new URL("https://tapgate.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "TapGate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TapGate — your phone is your gate remote",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
