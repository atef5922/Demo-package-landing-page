import { CustomWebsiteCTA } from "@/components/home/CustomWebsiteCTA";
import { DemoShowcase } from "@/components/home/DemoShowcase";
import { PackageSection } from "@/components/home/PackageSection";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <DemoShowcase />
        <PackageSection />
        <CustomWebsiteCTA />
      </main>
    </>
  );
}
