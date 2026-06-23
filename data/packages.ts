export interface WebsitePackage {
  id: string;
  name: string;
  price: string;
  bestFor: string;
  delivery: string;
  features: string[];
  benefits: string[];
  badge?: string;
  highlighted?: boolean;
  accent: "orange" | "blue" | "violet" | "cyan";
}

export const websitePackages: WebsitePackage[] = [
  {
    id: "business-portfolio",
    name: "Business Portfolio Website",
    price: "Tk 6,999",
    bestFor: "Businesses, agencies, freelancers, consultants, and professionals.",
    delivery: "Up to 3 Working Days",
    features: [
      "Modern Responsive Design",
      "Up to 5 Custom Pages",
      "Service Showcase",
      "Portfolio / Gallery Section",
      "Contact Form Integration",
      "Google Map Integration",
      "Social Media Integration",
      "SEO-Friendly Structure"
    ],
    benefits: [
      "Free SSL Security (HTTPS)",
      "Free 1 Year Hosting + .COM Domain",
      "Free AI-Powered Live Chat",
      "1 Month Support"
    ],
    accent: "cyan"
  },
  {
    id: "starter-ecommerce",
    name: "Starter Ecommerce Website",
    price: "Tk 8,500",
    bestFor: "Startups and small businesses launching online sales.",
    delivery: "3-5 Working Days",
    features: [
      "Responsive Online Store",
      "Product Showcase Homepage",
      "Product Search & Filters",
      "Customer Account System",
      "Order Email Notifications",
      "Contact & Map Integration",
      "Live Chat Integration",
      "SEO Optimized Setup"
    ],
    benefits: [
      "Free SSL Security (HTTPS)",
      "Free 1 Year Hosting + .COM Domain",
      "Free AI-Powered Live Chat",
      "1 Month Support"
    ],
    accent: "orange"
  },
  {
    id: "business-ecommerce",
    name: "Business Ecommerce Website",
    price: "Tk 14,999",
    bestFor: "Growing businesses looking to scale online sales.",
    delivery: "5-7 Working Days",
    features: [
      "Premium Responsive Design",
      "Complete E-Commerce System",
      "Product Management Panel",
      "Customer Account System",
      "Search & Filter Options",
      "Order Management System",
      "Live Chat Integration",
      "SEO & Speed Optimization"
    ],
    benefits: [
      "Free SSL Security (HTTPS)",
      "Free 1 Year Hosting + .COM Domain",
      "Free AI-Powered Live Chat",
      "1 Month Support"
    ],
    badge: "Most Popular",
    highlighted: true,
    accent: "blue"
  },
  {
    id: "premium-ecommerce",
    name: "Premium Ecommerce Website",
    price: "Tk 19,999",
    bestFor: "Established brands and high-volume online stores.",
    delivery: "5-7 Working Days",
    features: [
      "Premium UI/UX Design",
      "Advanced E-Commerce Platform",
      "Product & Inventory Management",
      "Customer Account System",
      "Wishlist & Recommendations",
      "Payment Gateway Integration",
      "WhatsApp Order Notification",
      "Advanced SEO Optimization"
    ],
    benefits: [
      "Free SSL Security (HTTPS)",
      "Free 1 Year Hosting + .COM Domain",
      "Free AI-Powered Live Chat",
      "3 Months Support"
    ],
    badge: "Best Value",
    highlighted: true,
    accent: "violet"
  }
];
