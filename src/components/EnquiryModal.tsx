"use client";

import React, { useState } from "react";
import { X, Check, MessageCircle, Send, Leaf } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function EnquiryModal({ isOpen, onClose, productName = "Botanical Sample Kit" }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [quantity, setQuantity] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2500);
  };

  const whatsappEcoMessage = encodeURIComponent(
    `Hi Charotar Soap Eco, I am interested in: ${productName}. Name: ${name || "Visitor"}, Location: ${city || "N/A"}, Phone: ${phone}. Please send sample kit & pricing.`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-[#FAF6F0] rounded-3xl max-w-md w-full p-5 sm:p-8 relative shadow-2xl border border-[#E8DFD5] animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full bg-white/60 hover:bg-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-[#2E7D32] rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#084C61]">Request Received!</h3>
            <p className="text-xs sm:text-sm text-[#5C6B64]">
              Thank you. Our eco advisors will dispatch your sample box and wholesale details shortly.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-[#E65100] uppercase tracking-wider flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5" /> Eco Product Inquiry
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#084C61] mt-1">Request Sample Kit</h3>
              <p className="text-xs text-[#5C6B64] font-medium mt-1">Item: {productName}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-[#2C3531] mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Patel"
                  className="w-full p-3 rounded-xl border border-[#E8DFD5] bg-white focus:outline-none focus:border-[#2E7D32] font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-[#2C3531] mb-1">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98250 00000"
                  className="w-full p-3 rounded-xl border border-[#E8DFD5] bg-white focus:outline-none focus:border-[#2E7D32] font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#2C3531] mb-1">City / Location</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Anand, Gujarat"
                    className="w-full p-3 rounded-xl border border-[#E8DFD5] bg-white focus:outline-none focus:border-[#2E7D32] font-medium"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#2C3531] mb-1">Est. Quantity</label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 50 Cases / 10 Drums"
                    className="w-full p-3 rounded-xl border border-[#E8DFD5] bg-white focus:outline-none focus:border-[#2E7D32] font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3.5 rounded-full font-bold text-sm shadow-md transition-all mt-2 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Submit Sample Request
              </button>
            </form>

            <div className="relative my-4 text-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#E8DFD5]"></div></div>
              <span className="relative bg-[#FAF6F0] px-3 text-[11px] text-[#5C6B64] font-semibold uppercase">Or Chat Instant</span>
            </div>

            <a
              href={`https://wa.me/919825000000?text=${whatsappEcoMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-full font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Direct Eco Line
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
