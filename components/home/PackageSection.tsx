import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PackageCard } from "@/components/home/PackageCard";
import { websitePackages } from "@/data/packages";

export function PackageSection() {
  return (
    <section
      id="packages"
      className="section-shell overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_58%,#EEF4FF_100%)] pb-16 pt-14 sm:pb-20 sm:pt-16"
    >
      <div className="absolute inset-0 opacity-90 [background:radial-gradient(circle_at_12%_12%,rgba(59,130,246,0.09),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(124,58,237,0.05),transparent_26%)]" />
      <Container wide className="relative z-10">
        <SectionHeader
          title="Choose Your Website Features"
          subtitle="Select the package that fits your business needs. You can also request a fully custom website."
          className="max-w-[780px]"
        />

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {websitePackages.map((item) => (
            <PackageCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
