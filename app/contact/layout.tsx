import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Contact Us - Get in Touch with Pardis",
  description: "Contact Pardis for inquiries about our residential projects in Chembur and Bandra. Schedule a site visit or get detailed project information.",
  keywords: [
    "contact Pardis",
    "real estate inquiry mumbai",
    "schedule site visit chembur",
    "property inquiry bandra",
  ],
  canonicalUrl: "https://pardis.in/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
