"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sprout, Droplets, ArrowRight, Leaf, Search } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EnquiryModal from "../../components/EnquiryModal";
import { ECO_PRODUCTS } from "../../data/products";

export default function EcoProductsOverviewPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState("");

  const openInquiry = (name: string) => {
    setModalProduct(name);
    setIsModalOpen(true);
  };

  const handleCategoryChange = (cat: string) => {
    if (selectedCategory !== cat) {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("trigger-shutter"));
      }
      setSelectedCategory(cat);
    }
  };

  const filteredProducts = ECO_PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === "all" || p.categorySlug === selectedCategory;
    const matchesQuery =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#FAF6F0] via-[#F5EFE6] to-[#EFEBE4] text-[#2C3531]">
      <Header />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#042834] via-[#084C61] to-[#1B5E20] text-white py-12 sm:py-16 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 animate-slide-left">
          <span className="bg-white/20 text-[#FFD1B3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Botanical & Sustainable Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">Botanical Products Catalog</h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-normal">
            Explore our range of 100% phosphate-free detergent bars, real lemon dishwash gels, plant-derived laundry liquids, and zero-waste wholesale drums.
          </p>
        </div>
      </section>

      {/* Category Section Glass Cards */}
      <section className="py-12 bg-white/60 backdrop-blur-md border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-[#084C61] mb-6">Eco Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/products/detergent-soaps"
              className="p-6 rounded-2xl eco-card-hover border border-[#E8DFD5] flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white rounded-xl flex items-center justify-center font-bold shadow-md">
                  <Sprout className="w-6 h-6 text-[#FFD1B3]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#084C61] group-hover:text-[#2E7D32] transition-colors">
                    Botanical Detergent & Washing Soaps
                  </h3>
                  <p className="text-xs text-[#5C6B64] font-medium">Rajkamal Coconut Bars, Aloe Soap Cakes & Zero-Waste Crates</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#2E7D32] group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <Link
              href="/products/liquid-cleaners"
              className="p-6 rounded-2xl eco-card-hover border border-[#E8DFD5] flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E65100] to-[#C44400] text-white rounded-xl flex items-center justify-center font-bold shadow-md">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#084C61] group-hover:text-[#2E7D32] transition-colors">
                    Eco Liquid Cleaners & Refills
                  </h3>
                  <p className="text-xs text-[#5C6B64] font-medium">Real Lemon Dishwash, Neem Floor Cleaners & 50kg Refill Drums</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#2E7D32] group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Filter & Product List */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 eco-glass-panel p-4 rounded-2xl border border-white/80">
          {/* Glassy Category Filter Tabs with Shutter Trigger */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-[#2E7D32] text-white shadow-md scale-105"
                  : "bg-white/80 text-[#2C3531] border border-[#E8DFD5] hover:bg-emerald-50"
              }`}
            >
              All Items ({ECO_PRODUCTS.length})
            </button>
            <button
              onClick={() => handleCategoryChange("detergent-soaps")}
              className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
                selectedCategory === "detergent-soaps"
                  ? "bg-[#2E7D32] text-white shadow-md scale-105"
                  : "bg-white/80 text-[#2C3531] border border-[#E8DFD5] hover:bg-emerald-50"
              }`}
            >
              Botanical Soaps
            </button>
            <button
              onClick={() => handleCategoryChange("liquid-cleaners")}
              className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
                selectedCategory === "liquid-cleaners"
                  ? "bg-[#2E7D32] text-white shadow-md scale-105"
                  : "bg-white/80 text-[#2C3531] border border-[#E8DFD5] hover:bg-emerald-50"
              }`}
            >
              Liquid Cleaners & Refills
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search botanical product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8DFD5] bg-white/90 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#2E7D32]"
            />
          </div>
        </div>

        {/* Product Cards Grid with Glassmorphic Styling & Tab Switching Animation */}
        <div key={selectedCategory + searchQuery} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {filteredProducts.map((p) => (
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
                  <span className="text-[11px] font-bold text-[#2E7D32] uppercase tracking-wider">
                    {p.categoryName}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#084C61] group-hover:text-[#2E7D32] transition-colors">
                    <Link href={`/products/${p.slug}`} className="hover:underline">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6B64] line-clamp-2 leading-relaxed font-medium">{p.shortDesc}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.sizes.slice(0, 3).map((s, idx) => (
                      <span key={idx} className="glass-pill-eco text-[#2C3531] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-[#E8DFD5] flex items-center justify-between gap-3 bg-white/40">
                <Link
                  href={`/products/${p.slug}`}
                  className="text-xs font-bold text-[#2E7D32] hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Details & Specs &rarr;
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
        productName={modalProduct}
      />
    </div>
  );
}
