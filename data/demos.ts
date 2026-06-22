export type DemoCategory =
  | "Ecommerce"
  | "Business"
  | "Portfolio"
  | "Education"
  | "Healthcare"
  | "Restaurant"
  | "Real Estate"
  | "Custom";

export interface WebsiteDemo {
  id: string;
  slug: string;
  title: string;
  category: DemoCategory;
  description: string;
  thumbnail: string;
  demoUrl: string;
  features: string[];
  isFeatured: boolean;
  previewMode?: "live" | "image";
  isLiveDemoAvailable?: boolean;
}

export const demoCategories: Array<"All" | DemoCategory> = [
  "All",
  "Ecommerce",
  "Business",
  "Portfolio",
  "Education",
  "Healthcare",
  "Restaurant",
  "Real Estate",
  "Custom"
];

export const websiteDemos: WebsiteDemo[] = [
  {
    id: "demo-001",
    slug: "ecommerce-fashion-store",
    title: "Baby Mart – Premium Kids Store",
    category: "Ecommerce",
    description:
      "Complete online store solution featuring product catalog, shopping cart, secure checkout, and mobile-first design.",
    thumbnail: "/demo-thumbnails/babay%20mart.png",
    demoUrl: "https://baby-mart-nu.vercel.app/",
    features: ["Shop", "Cart", "Checkout"],
    isFeatured: true
  },
  {
    id: "demo-002",
    slug: "corporate-business-website",
    title: "Nexora \u2013 Home Appliances Store",
    category: "Ecommerce",
    description:
      "Premium eCommerce website for home appliances, electronics, and smart living products with a modern shopping experience.",
    thumbnail: "/demo-thumbnails/home%20appliances.png",
    demoUrl: "https://nexora-home-appliances.vercel.app/",
    features: ["About", "Services", "Contact"],
    isFeatured: true
  },
  {
    id: "demo-009",
    slug: "electro-mart-electronics-store",
    title: "ElectroMart \u2013 Electronics Store",
    category: "Ecommerce",
    description:
      "Modern eCommerce website for smartphones, laptops, headphones, smart devices, and electronic accessories with a seamless shopping experience.",
    thumbnail: "/demo-thumbnails/electro-mart.png",
    demoUrl: "https://amarbazar-ecommerce.vercel.app/",
    features: ["Shop", "Cart", "Checkout"],
    isFeatured: true
  },
  {
    id: "demo-010",
    slug: "fashion-ecommerce-website",
    title: "Fashion eCommerce Website",
    category: "Ecommerce",
    description:
      "Modern online fashion store designed for clothing, footwear, accessories, and lifestyle brands with a premium shopping experience.",
    thumbnail: "/demo-thumbnails/fashion.png",
    demoUrl: "https://fashion-ecommerce-12xplxipr-sifat15-5922-2244s-projects.vercel.app/",
    features: ["Shop", "Cart", "Checkout"],
    isFeatured: true,
    previewMode: "image",
    isLiveDemoAvailable: false
  },
  {
    id: "demo-004",
    slug: "hospital-clinic-website",
    category: "Business",
    title: "Inovexa \u2013 Business & Digital Solutions",
    description:
      "Professional business Portfolio website for digital agencies, consulting firms, startups, and corporate organizations focused on growth, innovation, and lead generation.",
    thumbnail: "/demo-thumbnails/innovexa%20business.png",
    demoUrl: "https://business-portfolio-website-eight.vercel.app/",
    features: ["Doctors", "Departments", "Contact"],
    isFeatured: true
  },
  {
    id: "demo-007",
    slug: "business-portfolio-website",
    title: "Business Portfolio Website",
    category: "Portfolio",
    description: "Portfolio website for agencies, freelancers and studios.",
    thumbnail: "/demo-thumbnails/portfolio.svg",
    demoUrl: "https://example.com/demo/portfolio",
    features: ["Portfolio", "About", "Contact"],
    isFeatured: false
  }
];
