import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title:
    "Al-Khwarizmi KhIMIOs - International Mathematics and Informatics Olympiad",
  description:
    "A prestigious global competition that identifies and nurtures exceptional talent in mathematics and informatics.",
  openGraph: {
    title:
      "Al-Khwarizmi KhIMIOs - International Mathematics and Informatics Olympiad",
    description:
      "Join the 4th Al-Khwarizmi KhIMIOs from May 25–31, 2026, in Uzbekistan and compete with talented students worldwide.",
    url: "https://imio.uz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
