"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sprout, Phone, MessageCircle, Menu, X, Leaf, Sparkles } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Eco Range", href: "/products" },
    { name: "Our Heritage", href: "/about" },
    { name: "Sustainability & Quality", href: "/manufacturing" },
    { name: "Eco Wholesale & Dealers", href: "/distributors" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== href && typeof window !== "undefined") {
      e.preventDefault();
      window.dispatchEvent(
        new CustomEvent("trigger-shutter", { detail: { url: href } })
      );
    }
  };

  return (
    <>
      {/* Top Eco Announcement Bar */}
      <div className="bg-[#084C61] text-white text-xs sm:text-sm py-2 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 font-medium">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Sprout className="w-4 h-4 text-[#FFD1B3] shrink-0 animate-pulse-glow-eco" />
            <span>
              <strong className="text-[#FFD1B3]">SINCE 1970</strong> &bull; 100% Plant-Derived & Phosphate-Free Cleaning | Anand, Gujarat
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+919825000000"
              className="flex items-center gap-1.5 hover:text-[#FFD1B3] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD1B3]" />
              Call Eco Desk: +91 98250 XXXXX
            </a>
            <span className="hidden md:inline text-white/40">|</span>
            <a
              href="https://wa.me/919825000000?text=Hello%20Charotar%20Eco%2C%20I%20want%20to%20enquire%20about%20botanical%20soaps"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-[#FFD1B3] hover:underline transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300" /> WhatsApp Eco Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-white/60 sticky top-0 z-40 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-3 logo-hover-anim group relative"
          >
            <div className="relative h-12 w-44 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-md">
              <Image
                src="/assets/logo.png"
                alt="Charotar Soap Factory Eco Logo"
                fill
                className="object-contain object-left transition-all duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 font-bold text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 transition-all duration-300 group ${
                    isActive
                      ? "text-[#2E7D32] font-bold"
                      : "text-[#2C3531] hover:text-[#2E7D32]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2E7D32] to-[#E65100] rounded-full transition-transform duration-300 ease-out origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-eco-accent px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-white/90" /> Request Sample Kit
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#2C3531] hover:bg-emerald-100/50 rounded-xl transition-colors"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-[#E8DFD5] px-4 py-4 space-y-3 font-semibold text-sm shadow-xl animate-slide-up">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className={`block py-2 transition-colors ${
                    isActive ? "text-[#2E7D32] font-bold" : "text-[#2C3531] hover:text-[#2E7D32]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Global Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="Botanical Sample Kit"
      />
    </>
  );
}
