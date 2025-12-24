import { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Flats in Chembur - Premium Residential Projects | 1, 2, 3 BHK Apartments",
  description: "Discover premium flats in Chembur by Sanjay Devnani Projects. RERA approved residential apartments with modern amenities, prime location near Sindhi Society, Eastern Freeway. Best prices!",
  keywords: [
    "flats in chembur",
    "apartments in chembur",
    "residential projects in chembur",
    "new projects in chembur",
    "2 bhk in chembur",
    "3 bhk in chembur",
    "flats for sale in chembur",
    "property in chembur",
    "chembur real estate",
    "sindhi society chembur",
    "flats near chembur station",
    "luxury flats chembur",
  ],
  canonicalUrl: "https://www.sanjaydevnaniprojects.com/flats-in-chembur",
});

export default function FlatsInChemburPage() {
  const typedProjects = projects as Project[];
  const chemburProjects = typedProjects.filter(p => p.area === "Chembur");

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Flats in Chembur - Premium Residential Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Discover affordable luxury apartments in Chembur with world-class amenities,
              excellent connectivity, and prime locations near Sindhi Society.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Flats in Chembur?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Chembur has emerged as one of Mumbai's most sought-after residential localities,
                offering the perfect blend of connectivity, infrastructure, and lifestyle amenities.
                Located in the eastern suburbs of Mumbai, Chembur provides excellent access to major
                business districts while maintaining a peaceful residential environment.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Whether you're looking for <strong>2 BHK flats in Chembur</strong>, <strong>3 BHK
                apartments in Chembur</strong>, or <strong>luxury residential projects</strong>,
                Sanjay Devnani Projects offers premium options that cater to modern homebuyers.
              </p>
            </div>
          </div>
        </section>

        {/* Projects in Chembur */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Projects in Chembur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chemburProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Key Highlights of Chembur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellent Connectivity</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Close to Chembur Railway Station (Central and Harbour Line)</li>
                  <li>• Monorail connectivity for easy commuting</li>
                  <li>• Direct access to Eastern Freeway and Sion-Panvel Highway</li>
                  <li>• Well-connected to BKC, Fort, and other business districts</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Location</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Proximity to Sindhi Society - a well-established residential area</li>
                  <li>• Near Diamond Garden and other recreational spaces</li>
                  <li>• Close to reputed schools and educational institutions</li>
                  <li>• Easy access to shopping malls and entertainment centers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Growing Infrastructure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ongoing metro rail development projects</li>
                  <li>• Modern hospitals and healthcare facilities</li>
                  <li>• Banking and financial service centers</li>
                  <li>• Upcoming commercial and retail developments</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lifestyle Amenities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Multiple shopping complexes and markets</li>
                  <li>• Restaurants and food courts</li>
                  <li>• Gyms, sports clubs, and fitness centers</li>
                  <li>• Parks and jogging tracks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Flats */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Types of Flats Available in Chembur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1 BHK Flats</h3>
                <p className="text-gray-700 mb-4">
                  Perfect for young professionals and small families looking for affordable
                  housing options in a prime location.
                </p>
                <Link
                  href="/projects"
                  className="text-gray-900 font-medium hover:underline"
                >
                  View 1 BHK Projects →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2 BHK Apartments</h3>
                <p className="text-gray-700 mb-4">
                  Ideal for growing families seeking spacious living spaces with modern
                  amenities and excellent ventilation.
                </p>
                <Link
                  href="/2-bhk-in-chembur"
                  className="text-gray-900 font-medium hover:underline"
                >
                  View 2 BHK Projects →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3 BHK Luxury Flats</h3>
                <p className="text-gray-700 mb-4">
                  Premium residences with expansive layouts, perfect for families looking
                  for luxury and comfort.
                </p>
                <Link
                  href="/projects"
                  className="text-gray-900 font-medium hover:underline"
                >
                  View 3 BHK Projects →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Potential */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Investment Potential in Chembur
            </h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Chembur has witnessed significant appreciation in property values over the years,
                making it an excellent choice for real estate investment. With upcoming
                infrastructure projects like the metro rail and improved road connectivity,
                property prices are expected to grow steadily.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're looking to <strong>buy flats in Chembur</strong> for self-use or
                investment, this locality offers strong rental yields and capital appreciation
                potential. The presence of established residential communities like Sindhi Society
                adds to the area's desirability.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect Home in Chembur
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our RERA-approved residential projects and schedule a site visit today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/projects"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors font-medium text-lg"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
