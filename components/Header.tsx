import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
      <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
        Home
      </Link>
      <Link href="/projects" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
        Projects
      </Link>
      <Link href="/connect" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
        Connect
      </Link>
      <Link href="/flats-in-chembur" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
        Chembur
      </Link>
      <Link href="/flats-in-bandra" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
        Bandra
      </Link>
      <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
        Blog
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
        About
      </Link>
      <Link
        href="/contact"
        className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 font-medium transition-colors"
      >
        Contact Us
      </Link>
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button
        type="button"
        className="text-gray-700 hover:text-gray-900"
        aria-label="Open menu"
      >
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
      </button>
    </div>
  </div>
</nav>

    </header>
  );
}
