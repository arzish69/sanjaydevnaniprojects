import { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import { generateMetadata as genMeta } from "@/lib/seo";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = genMeta({
  title: "Flats in Khar - Premium Residential Projects | Luxury Apartments",
  description:
    "Discover premium flats in Khar by Sanjay Devnani Projects. Luxury apartments in Khar West near Linking Road, Carter Road. 2 & 3 BHK with world-class amenities. RERA approved.",
  keywords: [
    "flats in khar",
    "apartments in khar",
    "luxury flats khar",
    "flats in khar west",
    "premium apartments khar",
    "property in khar",
    "khar real estate",
    "2 bhk in khar",
    "3 bhk in khar",
    "flats near linking road",
    "khar west flats",
  ],
  canonicalUrl: "https://www.sanjaydevnaniprojects.com/flats-in-khar",
});

export default function FlatsInKharPage() {
  const typedProjects = projects as Project[];
  const kharProjects = typedProjects.filter((p) => p.area === "Khar");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D427A] mb-4 tracking-tight">
            Flats in Khar - Upscale Living in Mumbai's Prime Suburb
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Experience refined living in Khar with premium apartments offering
            excellent connectivity, vibrant neighborhood life, and proximity to
            Bandra's finest amenities.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#1D427A] mb-4 tracking-tight">
              Why Choose Flats in Khar?
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              Khar, often considered an extension of Bandra, offers the perfect
              balance of upscale living and accessibility. Located on the Western
              Railway line, Khar provides excellent connectivity while maintaining
              a more residential and peaceful character compared to its bustling
              neighbor.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Whether you're looking for{" "}
              <strong>luxury 2 BHK flats in Khar West</strong>,{" "}
              <strong>premium 3 BHK apartments</strong>, or{" "}
              <strong>spacious family residences</strong>, Sanjay Devnani Projects
              offers exceptional options in this sought-after locality.
            </p>
          </div>
        </div>
      </section>

      {/* Projects in Khar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">
            Our Projects in Khar
          </h2>
          {kharProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kharProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-xl text-slate-600 mb-4">
                Exclusive Khar projects launching soon!
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
            Why Khar is Perfect for Homebuyers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Strategic Location
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Khar Road Railway Station on Western Line</li>
                <li>• Walking distance to Linking Road and Bandra</li>
                <li>• Quick access to Western Express Highway</li>
                <li>• Close proximity to BKC business district</li>
                <li>• Easy airport connectivity</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Lifestyle & Entertainment
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Near Carter Road promenade and seafront</li>
                <li>• Trendy cafes, restaurants, and eateries</li>
                <li>• Premium shopping on Linking Road</li>
                <li>• Boutique stores and designer outlets</li>
                <li>• Active nightlife and social scene</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Quality Infrastructure
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Reputed schools and educational institutions</li>
                <li>• Quality healthcare facilities nearby</li>
                <li>• Banks and financial services</li>
                <li>• Well-maintained roads and civic amenities</li>
                <li>• Parks and recreational spaces</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Investment Potential
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Strong property appreciation history</li>
                <li>• High demand for rentals</li>
                <li>• Established residential neighborhood</li>
                <li>• Premium address value</li>
                <li>• Limited new supply ensuring value</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Flats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">
            Types of Flats Available in Khar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3 tracking-tight">
                2 BHK Apartments
              </h3>
              <p className="text-slate-700 mb-4">
                Well-designed 2 bedroom homes perfect for young couples and small
                families seeking a premium Khar address.
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
                3 BHK Residences
              </h3>
              <p className="text-slate-700 mb-4">
                Spacious 3 bedroom apartments with modern layouts, ideal for
                growing families wanting comfort and convenience.
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
                Premium Duplexes
              </h3>
              <p className="text-slate-700 mb-4">
                Exclusive duplex apartments offering expansive living spaces with
                private terraces and premium finishes.
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

      {/* Neighborhoods */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">
            Popular Areas in Khar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">
                Khar West
              </h3>
              <p className="text-slate-700">
                The most sought-after area with tree-lined streets, close to
                Linking Road shopping and Carter Road seafront.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">
                Khar Danda
              </h3>
              <p className="text-slate-700">
                Traditional Koli village area now transformed with modern
                apartments, offering coastal charm and seafood delights.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">
                Near 14th Road
              </h3>
              <p className="text-slate-700">
                Quiet residential pockets with good connectivity, perfect for
                families seeking peace away from the main roads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
