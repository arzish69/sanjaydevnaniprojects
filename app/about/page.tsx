import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";
import ScrollToTop from "@/components/ScrollToTop";
import { cinzel } from "@/lib/fonts";

export const metadata: Metadata = genMeta({
  title: "About Us - Trusted Real Estate Developers in Mumbai",
  description:
    "Learn about Sanjay Devnani Projects - trusted real estate developers in Chembur and Bandra. Committed to delivering quality homes with affordable luxury since years.",
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
      <section className="relative py-20 md:py-28 overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="hero.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay to keep text readable */}
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>

        {/* Your existing Grid Pattern */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Added flex, flex-col, and items-center to guarantee centering */}
          <div className="flex flex-col items-center text-center w-full">
            <h1 className="w-full text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in">
              Building Dreams,
              <br />
              Creating Legacies
            </h1>

            <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  15+
                </div>
                <div className="text-blue-200 text-sm uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  25+
                </div>
                <div className="text-blue-200 text-sm uppercase tracking-wider">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  2000+
                </div>
                <div className="text-blue-200 text-sm uppercase tracking-wider">
                  Happy Families
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  5L+
                </div>
                <div className="text-blue-200 text-sm uppercase tracking-wider">
                  Sq.Ft Developed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview & Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-[#1D427A] uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1D427A] leading-tight">
                Transforming Mumbai's Skyline, One Home at a Time
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Since our inception, Sanjay Devnani Projects has been
                  synonymous with trust, quality, and innovation in Mumbai's
                  real estate sector. We specialize in crafting premium
                  residential properties in the city's most coveted locations –
                  Chembur and Bandra.
                </p>
                <p>
                  What started as a vision to redefine urban living has grown
                  into a legacy of excellence. Our journey is marked by
                  unwavering commitment to delivering homes that don't just meet
                  expectations but exceed them, combining architectural
                  brilliance with functional design.
                </p>
                <p>
                  Every project we undertake is a testament to our core belief:
                  homes are not just structures of brick and mortar, but
                  sanctuaries where families create memories, dreams take shape,
                  and futures are built.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-8 py-4 bg-[#1D427A] text-white font-semibold rounded-lg hover:bg-[#2d5a9e] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Our Projects
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Decorative background shadow/shape */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl transform rotate-3"></div>

                {/* Image Container */}
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/building.webp"
                    alt="Building Excellence"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1D427A] uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D427A] mt-6">
              Vision & Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#1D427A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1D427A] mb-4">
                Our Vision
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                To be Mumbai's most trusted and innovative real estate
                developer, setting new benchmarks in quality, design, and
                customer satisfaction while creating sustainable communities
                that enhance urban living.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#1D427A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1D427A] mb-4">
                Our Mission
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                To deliver exceptional residential projects that blend
                affordability with luxury, maintain unwavering construction
                quality, ensure timely delivery, and build lasting relationships
                with our customers through transparency and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1D427A] uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D427A] mt-6">
              Milestones That Define Us
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-[#1D427A] to-blue-200"></div>

            <div className="space-y-12">
              {/* Milestone 1 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <div className="bg-blue-50 p-6 rounded-xl inline-block hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-[#1D427A] mb-2">
                      2008
                    </div>
                    <h3 className="text-xl font-bold text-[#1D427A] mb-2">
                      The Foundation
                    </h3>
                    <p className="text-slate-700">
                      Sanjay Devnani Projects established with a vision to
                      transform Mumbai real estate
                    </p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1D427A] rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Milestone 2 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="md:pl-12">
                  <div className="bg-blue-50 p-6 rounded-xl inline-block hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-[#1D427A] mb-2">
                      2012
                    </div>
                    <h3 className="text-xl font-bold text-[#1D427A] mb-2">
                      First Landmark Project
                    </h3>
                    <p className="text-slate-700">
                      Successfully delivered our first flagship residential
                      project in Chembur
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1D427A] rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Milestone 3 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <div className="bg-blue-50 p-6 rounded-xl inline-block hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-[#1D427A] mb-2">
                      2017
                    </div>
                    <h3 className="text-xl font-bold text-[#1D427A] mb-2">
                      Expansion to Bandra
                    </h3>
                    <p className="text-slate-700">
                      Entered Bandra market with luxury residential developments
                    </p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1D427A] rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Milestone 4 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block"></div>
                <div className="md:pl-12">
                  <div className="bg-blue-50 p-6 rounded-xl inline-block hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-[#1D427A] mb-2">
                      2020
                    </div>
                    <h3 className="text-xl font-bold text-[#1D427A] mb-2">
                      1000+ Happy Families
                    </h3>
                    <p className="text-slate-700">
                      Crossed milestone of delivering homes to over 1000
                      families
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1D427A] rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Milestone 5 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <div className="bg-gradient-to-br from-[#1D427A] to-[#2d5a9e] text-white p-6 rounded-xl inline-block hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold mb-2">2025</div>
                    <h3 className="text-xl font-bold mb-2">
                      Leading the Future
                    </h3>
                    <p>
                      Multiple ongoing projects with sustainable and smart home
                      technologies
                    </p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#1D427A] to-[#2d5a9e] rounded-full border-4 border-white shadow-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1D427A] uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D427A] mt-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
              The principles that guide every decision we make and every home we
              build
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-t-4 border-transparent hover:border-[#1D427A]">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#1D427A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                Quality First
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We never compromise on construction quality. Premium materials
                and expert craftsmanship are the foundation of every project we
                deliver.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-t-4 border-transparent hover:border-[#1D427A]">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#1D427A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                Customer Trust
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Transparency, honesty, and integrity guide every interaction. We
                build lasting relationships based on trust and reliability.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-t-4 border-transparent hover:border-[#1D427A]">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#1D427A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                Innovation
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We embrace modern design trends and sustainable building
                practices to create homes that meet contemporary lifestyle
                needs.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-t-4 border-transparent hover:border-[#1D427A]">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-[#1D427A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                Timely Delivery
              </h3>
              <p className="text-slate-700 leading-relaxed">
                We understand the value of time. Our projects are delivered on
                schedule without compromising on quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction & Design Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Decorative background shape */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl transform -rotate-3"></div>

                {/* Image Container */}
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/achievement.webp"
                    alt="Construction Excellence"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-[#1D427A] uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                  Our Approach
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1D427A] leading-tight">
                Where Architecture Meets Aspiration
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1D427A] text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1D427A] mb-1">
                      Strategic Planning
                    </h3>
                    <p className="text-slate-700">
                      Comprehensive site analysis, market research, and
                      feasibility studies before every project
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1D427A] text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1D427A] mb-1">
                      Design Excellence
                    </h3>
                    <p className="text-slate-700">
                      Collaboration with renowned architects to create spaces
                      that maximize natural light, ventilation, and
                      functionality
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1D427A] text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1D427A] mb-1">
                      Quality Construction
                    </h3>
                    <p className="text-slate-700">
                      Use of premium materials, advanced construction
                      techniques, and rigorous quality checks at every stage
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1D427A] text-white rounded-lg flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1D427A] mb-1">
                      Sustainable Practices
                    </h3>
                    <p className="text-slate-700">
                      Integration of eco-friendly features, energy-efficient
                      systems, and green building practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1D427A] uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D427A] mt-6">
              Visionary Leadership
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Background Image Column */}
                <div className="md:col-span-1 relative min-h-[400px] flex items-end justify-center p-8 overflow-hidden">
                  {/* The Image */}
                  <img
                    src="/award.webp"
                    alt="Sanjay Devnani"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D427A] via-transparent to-transparent opacity-80"></div>

                  <div className="text-center relative z-10">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                      <span className="text-4xl text-white font-bold">SD</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Sanjay Devnani
                    </h3>
                    <p className="text-blue-100 mt-2">
                      Founder & Managing Director
                    </p>
                  </div>
                </div>

                <div className="md:col-span-2 p-8 md:p-10">
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p>
                      With over 15 years of experience in Mumbai's real estate
                      industry, Sanjay Devnani has been the driving force behind
                      our company's success and reputation for excellence.
                    </p>
                    <p>
                      His visionary approach combines deep market insights with
                      a genuine commitment to customer satisfaction. Under his
                      leadership, the company has delivered numerous landmark
                      projects that have redefined residential living in Chembur
                      and Bandra.
                    </p>
                    <p>
                      His philosophy is simple yet powerful: "Build homes as if
                      you're building them for your own family." This principle
                      continues to guide every project we undertake.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-50 text-[#1D427A] rounded-full text-sm font-semibold">
                      15+ Years Experience
                    </span>
                    <span className="px-4 py-2 bg-blue-50 text-[#1D427A] rounded-full text-sm font-semibold">
                      25+ Projects
                    </span>
                    <span className="px-4 py-2 bg-blue-50 text-[#1D427A] rounded-full text-sm font-semibold">
                      Industry Leader
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1D427A] uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              Your Trusted Partner
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D427A] mt-6">
              Why Choose{" "}
              <span
                className={`bg-gradient-to-r from-[#1D427A] via-[#2E5C9A] to-[#A6192E] bg-clip-text text-transparent ${cinzel.className}`}
              >
                P A R D I S
              </span>
            </h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
              Experience the difference that comes with working with Mumbai's
              most trusted developer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1D427A] to-[#2d5a9e] text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                    RERA Certified Projects
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    All our projects are RERA registered, ensuring complete
                    transparency, regulatory compliance, and legal security for
                    your investment.
                  </p>
                  <div className="flex items-center text-sm text-[#1D427A] font-semibold">
                    <span>100% Compliant</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1D427A] to-[#2d5a9e] text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                    Prime Locations
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Strategic locations in Chembur and Bandra with excellent
                    connectivity to business hubs, schools, hospitals, and
                    entertainment zones.
                  </p>
                  <div className="flex items-center text-sm text-[#1D427A] font-semibold">
                    <span>Best Neighborhoods</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1D427A] to-[#2d5a9e] text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                    Timely Delivery
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    We pride ourselves on completing projects on schedule
                    without compromising quality. Our track record speaks for
                    itself.
                  </p>
                  <div className="flex items-center text-sm text-[#1D427A] font-semibold">
                    <span>On-Time, Every Time</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1D427A] to-[#2d5a9e] text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1D427A] mb-3">
                    Affordable Luxury
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Premium amenities and modern design at competitive prices
                    that offer true value for money and long-term appreciation.
                  </p>
                  <div className="flex items-center text-sm text-[#1D427A] font-semibold">
                    <span>Best Value Proposition</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-to-br from-[#1D427A] to-[#2d5a9e] rounded-2xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Trust & Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p className="text-white font-semibold">RERA Approved</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <p className="text-white font-semibold">ISO Certified</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <p className="text-white font-semibold">Award Winning</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="text-white font-semibold">2000+ Families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Focus & After Sales */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#1D427A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1D427A] mb-4">
                Customer-Centric Approach
              </h3>
              <div className="space-y-3 text-slate-700">
                <p className="flex items-start gap-2">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Dedicated relationship managers for personalized service
                </p>
                <p className="flex items-start gap-2">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Regular project updates and transparent communication
                </p>
                <p className="flex items-start gap-2">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Flexible payment plans tailored to your needs
                </p>
                <p className="flex items-start gap-2">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Site visit coordination and project walkthroughs
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#1D427A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1D427A] mb-4">
                After-Sales Commitment
              </h3>
              <div className="space-y-3 text-slate-700">
                <p className="flex items-start gap-2">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Comprehensive warranty on construction and amenities
                </p>
                <p className="flex items-start gap-2">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  24/7 customer support for maintenance requests
                </p>
                <p className="flex items-start gap-2">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Prompt resolution of post-possession concerns
                </p>
                <p className="flex items-start gap-2">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Long-term relationship beyond handover
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#1D427A] via-[#2d5a9e] to-[#1D427A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Explore our premium projects or schedule a site visit to experience
            the Sanjay Devnani difference firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1D427A] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-[#1D427A] transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
