"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  Leaf,
  Droplets,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TreePine,
  Recycle,
  ChevronRight,
  MessageCircle,
  Phone,
  Sparkles,
  Building2
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

export default function EcoHomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Natural Eco Sample Kit");

  const openModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#FAF6F0] via-[#F5EFE6] to-[#EFEBE4] text-[#2C3531]">
      <Header />

      {/* Glassmorphic Hero Eco Section */}
      <section className="relative py-12 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content with Sliding Animation */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-slide-left">
            {/* Prominent Heritage Trust Asset Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-[#2E7D32] px-4.5 py-2 rounded-full text-xs sm:text-sm font-extrabold shadow-sm border border-white/90">
              <Award className="w-4.5 h-4.5 text-[#E65100] shrink-0 animate-pulse-glow-eco" />
              <span>SINCE 1970 &bull; 50+ Years Eco Heritage in Anand, Gujarat</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#084C61] leading-[1.15] tracking-tight">
              Pure Heritage Cleaning{" "}
              <span className="bg-gradient-to-r from-[#2E7D32] to-[#E65100] bg-clip-text text-transparent italic font-normal">
                Crafted With Care
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5C6B64] max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              For over five decades, Charotar Soap Factory has blended pure vegetable oil saponification with natural citrus extracts to deliver wholesome, phosphate-free cleaning power for homes across Gujarat.
            </p>

            {/* Glassmorphic Action Routing Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/products"
                className="btn-eco-primary px-8 py-4 rounded-full font-bold text-sm shadow-lg flex items-center gap-2.5 group"
              >
                Explore Botanical Catalog{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => openModal("Natural Eco Wholesale Inquiry")}
                className="btn-eco-secondary px-8 py-4 rounded-full font-bold text-sm"
              >
                Request Free Sample Kit
              </button>
            </div>

            {/* Badges List */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4 text-xs sm:text-sm font-bold text-[#2E7D32]">
              <div className="eco-glass-panel px-4 py-2 rounded-2xl border border-white/90 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E65100]" /> 100% Biodegradable
              </div>
              <div className="eco-glass-panel px-4 py-2 rounded-2xl border border-white/90 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E65100]" /> Phosphate-Free Formula
              </div>
              <div className="eco-glass-panel px-4 py-2 rounded-2xl border border-white/90 shadow-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E65100]" /> Crafted in Anand Gujarat
              </div>
            </div>
          </div>

          {/* Right Hero Image Showcase with Floating Glass Card */}
          <div className="lg:col-span-5 relative animate-float-gentle">
            <div className="eco-glass-card p-6 sm:p-8 rounded-3xl border border-white/90 shadow-2xl text-center relative overflow-hidden">
              <div className="eco-img-container rounded-2xl p-6 flex items-center justify-center min-h-[300px]">
                <Image
                  src="/assets/dishwash_liquid.jpeg"
                  alt="Rajkamal Eco Dishwash"
                  width={340}
                  height={280}
                  className="object-contain max-h-[280px] hover:scale-108 transition-transform duration-500 ease-out drop-shadow-xl"
                  priority
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-left">
                  <h3 className="font-serif text-2xl font-bold text-[#084C61]">Rajkamal Citrus Gel</h3>
                  <p className="text-xs text-[#5C6B64] font-semibold">Zero Toxic Residuals &bull; Real Cold-Pressed Citrus Oil</p>
                </div>
                <span className="bg-[#E65100] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md animate-pulse-glow-eco">
                  Natural Formula
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tiles Section with Glass Cards */}
      <section className="py-16 sm:py-24 bg-white/60 backdrop-blur-md border-y border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 animate-slide-up">
            <span className="text-[#E65100] font-bold text-xs uppercase tracking-wider">Botanical Categories</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#084C61] mt-2">
              Browse By Eco Product Category
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6B64] mt-2 font-medium">
              Select a category to view plant-derived soap bars, lemon dishwash gels, laundry liquids, or zero-waste bulk drums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1: Botanical Soap Bars */}
            <Link
              href="/products/detergent-soaps"
              className="group eco-card-hover rounded-3xl p-8 sm:p-10 border border-[#E8DFD5] flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Sprout className="w-8 h-8 text-[#FFD1B3]" />
                </div>
                <span className="text-xs font-bold text-[#E65100] uppercase tracking-wider">Category 01</span>
                <h3 className="font-serif text-2xl font-bold text-[#084C61] mt-1 mb-3 group-hover:text-[#2E7D32] transition-colors">
                  Botanical Detergent & Washing Soaps
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed mb-6 font-medium">
                  Rajkamal coconut & palm oil laundry bars, aloe vera enriched washing cakes, and unwrapped zero-waste wholesale crates.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8DFD5] text-sm font-bold text-[#2E7D32]">
                <span>View All Botanical Soap Bars</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>

            {/* Category 2: Eco Liquid Cleaners */}
            <Link
              href="/products/liquid-cleaners"
              className="group eco-card-hover rounded-3xl p-8 sm:p-10 border border-[#E8DFD5] flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#E65100] to-[#C44400] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <span className="text-xs font-bold text-[#E65100] uppercase tracking-wider">Category 02</span>
                <h3 className="font-serif text-2xl font-bold text-[#084C61] mt-1 mb-3 group-hover:text-[#2E7D32] transition-colors">
                  Eco Liquid Cleaners & Refills
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed mb-6 font-medium">
                  Real lemon extract dishwash gels, plant-derived laundry liquids, neem floor sanitizers, and zero-waste wholesale drums.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8DFD5] text-sm font-bold text-[#2E7D32]">
                <span>View All Eco Liquid Cleaners</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Glassy "Why Us" Strip */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#E65100] font-bold text-xs uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#084C61] mt-2">
            Pioneering Botanical Cleaning Since 1970
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="eco-card-hover p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-[#2E7D32]/10 text-[#2E7D32] rounded-2xl flex items-center justify-center font-bold">
              <Award className="w-6 h-6 text-[#E65100]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#084C61]">1970 Family Heritage</h3>
            <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed font-medium">
              50+ years of saponifying pure vegetable fatty acids in Anand, Gujarat without synthetic chemical adulterants.
            </p>
          </div>

          <div className="eco-card-hover p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-[#2E7D32]/10 text-[#2E7D32] rounded-2xl flex items-center justify-center font-bold">
              <Leaf className="w-6 h-6 text-[#E65100]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#084C61]">100% Phosphate Free</h3>
            <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed font-medium">
              Zero toxic runoff chemicals. Safe for garments, sensitive skin, and greywater agricultural irrigation.
            </p>
          </div>

          <div className="eco-card-hover p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-[#2E7D32]/10 text-[#2E7D32] rounded-2xl flex items-center justify-center font-bold">
              <Recycle className="w-6 h-6 text-[#E65100]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#084C61]">Zero Waste Refill Drums</h3>
            <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed font-medium">
              Returnable drum program for zero-waste stores and eco resorts, eliminating single-use plastic waste.
            </p>
          </div>
        </div>
      </section>

      {/* Light Glassy Eco Distributor / Refill CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-emerald-50/70 via-white to-slate-100/90 relative overflow-hidden border-t border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eco-glass-card p-8 sm:p-12 rounded-3xl text-center space-y-6 max-w-4xl mx-auto border border-emerald-100/80 shadow-xl bg-white/80 backdrop-blur-xl">
            <span className="inline-flex items-center gap-2 bg-[#2E7D32]/10 text-[#2E7D32] px-4.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#2E7D32]/20">
              <Building2 className="w-4 h-4 text-[#E65100]" /> Wholesale & Refill Station Network
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#084C61]">
              Become an Eco Refill Partner or Wholesale Dealer
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6B64] max-w-2xl mx-auto leading-relaxed font-medium">
              Supply your organic retail store, zero-waste shop, or hotel chain with India&apos;s trusted botanical cleaning brand.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/distributors"
                className="btn-eco-primary px-8 py-4 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
              >
                Apply For Wholesale <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="btn-eco-secondary px-8 py-4 rounded-full font-bold text-sm"
              >
                Contact Eco Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={modalTitle}
      />
    </div>
  );
}
