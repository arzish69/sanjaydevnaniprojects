"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Using Formspree as the form backend - replace with your Formspree endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D427A] mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Get in touch with us to learn more about our projects or schedule a site visit.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1D427A] mb-6 tracking-tight">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-2">
                    Name <span className="text-[#A6192E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1D427A] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-2">
                    Phone Number <span className="text-[#A6192E]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1D427A] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-2">
                    Email <span className="text-slate-300 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1D427A] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-2">
                    Interested Project <span className="text-[#A6192E]">*</span>
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1D427A] focus:border-transparent"
                  >
                    <option value="">Select a project</option>
                    <option value="Pardis Prosperity">Pardis Prosperity</option>
                    <option value="Kailasa">Kailasa</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-[#1D427A] mb-2">
                    Message <span className="text-slate-300 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1D427A] focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-[#1D427A] text-white px-6 py-3 rounded-md hover:bg-[#A6192E] transition-colors font-semibold disabled:bg-slate-400"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>

                {formStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                    Thank you for your inquiry! We'll get back to you soon.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#1D427A] mb-6 tracking-tight">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#1D427A] mb-2 tracking-tight">Office Address</h3>
                  <p className="text-slate-700">
                    Sindhi Society, Chembur<br />
                    Mumbai, Maharashtra 400071<br />
                    India
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1D427A] mb-2 tracking-tight">Phone</h3>
                  <p className="text-slate-700">+91-XXXXXXXXXX</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1D427A] mb-2 tracking-tight">Email</h3>
                  <p className="text-slate-700">info@sanjaydevnaniprojects.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1D427A] mb-2 tracking-tight">Office Hours</h3>
                  <p className="text-slate-700">
                    Monday - Saturday: 10:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Map Placeholder - Chembur Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
