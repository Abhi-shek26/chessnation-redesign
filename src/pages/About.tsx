import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Eye, Users, ChevronRight, GraduationCap, Zap, Building2 } from "lucide-react";
import aboutBgImage from "@/assets/backgrounds/chess_about_page_background.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Fixed Background Layer - Ensures alignment stays perfect while scrolling */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBgImage})` }} 
      />
      {/* Dark overlay to ensure text readability on any background part */}
      <div className="fixed inset-0 z-0 bg-background/40 backdrop-blur-[2px]" />

      <Navbar />
      
      <main className="flex-grow pt-24 relative z-10">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            
            {/* Title Section - Centered */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-block glass-panel-strong p-8 rounded-2xl border border-white/10 backdrop-blur-md">
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground shadow-sm" data-testid="text-about-title">
                  About ChessNation
                </h1>
                <p className="text-xl text-muted-foreground font-medium" data-testid="text-about-subtitle">
                  Master the Royal Game – Conquer the World
                </p>
              </div>
            </div>

            {/* Mission & Vision - Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
              <Card className="bg-card/80 backdrop-blur-md border-white/10 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-8 md:p-10">
                  <Target className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      ChessNation is focused on training and building tomorrow's chess talents by 
                      combining world-class coaching, competitive exposure, and cutting-edge chess technology.
                    </p>
                    <p>
                      Our mission is to identify, train, and develop the next generation 
                      of chess talent through structured training programs, competitive pathways, and 
                      AI-powered chess technologies.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-md border-white/10 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-8 md:p-10">
                  <Eye className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We believe modern chess excellence requires more than coaching—it requires systems, 
                      exposure, and community. ChessNation bridges all of these into one unified ecosystem.
                    </p>
                    <p>
                      Our vision is to become the leading chess development institution that produces 
                      champions while making the game accessible to everyone who wants to learn.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Core Focus Pillars - SEPARATED CARDS for Better Alignment */}
            <div className="mb-24">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-foreground drop-shadow-md">
                Our Core Focus Pillars
              </h2>
              
              {/* Using a wider grid gap to frame the background center */}
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {/* Pillar 1 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl" />
                  <div className="relative h-full bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-xl text-center hover:bg-black/50 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-white">Training Tomorrow's Talent</h4>
                    <p className="text-gray-300">
                      Structured programs that develop players from beginners to champions
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl" />
                  <div className="relative h-full bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-xl text-center hover:bg-black/50 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-white">Technology for Chess</h4>
                    <p className="text-gray-300">
                      ChessEvents.AI and innovative tools to enhance the chess experience
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl" />
                  <div className="relative h-full bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-xl text-center hover:bg-black/50 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-white">Ecosystem & Endowment</h4>
                    <p className="text-gray-300">
                      Building sustainable infrastructure for the chess community
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <Card className="mb-20 bg-card/90 backdrop-blur-md border-white/10 shadow-2xl max-w-5xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-4">Our Team</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      ChessNation is supported by a network of experienced coaches, mentors, and 
                      organizers focused on long-term player development. Our team brings together 
                      expertise in scholastic chess training, tournament organization, and chess 
                      technology to create a comprehensive development ecosystem.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-md rounded-2xl p-10 md:p-16 text-center border border-white/10 shadow-2xl max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Why ChessNation?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                We're not just a chess school or a tournament organizer—we're building the future 
                of chess development.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="h-14 px-8 text-lg rounded-full" data-testid="button-contact-about">
                  Get in Touch
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
