"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sprout, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EnquiryModal from "../../../components/EnquiryModal";
import { getEcoProductsByCategory } from "../../../data/products";

export default function EcoDetergentSoapsPage() {
  const products = getEcoProductsByCategory("detergent-soaps");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const openInquiry = (name: string) => {
    setSelectedProduct(name);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#FAF6F0] via-[#F5EFE6] to-[#EFEBE4] text-[#2C3531]">
      <Header />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#042834] via-[#084C61] to-[#1B5E20] text-white py-12 sm:py-16 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 animate-slide-left">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD1B3] hover:underline mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Products
          </Link>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold flex items-center gap-3">
            <Sprout className="w-8 h-8 text-[#FFD1B3]" /> Botanical Detergent & Washing Soaps
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl font-normal">
            Handcrafted coconut & palm oil laundry bars, aloe vera enriched soap cakes, and zero-waste unwrapped paper crates formulated for gentle skin safety and zero phosphate runoff.
          </p>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="py-8 bg-white/60 backdrop-blur-md border-b border-[#E8DFD5] text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-bold text-[#2E7D32]">
          <div className="eco-glass-panel p-3.5 rounded-2xl border border-white/80">100% Vegetable Saponification</div>
          <div className="eco-glass-panel p-3.5 rounded-2xl border border-white/80">Phosphate-Free Chemistry</div>
          <div className="eco-glass-panel p-3.5 rounded-2xl border border-white/80">Zero Soggy Melting Structure</div>
          <div className="eco-glass-panel p-3.5 rounded-2xl border border-white/80">Zero-Waste Wholesale Crates</div>
        </div>
      </section>

      {/* Products Listing */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="eco-card-hover rounded-3xl overflow-hidden border border-[#E8DFD5] flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 eco-img-container p-6 flex items-center justify-center border-b border-[#E8DFD5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={260}
                    height={190}
                    className="object-contain max-h-48 group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-md"
                  />
                  <span className="absolute top-4 right-4 bg-[#E65100] text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md animate-pulse-glow-eco">
                    {p.badge}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#084C61] group-hover:text-[#2E7D32] transition-colors">
                    <Link href={`/products/${p.slug}`} className="hover:underline">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6B64] line-clamp-3 leading-relaxed font-medium">{p.fullDesc}</p>

                  <div className="space-y-1.5 pt-2">
                    {p.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#2C3531] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-[#E8DFD5] flex items-center justify-between gap-3 bg-white/40">
                <Link
                  href={`/products/${p.slug}`}
                  className="text-xs font-bold text-[#2E7D32] hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  View Details &rarr;
                </Link>
                <button
                  onClick={() => openInquiry(p.name)}
                  className="btn-eco-accent px-4 py-2 rounded-full font-bold text-xs shadow-md"
                >
                  Request Sample
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />
    </div>
  );
}
