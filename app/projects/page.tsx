"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import ScrollToTop from "@/components/ScrollToTop";

type FilterStatus = "all" | "proposed" | "upcoming" | "ongoing" | "completed";

// Status badge component
function StatusBadge({ status }: { status: Project["status"] }) {
  const statusConfig = {
    proposed: {
      label: "In Talks",
      bgColor: "bg-amber-500",
    },
    upcoming: {
      label: "DA Signed",
      bgColor: "bg-purple-500",
    },
    ongoing: {
      label: "Under Construction",
      bgColor: "bg-blue-500",
    },
    completed: {
      label: "Sold Out",
      bgColor: "bg-gray-600",
    },
  };

  const config = statusConfig[status];

  return (
    <span className={`${config.bgColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
      {config.label}
    </span>
  );
}

// Project card component - vertical card design
function ProjectCard({ project }: { project: Project }) {
  // Proposed projects have no images/elevations
  if (project.status === "proposed") {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-amber-200 flex flex-col h-full">
        {/* No Image - Placeholder with Icon */}
        <div className="relative h-56 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-amber-700 font-medium text-sm">In Discussion</p>
            <p className="text-amber-600 text-xs">Elevation Coming Soon</p>
          </div>
          <div className="absolute top-3 left-3">
            <StatusBadge status={project.status} />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow bg-white">
          <Link href={`/projects/${project.slug}`} className="group">
            <h3 className="text-xl font-bold text-[#1D427A] mb-1 group-hover:text-[#A6192E] transition-colors">
              {project.name}
            </h3>
          </Link>

          <p className="text-slate-500 text-sm mb-2 flex items-center">
            <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.area}
          </p>

          <p className="text-amber-700 font-medium text-sm mb-2">{project.tagline}</p>

          {/* Description */}
          <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">{project.description}</p>

          {/* BHK Types */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.bhkTypes.map((type) => (
              <span
                key={type}
                className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium"
              >
                {type}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-auto">
            <Link
              href={`/projects/${project.slug}`}
              className="block w-full text-center bg-amber-500 text-white py-2.5 rounded-lg font-medium hover:bg-amber-600 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Regular card for other statuses
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-56">
        <Image
          src={project.featuredImage}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <Link href={`/projects/${project.slug}`} className="group">
          <h3 className="text-xl font-bold text-[#1D427A] mb-1 group-hover:text-[#A6192E] transition-colors">
            {project.name}
          </h3>
        </Link>

        <p className="text-slate-500 text-sm mb-2 flex items-center">
          <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.area}
        </p>

        <p className="text-[#1D427A] font-medium text-sm mb-2">{project.tagline}</p>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">{project.description}</p>

        {/* BHK Types */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.bhkTypes.map((type) => (
            <span
              key={type}
              className="bg-slate-100 text-[#1D427A] px-2 py-1 rounded text-xs font-medium"
            >
              {type}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto space-y-2">
          <Link
            href={`/projects/${project.slug}`}
            className="block w-full text-center bg-[#1D427A] text-white py-2.5 rounded-lg font-medium hover:bg-[#A6192E] transition-colors"
          >
            View Details
          </Link>

          {/* MahaRERA Button for Ongoing Projects */}
          {project.status === "ongoing" && project.mahareraPdf && (
            <a
              href={project.mahareraPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-blue-50 text-blue-700 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors border border-blue-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              MahaRERA Details
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("ongoing");

  const typedProjects = projects as Project[];
  const proposedProjects = typedProjects.filter(p => p.status === "proposed");
  const upcomingProjects = typedProjects.filter(p => p.status === "upcoming");
  const ongoingProjects = typedProjects.filter(p => p.status === "ongoing");
  const completedProjects = typedProjects.filter(p => p.status === "completed");

  // Get filtered projects based on active filter
  const getFilteredProjects = () => {
    switch (activeFilter) {
      case "proposed":
        return proposedProjects;
      case "upcoming":
        return upcomingProjects;
      case "ongoing":
        return ongoingProjects;
      case "completed":
        return completedProjects;
      case "all":
      default:
        return typedProjects;
    }
  };

  const filteredProjects = getFilteredProjects();

  // Filter configuration
  const filters = [
    { key: "ongoing" as FilterStatus, label: "Ongoing", count: ongoingProjects.length },
    { key: "proposed" as FilterStatus, label: "Proposed", count: proposedProjects.length },
    { key: "upcoming" as FilterStatus, label: "Upcoming", count: upcomingProjects.length },
    { key: "completed" as FilterStatus, label: "Completed", count: completedProjects.length },
    { key: "all" as FilterStatus, label: "All Projects", count: typedProjects.length },
  ];

  // Get section description based on filter
  const getSectionInfo = () => {
    switch (activeFilter) {
      case "proposed":
        return {
          title: "Proposed Projects",
          description: "Projects currently in discussion with landowners. Development Agreement under negotiation.",
        };
      case "upcoming":
        return {
          title: "Upcoming Projects",
          description: "Development Agreement signed. Awaiting site vacation for construction to commence.",
        };
      case "ongoing":
        return {
          title: "Ongoing Projects",
          description: "RERA registered projects currently under construction. Book your dream home today.",
        };
      case "completed":
        return {
          title: "Completed Projects",
          description: "Successfully delivered projects. All units sold out.",
        };
      case "all":
      default:
        return {
          title: "All Projects",
          description: "Browse our complete portfolio of residential projects.",
        };
    }
  };

  const sectionInfo = getSectionInfo();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header with Filter */}
      <section className="bg-gradient-to-br from-[#1D427A] to-[#2d5a9e] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Our Projects
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            Explore our portfolio of premium residential projects across Chembur.
          </p>

          {/* Filter Buttons in Hero */}
          <div className="mb-8">
            <p className="text-blue-200 text-sm mb-3 font-medium">Filter by category:</p>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeFilter === filter.key
                      ? "bg-white text-[#1D427A] shadow-lg"
                      : "bg-white/15 text-white hover:bg-white/25 backdrop-blur"
                  }`}
                >
                  {filter.label}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeFilter === filter.key
                        ? "bg-[#1D427A]/10 text-[#1D427A]"
                        : "bg-white/20"
                    }`}
                  >
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          

          {/* Projects Grid - 3 cards per row */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-xl font-semibold text-slate-600 mb-2">No Projects Found</h3>
              <p className="text-slate-500">There are no projects in this category at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
