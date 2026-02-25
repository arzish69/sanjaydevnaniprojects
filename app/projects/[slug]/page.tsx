import { Metadata } from "next";
import Image from "next/image";
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
    canonicalUrl: `https://pardis.in/projects/${project.slug}`,
    ogImage: project.featuredImage,
  });
}

// Status badge component
function StatusBadge({ status, isReraRegistered }: { status: Project["status"]; isReraRegistered?: boolean }) {
  const statusConfig = {
    proposed: {
      label: "In Talks",
      sublabel: "DA Under Negotiation",
      bgColor: "bg-amber-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    upcoming: {
      label: "DA Signed",
      sublabel: "Awaiting Site Vacation",
      bgColor: "bg-purple-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    ongoing: {
      label: "Under Construction",
      sublabel: isReraRegistered ? "RERA Registered" : "RERA Pending",
      bgColor: "bg-blue-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    completed: {
      label: "Sold Out",
      sublabel: "Successfully Delivered",
      bgColor: "bg-gray-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  };

  const config = statusConfig[status];

  return (
    <div className={`${config.bgColor} text-white px-6 py-4 rounded-xl inline-flex items-center gap-3`}>
      {config.icon}
      <div>
        <div className="font-bold text-lg">{config.label}</div>
        <div className="text-sm opacity-90">{config.sublabel}</div>
      </div>
    </div>
  );
}

// Proposed Project Layout - DA not signed, in talks
function ProposedProjectContent({ project }: { project: Project }) {
  return (
    <div className="space-y-8">
      {/* Status Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
        <div className="flex items-start gap-4">
          <div className="bg-amber-500 text-white p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-800 mb-2">Project In Talks</h3>
            <p className="text-amber-700">
              This project is currently in the discussion phase with landowners. The Development Agreement (DA) is under negotiation.
              Stay tuned for updates as we progress towards finalizing this exciting development.
            </p>
          </div>
        </div>
      </div>

      {/* Project Vision */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">Project Vision</h2>
        <p className="text-slate-700 text-lg leading-relaxed">{project.description}</p>
      </div>

      {/* Planned Configuration */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">Planned Configuration</h2>
        <div className="flex flex-wrap gap-3">
          {project.bhkTypes.map((type) => (
            <span
              key={type}
              className="bg-amber-100 text-amber-800 px-5 py-2 rounded-lg text-lg font-medium"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Project Highlights */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">Project Highlights</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-amber-500 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-slate-700">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Register Interest CTA */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">Interested in This Project?</h3>
        <p className="text-amber-100 mb-6">Register your interest and be the first to know when this project launches.</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
        >
          Register Interest
        </Link>
      </div>
    </div>
  );
}

// Upcoming Project Layout - DA signed, not vacated
function UpcomingProjectContent({ project }: { project: Project }) {
  return (
    <div className="space-y-8">
      {/* Status Banner */}
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500 text-white p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Development Agreement Signed</h3>
            <p className="text-purple-700">
              The Development Agreement for this project has been successfully signed. We are currently awaiting site vacation
              before construction can commence. RERA registration will be completed once construction begins.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-6">Project Timeline</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="text-green-600 font-semibold">Completed</div>
            <div className="text-slate-800 font-bold mt-1">DA Signed</div>
          </div>
          <div className="flex-1 bg-purple-50 border border-purple-300 rounded-lg p-4 text-center">
            <div className="text-purple-600 font-semibold">In Progress</div>
            <div className="text-slate-800 font-bold mt-1">Site Vacation</div>
          </div>
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-gray-500 font-semibold">Pending</div>
            <div className="text-slate-800 font-bold mt-1">RERA Registration</div>
          </div>
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-gray-500 font-semibold">Pending</div>
            <div className="text-slate-800 font-bold mt-1">Construction</div>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">About This Project</h2>
        <p className="text-slate-700 text-lg leading-relaxed">{project.description}</p>
      </div>

      {/* Planned Configuration */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">Planned Configuration</h2>
        <div className="flex flex-wrap gap-3">
          {project.bhkTypes.map((type) => (
            <span
              key={type}
              className="bg-purple-100 text-purple-800 px-5 py-2 rounded-lg text-lg font-medium"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Project Highlights */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">Project Highlights</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-purple-500 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-slate-700">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pre-Launch CTA */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">Pre-Launch Registration Open</h3>
        <p className="text-purple-100 mb-6">Be among the first to book when this project launches. Priority access for early registrations.</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
        >
          Register for Pre-Launch
        </Link>
      </div>
    </div>
  );
}

// Ongoing Project Layout - Show RERA QR code and ID if registered
function OngoingProjectContent({ project }: { project: Project }) {
  return (
    <div className="space-y-8">
      {/* RERA Information - Only show if RERA registered */}
      {project.isReraRegistered ? (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* RERA QR Code */}
            {project.reraQrCode && (
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={project.reraQrCode}
                  alt={`RERA QR Code for ${project.name}`}
                  width={150}
                  height={150}
                  className="rounded"
                />
                <p className="text-center text-xs text-slate-500 mt-2">Scan to Verify</p>
              </div>
            )}

            {/* RERA Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="bg-blue-500 text-white p-2 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800">RERA Registered Project</h3>
              </div>

              {project.reraNumber && (
                <div className="mb-4">
                  <p className="text-sm text-blue-600 font-medium">RERA Registration Number</p>
                  <p className="text-2xl font-bold text-[#1D427A] font-mono">{project.reraNumber}</p>
                </div>
              )}

              <p className="text-blue-700">
                This project is registered under MahaRERA. Scan the QR code or visit the MahaRERA website to verify project details.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 text-white p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">RERA Registration Pending</h3>
              <p className="text-amber-700">
                This project is currently under construction. RERA registration is in progress and will be updated once approved.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Project Status */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-6">Project Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 rounded-lg p-6 text-center">
            <div className="text-blue-500 mb-2">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <p className="text-sm text-slate-600">Status</p>
            <p className="font-bold text-[#1D427A]">Under Construction</p>
          </div>

          {project.possession && (
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-blue-500 mb-2">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-slate-600">Expected Possession</p>
              <p className="font-bold text-[#1D427A]">{project.possession}</p>
            </div>
          )}

          {project.price && (
            <div className="bg-slate-50 rounded-lg p-6 text-center">
              <div className="text-blue-500 mb-2">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-slate-600">Price Range</p>
              <p className="font-bold text-[#1D427A] text-sm">{project.price}</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Description */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">About This Project</h2>
        <p className="text-slate-700 text-lg leading-relaxed">{project.description}</p>
      </div>

      {/* Configuration */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">Available Configuration</h2>
        <div className="flex flex-wrap gap-3">
          {project.bhkTypes.map((type) => (
            <span
              key={type}
              className="bg-blue-100 text-blue-800 px-5 py-2 rounded-lg text-lg font-medium"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Project Highlights */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">Project Highlights</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-slate-700">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Amenities */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
              <span className="text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-slate-700">{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Enquire CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">Book Your Dream Home</h3>
        <p className="text-blue-100 mb-6">Limited units available. Contact us today for pricing and booking details.</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}

// Completed Project Layout - Sold Out
function CompletedProjectContent({ project }: { project: Project }) {
  return (
    <div className="space-y-8">
      {/* Sold Out Banner */}
      <div className="bg-gray-100 border-l-4 border-gray-500 p-6 rounded-r-lg">
        <div className="flex items-start gap-4">
          <div className="bg-gray-600 text-white p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Project Completed - Sold Out</h3>
            <p className="text-gray-600">
              This project has been successfully completed and all units have been sold. Thank you to all our
              valued customers who made this project a success. Explore our ongoing and upcoming projects for similar opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">About This Project</h2>
        <p className="text-slate-700 text-lg leading-relaxed">{project.description}</p>
      </div>

      {/* Configuration */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">Configuration</h2>
        <div className="flex flex-wrap gap-3">
          {project.bhkTypes.map((type) => (
            <span
              key={type}
              className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg text-lg font-medium"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Project Highlights */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">Project Highlights</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-gray-500 mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-slate-700">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Amenities */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#1D427A] mb-4">Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
              <span className="text-gray-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-slate-700">{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* View Other Projects CTA */}
      <div className="bg-gradient-to-r from-[#1D427A] to-[#2d5a9e] rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">Looking for Your Dream Home?</h3>
        <p className="text-blue-100 mb-6">Explore our ongoing and upcoming projects for similar premium residential options.</p>
        <Link
          href="/projects"
          className="inline-block bg-white text-[#1D427A] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
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

      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section - Different for Proposed (no image) vs Others (with image) */}
        {project.status === "proposed" ? (
          // Proposed Project Hero - No Image
          <section className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Icon Placeholder */}
                <div className="bg-white/20 backdrop-blur rounded-2xl p-8 flex-shrink-0">
                  <div className="bg-white text-amber-600 w-24 h-24 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-center text-sm mt-3">In Discussion</p>
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <StatusBadge status={project.status} isReraRegistered={project.isReraRegistered} />
                  <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-2 tracking-tight">
                    {project.name}
                  </h1>
                  <p className="text-xl text-white/90 mb-2">{project.tagline}</p>
                  <p className="text-white/80 flex items-center justify-center md:justify-start">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </p>
                  <p className="text-amber-100 text-sm mt-4 max-w-xl">
                    Elevation and project visuals will be available once the Development Agreement is finalized.
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          // Other Projects Hero - With Image
          <section className="relative h-[50vh] md:h-[60vh]">
            <Image
              src={project.featuredImage}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Hero Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-7xl mx-auto">
                <StatusBadge status={project.status} isReraRegistered={project.isReraRegistered} />
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-2 tracking-tight">
                  {project.name}
                </h1>
                <p className="text-xl text-white/90 mb-2">{project.tagline}</p>
                <p className="text-white/80 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Main Content - Full Width */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Render different content based on status */}
            {project.status === "proposed" && <ProposedProjectContent project={project} />}
            {project.status === "upcoming" && <UpcomingProjectContent project={project} />}
            {project.status === "ongoing" && <OngoingProjectContent project={project} />}
            {project.status === "completed" && <CompletedProjectContent project={project} />}

            {/* Back to Projects */}
            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center text-[#1D427A] hover:text-[#A6192E] font-semibold transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
