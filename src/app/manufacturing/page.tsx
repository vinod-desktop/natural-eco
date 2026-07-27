"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Factory, ShieldCheck, CheckCircle2, Award, Zap, Sprout, Recycle, ArrowRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EnquiryModal from "../../components/EnquiryModal";

export default function EcoManufacturingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#FAF6F0] via-[#F5EFE6] to-[#EFEBE4] text-[#2C3531]">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#042834] via-[#084C61] to-[#1B5E20] text-white py-16 sm:py-24 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 animate-slide-left">
          <div className="inline-flex items-center gap-2 bg-white/20 text-[#FFD1B3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Factory className="w-4 h-4 text-[#FFD1B3]" /> Plant Capacity: 100,000+ Metric Tons / Year
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Sustainability, Quality & Plant Infrastructure
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal">
            Discover our zero-discharge manufacturing plant in Anand, Gujarat. Solar-assisted kettle heating, closed-loop water treatment, and 100% phosphate-free botanical QA standards.
          </p>
        </div>
      </section>

      {/* Certifications Showcase Glass Strip */}
      <section className="py-10 bg-white/60 backdrop-blur-md border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-[#E65100] font-bold text-xs uppercase tracking-wider">Certifications & Guarantees</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="eco-glass-panel p-5 rounded-2xl border border-white/80 space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#2E7D32] mx-auto" />
              <div className="font-serif font-bold text-sm text-[#084C61]">ISO 9001:2015</div>
              <div className="text-[11px] text-[#5C6B64] font-medium">Certified Quality Standard</div>
            </div>

            <div className="eco-glass-panel p-5 rounded-2xl border border-white/80 space-y-2">
              <Sprout className="w-8 h-8 text-[#2E7D32] mx-auto" />
              <div className="font-serif font-bold text-sm text-[#084C61]">Phosphate-Free</div>
              <div className="text-[11px] text-[#5C6B64] font-medium">100% Eco Water Safe</div>
            </div>

            <div className="eco-glass-panel p-5 rounded-2xl border border-white/80 space-y-2">
              <Recycle className="w-8 h-8 text-[#2E7D32] mx-auto" />
              <div className="font-serif font-bold text-sm text-[#084C61]">Zero Liquid Discharge</div>
              <div className="text-[11px] text-[#5C6B64] font-medium">Closed-Loop Recycling</div>
            </div>

            <div className="eco-glass-panel p-5 rounded-2xl border border-white/80 space-y-2">
              <Award className="w-8 h-8 text-[#2E7D32] mx-auto" />
              <div className="font-serif font-bold text-sm text-[#084C61]">GMP Certified</div>
              <div className="text-[11px] text-[#5C6B64] font-medium">Good Manufacturing Practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Pillars with Glass Cards */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Production Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 animate-slide-left">
            <span className="text-[#E65100] font-bold text-xs uppercase tracking-wider">Green Infrastructure</span>
            <h2 className="font-serif text-3xl font-bold text-[#084C61]">
              Vacuum Plodding & Solar-Assisted Boilers
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed font-normal">
              Located in GIDC Anand, Gujarat, our facility operates high-pressure vacuum plodders that extrude dense vegetable soap bars without structural air pockets. Our heating systems utilize solar thermal panels, significantly reducing fossil fuel emissions.
            </p>
            <div className="space-y-2 text-xs sm:text-sm font-semibold text-[#2C3531]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Vegetable Oil Saponification Kettles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Cold-Pressed Essential Oil Inoculation Units</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Returnable Drum Cleaning & Sterilization Facility</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 animate-slide-right">
            <div className="eco-glass-card p-6 rounded-3xl border border-white/90 shadow-2xl text-center">
              <div className="eco-img-container rounded-2xl p-4">
                <Image
                  src="/assets/bulk_cleaner.jpeg"
                  alt="Eco Plant Infrastructure"
                  width={500}
                  height={350}
                  className="object-cover rounded-xl max-h-[340px] w-full shadow-md"
                />
              </div>
              <div className="mt-4 text-xs font-bold text-[#084C61]">
                Zero-Waste Refill Drum Storage Area
              </div>
            </div>
          </div>
        </div>

        {/* Quality Control */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 animate-slide-left">
            <div className="eco-glass-card p-6 rounded-3xl border border-white/90 shadow-2xl text-center">
              <div className="eco-img-container rounded-2xl p-4">
                <Image
                  src="/assets/soap_bar.jpeg"
                  alt="Botanical Soap QC"
                  width={500}
                  height={350}
                  className="object-cover rounded-xl max-h-[340px] w-full shadow-md"
                />
              </div>
              <div className="mt-4 text-xs font-bold text-[#084C61]">
                Naked Soap Crates Ready For Quality Inspection
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2 animate-slide-right">
            <span className="text-[#E65100] font-bold text-xs uppercase tracking-wider">Quality Audits</span>
            <h2 className="font-serif text-3xl font-bold text-[#084C61]">
              Botanical Testing & Biodegradability Assurance
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed font-normal">
              Our quality assurance lab verifies that every batch complies with strict environmental standards. We test for complete surfactant breakdown, dermatological safety, and zero free alkali residual.
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="eco-glass-panel p-4 rounded-2xl border border-white/80">
                <strong className="text-[#2E7D32] block font-bold">1. Surfactant Biodegradability Audit</strong>
                <span className="text-[#5C6B64]">Ensures 100% organic breakdown within 28 days of wash cycle runoff.</span>
              </div>
              <div className="eco-glass-panel p-4 rounded-2xl border border-white/80">
                <strong className="text-[#2E7D32] block font-bold">2. Dermatological Neutrality Test</strong>
                <span className="text-[#5C6B64]">Neutral pH profile tested to prevent skin dryness or hand irritation.</span>
              </div>
              <div className="eco-glass-panel p-4 rounded-2xl border border-white/80">
                <strong className="text-[#2E7D32] block font-bold">3. Essential Oil Purity Verification</strong>
                <span className="text-[#5C6B64]">Gas chromatography testing to verify 100% natural lemon & neem oils.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Glassy OEM Contract Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-emerald-50/70 via-white to-slate-100/90 relative overflow-hidden border-t border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eco-glass-card p-8 sm:p-12 rounded-3xl text-center space-y-6 max-w-4xl mx-auto border border-emerald-100/80 shadow-xl bg-white/80 backdrop-blur-xl">
            <span className="inline-flex items-center gap-2 bg-[#2E7D32]/10 text-[#2E7D32] px-4.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#2E7D32]/20">
              <Factory className="w-4 h-4 text-[#E65100]" /> Eco OEM & Contract Manufacturing
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#084C61]">
              Custom Botanical Formulations & White Label Supply
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6B64] max-w-2xl mx-auto leading-relaxed font-medium">
              We partner with organic brands, hotel chains, and retail distributors to manufacture custom eco detergents under private labels.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-eco-primary px-8 py-4 rounded-full font-bold text-sm shadow-lg"
              >
                Inquire OEM Eco Supply
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="Eco Infrastructure & OEM Inquiry"
      />
    </div>
  );
}
