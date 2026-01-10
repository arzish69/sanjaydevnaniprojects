import { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Flats in Bandra - Luxury Residential Projects | Premium Apartments",
  description: "Discover premium flats in Bandra by Sanjay Devnani Projects. Luxury apartments near BKC, Bandstand, Carter Road. 2 & 3 BHK sea-facing flats with world-class amenities. RERA approved.",
  keywords: [
    "flats in bandra",
    "apartments in bandra",
    "luxury flats bandra",
    "flats in bandra west",
    "flats in bandra east",
    "premium apartments bandra",
    "sea view flats bandra",
    "flats near bkc",
    "property in bandra",
    "bandra real estate",
    "2 bhk in bandra",
    "3 bhk in bandra",
  ],
  canonicalUrl: "https://www.sanjaydevnaniprojects.com/flats-in-bandra",
});

export default function FlatsInBandraPage() {
  const typedProjects = projects as Project[];
  const bandraProjects = typedProjects.filter(p => p.area === "Bandra");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D427A] mb-4">
            Flats in Bandra - Mumbai's Most Prestigious Address
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Experience luxury living in Bandra with premium apartments offering world-class
            amenities, stunning views, and unmatched connectivity to BKC and South Mumbai.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#1D427A] mb-4">
              Why Invest in Flats in Bandra?
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              Bandra is synonymous with luxury, lifestyle, and prestige in Mumbai. Known as the
              "Queen of Suburbs," Bandra offers the perfect combination of cosmopolitan culture,
              excellent infrastructure, and premium living experiences. From Bandstand to Carter
              Road, Linking Road to BKC, every corner of Bandra exudes sophistication.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Whether you're looking for <strong>luxury 3 BHK flats in Bandra</strong>, <strong>
              sea-facing apartments</strong>, or <strong>premium 2 BHK residences near BKC</strong>,
              Sanjay Devnani Projects brings you exclusive residential options in this coveted locality.
            </p>
          </div>
        </div>
      </section>

      {/* Projects in Bandra */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8">
            Our Projects in Bandra
          </h2>
          {bandraProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bandraProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-xl text-slate-600 mb-4">
                Exclusive Bandra projects launching soon!
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
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8">
            Why Bandra is Mumbai's Most Sought-After Locality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4">Prime Location</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Adjacent to BKC - Mumbai's premier business district</li>
                <li>• Close to Bandra-Worli Sea Link for quick South Mumbai access</li>
                <li>• Western Express Highway connectivity</li>
                <li>• Bandra Railway Station on Western Line</li>
                <li>• Easy access to Mumbai Airport (domestic & international)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4">Lifestyle & Culture</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Iconic seafront promenades - Bandstand and Carter Road</li>
                <li>• Upscale restaurants, cafes, and nightlife</li>
                <li>• High-street fashion on Linking Road and Hill Road</li>
                <li>• Celebrity residences and premium neighborhoods</li>
                <li>• Art galleries, theaters, and cultural centers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4">Premium Infrastructure</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Top-tier schools and educational institutions</li>
                <li>• World-class hospitals and healthcare facilities</li>
                <li>• Luxury shopping malls and boutiques</li>
                <li>• Gyms, spas, and wellness centers</li>
                <li>• Banking, financial services, and corporate offices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4">Investment Value</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Consistent property value appreciation</li>
                <li>• High rental yields and demand</li>
                <li>• Limited land availability ensures exclusivity</li>
                <li>• Blue-chip residential address</li>
                <li>• Strong resale potential</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Flats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8">
            Types of Luxury Flats in Bandra
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">2 BHK Premium Apartments</h3>
              <p className="text-slate-700 mb-4">
                Compact yet luxurious 2 bedroom residences perfect for young professionals
                and couples seeking a Bandra address.
              </p>
              <Link
                href="/contact"
                className="text-[#1D427A] font-medium hover:underline"
              >
                Enquire Now →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">3 BHK Luxury Residences</h3>
              <p className="text-slate-700 mb-4">
                Spacious 3 bedroom homes with premium finishes, ideal for families wanting
                the best of Bandra living.
              </p>
              <Link
                href="/contact"
                className="text-[#1D427A] font-medium hover:underline"
              >
                Enquire Now →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">Sea-Facing Penthouses</h3>
              <p className="text-slate-700 mb-4">
                Ultra-luxury sea-facing residences offering breathtaking Arabian Sea views
                and world-class amenities.
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
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8">
            Popular Neighborhoods in Bandra
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">Bandra West</h3>
              <p className="text-slate-700">
                The most prestigious part with Bandstand, Carter Road, and Linking Road.
                Premium sea-facing apartments and luxury residences.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">Bandra East</h3>
              <p className="text-slate-700">
                Close to BKC with excellent connectivity. Ideal for professionals working
                in Mumbai's business hub.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">Near Linking Road</h3>
              <p className="text-slate-700">
                Heart of Bandra's shopping and entertainment scene. Perfect blend of
                residential calm and urban vibrancy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
