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
  title: "Sunil Rathod — Full Stack / MERN Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Express.js and MongoDB. Passionate about building scalable, user-focused web applications.",

  verification: {
    google: "1JpJg4-zWgAfb4y6Mb0S5NbtrjS5oeK6PfsYofbJeE8",
  },

  openGraph: {
    title: "Sunil Rathod — Full Stack / MERN Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Express.js and MongoDB.",
    url: "https://sunilrathod.vercel.app/",
    siteName: "Sunil Rathod Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunil Rathod Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunil Rathod — Full Stack / MERN Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Express.js and MongoDB.",
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
