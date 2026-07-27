"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Send,
  Leaf,
  ChevronRight,
  ArrowRight,
  Sprout
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EnquiryModal from "../../../components/EnquiryModal";
import { getEcoProductBySlug, ECO_PRODUCTS } from "../../../data/products";

export default function EcoProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = getEcoProductBySlug(slug);

  const [selectedSize, setSelectedSize] = useState<string>(product ? product.sizes[0] : "");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-[#FAF6F0]">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
          <h1 className="font-serif text-3xl font-bold text-[#084C61] mb-4">Product Not Found</h1>
          <p className="text-sm text-[#5C6B64] mb-6">The requested botanical product does not exist in our catalog.</p>
          <Link href="/products" className="btn-eco-primary px-6 py-3 rounded-full font-bold text-sm">
            Back to Botanical Catalog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = ECO_PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 3);

  const whatsappText = encodeURIComponent(
    `Hi Charotar Soap Eco, I am interested in: ${product.name} (Selected Pack: ${selectedSize || product.sizes[0]}). Please send sample kit & eco wholesale pricing.`
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#FAF6F0] via-[#F5EFE6] to-[#EFEBE4] text-[#2C3531]">
      <Header />

      {/* Glassy Breadcrumb Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-[#E8DFD5] py-3 px-4 sm:px-8 text-xs font-semibold text-[#5C6B64]">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-[#2E7D32]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/products" className="hover:text-[#2E7D32]">Botanical Range</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href={`/products/${product.categorySlug}`} className="hover:text-[#2E7D32]">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#084C61] truncate font-bold">{product.name}</span>
        </div>
      </div>

      {/* Product Detail Main Glass Section */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Photo Display Glass Container */}
          <div className="lg:col-span-6 space-y-4 animate-slide-left">
            <div className="eco-glass-card p-8 rounded-3xl border border-white/90 shadow-2xl text-center relative overflow-hidden">
              <span className="absolute top-6 right-6 bg-[#E65100] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md animate-pulse-glow-eco">
                {product.badge}
              </span>
              <div className="eco-img-container rounded-2xl p-8 flex items-center justify-center min-h-[380px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={320}
                  className="object-contain max-h-[340px] hover:scale-108 transition-transform duration-500 ease-out drop-shadow-xl"
                  priority
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#5C6B64] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#2E7D32]" /> Clean Studio Photo &bull; 100% Biodegradable Active Base
              </div>
            </div>
          </div>

          {/* Right Specifications & Inquiry Panel */}
          <div className="lg:col-span-6 space-y-6 animate-slide-right">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-[#E65100]" /> {product.categoryName}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#084C61]">{product.name}</h1>
              <p className="text-sm font-bold text-[#E65100]">{product.tagline}</p>
            </div>

            <p className="text-xs sm:text-sm text-[#5C6B64] leading-relaxed border-b border-[#E8DFD5] pb-6 font-medium">
              {product.fullDesc}
            </p>

            {/* Available Sizes / Eco Packaging Options */}
            <div>
              <label className="block text-xs font-bold uppercase text-[#2C3531] mb-2.5">
                Available Pack & Eco Refill Sizes
              </label>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                      selectedSize === s
                        ? "bg-[#2E7D32] text-white shadow-md scale-105"
                        : "glass-pill-eco text-[#2C3531] hover:bg-emerald-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Specifications Grid */}
            <div className="eco-glass-panel p-5 rounded-2xl border border-white/80 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#5C6B64] block font-medium">Essential Fragrance</span>
                <strong className="text-[#084C61] font-bold">{product.fragrance}</strong>
              </div>
              <div>
                <span className="text-[#5C6B64] block font-medium">Botanical Active</span>
                <strong className="text-[#2E7D32] font-bold">{product.botanicalActive}</strong>
              </div>
              <div>
                <span className="text-[#5C6B64] block font-medium">Minimum Order (MOQ)</span>
                <strong className="text-[#084C61] font-bold">{product.moq}</strong>
              </div>
              <div>
                <span className="text-[#5C6B64] block font-medium">Eco Packaging</span>
                <strong className="text-[#084C61] font-bold">{product.packaging}</strong>
              </div>
            </div>

            {/* Features List */}
            <div>
              <h3 className="text-xs font-bold uppercase text-[#2C3531] mb-3">Botanical Highlights</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#2C3531]">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Case */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 font-bold">
              <strong>Ideal Use-Case:</strong> {product.useCase}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 btn-eco-primary py-4 rounded-full font-bold text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Request Botanical Sample / Quote
              </button>

              <a
                href={`https://wa.me/919825000000?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-full font-bold text-sm shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Quick Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-white/60 backdrop-blur-md border-t border-[#E8DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-[#084C61] mb-8">Related Botanical Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <div
                  key={rp.id}
                  className="eco-card-hover rounded-2xl p-5 border border-[#E8DFD5] flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 eco-img-container rounded-xl p-4 flex items-center justify-center mb-4">
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        width={180}
                        height={140}
                        className="object-contain max-h-36"
                      />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#084C61] mb-1">{rp.name}</h4>
                    <p className="text-xs text-[#5C6B64] line-clamp-2 font-medium">{rp.shortDesc}</p>
                  </div>
                  <Link
                    href={`/products/${rp.slug}`}
                    className="mt-4 text-xs font-bold text-[#2E7D32] hover:underline flex items-center gap-1"
                  >
                    View Details & Specs &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={`${product.name} (${selectedSize})`}
      />
    </div>
  );
}
