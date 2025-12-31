import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunil Rathod — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and PostgreSQL. Building scalable and production-ready web applications.",
  keywords: [
    "Sunil Rathod",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio"
  ],
  openGraph: {
    title: "Sunil Rathod — Full Stack Developer",
    description:
      "Portfolio of Sunil Rathod — showcasing modern web applications and projects.",
    url: "https://your-portfolio-url.com",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunil Rathod — Full Stack Developer",
    description: "React & Next.js Developer Portfolio",
    images: ["/og-image.png"],
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <PageTransition>
          {children}
          </PageTransition>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
