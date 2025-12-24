import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 bg-gray-200">
        {/* Placeholder for image - will be replaced with actual images */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <span className="text-sm">Image: {project.featuredImage}</span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{project.location}</p>
        <p className="text-gray-700 mb-4 line-clamp-2">{project.tagline}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.bhkTypes.map((type) => (
            <span
              key={type}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
            >
              {type}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-block bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
