"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pardisLogo from "@/public/pardis_logo.jpg";
import ScrollToTop from "@/components/ScrollToTop";

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
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Header with Logo */}
          <div className="text-center mb-8">
            <Image
              src={pardisLogo}
              alt="Pardis Group"
              width={200}
              height={100}
              className="mx-auto mb-6 object-contain"
            />
            <h2 className="text-3xl font-bold text-[#1D427A] mb-2 tracking-tight">
              Stay Connected with Pardis Group
            </h2>
            <p className="text-slate-600 text-lg">
              Help us serve you better by sharing a few details
            </p>
          </div>

          {/* Basic Information Section */}
          <div className="border-t-2 border-slate-100 pt-12">
            <h3 className="text-xl font-bold text-[#1D427A] mb-8 tracking-tight">
              Basic Information
            </h3>

            {/* 1. Full Name - Required */}
            <div className="group mb-8">
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
            <div className="group mb-8">
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
            <div className="group mb-8">
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

            {/* 4. Location - Optional */}
            <div className="group mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-2">
                Current City{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <input
                type="text"
                placeholder="e.g. Mumbai, Dubai, etc."
                className="w-full border-b-2 border-slate-200 focus:border-[#1D427A] outline-none py-3 text-2xl text-slate-900 placeholder:text-slate-200 transition-all bg-transparent"
              />
            </div>
          </div>

          {/* Relationship with Pardis Section */}
          <div className="border-t-2 border-slate-100 pt-12">
            <h3 className="text-xl font-bold text-[#1D427A] mb-8 tracking-tight">
              Your Connection with Us
            </h3>

            {/* 5. Association - Improved UI */}
            <div className="group mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                How are you associated with Pardis?{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="relative">
                <select className="w-full border-2 border-slate-200 focus:border-[#1D427A] outline-none py-4 px-5 text-lg text-slate-900 bg-white cursor-pointer rounded-lg transition-all appearance-none font-medium hover:border-[#1D427A]">
                  <option value="">Select your association...</option>
                  <option value="existing-client">
                    Existing Client (Purchased from us)
                  </option>
                  <option value="enquired-earlier">Enquired Earlier</option>
                  <option value="investor">Investor</option>
                  <option value="channel-partner">
                    Channel Partner / Broker
                  </option>
                  <option value="vendor">Vendor / Consultant</option>
                  <option value="referral">Referred by Client</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#1D427A]">
                  <svg
                    className="fill-current h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 6. When did you last interact - Radio */}
            <div className="mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                When did you last interact with us?{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="space-y-3">
                {[
                  { value: "within-12-months", label: "Within last 12 months" },
                  { value: "1-3-years", label: "1–3 years ago" },
                  {
                    value: "more-than-3-years",
                    label: "More than 3 years ago",
                  },
                  { value: "not-sure", label: "Not sure / First time" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="last-interaction"
                      value={option.value}
                      className="w-5 h-5 accent-[#1D427A] cursor-pointer"
                    />
                    <span className="text-slate-700 text-lg font-medium group-hover:text-[#1D427A] transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 7. Have you purchased from us before? */}
            <div className="mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                Have you purchased a property from us before?{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="space-y-3">
                {[
                  {
                    value: "yes",
                    label: "Yes, I have purchased from Pardis",
                  },
                  { value: "no", label: "No, but interested" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="previous-purchase"
                      value={option.value}
                      className="w-5 h-5 accent-[#1D427A] cursor-pointer"
                    />
                    <span className="text-slate-700 text-lg font-medium group-hover:text-[#1D427A] transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Current Interest Section */}
          <div className="border-t-2 border-slate-100 pt-12">
            <h3 className="text-xl font-bold text-[#1D427A] mb-8 tracking-tight">
              Your Current Interest
            </h3>

            {/* 8. Current Interest Level */}
            <div className="group mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                What best describes your current interest?{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="relative">
                <select className="w-full border-2 border-slate-200 focus:border-[#1D427A] outline-none py-4 px-5 text-lg text-slate-900 bg-white cursor-pointer rounded-lg transition-all appearance-none font-medium hover:border-[#1D427A]">
                  <option value="">Select your interest level...</option>
                  <option value="actively-looking">
                    Actively looking to buy
                  </option>
                  <option value="exploring">Exploring options</option>
                  <option value="long-term">
                    Long-term investment planning
                  </option>
                  <option value="no-plans">No immediate plans</option>
                  <option value="staying-informed">
                    Just staying informed
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#1D427A]">
                  <svg
                    className="fill-current h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 9. Property Purpose */}
            <div className="mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                Looking for self-use or investment?{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="space-y-3">
                {[
                  {
                    value: "self-use",
                    label: "Self-use (Primary/Secondary residence)",
                  },
                  { value: "investment", label: "Investment / Rental income" },
                  { value: "both", label: "Both" },
                  { value: "not-decided", label: "Not decided yet" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="property-purpose"
                      value={option.value}
                      className="w-5 h-5 accent-[#1D427A] cursor-pointer"
                    />
                    <span className="text-slate-700 text-lg font-medium group-hover:text-[#1D427A] transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 10. Property Type Preference */}
            <div className="mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                Preferred property configuration{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "1 BHK",
                  "2 BHK",
                  "3 BHK",
                  "4 BHK",
                  "Penthouse",
                  "Open to all",
                ].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 cursor-pointer group p-3 border-2 border-slate-200 rounded-lg hover:border-[#1D427A] hover:bg-slate-50 transition-all"
                  >
                    <input
                      type="checkbox"
                      name="property-type"
                      value={type}
                      className="w-5 h-5 accent-[#1D427A] rounded"
                    />
                    <span className="text-slate-700 text-base font-medium group-hover:text-[#1D427A] transition-colors">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 11. Location Preference */}
            <div className="group mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                Preferred location{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="relative">
                <select className="w-full border-2 border-slate-200 focus:border-[#1D427A] outline-none py-4 px-5 text-lg text-slate-900 bg-white cursor-pointer rounded-lg transition-all appearance-none font-medium hover:border-[#1D427A]">
                  <option value="">Select preferred location...</option>
                  <option value="chembur">Chembur</option>
                  <option value="bandra">Bandra</option>
                  <option value="both">Open to both</option>
                  <option value="other">Other Mumbai locations</option>
                  <option value="flexible">Flexible / Not specific</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#1D427A]">
                  <svg
                    className="fill-current h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 12. Budget Range */}
            <div className="group mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                Budget range (INR){" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="relative">
                <select className="w-full border-2 border-slate-200 focus:border-[#1D427A] outline-none py-4 px-5 text-lg text-slate-900 bg-white cursor-pointer rounded-lg transition-all appearance-none font-medium hover:border-[#1D427A]">
                  <option value="">Select your budget range...</option>
                  <option value="below-50L">Below ₹50 Lakhs</option>
                  <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                  <option value="1Cr-2Cr">₹1 Crore - ₹2 Crore</option>
                  <option value="2Cr-3Cr">₹2 Crore - ₹3 Crore</option>
                  <option value="3Cr-5Cr">₹3 Crore - ₹5 Crore</option>
                  <option value="above-5Cr">Above ₹5 Crore</option>
                  <option value="flexible">Flexible based on property</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#1D427A]">
                  <svg
                    className="fill-current h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 13. Timeline */}
            <div className="group mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                When are you planning to buy?{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="relative">
                <select className="w-full border-2 border-slate-200 focus:border-[#1D427A] outline-none py-4 px-5 text-lg text-slate-900 bg-white cursor-pointer rounded-lg transition-all appearance-none font-medium hover:border-[#1D427A]">
                  <option value="">Select your timeline...</option>
                  <option value="immediate">
                    Immediately (within 1 month)
                  </option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="1-2-years">1-2 years</option>
                  <option value="no-timeline">No specific timeline</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#1D427A]">
                  <svg
                    className="fill-current h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Communication Preferences Section */}
          <div className="border-t-2 border-slate-100 pt-12">
            <h3 className="text-xl font-bold text-[#1D427A] mb-8 tracking-tight">
              Communication Preferences
            </h3>

            {/* 14. Preferred Contact Method */}
            <div className="mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                How would you prefer us to contact you?{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { value: "whatsapp", label: "WhatsApp" },
                  { value: "call", label: "Phone Call" },
                  { value: "sms", label: "SMS" },
                  { value: "email", label: "Email" },
                ].map((method) => (
                  <label
                    key={method.value}
                    className="flex items-center gap-3 cursor-pointer group p-4 border-2 border-slate-200 rounded-lg hover:border-[#1D427A] hover:bg-slate-50 transition-all"
                  >
                    <input
                      type="checkbox"
                      name="contact-method"
                      value={method.value}
                      className="w-5 h-5 accent-[#1D427A] rounded"
                    />
                    <span className="text-slate-700 text-lg font-medium group-hover:text-[#1D427A] transition-colors">
                      {method.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 15. Update Preferences */}
            <div className="mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                I want updates about:{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "New project launches",
                  "Construction progress updates",
                  "Exclusive preview events",
                  "Special offers & discounts",
                  "Investment opportunities",
                  "Market insights & trends",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer group p-3 border-2 border-slate-200 rounded-lg hover:border-[#1D427A] hover:bg-slate-50 transition-all"
                  >
                    <input
                      type="checkbox"
                      name="updates"
                      value={item}
                      className="w-5 h-5 accent-[#1D427A] rounded"
                    />
                    <span className="text-slate-700 text-base font-medium group-hover:text-[#1D427A] transition-colors">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="border-t-2 border-slate-100 pt-12">
            <h3 className="text-xl font-bold text-[#1D427A] mb-8 tracking-tight">
              Help Us Serve You Better
            </h3>

            {/* 16. Referral Willingness */}
            <div className="mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                Would you recommend us to friends & family?{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <div className="space-y-3">
                {[
                  { value: "yes", label: "Yes, I would definitely recommend" },
                  { value: "maybe", label: "Maybe, depends on the project" },
                  {
                    value: "already-have",
                    label: "I've already referred someone!",
                  },
                  { value: "no", label: "Not at this time" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="referral-willingness"
                      value={option.value}
                      className="w-5 h-5 accent-[#1D427A] cursor-pointer"
                    />
                    <span className="text-slate-700 text-lg font-medium group-hover:text-[#1D427A] transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 17. Specific Requirements */}
            <div className="group mb-8">
              <label className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-4">
                Any specific requirements or questions?{" "}
                <span className="text-slate-400 font-normal lowercase">
                  (optional)
                </span>
              </label>
              <textarea
                rows={4}
                placeholder="e.g., Need parking for 2 cars, Looking for corner flat, Pet-friendly society, etc."
                className="w-full border-2 border-slate-200 focus:border-[#1D427A] outline-none py-4 px-5 text-lg text-slate-900 placeholder:text-slate-300 transition-all bg-white rounded-lg resize-none"
              ></textarea>
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
                I agree to share these details for updates related to
                projects/enquiry. <span className="text-[#A6192E]">*</span>
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
      </div>

      <ScrollToTop />
    </div>
  );
};

export default PardisForm;
