import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avinash Burnwal | Full Stack Developer",
  description: "Full Stack Developer & Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
  metadataBase: new URL("https://achyutkatiyar.com"),
  
  // Basic metadata
  applicationName: "Avinash Burnwal Portfolio",
  authors: [{ name: "Avinash Burnwal" }],
  keywords: ["Full Stack Developer", "Next.js", "React","Express.js"],
  
  openGraph: {
    type: "website",
    url: "https://achyutkatiyar.com",
    title: "Avinash Burnwal | Full Stack Developer",
    description: "Full Stack Developer  with expertise in Next.js, React, and Express.js.",
    siteName: "Avinash Burnwal",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Avinash Burnwal - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://achyutkatiyar.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}