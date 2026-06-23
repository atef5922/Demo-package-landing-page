import type { Metadata } from "next";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mugnee IT Solutions | Ready Website Demos & Packages",
  description:
    "Explore ready-made website demos, ecommerce packages, portfolio websites, and custom development services from Mugnee IT Solutions.",
  metadataBase: new URL("https://websites.mugneeit.com"),
  icons: {
    icon: [
      {
        url: "/brand%20logo/site%20icon.png",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/brand%20logo/site%20icon.png",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
