import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";

export default function Home() {
  const typedProjects = projects as Project[];
  const featuredProjects = typedProjects.filter(p => p.status === "ongoing").slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Affordable Luxury in Mumbai's Prime Locations
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Premium residential projects in Chembur and Bandra. Experience modern living with world-class amenities and trusted construction quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium text-lg"
              >
                View All Projects
              </Link>
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-md border-2 border-gray-900 hover:bg-gray-50 transition-colors font-medium text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ongoing Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our current residential developments offering premium apartments with modern amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prime Locations in Mumbai
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic locations with excellent connectivity and lifestyle amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Chembur</h3>
              <p className="text-gray-600 mb-6">
                Well-connected locality with excellent infrastructure, close to Eastern Freeway, Monorail, and major business districts.
              </p>
              <Link
                href="/flats-in-chembur"
                className="text-gray-900 font-medium hover:underline"
              >
                Explore Chembur Projects →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bandra</h3>
              <p className="text-gray-600 mb-6">
                Mumbai's most prestigious suburb offering lifestyle, connectivity, and premium living near BKC and Western Express Highway.
              </p>
              <Link
                href="/flats-in-bandra"
                className="text-gray-900 font-medium hover:underline"
              >
                Explore Bandra Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sanjay Devnani Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">RERA Approved</h3>
              <p className="text-gray-600">
                All projects are RERA registered ensuring transparency and timely delivery
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Construction</h3>
              <p className="text-gray-600">
                Premium materials and expert craftsmanship in every project
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">◆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Luxury</h3>
              <p className="text-gray-600">
                Premium amenities and modern design at competitive prices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with us today to schedule a site visit or learn more about our projects
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
