"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  CheckCircle2,
  Send,
  ShieldCheck,
  Award,
  Truck,
  TrendingUp,
  Percent,
  Check,
  MessageCircle,
  Recycle,
  Building2
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function EcoDistributorsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    phone: "",
    email: "",
    cityState: "",
    gstNumber: "",
    businessType: "Organic / Zero-Waste Retailer",
    targetMonthlyVolumeKg: "500 - 1000 kg",
    preferredProducts: "Rajkamal Lemon Dishwash Gel",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappDealerText = encodeURIComponent(
    `Hi Charotar Soap Eco, I am applying for Eco Wholesale / Refill Station Partnership. Business Name: ${formData.businessName || "Eco Dealer"}, Location: ${formData.cityState || "Gujarat"}, Phone: ${formData.phone}. Target Volume: ${formData.targetMonthlyVolumeKg}. Please contact me.`
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#FAF6F0] via-[#F5EFE6] to-[#EFEBE4] text-[#2C3531]">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#042834] via-[#084C61] to-[#1B5E20] text-white py-16 sm:py-24 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 animate-slide-left">
          <div className="inline-flex items-center gap-2 bg-white/20 text-[#FFD1B3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-4 h-4 text-[#FFD1B3]" /> Eco Wholesale & Refill Station Network
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Become an Eco Refill Partner or Wholesale Dealer
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal">
            Supply your organic retail store, zero-waste shop, or hotel chain with India&apos;s leading phosphate-free botanical detergent brand. High margins and returnable refill drums.
          </p>
        </div>
      </section>

      {/* Benefits Glass Grid */}
      <section className="py-12 bg-white/60 backdrop-blur-md border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="eco-glass-panel p-6 rounded-3xl border border-white/80 space-y-2">
              <Percent className="w-8 h-8 text-[#2E7D32]" />
              <h3 className="font-serif font-bold text-[#084C61] text-lg">High Retail Margins</h3>
              <p className="text-xs text-[#5C6B64] font-medium">Generous profit margins for organic stores & eco-distributors.</p>
            </div>

            <div className="eco-glass-panel p-6 rounded-3xl border border-white/80 space-y-2">
              <Recycle className="w-8 h-8 text-[#2E7D32]" />
              <h3 className="font-serif font-bold text-[#084C61] text-lg">Returnable Refill Drums</h3>
              <p className="text-xs text-[#5C6B64] font-medium">Closed-loop 50kg & 200kg drum program eliminating plastic waste.</p>
            </div>

            <div className="eco-glass-panel p-6 rounded-3xl border border-white/80 space-y-2">
              <Truck className="w-8 h-8 text-[#2E7D32]" />
              <h3 className="font-serif font-bold text-[#084C61] text-lg">Direct Plant Logistics</h3>
              <p className="text-xs text-[#5C6B64] font-medium">On-time shipment dispatch directly from Anand, Gujarat plant.</p>
            </div>

            <div className="eco-glass-panel p-6 rounded-3xl border border-white/80 space-y-2">
              <Award className="w-8 h-8 text-[#2E7D32]" />
              <h3 className="font-serif font-bold text-[#084C61] text-lg">50+ Year Trust Brand</h3>
              <p className="text-xs text-[#5C6B64] font-medium">High customer loyalty for Rajkamal soap bars and lemon gels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Glass Commercial Application Form (The B2B "Checkout") */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-6 animate-slide-left">
            <span className="text-[#E65100] font-bold text-xs uppercase tracking-wider">Wholesale Application</span>
            <h2 className="font-serif text-3xl font-bold text-[#084C61]">
              Apply For Eco Dealership or Bulk Wholesale Supply
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed font-medium">
              Submit your company details below to receive our botanical product catalog, wholesale proforma terms, and sample box dispatch.
            </p>

            <div className="eco-glass-panel p-6 rounded-3xl border border-white/80 space-y-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-[#084C61]">
                <ShieldCheck className="w-5 h-5 text-[#2E7D32]" /> Minimum Order Requirements (MOQ)
              </div>
              <p className="text-[#5C6B64] leading-relaxed font-medium">
                Wholesale dealership orders start at 50 cases for bottles/bars or 3 drums (50kg each) for liquid refill bases.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 font-bold">
              <strong>Need Fast Response?</strong> Connect directly with our Eco Wholesale Manager via WhatsApp for instant price sheets.
            </div>

            <a
              href={`https://wa.me/919825000000?text=${whatsappDealerText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-full font-bold text-sm shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Instant WhatsApp Eco Dealership Desk
            </a>
          </div>

          {/* Right Dealer Application Glass Form */}
          <div className="lg:col-span-7 eco-glass-card p-8 sm:p-10 rounded-3xl border border-white/90 shadow-2xl animate-slide-right">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-[#2E7D32] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#084C61]">Eco Application Received!</h3>
                <p className="text-xs sm:text-sm text-[#5C6B64] max-w-md mx-auto font-medium">
                  Thank you, {formData.contactPerson || "Partner"}. Our Eco Wholesale Executive will review your store details and call you back within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn-eco-primary px-6 py-3 rounded-full font-bold text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-serif text-xl font-bold text-[#084C61] mb-6 flex items-center gap-2">
                  <Sprout className="w-5 h-5 text-[#E65100]" /> Official Eco Wholesale Application
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">Business / Firm Name *</label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Green Earth Organic Store"
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">Contact Person Name *</label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98250 00000"
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="eco@store.com"
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">City & State *</label>
                      <input
                        type="text"
                        name="cityState"
                        required
                        value={formData.cityState}
                        onChange={handleChange}
                        placeholder="e.g. Ahmedabad, Gujarat"
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">Business Type</label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-bold"
                      >
                        <option value="Organic / Zero-Waste Retailer">Organic / Zero-Waste Store</option>
                        <option value="FMCG Wholesaler">FMCG Wholesaler / Distributor</option>
                        <option value="Hotel & Resort Chain">Hotel & Resort Chain</option>
                        <option value="Eco Brand Owner">Private Label Eco Brand</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">Target Monthly Volume</label>
                      <select
                        name="targetMonthlyVolumeKg"
                        value={formData.targetMonthlyVolumeKg}
                        onChange={handleChange}
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-bold"
                      >
                        <option value="250 - 500 kg">250 - 500 kg / Litres</option>
                        <option value="500 - 1000 kg">500 - 1,000 kg / Litres</option>
                        <option value="1000 - 5000 kg">1,000 - 5,000 kg / Litres</option>
                        <option value="5000+ kg">5,000+ kg Bulk Transport</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">Primary Product Interest</label>
                      <select
                        name="preferredProducts"
                        value={formData.preferredProducts}
                        onChange={handleChange}
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-bold"
                      >
                        <option value="Rajkamal Lemon Dishwash Gel">Rajkamal Lemon Dishwash Gel</option>
                        <option value="Rajkamal Botanical Bar">Botanical Coconut Soap Bars</option>
                        <option value="Zero-Waste Refill Drums">Zero-Waste 50kg Refill Drums</option>
                        <option value="All Eco Line">Complete Eco Range</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#2C3531] mb-1">Additional Requirements / Notes</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention custom packaging preferences, town exclusivity, or sample box requests..."
                      className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-semibold"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-eco-primary py-4 rounded-full font-bold text-sm shadow-lg mt-2 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Submit Eco Wholesale Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
