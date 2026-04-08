import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";
import HomeCarousel from "@/components/HomeCarousel";
import ScrollToTop from "@/components/ScrollToTop";
import { cinzel } from "@/lib/fonts";

export const metadata: Metadata = genMeta({
  title: "Premium Flats in Chembur & Bandra Mumbai | RERA Approved Projects",
  description:
    "Buy premium 1, 2, 3 & 4 BHK flats in Chembur & Bandra, Mumbai. Pardis offers RERA approved apartments in Sindhi Society, Collector Colony & Bandra West. Trusted builders in Mumbai.",
  keywords: [
    "flats in chembur",
    "flats in bandra",
    "apartments in chembur",
    "2 bhk in chembur",
    "3 bhk in chembur",
    "luxury flats mumbai",
    "rera approved flats chembur",
    "pardis builder mumbai",
    "pardis projects chembur",
    "residential projects chembur mumbai",
    "new flats in chembur 2025",
  ],
  canonicalUrl: "https://pardis.in",
});

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero_video.MP4" type="video/mp4" />
          <img
            src="/hero-fallback.jpg"
            alt="Luxury residential apartment interior by Pardis"
            className="w-full h-full object-cover"
          />
        </video>

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${cinzel.className}`}
            >
              Luxury,{" "}
              <span className="bg-gradient-to-r from-[#1D427A] via-[#2E5C9A] to-[#A6192E] bg-clip-text text-transparent">
                Perfected...
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience modern living with world-class amenities and trusted
              construction quality.
            </p>
          </div>
        </div>
      </section>

      {/* Completed Projects Carousel */}
      <HomeCarousel />

      {/* Location Highlights */}
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D427A] mt-6 leading-tight">
              Why Choose <br className="md:hidden" />
              <span
                className={`bg-gradient-to-r from-[#1D427A] via-[#2E5C9A] to-[#A6192E] bg-clip-text text-transparent ${cinzel.className}`}
              >
                P A R D I S
              </span>
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
