"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  Check,
  Sprout,
  ShieldCheck
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function EcoContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Botanical Product Inquiry",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappDirectUrl = encodeURIComponent(
    `Hi Charotar Soap Eco, I am reaching out from your website. Name: ${contactForm.name || "Visitor"}, Phone: ${contactForm.phone}. Message: ${contactForm.message || "I want to inquire about eco soaps."}`
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#FAF6F0] via-[#F5EFE6] to-[#EFEBE4] text-[#2C3531]">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#042834] via-[#084C61] to-[#1B5E20] text-white py-16 sm:py-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 animate-slide-left">
          <div className="inline-flex items-center gap-2 bg-white/20 text-[#FFD1B3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Phone className="w-4 h-4 text-[#FFD1B3]" /> Eco Plant Direct Desk
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Contact Charotar Eco Team
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-normal">
            Have questions about botanical formulations, zero-waste refill stations, sample boxes, or factory visits? Reach out to our team in Anand, Gujarat.
          </p>
        </div>
      </section>

      {/* Main Contact Glass Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Info Glass Cards */}
          <div className="lg:col-span-5 space-y-6 animate-slide-left">
            <div className="eco-glass-card p-6 sm:p-8 rounded-3xl border border-white/90 shadow-2xl space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#084C61] border-b border-[#E8DFD5] pb-4">
                Eco Plant & Supply Office
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-emerald-50 text-[#2E7D32] rounded-2xl shrink-0">
                    <MapPin className="w-5 h-5 text-[#E65100]" />
                  </div>
                  <div>
                    <strong className="block font-bold text-[#2C3531]">Plant Address</strong>
                    <span className="text-[#5C6B64] leading-relaxed block mt-0.5 font-medium">
                      Charotar Soap Factory, GIDC Industrial Estate, Anand, Gujarat - 388001, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-emerald-50 text-[#2E7D32] rounded-2xl shrink-0">
                    <Phone className="w-5 h-5 text-[#E65100]" />
                  </div>
                  <div>
                    <strong className="block font-bold text-[#2C3531]">Phone Desk</strong>
                    <a href="tel:+919825000000" className="text-[#2E7D32] font-bold block mt-0.5 hover:underline">
                      +91 98250 XXXXX (Eco Wholesale Line)
                    </a>
                    <span className="text-[#5C6B64] text-xs block font-semibold">+91 2692 XXXXX (Office)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-emerald-50 text-[#2E7D32] rounded-2xl shrink-0">
                    <Mail className="w-5 h-5 text-[#E65100]" />
                  </div>
                  <div>
                    <strong className="block font-bold text-[#2C3531]">Email Desk</strong>
                    <a href="mailto:eco@charotarsoap.com" className="text-[#2E7D32] font-semibold block mt-0.5 hover:underline">
                      eco@charotarsoap.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-emerald-50 text-[#2E7D32] rounded-2xl shrink-0">
                    <Clock className="w-5 h-5 text-[#E65100]" />
                  </div>
                  <div>
                    <strong className="block font-bold text-[#2C3531]">Operating Hours</strong>
                    <span className="text-[#5C6B64] block mt-0.5 font-medium">Monday - Saturday: 9:00 AM to 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Click-to-Chat */}
              <div className="pt-2 border-t border-[#E8DFD5]">
                <a
                  href={`https://wa.me/919825000000?text=${whatsappDirectUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-full font-bold text-xs sm:text-sm shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> Click to Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 eco-glass-card p-8 sm:p-10 rounded-3xl border border-white/90 shadow-2xl animate-slide-right">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-[#2E7D32] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#084C61]">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-[#5C6B64] max-w-md mx-auto font-medium">
                  Thank you for reaching out to Charotar Soap Eco Desk. Our advisors will respond to your query within 4 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-eco-primary px-6 py-3 rounded-full font-bold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-serif text-xl font-bold text-[#084C61] mb-6">Send an Eco Enquiry</h3>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={contactForm.phone}
                        onChange={handleChange}
                        placeholder="+91 98250 00000"
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#2C3531] mb-1">Inquiry Subject</label>
                      <select
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleChange}
                        className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-bold"
                      >
                        <option value="Botanical Product Inquiry">Botanical Product Inquiry</option>
                        <option value="Refill Station Partner">Refill Station Partnership</option>
                        <option value="Wholesale Sample Kit">Sample Kit Request</option>
                        <option value="Eco OEM Private Label">Eco OEM / Private Label</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#2C3531] mb-1">Message / Requirements *</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={handleChange}
                      placeholder="Please specify botanical products, required volume, and delivery town..."
                      className="w-full p-3.5 rounded-xl border border-[#E8DFD5] bg-white/90 focus:outline-none focus:border-[#2E7D32] font-semibold"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-eco-primary py-4 rounded-full font-bold text-sm shadow-lg mt-2 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Direct Message to Eco Desk
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16 eco-glass-card p-4 rounded-3xl border border-white/90 shadow-xl overflow-hidden">
          <h3 className="font-serif text-lg font-bold text-[#084C61] p-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#E65100]" /> Plant Location Map (GIDC Anand, Gujarat)
          </h3>
          <div className="w-full h-80 rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner">
            <iframe
              title="Charotar Soap Factory Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58913.8828551466!2d72.923485!3d22.564518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e6e66e6b8c9%3A0xa1e44f8fae54148e!2sAnand%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
