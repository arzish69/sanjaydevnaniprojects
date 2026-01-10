import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import { generateMetadata as genMeta } from "@/lib/seo";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) as Project | undefined;

  if (!project) {
    return {};
  }

  return genMeta({
    title: project.metaTitle,
    description: project.metaDescription,
    canonicalUrl: `https://www.sanjaydevnaniprojects.com/projects/${project.slug}`,
    ogImage: project.featuredImage,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) as Project | undefined;

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: project.name,
    description: project.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: project.location,
      addressLocality: project.area,
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    numberOfRooms: project.bhkTypes.join(", "),
    amenityFeature: project.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative h-96 bg-gray-200">
          {/* Placeholder for hero image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <span>Hero Image: {project.featuredImage}</span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-[#1D427A] text-white px-4 py-2 rounded-full text-sm font-medium capitalize">
              {project.status}
            </span>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold text-[#1D427A] mb-4 tracking-tight">
                  {project.name}
                </h1>
                <p className="text-xl text-slate-600 mb-6">{project.location}</p>
                <p className="text-2xl font-semibold text-[#1D427A] mb-8 tracking-tight">{project.tagline}</p>

                <div className="prose max-w-none mb-8">
                  <p className="text-lg text-slate-700">{project.description}</p>
                </div>

                {/* Configuration */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#1D427A] mb-4 tracking-tight">Configuration</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.bhkTypes.map((type) => (
                      <span
                        key={type}
                        className="bg-slate-100 text-[#1D427A] px-4 py-2 rounded-md text-lg font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#1D427A] mb-4 tracking-tight">Project Highlights</h2>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#1D427A] mr-2">✓</span>
                        <span className="text-slate-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#1D427A] mb-4 tracking-tight">Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-[#1D427A] mr-2">•</span>
                        <span className="text-slate-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold text-[#1D427A] mb-4 tracking-tight">Project Information</h3>

                  <div className="space-y-4 mb-6">
                    {project.reraNumber && (
                      <div>
                        <p className="text-sm text-slate-600">RERA Number</p>
                        <p className="font-semibold text-[#1D427A]">{project.reraNumber}</p>
                      </div>
                    )}

                    {project.possession && (
                      <div>
                        <p className="text-sm text-slate-600">Possession</p>
                        <p className="font-semibold text-[#1D427A]">{project.possession}</p>
                      </div>
                    )}

                    {project.price && (
                      <div>
                        <p className="text-sm text-slate-600">Price</p>
                        <p className="font-semibold text-[#1D427A]">{project.price}</p>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-[#1D427A] text-white text-center px-6 py-3 rounded-md hover:bg-[#A6192E] transition-colors font-semibold mb-3"
                  >
                    Enquire Now
                  </Link>

                  <Link
                    href="/projects"
                    className="block w-full bg-white text-[#1D427A] text-center px-6 py-3 rounded-md border-2 border-[#1D427A] hover:bg-[#A6192E] hover:text-white hover:border-[#A6192E] transition-colors font-semibold"
                  >
                    View All Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
