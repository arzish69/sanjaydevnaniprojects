"use client"; // Required for using hooks like useState and useEffect

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";

export default function Home() {
  const typedProjects = projects as Project[];
  // Filter for completed projects for the carousel
  const featuredProjects = typedProjects.filter(p => p.status === "completed");

  // --- Carousel State and Logic ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const AUTOPLAY_DELAY = 5000; // 5 seconds

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
    );
  }, [featuredProjects.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  
  // Effect for auto-playing the carousel
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);

    // Cleanup timeout on component unmount
    return () => {
      resetTimeout();
    };
  }, [currentIndex, nextSlide]);


  return (
    <>
      {/* Hero Section (No changes) */}
      <section className="relative py-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Affordable Luxury in Mumbai's Prime Locations
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Premium residential projects in Chembur and Bandra. Experience modern living with world-class amenities and trusted construction quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium text-lg"
              >
                View All Projects
              </Link>
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-md border-2 border-gray-900 hover:bg-gray-50 transition-colors font-medium text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODIFIED: Completed Projects Carousel --- */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Completed Projects
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our portfolio of successfully delivered homes
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Card Counter */}
            <div className="absolute top-4 right-4 z-20 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {currentIndex + 1} / {featuredProjects.length}
            </div>

            {/* Viewport: Hides the overflowing slides */}
            <div className="overflow-hidden rounded-xl shadow-2xl">
              {/* Slider Track: Moves horizontally */}
              <div
                className="flex transition-transform ease-out duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {/* Each slide takes up 100% of the viewport width */}
                {featuredProjects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Improved Design */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-800 text-white rounded-full p-4 shadow-xl transition-all hover:scale-110 z-10 hidden md:block"
              aria-label="Previous Project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-800 text-white rounded-full p-4 shadow-xl transition-all hover:scale-110 z-10 hidden md:block"
              aria-label="Next Project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Mobile Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900/90 hover:bg-gray-800 text-white rounded-full p-3 shadow-lg transition-all z-10 md:hidden"
              aria-label="Previous Project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900/90 hover:bg-gray-800 text-white rounded-full p-3 shadow-lg transition-all z-10 md:hidden"
              aria-label="Next Project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            
            {/* Dot Indicators - Improved Design */}
            <div className="flex justify-center mt-8 gap-2">
                {featuredProjects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                            currentIndex === index 
                              ? 'w-12 h-3 bg-gray-900' 
                              : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights (No changes) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prime Locations in Mumbai
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic locations with excellent connectivity and lifestyle amenities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Chembur</h3>
              <p className="text-gray-600 mb-6">
                Well-connected locality with excellent infrastructure, close to Eastern Freeway, Monorail, and major business districts.
              </p>
              <Link
                href="/flats-in-chembur"
                className="text-gray-900 font-medium hover:underline"
              >
                Explore Chembur Projects →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bandra</h3>
              <p className="text-gray-600 mb-6">
                Mumbai's most prestigious suburb offering lifestyle, connectivity, and premium living near BKC and Western Express Highway.
              </p>
              <Link
                href="/flats-in-bandra"
                className="text-gray-900 font-medium hover:underline"
              >
                Explore Bandra Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (No changes) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sanjay Devnani Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">RERA Approved</h3>
              <p className="text-gray-600">
                All projects are RERA registered ensuring transparency and timely delivery
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Construction</h3>
              <p className="text-gray-600">
                Premium materials and expert craftsmanship in every project
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">◆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Luxury</h3>
              <p className="text-gray-600">
                Premium amenities and modern design at competitive prices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (No changes) */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with us today to schedule a site visit or learn more about our projects
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}