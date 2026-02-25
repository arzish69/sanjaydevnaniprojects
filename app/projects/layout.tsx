import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "All Projects - Residential Apartments in Chembur & Bandra",
  description: "Browse all residential projects by Pardis. Proposed, upcoming, ongoing, and completed luxury apartments in Chembur and Bandra, Mumbai.",
  keywords: [
    "residential projects chembur",
    "apartments chembur",
    "flats in chembur",
    "luxury apartments bandra",
    "ongoing projects mumbai",
    "rera approved projects",
  ],
  canonicalUrl: "https://pardis.in/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
