import AboutUs from "@/components/AboutUs";
import CareerSection from "@/components/CareerSection";
import ContactUs from "@/components/ContactUs";
import Experience from "@/components/Experience";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import SkillSection from "@/components/Skills";
import Pagelayout from "@/layout/layout";


export default function Home() {
  return (
    <>
      <Pagelayout>
        <main className=" w-full flex flex-col lg:gap-20 sm:gap-14 gap-8">
          <HeroSection />
          <AboutUs />
          <SkillSection />
          <CareerSection />
          <Experience />
          <FeatureSection />
          <ContactUs />
        </main>
      </Pagelayout>
    </>
  );
}
