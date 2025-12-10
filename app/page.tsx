import AboutSection from "@/src/components/abou-section";
import Hero from "@/src/components/hero-section";
import LogoCloud from "@/src/components/logo-cloud";
import ProgramSection from "@/src/components/program-section";
import StatsCounterSection from "@/src/components/stats-counter-section";
import TestimonialSection from "@/src/components/testimonial-section";
import UniversitySection from "@/src/components/university-section";

export default function Home(){
  return(
    <>    
    <Hero />
    <AboutSection />
    <UniversitySection />
    <ProgramSection />
    <StatsCounterSection />
    <LogoCloud />
    <TestimonialSection />
    </>
    
  )
}