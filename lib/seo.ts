import { Metadata } from "next";

const SITE_URL = "https://www.sanjaydevnaniprojects.com";
const SITE_NAME = "Sanjay Devnani Projects";
const DEFAULT_DESCRIPTION = "Premium residential projects in Chembur and Bandra, Mumbai. Discover affordable luxury apartments by Sanjay Devnani Projects - trusted builders in Mumbai.";

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
  const image = ogImage || `${SITE_URL}/images/og-default.jpg`;

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
  logo: `${SITE_URL}/images/logo.png`,
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sindhi Society",
    addressLocality: "Chembur",
    addressRegion: "Mumbai, Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Chembur",
    },
    {
      "@type": "City",
      name: "Bandra",
    },
  ],
  sameAs: [
    "https://www.facebook.com/sanjaydevnaniprojects",
    "https://www.instagram.com/sanjaydevnaniprojects",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  image: `${SITE_URL}/images/logo.png`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: "+91-XXXXXXXXXX",
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
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "18:00",
  },
};
