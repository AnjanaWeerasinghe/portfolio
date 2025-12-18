import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";  
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/projecctSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";


export const Home = () => {
    return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

        {/* Background effect */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

         {/* main content */}
         <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
         </main>

         {/* footer */}
         <Footer />
    </div> 
    );
}; 