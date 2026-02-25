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
    default: "Pardis | Premium Flats in Chembur & Bandra Mumbai | RERA Approved",
    template: "%s | Pardis",
  },
  description:
    "Buy premium RERA approved flats in Chembur & Bandra, Mumbai. Pardis offers 1, 2, 3 & 4 BHK apartments in Sindhi Society, Collector Colony & Bandra West.",
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
    "pardis projects mumbai",
    "pardis builder chembur",
    "sindhi society chembur flats",
    "collector colony chembur",
    "new projects in chembur",
  ],
  authors: [{ name: "Pardis" }],
  creator: "Pardis",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pardis.in",
    siteName: "Pardis",
    title: "Pardis | Premium Flats in Chembur & Bandra Mumbai",
    description:
      "Buy premium RERA approved flats in Chembur & Bandra, Mumbai. 1, 2, 3 & 4 BHK apartments by Pardis — trusted builders in Mumbai.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pardis - Premium Flats in Chembur & Bandra Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pardis | Premium Flats in Chembur & Bandra Mumbai",
    description:
      "Buy premium RERA approved flats in Chembur & Bandra, Mumbai. 1, 2, 3 & 4 BHK apartments by Pardis.",
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
  verification: {
    google: "ftUMoRvlYhbP24ou1o3fZvsG3nIK4tMw9fBw3svON9U",
  },
  alternates: {
    canonical: "https://pardis.in",
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
