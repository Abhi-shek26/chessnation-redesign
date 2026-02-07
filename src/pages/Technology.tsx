import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Cpu, Users, Trophy, BarChart3, ChevronRight, Zap, Shield, Globe } from "lucide-react";
import technologyBgImage from "@/assets/backgrounds/chess_technology_page_background.png";

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 relative">
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(${technologyBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/30" />
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 glass-panel-strong p-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Cpu className="w-4 h-4" />
                <span className="text-sm font-medium">ChessEvents.AI</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="text-technology-title">
                AI-Powered Technology for Chess Tournaments
              </h1>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-technology-subtitle">
                Revolutionizing chess tournaments with artificial intelligence and agentic automation 
                that streamlines operations for players and organizers.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" data-testid="button-early-access">
                  Get Early Access
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    For Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Agentic Registration</h4>
                      <p className="text-sm text-muted-foreground">
                        AI agents handle registration and reuse your profile across tournaments, 
                        eliminating repetitive form-filling.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Faster Check-In</h4>
                      <p className="text-sm text-muted-foreground">
                        Less time on paperwork, more time playing. Smart systems recognize you 
                        and streamline the entire tournament experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Personalized Journey</h4>
                      <p className="text-sm text-muted-foreground">
                        Get AI-powered tournament recommendations, intelligent reminders, and a 
                        customized tournament experience based on your playing history.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    For Organizers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Agentic Tournament Creation</h4>
                      <p className="text-sm text-muted-foreground">
                        AI agents handle tournament setup and management, letting you focus on the 
                        chess while we handle the operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">AI Does the Heavy Lifting</h4>
                      <p className="text-sm text-muted-foreground">
                        Automated publishing, updates, communications, and logistics coordination. 
                        Our AI handles the tedious work.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Complete Automation</h4>
                      <p className="text-sm text-muted-foreground">
                        Intelligent pairings, workflow automation, smart notifications, and seamless 
                        operational management from start to finish.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary/80 rounded-xl p-8 md:p-12 mb-16 shadow-md">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center">
                AI & Agentic Technology Vision
              </h2>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-muted-foreground mb-6">
                  We're building ChessEvents.AI as an intelligent platform where AI agents handle 
                  repetitive tasks, enable seamless experiences, and unlock new possibilities for 
                  players and tournament organizers.
                </p>
                <p className="text-muted-foreground">
                  From agentic registration systems that remember your preferences to automated 
                  tournament operations that run themselves, our technology transforms how chess 
                  events are organized and experienced.
                </p>
              </div>
            </div>

            <div className="bg-secondary/80 rounded-xl p-8 md:p-12 text-center shadow-md">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Coming Soon
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                ChessEvents.AI is currently in development. Sign up to be notified when we launch 
                and get early access to the platform.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" data-testid="button-learn-more">
                  Learn More
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

export default Technology;
