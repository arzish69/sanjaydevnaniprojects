import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Real Estate Blog - Tips, Insights & Market Updates",
  description: "Stay updated with the latest real estate trends, property buying guides, and market insights for Chembur and Bandra. Expert advice from Sanjay Devnani Projects.",
  keywords: [
    "real estate blog mumbai",
    "property buying tips",
    "chembur market trends",
    "bandra real estate news",
    "home buying guide",
  ],
  canonicalUrl: "https://www.sanjaydevnaniprojects.com/blog",
});

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D427A] mb-4 tracking-tight">
            Real Estate Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Insights, tips, and updates about real estate in Mumbai, property buying guides,
            and market trends in Chembur and Bandra.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-gray-50 p-12 rounded-lg">
              <h2 className="text-2xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Blog Posts Coming Soon
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We're working on bringing you valuable insights about real estate investing,
                home buying tips, and market updates for Chembur and Bandra.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#1D427A] text-white px-8 py-3 rounded-md hover:bg-[#A6192E] transition-colors font-semibold"
              >
                Subscribe for Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8 text-center tracking-tight">
            Upcoming Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3 tracking-tight">
                Property Buying Guide
              </h3>
              <p className="text-slate-700">
                Complete guide to buying your first home in Mumbai - from documentation
                to registration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3 tracking-tight">
                Why Invest in Chembur
              </h3>
              <p className="text-slate-700">
                Explore the investment potential and growth prospects of Chembur real estate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3 tracking-tight">
                Bandra Lifestyle Guide
              </h3>
              <p className="text-slate-700">
                Discover what makes Bandra Mumbai's most coveted residential address.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
