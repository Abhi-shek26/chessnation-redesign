import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TournamentsSection from "@/components/TournamentsSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <TournamentsSection />
        <ResultsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
