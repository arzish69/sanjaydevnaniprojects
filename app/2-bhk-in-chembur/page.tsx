import { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import { generateMetadata as genMeta } from "@/lib/seo";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = genMeta({
  title: "2 BHK Flats in Chembur - Spacious Apartments | Affordable Luxury",
  description:
    "Find the perfect 2 BHK flats in Chembur with Sanjay Devnani Projects. Spacious 2 bedroom apartments with modern amenities, prime location, and competitive pricing. RERA approved.",
  keywords: [
    "2 bhk in chembur",
    "2 bhk flats in chembur",
    "2 bedroom apartments chembur",
    "spacious 2 bhk chembur",
    "2 bhk for sale chembur",
    "affordable 2 bhk chembur",
    "2 bhk apartments near sindhi society",
    "2 bhk chembur east",
    "new 2 bhk projects chembur",
  ],
  canonicalUrl: "https://www.sanjaydevnaniprojects.com/2-bhk-in-chembur",
});

export default function TwoBhkChemburPage() {
  const typedProjects = projects as Project[];
  const twoBhkProjects = typedProjects.filter(
    (p) => p.area === "Chembur" && p.bhkTypes.includes("2 BHK")
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D427A] mb-4">
            2 BHK Flats in Chembur - Spacious & Modern Living
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Explore premium 2 BHK apartments in Chembur offering perfect blend
            of space, comfort, and affordability with world-class amenities.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#1D427A] mb-4">
              Why Choose 2 BHK Apartments in Chembur?
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              2 BHK apartments in Chembur are ideal for growing families, young
              couples, and professionals seeking spacious living spaces without
              compromising on location and amenities. These well-designed homes
              offer the perfect balance between affordability and luxury.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              Chembur's strategic location, excellent connectivity via road and
              rail networks, and proximity to key areas like BKC, Powai, and
              South Mumbai make it one of the most preferred localities for
              homebuyers. Our <strong>2 BHK flats in Chembur</strong> are
              thoughtfully designed to maximize space utilization while
              providing modern comforts.
            </p>
          </div>
        </div>
      </section>

      {/* 2 BHK Projects */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8">
            2 BHK Projects in Chembur
          </h2>
          {twoBhkProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {twoBhkProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-slate-600">
              New 2 BHK projects coming soon. Contact us for upcoming launches.
            </p>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8">
            Features of Our 2 BHK Apartments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                Spacious Layouts
              </h3>
              <p className="text-slate-700">
                Well-planned 2 bedroom configurations with ample space for
                comfortable living, optimized carpet areas, and efficient floor
                plans.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                Modern Amenities
              </h3>
              <p className="text-slate-700">
                Gym, swimming pool, clubhouse, children's play area, landscaped
                gardens, and 24/7 security for a comfortable lifestyle.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                Prime Location
              </h3>
              <p className="text-slate-700">
                Located in well-connected areas of Chembur with easy access to
                schools, hospitals, shopping centers, and public transport.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                Vastu Compliant
              </h3>
              <p className="text-slate-700">
                Designed according to Vastu principles ensuring positive energy
                flow and harmonious living environment.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                Quality Construction
              </h3>
              <p className="text-slate-700">
                Premium materials, earthquake-resistant structure, and superior
                finishing ensuring durability and aesthetics.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                RERA Approved
              </h3>
              <p className="text-slate-700">
                All projects are RERA registered, ensuring transparency, legal
                compliance, and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Layout */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8">
            Typical 2 BHK Configuration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4">
                Standard Features
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• 2 Spacious Bedrooms with attached/common bathrooms</li>
                <li>• Living & Dining area</li>
                <li>• Modular Kitchen with utility area</li>
                <li>• Balconies for natural light and ventilation</li>
                <li>• Powder room (in select configurations)</li>
                <li>• Ample storage and wardrobe space</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4">
                Amenities Included
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Covered car parking</li>
                <li>• Power backup for common areas</li>
                <li>• Lift facilities</li>
                <li>• Water supply and storage</li>
                <li>• Fire safety systems</li>
                <li>• Intercom connectivity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Payment */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-6">
            Affordable Pricing & Flexible Payment Plans
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 mb-4">
              Our 2 BHK apartments in Chembur are competitively priced to offer
              the best value for your investment. We understand that buying a
              home is a significant decision, which is why we offer flexible
              payment plans and easy home loan assistance.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Contact our sales team to learn about current pricing, special
              offers, and customized payment options that suit your budget.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-[#1D427A] text-white px-8 py-3 rounded-md hover:bg-[#A6192E] transition-colors font-medium text-lg"
          >
            Get Price Details
          </Link>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D427A] mb-8">
            Location Advantages of 2 BHK in Chembur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4">
                Connectivity
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• 5-10 minutes from Chembur Railway Station</li>
                <li>• Close to Monorail stations</li>
                <li>• Easy access to Eastern Freeway</li>
                <li>• 20-25 minutes to BKC and Powai</li>
                <li>• Well-connected by BEST buses</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-4">
                Nearby Facilities
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Reputed schools within 1-2 km radius</li>
                <li>• Multi-specialty hospitals nearby</li>
                <li>• Shopping malls and retail outlets</li>
                <li>• Banks and ATMs in vicinity</li>
                <li>• Restaurants and entertainment options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1D427A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Buy Your 2 BHK in Chembur?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a site visit or get detailed information about our 2 BHK
            apartments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#1D427A] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              Book Site Visit
            </Link>
            <Link
              href="/flats-in-chembur"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#1D427A] transition-colors font-medium text-lg"
            >
              View All Chembur Projects
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
