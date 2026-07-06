import AboutUs from "@/components/AboutUs";
import CareerSection from "@/components/CareerSection";
import ContactUs from "@/components/ContactUs";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <main className=" w-full flex flex-col lg:gap-20 sm:gap-14 gap-8">
        <HeroSection />
        <AboutUs />
        <CareerSection />
        <FeatureSection />
        <ContactUs />
      </main>
    </>
  );
}
