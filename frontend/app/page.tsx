import CareerSection from "@/components/CareerSection";
import ContactUs from "@/components/ContactUs";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CareerSection />
      <FeatureSection />
      <ContactUs />
    </>
  );
}
