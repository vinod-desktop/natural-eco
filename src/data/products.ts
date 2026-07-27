export interface EcoProduct {
  id: string;
  slug: string;
  categorySlug: "detergent-soaps" | "liquid-cleaners";
  categoryName: string;
  name: string;
  tagline: string;
  badge: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  sizes: string[];
  features: string[];
  fragrance: string;
  useCase: string;
  botanicalActive: string;
  moq: string;
  packaging: string;
}

export const ECO_CATEGORIES = [
  {
    slug: "detergent-soaps",
    name: "Botanical Detergent & Washing Soaps",
    description: "Handcrafted coconut & palm oil laundry bars formulated for skin-safe washing and zero-phosphate biodegradability.",
    icon: "Sprout",
    count: 3,
  },
  {
    slug: "liquid-cleaners",
    name: "Eco Liquid Cleaners & Refills",
    description: "Real lemon extract dishwash gels, plant-derived laundry liquids, and zero-waste wholesale refill drums.",
    icon: "Droplets",
    count: 3,
  },
];

export const ECO_PRODUCTS: EcoProduct[] = [
  {
    id: "ep1",
    slug: "rajkamal-lemon-dishwash-gel",
    categorySlug: "liquid-cleaners",
    categoryName: "Eco Liquid Cleaners & Refills",
    name: "Rajkamal Natural Lemon Dishwash Gel",
    tagline: "Cold-Pressed Citrus Extract Oil Active",
    badge: "Real Lemon Power",
    image: "/assets/dishwash_liquid.jpeg",
    shortDesc: "Handcrafted dishwash gel with real lemon oil that cuts tough grease without toxic residues.",
    fullDesc: "Rajkamal Natural Lemon Dishwash Gel is formulated with real cold-pressed Citrus Limon oil and plant-based glycerin. It effortlessly cuts through stubborn oil, ghee, and food stains while remaining 100% gentle on hands and 100% safe for greywater irrigation.",
    sizes: ["250ml Glass Bottle", "500ml Squeeze Pack", "1 Litre Refill Pouch", "5 Litre Eco Can"],
    features: [
      "100% Real Citrus Limon Essential Oil",
      "Zero Synthetic Parabens or Harmful Phosphates",
      "Gentle on Sensitive Skin & Hands",
      "Zero White Residue on Utensils",
      "Safe for Greywater & Soil Irrigation"
    ],
    fragrance: "Organic Zesty Lemon",
    useCase: "Utensils, oily frying pans, baby bottles, glassware, zero-waste kitchens.",
    botanicalActive: "Real Citrus Oil & Plant Glycerin",
    moq: "50 Cases (500ml / 1L)",
    packaging: "Recyclable PET & Bulk HDPE Refill Cans",
  },
  {
    id: "ep2",
    slug: "rajkamal-botanical-detergent-bar",
    categorySlug: "detergent-soaps",
    categoryName: "Botanical Detergent & Washing Soaps",
    name: "Rajkamal Botanical Laundry Soap Bar",
    tagline: "Pure Vegetable Oil Saponification Since 1970",
    badge: "100% Phosphate-Free",
    image: "/assets/detergent_powder.jpeg",
    shortDesc: "Phosphate-free laundry soap bar made with pure saponified coconut and palm fatty acids.",
    fullDesc: "Crafted in Anand, Gujarat since 1970, our Botanical Laundry Bar uses traditional saponified vegetable oils enriched with natural aloe vera extracts. It removes tough dirt from cottons and linens while preserving fabric softness and color intensity.",
    sizes: ["250g Bar", "500g Bar", "1kg Twin Eco Wrap"],
    features: [
      "Pure Saponified Coconut & Palm Base",
      "100% Free from Harmful Phosphates & Fillers",
      "Dermatologically Tested for Skin Safety",
      "High Lather Density in Soft & Hard Water",
      "Long-Lasting Non-Melting Bar Structure"
    ],
    fragrance: "Natural Citrus & Herbal Breeze",
    useCase: "Hand laundry, baby clothes, delicate linens, collar & cuff cleaning.",
    botanicalActive: "Coconut Fatty Acids & Aloe Extract",
    moq: "50 Crates (1,200 Bars)",
    packaging: "Biodegradable Paper Wrap & Craft Boxes",
  },
  {
    id: "ep3",
    slug: "heritage-machine-wash-liquid",
    categorySlug: "liquid-cleaners",
    categoryName: "Eco Liquid Cleaners & Refills",
    name: "Heritage Machine Wash Liquid Detergent",
    tagline: "pH-Balanced Plant-Derived Fiber Care",
    badge: "Skin Friendly",
    image: "/assets/liquid_detergent.jpeg",
    shortDesc: "Ultra-concentrated liquid laundry detergent for front-load, top-load, and hand wash.",
    fullDesc: "Heritage Machine Wash Liquid combines biodegradable plant-derived surfactants with natural water softeners. Designed for washing machines, it leaves zero chemical film on clothes and preserves garment longevity wash after wash.",
    sizes: ["1 Litre Bottle", "5 Litre Eco Drum"],
    features: [
      "Compatible with All Automatic Washing Machines",
      "Biodegradable Plant-Derived Surfactant Matrix",
      "Prevents Color Fading & Fiber Micro-Damage",
      "Zero Synthetic Dyes or Caustic Residuals",
      "Naturally Antimicrobial Wash Formula"
    ],
    fragrance: "Wild Lavender & Eucalyptus",
    useCase: "Washing machine cycles, organic cotton garments, woolens, infant clothing.",
    botanicalActive: "Plant Surfactants & Water Softening Minerals",
    moq: "40 Cases (12 x 1L)",
    packaging: "Recycled HDPE Bottles & Bulk Refill Drums",
  },
  {
    id: "ep4",
    slug: "eucalyptus-neem-floor-cleaner",
    categorySlug: "liquid-cleaners",
    categoryName: "Eco Liquid Cleaners & Refills",
    name: "Neem & Eucalyptus Botanical Floor Cleaner",
    tagline: "99.9% Natural Germ Protection Without Toxins",
    badge: "Natural Disinfectant",
    image: "/assets/floor_cleaner.jpeg",
    shortDesc: "Organic surface disinfectant infused with neem oil and eucalyptus for pet & child safe floors.",
    fullDesc: "Formulated for health-conscious homes and eco-resorts, this botanical surface cleaner leverages natural neem oil and eucalyptus essential oils to kill 99.9% germs while filling rooms with a soothing forest aroma.",
    sizes: ["1 Litre Bottle", "5 Litre Can"],
    features: [
      "Organic Neem & Eucalyptus Extract Active",
      "Child & Pet-Safe Non-Toxic Floor Cleaner",
      "Natural Insect & Fly Repellent Properties",
      "Streak-Free High Gloss Finish on Tiles & Marble",
      "100% Biodegradable Runoff"
    ],
    fragrance: "Fresh Neem & Eucalyptus",
    useCase: "Home floors, nursery rooms, eco-resorts, yoga studios, hospitals.",
    botanicalActive: "Neem Oil & Pure Eucalyptus Oil",
    moq: "30 Cases (5 Litre Cans)",
    packaging: "HDPE Eco Cans",
  },
  {
    id: "ep5",
    slug: "natural-laundry-soap-crates",
    categorySlug: "detergent-soaps",
    categoryName: "Botanical Detergent & Washing Soaps",
    name: "Zero-Waste Laundry Soap Crates",
    tagline: "Unwrapped Wholesale Eco Soap Bars",
    badge: "Zero-Waste Wholesale",
    image: "/assets/soap_bar.jpeg",
    shortDesc: "Plastic-free bulk laundry soap bars in paper crates for zero-waste stores & hotels.",
    fullDesc: "Designed for zero-waste refill shops, organic grocery stores, and eco-lodges. These naked laundry bars eliminate plastic packaging completely while delivering pure saponified cleaning performance.",
    sizes: ["200g Bar", "100 Bars / Paper Crate"],
    features: [
      "100% Plastic-Free Wholesale Packaging",
      "Pure Vegetable Saponified Base",
      "Zero Artificial Dyes or Fragrance Boosters",
      "Long Storage Shelf-Life",
      "Zero Waste Certification Compliant"
    ],
    fragrance: "Unscented / Natural Botanical",
    useCase: "Zero-waste refiller stores, eco hotels, sustainable communes.",
    botanicalActive: "Saponified Palm & Coconut Oils",
    moq: "20 Crates",
    packaging: "Recyclable Biodegradable Paper Crates",
  },
  {
    id: "ep6",
    slug: "zero-waste-wholesale-refill-drum",
    categorySlug: "liquid-cleaners",
    categoryName: "Eco Liquid Cleaners & Refills",
    name: "Zero-Waste Wholesale Refill Drum",
    tagline: "Concentrated Plant-Derived Supply Base",
    badge: "Bulk Eco Supply",
    image: "/assets/bulk_cleaner.jpeg",
    shortDesc: "Bulk green detergent concentrate for refill stations and eco retail distributors.",
    fullDesc: "Charotar Zero-Waste Wholesale Drums provide high-concentration plant-derived detergent base directly to eco refill stations, commercial laundries, and green brand repackers across Gujarat and India.",
    sizes: ["50kg Drum", "200kg Returnable Barrel"],
    features: [
      "Concentrated Plant-Derived Liquid Base",
      "Returnable & Reusable Drum Logistics Program",
      "Easy Cold Water Dilution",
      "Zero Phosphates or Sulphates",
      "Custom Essential Oil Blending Available"
    ],
    fragrance: "Custom Natural Essential Oils",
    useCase: "Eco refill shops, green commercial laundries, organic detergent brands.",
    botanicalActive: "Concentrated Vegetable Surfactant Matrix",
    moq: "3 Drums (50kg each)",
    packaging: "Returnable Heavy Duty Drums",
  },
];

export function getEcoProductBySlug(slug: string): EcoProduct | undefined {
  return ECO_PRODUCTS.find((p) => p.slug === slug);
}

export function getEcoProductsByCategory(categorySlug: string): EcoProduct[] {
  return ECO_PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}
