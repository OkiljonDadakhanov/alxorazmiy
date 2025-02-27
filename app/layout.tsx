import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata = {
  title:
    "Al-Khwarizmi IMIO - International Mathematics and Informatics Olympiad",
  description:
    "A prestigious global competition that identifies and nurtures exceptional talent in mathematics and informatics.",
  openGraph: {
    title:
      "Al-Khwarizmi IMIO - International Mathematics and Informatics Olympiad",
    description:
      "Join the 3rd Al-Khwarizmi IMIO from May 7–13, 2025, in Uzbekistan and compete with talented students worldwide.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
