import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "About Us - Trusted Real Estate Developers in Mumbai",
  description: "Learn about Sanjay Devnani Projects - trusted real estate developers in Chembur and Bandra. Committed to delivering quality homes with affordable luxury since years.",
  keywords: [
    "real estate developer mumbai",
    "builders in chembur",
    "trusted builders bandra",
    "sanjay devnani projects",
    "quality construction mumbai",
  ],
  canonicalUrl: "https://www.sanjaydevnaniprojects.com/about",
});

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Sanjay Devnani Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Building dreams, creating homes, and delivering affordable luxury in Mumbai's prime locations.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Sanjay Devnani Projects has been a trusted name in Mumbai's real estate landscape,
                  specializing in developing premium residential properties in sought-after locations
                  like Chembur and Bandra.
                </p>
                <p>
                  Our commitment to quality construction, timely delivery, and customer satisfaction
                  has made us one of the preferred developers in the region. We believe in creating
                  homes that offer the perfect blend of luxury and affordability.
                </p>
                <p>
                  With a focus on modern architecture, world-class amenities, and strategic locations,
                  we ensure that every project we undertake becomes a landmark in its own right.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">About Us Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-700">
                We never compromise on construction quality. Premium materials and expert craftsmanship
                are the foundation of every project we deliver.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Trust</h3>
              <p className="text-gray-700">
                Transparency, honesty, and integrity guide every interaction. We build lasting
                relationships with our customers based on trust and reliability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-700">
                We embrace modern design trends and sustainable building practices to create
                homes that meet contemporary lifestyle needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">RERA Certified Projects</h3>
                <p className="text-gray-700">
                  All our projects are RERA registered, ensuring complete transparency and regulatory compliance.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Prime Locations</h3>
                <p className="text-gray-700">
                  Strategic locations in Chembur and Bandra with excellent connectivity and infrastructure.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Timely Delivery</h3>
                <p className="text-gray-700">
                  We pride ourselves on completing projects on schedule without compromising quality.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Affordable Luxury</h3>
                <p className="text-gray-700">
                  Premium amenities and modern design at competitive prices that offer true value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Invest in Your Dream Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our projects and find the perfect home for you and your family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors font-medium text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
