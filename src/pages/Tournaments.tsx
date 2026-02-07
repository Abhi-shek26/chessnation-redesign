import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Trophy, ChevronRight, Clock } from "lucide-react";
import tournamentBgImage from "@/assets/backgrounds/chess_tournament_page_background.png";

const Tournaments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 relative">
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(${tournamentBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/30" />
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 glass-panel-strong p-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="text-tournaments-title">
                Tournament Technology Provider
              </h1>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-tournaments-subtitle">
                We provide cutting-edge technology and tools to power chess tournaments with 
                post-game analysis, fair-play monitoring, and comprehensive organizer automation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" data-testid="button-view-tournaments">
                    Learn More
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" data-testid="button-host-tournament">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Post-Game Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive game analysis powered by AI, providing players with detailed insights 
                    and improvement suggestions after every game.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Fair-Play & Anti-Cheat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced monitoring systems to detect suspicious patterns and maintain tournament 
                    integrity with real-time fair-play analysis.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Organizer Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive automation for tournament management including pairings, scoring, 
                    communications, and logistics to streamline operations.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary/80 rounded-xl p-8 md:p-12 text-center shadow-md">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Power Your Tournament with Our Technology
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Partner with us to bring cutting-edge tournament technology to your events. 
                We provide the tools, automation, and support you need for seamless tournament operations.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" data-testid="button-host-cta">
                  Get Started
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

export default Tournaments;
