"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pardisLogo from "@/public/pardis_logo.jpg";

const PardisForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
        <div className="max-w-md animate-in fade-in zoom-in duration-500">
          <Image
            src={pardisLogo}
            alt="Pardis Group"
            width={320}
            height={160}
            className="mx-auto mb-10 object-contain"
          />
          <h2 className="text-4xl font-bold text-[#1D427A] mb-4">Thank You!</h2>
          <p className="text-lg text-slate-600">
            Your details have been successfully received. We look forward to
            connecting with you.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-[#1D427A] hover:text-[#A6192E] font-semibold underline underline-offset-4"
          >
            Fill the form again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Large Brand Logo & Sub-brand Name */}
        <header className="mb-14">

          <Link href="/" className="inline-block group mb-4">
            <h1 className="text-2xl font-bold tracking-tight text-[#1D427A] group-hover:text-[#A6192E] transition-colors">
              Sanjay Devnani{" "}
              <span className="font-light uppercase tracking-widest text-sm ml-1 border-l border-slate-300 pl-2">
                Projects
              </span>
            </h1>
          </Link>

          <p className="text-slate-500 text-xl">
            Stay connected with our latest updates
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* 1. Full Name - Required */}
          <div className="group">
            <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-2">
              Full Name <span className="text-[#A6192E]">*</span>
            </label>
            <input
              type="text"
              required
              minLength={3}
              placeholder="Your name"
              className="w-full border-b-2 border-slate-200 focus:border-[#1D427A] outline-none py-3 text-2xl text-slate-900 placeholder:text-slate-200 transition-all bg-transparent"
            />
          </div>

          {/* 2. Mobile Number - Required */}
          <div className="group">
            <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-2">
              Mobile Number <span className="text-[#A6192E]">*</span>
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              placeholder="9876543210"
              className="w-full border-b-2 border-slate-200 focus:border-[#1D427A] outline-none py-3 text-2xl text-slate-900 placeholder:text-slate-200 transition-all bg-transparent"
            />
          </div>

          {/* 3. Email Address - Optional */}
          <div className="group">
            <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-2">
              Email Address{" "}
              <span className="text-slate-300 font-normal lowercase">
                (optional)
              </span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full border-b-2 border-slate-200 focus:border-[#1D427A] outline-none py-3 text-2xl text-slate-900 placeholder:text-slate-200 transition-all bg-transparent"
            />
          </div>

          {/* 4. Location - Required */}
          <div className="group">
            <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-2">
              Location / City <span className="text-[#A6192E]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Mumbai, Dubai, etc."
              className="w-full border-b-2 border-slate-200 focus:border-[#1D427A] outline-none py-3 text-2xl text-slate-900 placeholder:text-slate-200 transition-all bg-transparent"
            />
          </div>

          {/* 5. Association */}
          <div className="group">
            <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-2">
              How are you associated with Pardis?
            </label>
            <select className="w-full border-b-2 border-slate-200 focus:border-[#1D427A] outline-none py-3 text-xl text-slate-900 bg-transparent cursor-pointer appearance-none">
              <option value="">Select an option</option>
              <option>Client</option>
              <option>Investor</option>
              <option>Channel Partner / Broker</option>
              <option>Vendor / Consultant</option>
              <option>Other</option>
            </select>
          </div>

          {/* 6. Update Preferences */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-6">
              I want updates about:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                "New project announcements",
                "Construction updates",
                "Events / launches",
                "General updates",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#1D427A] rounded border-slate-300"
                  />
                  <span className="text-slate-700 text-lg group-hover:text-[#1D427A] transition-colors font-medium">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 7. Consent - Required */}
          <div className="pt-8">
            <label className="flex items-start gap-4 text-slate-600 cursor-pointer group">
              <input
                type="checkbox"
                required
                className="mt-1 w-6 h-6 accent-[#1D427A] flex-shrink-0"
              />
              <span className="text-sm leading-relaxed group-hover:text-slate-900 transition-colors">
                I agree to receive updates and communication from **Pardis
                Group** via WhatsApp, email, or phone.{" "}
                <span className="text-[#A6192E]">*</span>
              </span>
            </label>
          </div>

          {/* Brand Themed Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full md:w-auto px-16 bg-[#1D427A] hover:bg-[#A6192E] text-white py-5 rounded-full font-bold text-xl transition-all transform hover:shadow-xl active:scale-95"
            >
              Submit Details
            </button>
          </div>
        </form>

        <footer className="mt-24 pb-10 text-slate-300 text-xs text-center border-t border-slate-50 pt-8 tracking-widest uppercase">
          © {new Date().getFullYear()} Pardis Group
        </footer>
      </div>
    </div>
  );
};

export default PardisForm;
