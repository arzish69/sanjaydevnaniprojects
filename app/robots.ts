import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    // ✅ FIXED: Using the actual live domain pardis.in
    sitemap: "https://pardis.in/sitemap.xml",
  };
}
