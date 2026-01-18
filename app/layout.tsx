import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, localBusinessSchema } from "@/lib/seo";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sanjaydevnaniprojects.com"),
  title: {
    default: "Sanjay Devnani Projects | Premium Flats in Chembur & Bandra | Affordable Luxury",
    template: "%s | Sanjay Devnani Projects",
  },
  description: "Discover premium residential projects in Chembur and Bandra, Mumbai. Sanjay Devnani Projects offers affordable luxury apartments with world-class amenities. RERA approved projects.",
  keywords: [
    "flats in chembur",
    "apartments in chembur",
    "flats in bandra",
    "residential projects chembur",
    "luxury flats mumbai",
    "affordable flats chembur",
    "2 bhk chembur",
    "3 bhk chembur",
    "real estate chembur",
    "property in chembur",
    "sanjay devnani projects",
  ],
  authors: [{ name: "Sanjay Devnani Projects" }],
  creator: "Sanjay Devnani Projects",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sanjaydevnaniprojects.com",
    siteName: "Sanjay Devnani Projects",
    title: "Sanjay Devnani Projects | Premium Flats in Chembur & Bandra",
    description: "Discover premium residential projects in Chembur and Bandra, Mumbai. Affordable luxury apartments with world-class amenities.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanjay Devnani Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Devnani Projects | Premium Flats in Chembur & Bandra",
    description: "Discover premium residential projects in Chembur and Bandra, Mumbai. Affordable luxury apartments with world-class amenities.",
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
    google: "your-google-verification-code",
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
