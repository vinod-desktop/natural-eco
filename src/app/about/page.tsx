"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, Heart, TreePine, MapPin, CheckCircle2, Sprout } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EnquiryModal from "../../components/EnquiryModal";

export default function EcoAboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#FAF6F0] via-[#F5EFE6] to-[#EFEBE4] text-[#2C3531]">
      <Header />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#042834] via-[#084C61] to-[#1B5E20] text-white py-16 sm:py-24 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 animate-slide-left">
          <div className="inline-flex items-center gap-2 bg-white/20 text-[#FFD1B3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-4 h-4 text-[#FFD1B3]" /> Heritage Since 1970 &bull; Anand, Gujarat
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            50+ Years of Pure Botanical Cleaning
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal">
            The story of Charotar Soap Factory is built on family values, natural ingredient purity, zero phosphate discharge, and 50+ years of trust in Anand, Gujarat.
          </p>
        </div>
      </section>

      {/* Heritage Story Glass Cards */}
      <section className="py-16 sm:py-24 bg-white/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 animate-slide-left">
              <span className="text-[#E65100] font-bold text-xs uppercase tracking-wider">Family Legacy & Roots</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#084C61]">
                Five Decades of Vegetable Oil Saponification in Anand
              </h2>
              <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed font-medium">
                Founded in 1970 in the agricultural heartland of Charotar (Anand, Gujarat), Charotar Soap Factory began with a commitment to craft soaps from pure saponified coconut and palm oils rather than harsh chemical fillers.
              </p>
              <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed font-medium">
                Through two generations of family stewardship, our flagship <strong>Rajkamal Detergent Bar</strong> and botanical lemon dishwash gels have become household staples across Gujarat, celebrated for their gentle touch on hands and reliable stain removal.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-bold text-[#2E7D32]">
                <div className="eco-glass-panel p-3.5 rounded-2xl border border-white/80 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E65100]" /> 100% Family Founded
                </div>
                <div className="eco-glass-panel p-3.5 rounded-2xl border border-white/80 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E65100]" /> Anand Gujarat Roots
                </div>
                <div className="eco-glass-panel p-3.5 rounded-2xl border border-white/80 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E65100]" /> Phosphate-Free
                </div>
                <div className="eco-glass-panel p-3.5 rounded-2xl border border-white/80 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E65100]" /> 500+ Dealer Trust
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 animate-slide-right">
              <div className="eco-glass-card p-8 rounded-3xl border border-white/90 shadow-2xl relative">
                <div className="eco-glass-panel rounded-2xl p-6 border border-[#E8DFD5] space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E8DFD5] pb-4">
                    <div>
                      <div className="text-xs text-[#5C6B64] font-medium">Eco Plant & Supply Base</div>
                      <div className="font-serif text-lg font-bold text-[#084C61]">Anand, Gujarat, India</div>
                    </div>
                    <MapPin className="w-8 h-8 text-[#E65100]" />
                  </div>
                  <p className="text-xs text-[#5C6B64] leading-relaxed font-medium">
                    Surrounded by agricultural flora in Anand, our facility integrates rainwater harvesting, solar kettle heating, and zero liquid effluent discharge.
                  </p>
                  <div className="pt-2 flex justify-between items-center text-xs font-bold text-[#2E7D32]">
                    <span>Plant Capacity: 100,000+ MT</span>
                    <Link href="/manufacturing" className="hover:underline flex items-center gap-1">
                      View Eco Plant &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#E65100] font-bold text-xs uppercase tracking-wider">Guided By Nature</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#084C61] mt-2">
            Our Eco & Heritage Guiding Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="eco-card-hover p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 bg-[#2E7D32]/10 text-[#2E7D32] rounded-2xl flex items-center justify-center font-bold mb-2">
              <Sprout className="w-6 h-6 text-[#E65100]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#084C61]">Botanical Purity</h3>
            <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed font-medium">
              We formulate with genuine cold-pressed citrus oils and vegetable fatty acids, keeping our soaps 100% free of phosphates and synthetic fillers.
            </p>
          </div>

          <div className="eco-card-hover p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 bg-[#2E7D32]/10 text-[#2E7D32] rounded-2xl flex items-center justify-center font-bold mb-2">
              <TreePine className="w-6 h-6 text-[#E65100]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#084C61]">Zero Liquid Discharge</h3>
            <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed font-medium">
              Our plant recycles 100% of process water back into saponification boilers, protecting local soil and groundwater in Charotar.
            </p>
          </div>

          <div className="eco-card-hover p-8 rounded-3xl space-y-3">
            <div className="w-12 h-12 bg-[#2E7D32]/10 text-[#2E7D32] rounded-2xl flex items-center justify-center font-bold mb-2">
              <Heart className="w-6 h-6 text-[#E65100]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#084C61]">Community Trust</h3>
            <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed font-medium">
              For over 50 years, families across Gujarat have trusted Rajkamal soap for gentle skin safety and dependable daily cleaning.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="Botanical Heritage Inquiry"
      />
    </div>
  );
}
