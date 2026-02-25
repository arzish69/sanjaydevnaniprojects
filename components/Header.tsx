"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const locations = [
  { name: "Bandra", href: "/flats-in-bandra" },
  { name: "Khar", href: "/flats-in-khar" },
  { name: "Chembur", href: "/flats-in-chembur" },
  { name: "Shiv Shrushti", href: "/flats-in-kurla" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the transition after 50px of scrolling
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLocationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // On non-home pages, always show the scrolled (white) header style
  const showScrolledStyle = !isHomePage || scrolled;

  return (
    <header
      className={`fixed top-0 w-full z-50 py-4 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-in-out ${
        showScrolledStyle
          ? "bg-white shadow-md border-gray-100" // Scrolled state: White BG
          : "bg-transparent border-transparent" // Top state: Transparent
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Removed brightness filters to keep original colors */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Pardis"
              width={140}
              height={50}
              className="w-[110px] md:w-[150px] h-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {[
              { name: "Home", href: "/" },
              { name: "Projects", href: "/projects" },
              { name: "Connect", href: "/connect" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm lg:text-base font-bold tracking-tight transition-colors duration-300 ${
                  showScrolledStyle
                    ? "text-[#1D427A] hover:text-[#A6192E]"
                    : "text-white hover:text-[#1D427A]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Locations Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                className={`text-sm lg:text-base font-bold tracking-tight transition-colors duration-300 flex items-center gap-1 ${
                  showScrolledStyle
                    ? "text-[#1D427A] hover:text-[#A6192E]"
                    : "text-white hover:text-[#1D427A]"
                }`}
              >
                Locations
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 pt-2 w-48 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {locations.map((loc) => (
                      <Link
                        key={loc.name}
                        href={loc.href}
                        className="block px-4 py-2 text-[#1D427A] hover:bg-gray-50 hover:text-[#A6192E] font-medium transition-colors"
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {[
              { name: "Blog", href: "/blog" },
              { name: "About", href: "/about" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm lg:text-base font-bold tracking-tight transition-colors duration-300 ${
                  showScrolledStyle
                    ? "text-[#1D427A] hover:text-[#A6192E]"
                    : "text-white hover:text-[#1D427A]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className={`px-6 py-2 rounded-md font-bold border-2 transition-all duration-300 shadow-sm ${
                showScrolledStyle
                  ? "bg-[#1D427A] text-white border-[#1D427A] hover:bg-[#A6192E] hover:border-[#A6192E]" // Blue button on scroll
                  : "border-white text-white hover:bg-white hover:text-[#1D427A]" // Outline at top
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${
                showScrolledStyle ? "text-[#1D427A]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl md:hidden">
            <div className="px-6 py-8 space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "Connect", href: "/connect" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl text-[#1D427A] font-bold hover:text-[#A6192E] transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Locations Dropdown */}
              <div>
                <button
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className="flex items-center justify-between w-full text-xl text-[#1D427A] font-bold hover:text-[#A6192E] transition-colors"
                >
                  Locations
                  <svg
                    className={`w-5 h-5 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileLocationsOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {locations.map((loc) => (
                      <Link
                        key={loc.name}
                        href={loc.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileLocationsOpen(false);
                        }}
                        className="block text-lg text-[#1D427A] font-medium hover:text-[#A6192E] transition-colors"
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {[
                { name: "Blog", href: "/blog" },
                { name: "About", href: "/about" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl text-[#1D427A] font-bold hover:text-[#A6192E] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-4 bg-[#1D427A] text-white font-bold text-center rounded-lg mt-6 hover:bg-[#A6192E]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
