import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "5th Avenue - The New Address of Prestige in Chembur",
  description:
    "5th Avenue brings a touch of global lifestyle to Chembur with its meticulously designed apartments and world-class features.",
};

export default function FifthAvenuePage() {
  const project = projects.find(
    (p) => p.slug === "5th-avenue"
  ) as Project | undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={project.featuredImage}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#1D427A]/95 via-[#1D427A]/85 to-transparent" />

        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A6192E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1D427A]/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8 inline-block">
            <span className="px-6 py-2 border-2 border-white/30 backdrop-blur-sm text-white text-xs tracking-[0.4em] uppercase rounded-full bg-white/5">
              {project.area} • {project.possession}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-6 tracking-tight">
            5<sup className="text-5xl md:text-6xl">th</sup>{" "}
            <span className="font-serif italic text-[#A6192E] relative">
              Avenue
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A6192E] to-transparent" />
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            {project.tagline}
          </p>

          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#A6192E] to-[#c71f3a] px-10 py-5 rounded-full text-white font-semibold tracking-wider uppercase text-sm shadow-2xl shadow-[#A6192E]/50 hover:shadow-[#A6192E]/70 transition-all duration-300">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            {project.price}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#A6192E] text-xs font-bold uppercase tracking-[0.3em] pb-2 border-b-2 border-[#A6192E] inline-block mb-6">
                The Vision
              </span>

              <h2 className="text-5xl md:text-6xl font-light text-[#1D427A] mb-8 leading-tight">
                Where Global Lifestyle
                <br />
                <span className="font-serif italic">Meets Mumbai</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-5xl font-light text-[#1D427A] mb-2">
                    {project.bhkTypes[0]}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                    Exclusively Designed
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-light text-[#1D427A] mb-2">
                    Ready
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                    {project.possession}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.featuredImage}
                  alt={`${project.name} Architecture`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#A6192E] rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1D427A] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#A6192E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Prime Location
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#1D427A] mb-6">
              <span className="font-serif italic">Strategically</span> Positioned
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {project.location}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1D427A] to-[#2d5595] rounded-xl flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#1D427A] mb-1">
                      {highlight}
                    </h4>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#A6192E] to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-32 bg-[#1D427A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#A6192E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Refined Living
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
              World-Class{" "}
              <span className="font-serif italic">Amenities</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Meticulously curated features designed to elevate your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.amenities.map((amenity, i) => (
              <div
                key={i}
                className="group relative p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute top-6 right-6 text-6xl font-light text-white/5 group-hover:text-white/10 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="text-xl text-white mb-3 relative z-10 font-medium">
                  {amenity}
                </h4>
                <div className="w-12 h-0.5 bg-[#A6192E]" />
                <p className="text-white/60 text-sm uppercase tracking-wider mt-4">
                  Premium Standard
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 bg-gradient-to-br from-[#1D427A] to-[#2d5595] text-white">
                <span className="text-[#A6192E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                  Project Status
                </span>
                <h3 className="text-4xl font-light mb-4 capitalize">
                  {project.status}
                </h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  This prestigious project has reached completion and stands as a testament to quality construction and thoughtful design in the heart of Chembur.
                </p>
                <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {project.possession}
                  </span>
                </div>
              </div>

              <div className="p-12 bg-white">
                <span className="text-[#A6192E] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                  Current Status
                </span>
                <h3 className="text-4xl font-light text-[#1D427A] mb-6">
                  {project.price}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  All units have been successfully sold. Thank you for your overwhelming response to this landmark project.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-[#A6192E] rounded-full" />
                    <span className="text-gray-600">100% Sold</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-[#A6192E] rounded-full" />
                    <span className="text-gray-600">Successfully Delivered</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-[#A6192E] rounded-full" />
                    <span className="text-gray-600">Happy Homeowners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#1D427A] via-[#2d5595] to-[#1D427A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A6192E] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            Discover Your Next{" "}
            <span className="font-serif italic text-[#A6192E]">
              Investment
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            Explore more premium projects from Sanjay Devnani and find your perfect home in the heart of Mumbai
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/projects"
              className="group px-12 py-5 border-2 border-white text-white hover:bg-white hover:text-[#1D427A] transition-all duration-300 rounded-full font-semibold uppercase text-sm tracking-wider shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                View All Projects
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="group px-12 py-5 bg-gradient-to-r from-[#A6192E] to-[#c71f3a] text-white rounded-full font-semibold uppercase text-sm tracking-wider shadow-lg hover:shadow-2xl hover:shadow-[#A6192E]/50 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Contact Us Today
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}