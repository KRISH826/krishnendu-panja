import AboutUs from "@/components/AboutUs";
import CareerSection from "@/components/CareerSection";
import ContactUs from "@/components/ContactUs";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <CareerSection />
      <FeatureSection />
      <ContactUs />
    </>
  );
}
