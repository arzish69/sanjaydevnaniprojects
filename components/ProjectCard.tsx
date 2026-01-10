// src/components/ProjectCard.js

import Link from "next/link";
import Image from "next/image"; // 1. Import the Image component
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 md:flex md:min-h-[28rem]">
      {/* --- MODIFIED IMAGE SECTION --- */}
      <div className="relative h-96 md:h-auto md:w-2/5 flex-shrink-0">
        {/* 2. Replace the placeholder div with the optimized Image component */}
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

        <div className="mt-auto pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-block bg-[#1D427A] text-white px-6 py-2 rounded-md hover:bg-[#A6192E] transition-colors font-semibold text-base"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}