"use client"; // Required for using hooks like useState and useEffect

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import ScrollToTop from "@/components/ScrollToTop";
import { cinzel } from "@/lib/fonts";

export default function Home() {
  const typedProjects = projects as Project[];
  // Filter for completed projects for the carousel
  const featuredProjects = typedProjects.filter(
    (p) => p.status === "completed"
  );

  // --- Carousel State and Logic ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const AUTOPLAY_DELAY = 5000; // 5 seconds

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex =
        prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1;

      // If looping back to start, disable transition for instant jump
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

      // If looping back to end, disable transition for instant jump
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

    // If jumping more than 1 slide (and not just wrapping around), disable transition for instant jump
    if (distance > 1 || isWrapping) {
      setIsTransitioning(false);
      setCurrentIndex(slideIndex);

      // Re-enable transition after a brief delay
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    } else {
      setIsTransitioning(true);
      setCurrentIndex(slideIndex);
    }
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
      {/* Hero Section */}
<section className="relative h-screen flex items-center overflow-hidden">
  {/* The Video Element */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/hero.MP4" type="video/mp4" />
    {/* Fallback image if video fails to load */}
    <img src="/hero-fallback.jpg" alt="Luxury Interior" className="w-full h-full object-cover" />
  </video>

  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="text-center max-w-3xl mx-auto">
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${cinzel.className}`}>
        Luxury, <span className="bg-gradient-to-r from-[#1D427A] via-[#2E5C9A] to-[#A6192E] bg-clip-text text-transparent">Perfected.</span>
      </h1>
      <p className="text-xl text-gray-200 mb-8">
        Experience modern living with world-class amenities and trusted
        construction quality.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/projects"
          className="bg-[#1D427A] text-white px-8 py-3 rounded-md hover:bg-[#A6192E] transition-colors font-medium text-lg"
        >
          View All Projects
        </Link>
        <Link
          href="/contact"
          className="bg-white text-[#1D427A] px-8 py-3 rounded-md border-2 border-[#1D427A] hover:bg-[#1D427A] hover:text-white hover:border-[#1D427A] transition-colors font-medium text-lg"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D427A] mb-4 tracking-tight">
              Completed Projects
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Card Counter */}
            <div className="absolute top-4 right-4 z-20 bg-[#1D427A] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {currentIndex + 1} / {featuredProjects.length}
            </div>

            {/* Viewport: Hides the overflowing slides */}
            <div className="overflow-hidden rounded-xl shadow-2xl">
              {/* Slider Track: Moves horizontally */}
              <div
                className={`flex ${
                  isTransitioning
                    ? "transition-transform ease-out duration-700"
                    : ""
                }`}
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
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#1D427A] hover:bg-[#A6192E] text-white rounded-full p-4 shadow-xl transition-all hover:scale-110 z-10 hidden md:block"
              aria-label="Previous Project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-[#1D427A] hover:bg-[#A6192E] text-white rounded-full p-4 shadow-xl transition-all hover:scale-110 z-10 hidden md:block"
              aria-label="Next Project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            {/* Mobile Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#1D427A]/90 hover:bg-[#A6192E] text-white rounded-full p-3 shadow-lg transition-all z-10 md:hidden"
              aria-label="Previous Project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#1D427A]/90 hover:bg-[#A6192E] text-white rounded-full p-3 shadow-lg transition-all z-10 md:hidden"
              aria-label="Next Project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
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

      {/* Location Highlights (No changes) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D427A] mb-4 tracking-tight">
              Prime Locations in Mumbai
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Strategic locations with excellent connectivity and lifestyle
              amenities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Chembur
              </h3>
              <p className="text-slate-600 mb-6">
                Well-connected locality with excellent infrastructure, close to
                Eastern Freeway, Monorail, and major business districts.
              </p>
              <Link
                href="/flats-in-chembur"
                className="text-[#1D427A] font-semibold hover:underline"
              >
                Explore Chembur Projects →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#1D427A] mb-4 tracking-tight">
                Bandra
              </h3>
              <p className="text-slate-600 mb-6">
                Mumbai's most prestigious suburb offering lifestyle,
                connectivity, and premium living near BKC and Western Express
                Highway.
              </p>
              <Link
                href="/flats-in-bandra"
                className="text-[#1D427A] font-semibold hover:underline"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D427A] mb-4 tracking-tight">
              Why Choose Sanjay Devnani Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[#1D427A]">✓</span>
              </div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-2 tracking-tight">
                RERA Approved
              </h3>
              <p className="text-slate-600">
                All projects are RERA registered ensuring transparency and
                timely delivery
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[#1D427A]">★</span>
              </div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-2 tracking-tight">
                Quality Construction
              </h3>
              <p className="text-slate-600">
                Premium materials and expert craftsmanship in every project
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[#1D427A]">◆</span>
              </div>
              <h3 className="text-xl font-bold text-[#1D427A] mb-2 tracking-tight">
                Affordable Luxury
              </h3>
              <p className="text-slate-600">
                Premium amenities and modern design at competitive prices
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
}
