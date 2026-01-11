"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-20 md:h-24">
    {/* Logo */}
    <Link href="/" className="flex items-center group transition-all">
      <Image
        src="/logo.png" // or /logo.svg
        alt="Sanjay Devnani Projects"
        width={0}
        height={0}
        sizes="(max-width: 768px) 120px, 160px"
        className="w-[100px] md:w-[140px] h-auto transition-transform group-hover:scale-105"
        priority
      />
    </Link>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center space-x-8">
      <Link href="/" className="text-[#1D427A] font-medium hover:text-[#A6192E] transition-colors">
        Home
      </Link>
      <Link href="/projects" className="text-[#1D427A] font-medium hover:text-[#A6192E] transition-colors">
        Projects
      </Link>
      <Link href="/connect" className="text-[#1D427A] font-medium hover:text-[#A6192E] transition-colors">
        Connect
      </Link>
      <Link href="/flats-in-chembur" className="text-[#1D427A] font-medium hover:text-[#A6192E] transition-colors">
        Chembur
      </Link>
      <Link href="/flats-in-bandra" className="text-[#1D427A] font-medium hover:text-[#A6192E] transition-colors">
        Bandra
      </Link>
      <Link href="/blog" className="text-[#1D427A] font-medium hover:text-[#A6192E] transition-colors">
        Blog
      </Link>
      <Link href="/about" className="text-[#1D427A] font-medium hover:text-[#A6192E] transition-colors">
        About
      </Link>
      <Link
        href="/contact"
        className="bg-[#1D427A] text-white px-6 py-2 rounded-md hover:bg-[#A6192E] font-medium transition-colors"
      >
        Contact Us
      </Link>
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="text-[#1D427A]"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden border-t border-gray-200">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="block px-3 py-2 rounded-md text-[#1D427A] font-medium hover:bg-gray-50 hover:text-[#A6192E] transition-colors"
        >
          Home
        </Link>
        <Link
          href="/projects"
          onClick={() => setMobileMenuOpen(false)}
          className="block px-3 py-2 rounded-md text-[#1D427A] font-medium hover:bg-gray-50 hover:text-[#A6192E] transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/connect"
          onClick={() => setMobileMenuOpen(false)}
          className="block px-3 py-2 rounded-md text-[#1D427A] font-medium hover:bg-gray-50 hover:text-[#A6192E] transition-colors"
        >
          Connect
        </Link>
        <Link
          href="/flats-in-chembur"
          onClick={() => setMobileMenuOpen(false)}
          className="block px-3 py-2 rounded-md text-[#1D427A] font-medium hover:bg-gray-50 hover:text-[#A6192E] transition-colors"
        >
          Chembur
        </Link>
        <Link
          href="/flats-in-bandra"
          onClick={() => setMobileMenuOpen(false)}
          className="block px-3 py-2 rounded-md text-[#1D427A] font-medium hover:bg-gray-50 hover:text-[#A6192E] transition-colors"
        >
          Bandra
        </Link>
        <Link
          href="/blog"
          onClick={() => setMobileMenuOpen(false)}
          className="block px-3 py-2 rounded-md text-[#1D427A] font-medium hover:bg-gray-50 hover:text-[#A6192E] transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/about"
          onClick={() => setMobileMenuOpen(false)}
          className="block px-3 py-2 rounded-md text-[#1D427A] font-medium hover:bg-gray-50 hover:text-[#A6192E] transition-colors"
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="block px-3 py-2 rounded-md bg-[#1D427A] text-white hover:bg-[#A6192E] font-medium transition-colors text-center"
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
