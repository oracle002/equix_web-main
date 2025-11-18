import CaseStudies from "@/components/sections/CaseStudies";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ContactCard from "@/components/sections/ContactCard";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/ServicesGlance";
import VoicesOfTrust from "@/components/sections/VoicesOfTrust";
import WhyEquix from "@/components/sections/WhyEquix";
import WorkShowcase from "@/components/sections/WorkShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyEquix />
      <Services />
      <WorkShowcase />
      <CompanyOverview />
      <ContactCard />
      <CaseStudies />
      <VoicesOfTrust />
    </>
  );
}
