"use client";

// ✅ NEW FILE: components/HomeCarousel.tsx
// This contains all the carousel logic that was previously in app/page.tsx.
// We had to move it here because app/page.tsx needs to be a Server Component
// in order to export SEO metadata. Client components cannot export metadata in Next.js.

import { useState, useEffect, useCallback, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";

export default function HomeCarousel() {
  const typedProjects = projects as Project[];
  const featuredProjects = typedProjects.filter(
    (p) => p.status === "completed"
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const AUTOPLAY_DELAY = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex =
        prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1;

      if (prevIndex === featuredProjects.length - 1 && nextIndex === 0) {
        setIsTransitioning(false);
        setTimeout(() => setIsTransitioning(true), 50);
      } else {
        setIsTransitioning(true);
      }

      return nextIndex;
    });
  }, [featuredProjects.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex =
        prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1;

      if (prevIndex === 0 && nextIndex === featuredProjects.length - 1) {
        setIsTransitioning(false);
        setTimeout(() => setIsTransitioning(true), 50);
      } else {
        setIsTransitioning(true);
      }

      return nextIndex;
    });
  };

  const goToSlide = (slideIndex: number) => {
    const distance = Math.abs(slideIndex - currentIndex);
    const isWrapping =
      (currentIndex === 0 && slideIndex === featuredProjects.length - 1) ||
      (currentIndex === featuredProjects.length - 1 && slideIndex === 0);

    if (distance > 1 || isWrapping) {
      setIsTransitioning(false);
      setCurrentIndex(slideIndex);
      setTimeout(() => setIsTransitioning(true), 50);
    } else {
      setIsTransitioning(true);
      setCurrentIndex(slideIndex);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);

    return () => resetTimeout();
  }, [currentIndex, nextSlide]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D427A] mb-4 tracking-tight">
            Completed Projects
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-4 right-4 z-20 bg-[#1D427A] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {currentIndex + 1} / {featuredProjects.length}
          </div>

          <div className="overflow-hidden rounded-xl shadow-2xl">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform ease-out duration-700"
                  : ""
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Nav */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#1D427A] hover:bg-[#A6192E] text-white rounded-full p-4 shadow-xl transition-all hover:scale-110 z-10 hidden md:block"
            aria-label="Previous Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-[#1D427A] hover:bg-[#A6192E] text-white rounded-full p-4 shadow-xl transition-all hover:scale-110 z-10 hidden md:block"
            aria-label="Next Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Mobile Nav */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#1D427A]/90 hover:bg-[#A6192E] text-white rounded-full p-3 shadow-lg transition-all z-10 md:hidden"
            aria-label="Previous Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#1D427A]/90 hover:bg-[#A6192E] text-white rounded-full p-3 shadow-lg transition-all z-10 md:hidden"
            aria-label="Next Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-12 h-3 bg-[#1D427A]"
                    : "w-3 h-3 bg-slate-300 hover:bg-[#A6192E]"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
