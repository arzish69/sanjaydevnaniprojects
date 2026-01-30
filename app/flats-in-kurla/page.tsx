import { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import { generateMetadata as genMeta } from "@/lib/seo";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = genMeta({
  title:
    "Flats in Kurla - Affordable Premium Apartments | Near BKC & LBS Marg",
  description:
    "Discover premium flats in Kurla by Sanjay Devnani Projects. Affordable apartments near BKC, LBS Marg, Kurla Station. 1, 2 & 3 BHK with modern amenities. RERA approved.",
  keywords: [
    "flats in kurla",
    "apartments in kurla",
    "flats in kurla west",
    "flats in kurla east",
    "affordable flats kurla",
    "property in kurla",
    "kurla real estate",
    "1 bhk in kurla",
    "2 bhk in kurla",
    "flats near kurla station",
    "flats near bkc kurla",
    "lbs marg flats",
  ],
  canonicalUrl: "https://www.sanjaydevnaniprojects.com/flats-in-kurla",
});

export default function FlatsInKurlaPage() {
  const typedProjects = projects as Project[];
  const kurlaProjects = typedProjects.filter((p) => p.area === "Kurla");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D427A] mb-4 tracking-tight">
            Flats in Kurla - Smart Living Near Mumbai's Business Hub
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Discover value-driven residential options in Kurla with excellent
            connectivity to BKC, robust infrastructure, and modern amenities at
            competitive prices.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#1D427A] mb-4 tracking-tight">
              Why Choose Flats in Kurla?
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              Kurla has transformed from a traditional suburb into a thriving
              residential destination, thanks to its proximity to BKC and
              excellent public transport connectivity. As one of Mumbai's most
              well-connected junctions, Kurla offers the perfect blend of
              affordability and accessibility.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Whether you're looking for{" "}
              <strong>affordable 1 BHK flats in Kurla</strong>,{" "}
              <strong>spacious 2 BHK apartments near BKC</strong>, or{" "}
              <strong>family-friendly 3 BHK residences</strong>, Sanjay Devnani
              Projects offers quality options that match your budget and
              lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Projects in Kurla */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">
            Our Projects in Kurla
          </h2>
          {kurlaProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kurlaProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-xl text-slate-600 mb-4">
                Exciting Kurla projects launching soon!
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
            Key Advantages of Living in Kurla
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Exceptional Connectivity
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Kurla Junction - Central, Harbour & Metro lines</li>
                <li>• Lokmanya Tilak Terminus for outstation travel</li>
                <li>• Direct access to BKC via Santacruz-Chembur Link Road</li>
                <li>• LBS Marg and Eastern Express Highway</li>
                <li>• BEST bus connectivity to all parts of Mumbai</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Proximity to BKC
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Just 10-15 minutes from BKC business district</li>
                <li>• Metro Line 3 connectivity (coming soon)</li>
                <li>• Ideal for professionals working in BKC</li>
                <li>• Fraction of BKC's property prices</li>
                <li>• Best value for BKC proximity</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Essential Amenities
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Phoenix Marketcity mall nearby</li>
                <li>• Multiple hospitals and healthcare centers</li>
                <li>• Schools and educational institutions</li>
                <li>• Banks and ATMs at every corner</li>
                <li>• Local markets and retail options</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Investment Benefits
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Affordable entry point with high growth potential</li>
                <li>• Metro expansion to boost property values</li>
                <li>• Strong rental demand from BKC workforce</li>
                <li>• Redevelopment transforming the skyline</li>
                <li>• Infrastructure upgrades underway</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Flats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">
            Types of Flats Available in Kurla
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3 tracking-tight">
                1 BHK Starter Homes
              </h3>
              <p className="text-slate-700 mb-4">
                Compact and affordable 1 bedroom apartments ideal for young
                professionals and first-time homebuyers.
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
                2 BHK Family Apartments
              </h3>
              <p className="text-slate-700 mb-4">
                Well-planned 2 bedroom homes offering comfortable space for
                small families at reasonable prices.
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
                3 BHK Spacious Homes
              </h3>
              <p className="text-slate-700 mb-4">
                Large family residences with modern amenities, perfect for those
                seeking space without the premium price tag.
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
            Popular Areas in Kurla
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">
                Kurla West
              </h3>
              <p className="text-slate-700">
                Closest to BKC with the best connectivity. Premium pocket of
                Kurla with newer developments and better infrastructure.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">
                Kurla East
              </h3>
              <p className="text-slate-700">
                Traditional residential area with established communities.
                Affordable options with good civic amenities.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#1D427A] mb-2">
                Near LTT Station
              </h3>
              <p className="text-slate-700">
                Ideal for frequent travelers. Walking distance to Lokmanya Tilak
                Terminus with excellent train connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
