import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Contact Us - Get in Touch with Sanjay Devnani Projects",
  description: "Contact Sanjay Devnani Projects for inquiries about our residential projects in Chembur and Bandra. Schedule a site visit or get detailed project information.",
  keywords: [
    "contact sanjay devnani projects",
    "real estate inquiry mumbai",
    "schedule site visit chembur",
    "property inquiry bandra",
  ],
  canonicalUrl: "https://www.sanjaydevnaniprojects.com/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
