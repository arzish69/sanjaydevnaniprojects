import Link from "next/link";

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-[#1D427A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">
              Pardis
            </h3>
            <p className="text-slate-200 text-sm">
              Bringing affordable luxury to Mumbai's real estate. Trusted
              builders in Chembur and Bandra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">
              Locations
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/flats-in-bandra"
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  Flats in Bandra
                </Link>
              </li>
              <li>
                <Link
                  href="/flats-in-chembur"
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  Flats in Chembur
                </Link>
              </li>
              <li>
                <Link
                  href="/flats-in-khar"
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  Flats in Khar
                </Link>
              </li>
              <li>
                <Link
                  href="/flats-in-kurla"
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  Flats in Kurla
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-tight">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Sindhi Society, Chembur</li>
              <li>Mumbai, Maharashtra 400071</li>
              <li>
                <a
                  href="tel:+919833555680"
                  className="hover:text-white transition-colors duration-200"
                >
                  Phone: +91 9833555680
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales.pardis@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  Email: sales.pardis@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2d5595] mt-8 pt-8 text-center text-sm text-slate-200">
          <p>
            &copy; {new Date().getFullYear()} Pardis. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
