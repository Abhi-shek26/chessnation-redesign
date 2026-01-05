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
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${technologyBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Cpu className="w-4 h-4" />
                <span className="text-sm font-medium">ChessEvents.AI</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="text-technology-title">
                Technology for Chess
              </h1>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-technology-subtitle">
                ChessNation is building cutting-edge chess technology to power the next generation 
                of training, tournaments, and chess community engagement.
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
                      <h4 className="font-medium">AI-Powered Training</h4>
                      <p className="text-sm text-muted-foreground">
                        Personalized training recommendations based on your playing patterns and weaknesses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Performance Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        Deep insights into your games with actionable improvement suggestions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Tournament Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Easy registration, live pairings, and real-time results tracking.
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
                      <h4 className="font-medium">Fair Play Monitoring</h4>
                      <p className="text-sm text-muted-foreground">
                        Advanced anti-cheating systems to maintain tournament integrity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Automated Operations</h4>
                      <p className="text-sm text-muted-foreground">
                        Streamlined pairing, scoring, and reporting to reduce administrative burden.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Event Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive data on participation, performance, and engagement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary/30 rounded-xl p-8 md:p-12 mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center">
                Technology Vision
              </h2>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-muted-foreground mb-6">
                  We're building ChessEvents.AI as an integrated platform that brings together 
                  training, competition, and community. Our goal is to make professional-grade 
                  chess technology accessible to everyone—from scholastic programs to major championships.
                </p>
                <p className="text-muted-foreground">
                  The platform will seamlessly connect players, coaches, organizers, and chess 
                  institutions into a unified ecosystem powered by artificial intelligence and 
                  modern web technologies.
                </p>
              </div>
            </div>

            <div className="text-center">
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
