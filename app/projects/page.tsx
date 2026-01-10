import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import { generateMetadata as genMeta } from "@/lib/seo";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = genMeta({
  title: "All Projects - Residential Apartments in Chembur & Bandra",
  description: "Browse all residential projects by Sanjay Devnani Projects. Ongoing, upcoming, and completed luxury apartments in Chembur and Bandra, Mumbai.",
  keywords: [
    "residential projects chembur",
    "apartments chembur",
    "flats in chembur",
    "luxury apartments bandra",
    "ongoing projects mumbai",
    "rera approved projects",
  ],
  canonicalUrl: "https://www.sanjaydevnaniprojects.com/projects",
});

export default function ProjectsPage() {
  const typedProjects = projects as Project[];
  const ongoingProjects = typedProjects.filter(p => p.status === "ongoing");
  const upcomingProjects = typedProjects.filter(p => p.status === "upcoming");
  const completedProjects = typedProjects.filter(p => p.status === "completed");

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D427A] mb-4 tracking-tight">
            Our Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Explore our portfolio of premium residential projects across Chembur and Bandra. Each project is designed with modern amenities and quality construction.
          </p>
        </div>
      </section>

      {/* Ongoing Projects */}
      {ongoingProjects.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">Ongoing Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Projects */}
      {upcomingProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">Upcoming Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Completed Projects */}
      {completedProjects.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1D427A] mb-8 tracking-tight">Completed Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ScrollToTop />
    </div>
  );
}
