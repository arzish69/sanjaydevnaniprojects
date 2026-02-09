// src/components/ProjectCard.js

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Check if View Details button should be hidden
  const hideViewDetails = project.status === "proposed" || project.slug === "pardis-71";

  // Proposed projects have special styling
  if (project.status === "proposed") {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 md:flex md:min-h-[28rem] border border-amber-200">
        {/* Placeholder Image for Proposed Projects */}
        <div className="relative h-96 md:h-auto md:w-2/5 flex-shrink-0 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-amber-700 font-medium text-sm">In Discussion</p>
            <p className="text-amber-600 text-xs">Elevation Coming Soon</p>
          </div>
          <div className="absolute top-3 left-3">
            <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              In Talks
            </span>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 flex flex-col flex-grow bg-white">
          <div>
            <h3 className="text-2xl font-bold text-[#1D427A] mb-2 tracking-tight">{project.name}</h3>
            <p className="text-slate-600 text-sm mb-3">{project.location}</p>
            <p className="text-amber-700 font-medium mb-4 line-clamp-3">{project.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {project.bhkTypes.map((type) => (
                <span
                  key={type}
                  className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md text-sm font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular card for other statuses
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 md:flex md:min-h-[28rem]">
      {/* Image Section */}
      <div className="relative h-96 md:h-auto md:w-2/5 flex-shrink-0">
        <Image
          src={project.featuredImage}
          alt={`Featured image for ${project.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>

      {/* Details Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div>
          <h3 className="text-2xl font-bold text-[#1D427A] mb-2 tracking-tight">{project.name}</h3>
          <p className="text-slate-600 text-sm mb-3">{project.location}</p>
          <p className="text-slate-700 mb-4 line-clamp-3">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.bhkTypes.map((type) => (
              <span
                key={type}
                className="bg-slate-100 text-[#1D427A] px-3 py-1 rounded-md text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {!hideViewDetails && (
          <div className="mt-auto pt-4">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-block bg-[#1D427A] text-white px-6 py-2 rounded-md hover:bg-[#A6192E] transition-colors font-semibold text-base"
            >
              View Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}