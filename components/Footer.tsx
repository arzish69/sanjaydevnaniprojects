import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sanjay Devnani Projects</h3>
            <p className="text-gray-400 text-sm">
              Bringing affordable luxury to Mumbai's real estate. Trusted builders in Chembur and Bandra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/flats-in-chembur" className="text-gray-400 hover:text-white transition-colors">
                  Flats in Chembur
                </Link>
              </li>
              <li>
                <Link href="/2-bhk-in-chembur" className="text-gray-400 hover:text-white transition-colors">
                  2 BHK in Chembur
                </Link>
              </li>
              <li>
                <Link href="/flats-in-bandra" className="text-gray-400 hover:text-white transition-colors">
                  Flats in Bandra
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Sindhi Society, Chembur</li>
              <li>Mumbai, Maharashtra 400071</li>
              <li>Phone: +91-XXXXXXXXXX</li>
              <li>Email: info@sanjaydevnaniprojects.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sanjay Devnani Projects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
