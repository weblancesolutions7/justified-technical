"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import companyData from "@/content/company.json";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will call you back within 2 hours.");
    setFormData({ name: "", email: "", phone: "", projectDetails: "" });
  };

  return (
    <div className="min-h-screen bg-[#111111] pt-40 pb-24 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact us background.jpg.jpeg"
          alt="Contact Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">

        {/* Bordered Container wrapping both sections */}
        <div className="bg-[#161616]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left Content */}
            <div>
              <h4 className="text-[#9FA0CD] text-xs md:text-sm font-bold uppercase tracking-widest mb-6">Contact Us</h4>

              <div className="space-y-10">
                {/* Sales Department */}
                <div className="flex items-start gap-6">
                  <div className="text-[#9FA0CD] shrink-0 mt-1">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-white text-base md:text-lg font-black uppercase tracking-wider mb-1 font-sans">Sales Department</h3>
                    <p className="text-white/70 text-base leading-relaxed">{companyData.contact.sales}</p>
                  </div>
                </div>

                {/* Accounts Department */}
                <div className="flex items-start gap-6">
                  <div className="text-[#9FA0CD] shrink-0 mt-1">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-white text-base md:text-lg font-black uppercase tracking-wider mb-1 font-sans">Accounts Department</h3>
                    <p className="text-white/70 text-base leading-relaxed">{companyData.contact.accounts}</p>
                  </div>
                </div>

                {/* Landline */}
                <div className="flex items-start gap-6">
                  <div className="text-[#9FA0CD] shrink-0 mt-1">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-white text-base md:text-lg font-black uppercase tracking-wider mb-1 font-sans">Telephone </h3>
                    <p className="text-white/70 text-base leading-relaxed">{companyData.contact.tel}</p>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-6">
                  <div className="text-[#9FA0CD] shrink-0 mt-1">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-white text-base md:text-lg font-black uppercase tracking-wider mb-1 font-sans">Send Us An E-mail</h3>
                    <p className="text-white/70 text-base leading-relaxed">
                      <a href={`mailto:${companyData.contact.email}`} className="text-white/70 hover:text-[#9FA0CD] transition-colors">{companyData.contact.email}</a>
                    </p>
                    {companyData.contact.rentalEmail !== companyData.contact.email && (
                      <p className="text-white/70 text-base leading-relaxed mt-1">
                        <a href={`mailto:${companyData.contact.rentalEmail}`} className="text-white/70 hover:text-[#9FA0CD] transition-colors">{companyData.contact.rentalEmail}</a>
                      </p>
                    )}
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-6">
                  <div className="text-[#9FA0CD] shrink-0 mt-1">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-base md:text-lg font-black uppercase tracking-wider mb-1 font-sans">Connect With Us</h3>
                    <a href={companyData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#9FA0CD] hover:underline text-base font-bold">LinkedIn</a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-6">
                  <div className="text-[#9FA0CD] shrink-0 mt-1">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-white text-base md:text-lg font-black uppercase tracking-wider mb-1 font-sans">Head-Office Addresses</h3>
                    <p className="text-white/70 text-base leading-relaxed">PO BOX: {companyData.contact.address.poBox}</p>
                    <p className="text-white/70 text-base leading-relaxed">{companyData.contact.address.city}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content / Form */}
            <div className="w-full">
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tighter font-sans">Get a Call Back</h3>
                <p className="text-white/50 text-sm md:text-base font-medium">Fill out the form below and our team will call you back within 2 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Name *</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent border border-[#3B3C89]/40 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#3B3C89] transition-all text-base"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-white text-xs font-black uppercase tracking-widest mb-2 opacity-50">Email Address *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent border border-[#3B3C89]/40 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#3B3C89] transition-all text-base"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-white text-xs font-black uppercase tracking-widest mb-2 opacity-50">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+971 00 000 0000"
                    required
                    className="w-full bg-transparent border border-[#3B3C89]/40 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#3B3C89] transition-all text-base"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-white text-xs font-black uppercase tracking-widest mb-2 opacity-50">Project Details *</label>
                  <textarea
                    placeholder="Tell us about your project requirements..."
                    required
                    rows={6}
                    className="w-full bg-transparent border border-[#3B3C89]/40 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#3B3C89] transition-all resize-none text-base"
                    value={formData.projectDetails}
                    onChange={e => setFormData({ ...formData, projectDetails: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3B3C89] hover:bg-[#5455B3] text-white py-4 rounded-xl font-black text-sm transition-all mt-2 uppercase tracking-widest"
                >
                  Submit Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
