import Hero from "@/src/components/hero-section";
import LogoCloud from "@/src/components/logo-cloud";
import ProgramSection from "@/src/components/program-section";
import UniversitySection from "@/src/components/university-section";

export default function Home(){
  return(
    <>    
    <Hero />
    <UniversitySection />
    <ProgramSection />
    <LogoCloud />
    </>
    
  )
}