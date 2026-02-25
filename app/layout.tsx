import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, localBusinessSchema } from "@/lib/seo";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://pardis.in"),
  title: {
    default: "Flats in Chembur & Bandra Mumbai | Sanjay Devnani Projects | RERA Approved",
    template: "%s | Sanjay Devnani Projects",
  },
  description:
    "Buy premium flats in Chembur & Bandra, Mumbai. Sanjay Devnani Projects (Pardis) offers RERA approved 1, 2, 3 BHK apartments in Sindhi Society, Collector Colony & Bandra West.",
  keywords: [
    "flats in chembur",
    "apartments in chembur",
    "flats in bandra",
    "2 bhk in chembur",
    "3 bhk in chembur",
    "1 bhk in chembur",
    "residential projects chembur",
    "luxury flats mumbai",
    "rera approved flats chembur",
    "sanjay devnani projects",
    "pardis projects mumbai",
    "sindhi society chembur flats",
    "collector colony chembur",
    "new projects in chembur",
  ],
  authors: [{ name: "Sanjay Devnani Projects" }],
  creator: "Sanjay Devnani Projects",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pardis.in",
    siteName: "Sanjay Devnani Projects",
    title: "Flats in Chembur & Bandra Mumbai | Sanjay Devnani Projects",
    description:
      "Buy premium RERA approved flats in Chembur & Bandra, Mumbai. 1, 2, 3 & 4 BHK apartments by trusted builders Sanjay Devnani Projects.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanjay Devnani Projects - Premium Flats in Chembur & Bandra Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flats in Chembur & Bandra Mumbai | Sanjay Devnani Projects",
    description:
      "Buy premium RERA approved flats in Chembur & Bandra, Mumbai. 1, 2, 3 & 4 BHK apartments by trusted builders.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // ✅ IMPORTANT: Replace the value below with your real code from Google Search Console
  // Go to Search Console → Settings → Ownership verification → HTML tag → copy the content value
  verification: {
    google: "ftUMoRvlYhbP24ou1o3fZvsG3nIK4tMw9fBw3svON9U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <MainContent>{children}</MainContent>
        <Footer />
      </body>
    </html>
  );
}
