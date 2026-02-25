import { Metadata } from "next";

const SITE_URL = "https://pardis.in";
const SITE_NAME = "Pardis";
const DEFAULT_DESCRIPTION =
  "Buy premium RERA approved flats in Chembur & Bandra, Mumbai. Pardis offers 1, 2, 3 & 4 BHK apartments with world-class amenities in prime Mumbai locations.";

export function generateMetadata({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
}: {
  title: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}): Metadata {
  const metaTitle = `${title} | ${SITE_NAME}`;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const url = canonicalUrl || SITE_URL;
  const image = ogImage || `${SITE_URL}/images/og-image.jpg`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords?.join(", "),
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [image],
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
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: DEFAULT_DESCRIPTION,
  telephone: "+91-9833555680",
  email: "sales.pardis@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sindhi Society",
    addressLocality: "Chembur",
    addressRegion: "Mumbai, Maharashtra",
    postalCode: "400071",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Chembur" },
    { "@type": "City", name: "Bandra" },
    { "@type": "City", name: "Kurla" },
  ],
  // ✅ Add your real social media URLs here
  sameAs: [
    // "https://www.instagram.com/pardis.in",
    "https://www.instagram.com/pardis.constructions/",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  image: `${SITE_URL}/logo.png`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: "+91-9833555680",
  email: "sales.pardis@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sindhi Society",
    addressLocality: "Chembur",
    addressRegion: "Maharashtra",
    postalCode: "400071",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.0625,
    longitude: 72.8989,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:00",
    closes: "18:00",
  },
  priceRange: "₹₹₹",
};
