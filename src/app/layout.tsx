import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ShutterTransition from "../components/ShutterTransition";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Charotar Soap Factory | Natural Eco & Botanical Formulations",
  description: "Sustainable, phosphate-free, and plant-derived cleaning products made in Anand, Gujarat since 1970. Rajkamal lemon dishwash gel, coconut soap bars, and zero-waste refill drums.",
  keywords: ["Eco Soap Manufacturer", "Botanical Laundry Soap", "Phosphate Free Detergent", "Gujarat Eco Cleaning", "Zero Waste Refill Drums"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF6F0] text-[#2C3531]">
        <ShutterTransition />
        {children}
      </body>
    </html>
  );
}
