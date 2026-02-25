import { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import { generateMetadata as genMeta } from "@/lib/seo";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = genMeta({
  title: "Flats in BKC - Premium Apartments Near Bandra Kurla Complex",
  description:
    "Discover premium flats near BKC by Pardis. Luxury apartments in Bandra Kurla Complex vicinity. 2 & 3 BHK with world-class amenities. RERA approved. Walk to work lifestyle.",
  keywords: [
    "flats in bkc",
    "apartments in bkc",
    "flats near bandra kurla complex",
    "luxury flats bkc",
    "premium apartments bkc",
    "property near bkc",
    "bkc real estate",
    "2 bhk near bkc",
    "3 bhk near bkc",
    "walk to work bkc",
    "bandra kurla complex flats",
  ],
  canonicalUrl: "https://pardis.in/flats-in-bkc",
});

export default function FlatsInBKCPage() {
  const typedProjects = projects as Project[];
  const bkcProjects = typedProjects.filter((p) => p.area === "BKC");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D427A] mb-4 tracking-tight">
            Flats in BKC - Live Where Mumbai Does Business
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Experience the ultimate walk-to-work lifestyle with premium
            residences near Bandra Kurla Complex, Mumbai's premier financial and
            commercial hub.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#1D427A] mb-4 tracking-tight">
              Why Choose Flats Near BKC?
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              Bandra Kurla Complex (BKC) is Mumbai's most prestigious business
              district, home to multinational corporations, financial
              institutions, consulates, and India's premier convention center.
              Living near BKC means being at the center of Mumbai's economic
              activity while enjoying world-class infrastructure.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Whether you're looking for{" "}
              <strong>luxury apartments near BKC</strong>,{" "}
              <strong>premium 3 BHK residences</strong>, or{" "}
              <strong>modern 2 BHK flats with corporate connectivity</strong>,
              Pardis offers exceptional options in this prime
              locality.
            </p>
          </div>
        </div>
      </section>

      {/* Projects near BKC */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">
            Our Projects Near BKC
          </h2>
          {bkcProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bkcProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-xl text-slate-600 mb-4">
                Exclusive BKC vicinity projects launching soon!
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#1D427A] text-white px-8 py-3 rounded-md hover:bg-[#A6192E] transition-colors font-medium"
              >
                Register Your Interest
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">
            Why BKC is Mumbai's Most Coveted Address
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Corporate Hub
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Headquarters of major banks and financial institutions</li>
                <li>• Multinational corporate offices</li>
                <li>• SEBI, RBI, and other regulatory bodies</li>
                <li>• Foreign consulates and embassies</li>
                <li>• Premium co-working spaces</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Unmatched Connectivity
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• BKC Metro Station on Line 3</li>
                <li>• Direct access to Western Express Highway</li>
                <li>• Close to Bandra-Worli Sea Link</li>
                <li>• 15 minutes to domestic airport</li>
                <li>• Well-connected to Bandra and Kurla stations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                World-Class Amenities
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Jio World Centre - events and entertainment</li>
                <li>• Premium dining and retail options</li>
                <li>• 5-star hotels (Trident, Sofitel)</li>
                <li>• International schools nearby</li>
                <li>• Top healthcare facilities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Investment Excellence
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Highest rental yields in Mumbai</li>
                <li>• Consistent capital appreciation</li>
                <li>• Strong corporate leasing demand</li>
                <li>• Limited residential supply</li>
                <li>• Blue-chip investment destination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Flats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">
            Types of Residences Near BKC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3 tracking-tight">
                2 BHK Corporate Living
              </h3>
              <p className="text-slate-700 mb-4">
                Smart, efficient apartments perfect for professionals seeking
                the ultimate walk-to-work convenience near BKC offices.
              </p>
              <Link
                href="/contact"
                className="text-[#1D427A] font-medium hover:underline"
              >
                Enquire Now →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3 tracking-tight">
                3 BHK Premium Homes
              </h3>
              <p className="text-slate-700 mb-4">
                Spacious family residences combining BKC's business advantages
                with comfortable, luxurious living spaces.
              </p>
              <Link
                href="/contact"
                className="text-[#1D427A] font-medium hover:underline"
              >
                Enquire Now →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3 tracking-tight">
                Luxury Penthouses
              </h3>
              <p className="text-slate-700 mb-4">
                Ultra-premium penthouses offering panoramic city views, private
                terraces, and exclusive amenities for discerning buyers.
              </p>
              <Link
                href="/contact"
                className="text-[#1D427A] font-medium hover:underline"
              >
                Enquire Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">
            Residential Options Around BKC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">
                Bandra East
              </h3>
              <p className="text-slate-700">
                Directly adjacent to BKC, offering the shortest commute times
                and excellent connectivity to both business and lifestyle hubs.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">
                Kalina
              </h3>
              <p className="text-slate-700">
                Emerging residential area near BKC with relatively affordable
                options and good appreciation potential.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">
                Kurla West
              </h3>
              <p className="text-slate-700">
                Value-driven location with easy BKC access, metro connectivity,
                and developing infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
