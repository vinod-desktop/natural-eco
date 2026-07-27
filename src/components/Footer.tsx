"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck, ArrowUpRight, Leaf, Sprout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#084C61] text-emerald-100 text-xs sm:text-sm pt-16 pb-8 border-t border-emerald-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-800/60">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <Image
                src="/assets/logo.png"
                alt="Charotar Soap Factory Eco"
                width={150}
                height={45}
                className="object-contain"
              />
            </div>
            <p className="text-xs text-emerald-200/80 leading-relaxed font-normal">
              Charotar Soap Factory produces biodegradable, phosphate-free cleaning formulations and botanical soaps in Anand, Gujarat since 1970.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#FFD1B3] font-semibold">
              <Sprout className="w-4 h-4 text-[#FFD1B3]" /> 100% Biodegradable & Phosphate-Free
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-sm mb-4">Eco Navigation</h4>
            <ul className="space-y-2.5 text-xs text-emerald-200/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Botanical Products Catalog</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">Our 1970 Heritage</Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-white transition-colors">Sustainability & Plant QA</Link>
              </li>
              <li>
                <Link href="/distributors" className="hover:text-white transition-colors">Eco Wholesale & Refill Dealers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact & Plant Location</Link>
              </li>
            </ul>
          </div>

          {/* Product Lines */}
          <div>
            <h4 className="text-white font-serif font-bold text-sm mb-4">Eco Categories</h4>
            <ul className="space-y-2.5 text-xs text-emerald-200/80">
              <li>
                <Link href="/products/detergent-soaps" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Botanical Soap Bars</span> <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </Link>
              </li>
              <li>
                <Link href="/products/liquid-cleaners" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Eco Liquid Cleaners</span> <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </Link>
              </li>
              <li>Rajkamal Lemon Dishwash Gel</li>
              <li>Coconut Laundry Bar</li>
              <li>Neem & Eucalyptus Floor Sanitizer</li>
              <li>Zero-Waste Bulk Drums</li>
            </ul>
          </div>

          {/* Plant Address & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-white font-serif font-bold text-sm mb-4">Plant & Supply Office</h4>
            <div className="flex items-start gap-2.5 text-xs text-emerald-200/80">
              <MapPin className="w-4 h-4 text-[#FFD1B3] shrink-0 mt-0.5" />
              <span>GIDC Industrial Estate, Anand, Gujarat - 388001, India</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-emerald-200/80">
              <Phone className="w-4 h-4 text-[#FFD1B3] shrink-0" />
              <span>+91 98250 XXXXX / +91 2692 XXXXX</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-emerald-200/80">
              <Mail className="w-4 h-4 text-[#FFD1B3] shrink-0" />
              <span>eco@charotarsoap.com</span>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/919825000000?text=Hi%20Charotar%20Eco%2C%20I%20want%20to%20enquire%20about%20botanical%20soaps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Eco Desk
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-200/70">
          <div>© {new Date().getFullYear()} Charotar Soap Factory (Natural Eco & Heritage). All Rights Reserved.</div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white">Eco Philosophy</Link>
            <Link href="/manufacturing" className="hover:text-white">Zero Discharge Policy</Link>
            <Link href="/distributors" className="hover:text-white">Refill Station Partner</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
