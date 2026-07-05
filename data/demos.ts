export type DemoCategory =
  | "E-Commerce"
  | "Business"
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
  "E-Commerce",
  "Business",
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
    title: "Baby & Kids E-Commerce Website",
    category: "E-Commerce",
    description:
      "A playful and conversion-focused online store for baby products, kids fashion, toys, and family essentials.",
    thumbnail: "/demo-thumbnails/babay%20mart.webp",
    demoUrl: "https://baby-mart-nu.vercel.app/",
    features: ["Shop", "Cart", "Checkout"],
    isFeatured: true
  },
  {
    id: "demo-002",
    slug: "corporate-business-website",
    title: "Home Appliances E-Commerce Website",
    category: "E-Commerce",
    description:
      "A modern appliance shopping platform designed for electronics, kitchen appliances, and smart living products.",
    thumbnail: "/demo-thumbnails/home%20appliances.webp",
    demoUrl: "https://nexora-home-appliances.vercel.app/",
    features: ["About", "Services", "Contact"],
    isFeatured: true
  },
  {
    id: "demo-009",
    slug: "electro-mart-electronics-store",
    title: "Electronics E-Commerce Website",
    category: "E-Commerce",
    description:
      "A professional online tech store for gadgets, devices, accessories, and consumer electronics.",
    thumbnail: "/demo-thumbnails/electro-mart.webp",
    demoUrl: "https://amarbazar-ecommerce.vercel.app/",
    features: ["Shop", "Cart", "Checkout"],
    isFeatured: true
  },
  {
    id: "demo-010",
    slug: "fashion-ecommerce-website",
    title: "Fashion E-Commerce Website",
    category: "E-Commerce",
    description:
      "A premium fashion shopping website for apparel, footwear, accessories, and lifestyle collections.",
    thumbnail: "/demo-thumbnails/fashion.webp",
    demoUrl: "https://fashion-ecommerce-web-pink.vercel.app/",
    features: ["Shop", "Cart", "Checkout"],
    isFeatured: true
  },
  {
    id: "demo-011",
    slug: "madrasa-website",
    title: "Madrasa Website",
    category: "Education",
    description:
      "A structured educational website for madrasas with admissions, courses, teachers, notices, galleries, and events.",
    thumbnail: "/demo-thumbnails/madrasa.webp",
    demoUrl: "https://islamic-institute-website.vercel.app/",
    features: ["Admissions", "Courses", "Notices", "Events", "Gallery"],
    isFeatured: true
  },
  {
    id: "demo-014",
    slug: "school-college-website",
    title: "School & College Website",
    category: "Education",
    description:
      "Complete website solution for educational institutions featuring admissions, academic programs, notices, results, routines, teacher profiles, campus gallery, and responsive design.",
    thumbnail: "/demo-thumbnails/school-collage.webp",
    demoUrl: "https://school-college-website-one.vercel.app/",
    features: ["Admissions", "Programs", "Notices", "Results", "Routines"],
    isFeatured: true
  },
  {
    id: "demo-012",
    slug: "healthcare-website",
    title: "Healthcare Website",
    category: "Healthcare",
    description:
      "A professional healthcare platform for hospitals and clinics with doctors, appointments, departments, and patient support.",
    thumbnail: "/demo-thumbnails/healthcare.webp",
    demoUrl: "https://health-care-pro-tau.vercel.app/",
    features: ["Appointments", "Doctors", "Patient Portal"],
    isFeatured: true
  },
  {
    id: "demo-013",
    slug: "modern-real-estate-website",
    title: "Real Estate Website",
    category: "Real Estate",
    description:
      "A premium real estate website for property listings, project showcases, agent profiles, search filters, and inquiries.",
    thumbnail: "/demo-thumbnails/Real%20Estate.webp",
    demoUrl: "https://real-estate-management-liart.vercel.app/",
    features: ["Listings", "Projects", "Inquiries"],
    isFeatured: true
  },
  {
    id: "demo-004",
    slug: "hospital-clinic-website",
    category: "Business",
    title: "Corporate Business Website",
    description:
      "A clean and professional business website built to showcase services, expertise, projects, and client trust.",
    thumbnail: "/demo-thumbnails/innovexa%20business.webp",
    demoUrl: "https://business-portfolio-website-eight.vercel.app/",
    features: ["Doctors", "Departments", "Contact"],
    isFeatured: true
  },
  {
    id: "demo-015",
    slug: "custom-crm-business-automation",
    category: "Custom",
    title: "Custom CRM & Business Automation Website",
    description:
      "A tailored custom web solution for growing businesses with lead management, sales pipeline, team workflows, reporting dashboards, client portals, and process automation.",
    thumbnail: "/demo-thumbnails/crm-landing.webp",
    demoUrl: "https://example.com/custom-crm-business-automation",
    features: ["CRM Dashboard", "Team Workflows", "Reports", "Client Portal", "Automation"],
    isFeatured: true,
    previewMode: "image",
    isLiveDemoAvailable: false
  }
];
