import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Eye, Users, ChevronRight, GraduationCap, Zap, Building2 } from "lucide-react";
import aboutBgImage from "@/assets/backgrounds/chess_about_page_background.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(${aboutBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 glass-panel-strong p-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="text-about-title">
                About ChessNation
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-about-subtitle">
                Master the Royal Game – Conquer the World
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground mb-4">
                    ChessNation is focused on training and building tomorrow's chess talents by 
                    combining world-class coaching, competitive exposure, and cutting-edge chess technology.
                  </p>
                  <p className="text-muted-foreground">
                    At ChessNation, our mission is to identify, train, and develop the next generation 
                    of chess talent through structured training programs, competitive pathways, and 
                    AI-powered chess technologies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Eye className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground mb-4">
                    We believe modern chess excellence requires more than coaching—it requires systems, 
                    exposure, and community. ChessNation bridges all of these into one unified ecosystem.
                  </p>
                  <p className="text-muted-foreground">
                    Our vision is to become the leading chess development institution that produces 
                    champions while making the game accessible to everyone who wants to learn.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary/30 rounded-xl p-8 md:p-12 mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Our Core Focus Pillars
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Training Tomorrow's Chess Talent</h4>
                  <p className="text-sm text-muted-foreground">
                    Structured programs that develop players from beginners to champions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Technology for Chess</h4>
                  <p className="text-sm text-muted-foreground">
                    ChessEvents.AI and innovative tools to enhance the chess experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Chess Ecosystem & Endowment</h4>
                  <p className="text-sm text-muted-foreground">
                    Building sustainable infrastructure for the chess community
                  </p>
                </div>
              </div>
            </div>

            <Card className="mb-16">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Users className="w-16 h-16 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Our Team</h3>
                    <p className="text-muted-foreground">
                      ChessNation is supported by a network of experienced coaches, mentors, and 
                      organizers focused on long-term player development. Our team brings together 
                      expertise in scholastic chess training, tournament organization, and chess 
                      technology to create a comprehensive development ecosystem.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary/30 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Why ChessNation?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're not just a chess school or a tournament organizer—we're building the future 
                of chess development. Our unique combination of training, technology, and community 
                focus sets us apart.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" data-testid="button-contact-about">
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
