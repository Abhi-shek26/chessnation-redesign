import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Users, ChevronRight, Monitor, Video, Brain, MessageSquare, Gamepad2 } from "lucide-react";
import trainingBgImage from "@/assets/backgrounds/chess_training_page_background.png";

const Training = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 relative">
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(${trainingBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/30" />
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 glass-panel-strong p-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="text-training-title">
                Online Chess Training Excellence
              </h1>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-training-subtitle">
                ChessNation training is primarily delivered online through structured coaching, 
                live analysis, and AI-assisted game review, enabling students to train globally 
                with top mentors.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" data-testid="button-request-evaluation">
                  Request Evaluation
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardContent className="p-8">
                  <Video className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Live Online Coaching</h3>
                  <p className="text-muted-foreground">
                    Interactive one-on-one and group sessions via video with experienced coaches. 
                    Real-time instruction, position analysis, and immediate feedback from anywhere 
                    in the world.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Brain className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">AI-Assisted Analysis</h3>
                  <p className="text-muted-foreground">
                    Leverage cutting-edge AI tools for game review and pattern recognition. 
                    Our digital analysis dashboards help identify weaknesses and track improvement 
                    over time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Monitor className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Virtual Chess Boards</h3>
                  <p className="text-muted-foreground">
                    Train on interactive virtual boards with real-time notation, move suggestions, 
                    and instant position setup. Practice openings, tactics, and endgames with 
                    modern digital tools.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Who Is This For?</h3>
                  <p className="text-muted-foreground">
                    Our programs serve scholastic players of all levels—from beginners learning the 
                    basics to advanced players preparing for national championships. Students can 
                    join from anywhere with an internet connection.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card/95 backdrop-blur-md rounded-xl p-8 md:p-12 mb-16 border border-border shadow-lg">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center">
                Pricing & Enrollment
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                Pricing: Please contact us for latest rates.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-secondary/70 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Training Packages</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-medium">4 classes/month</span>
                      <span className="text-sm text-muted-foreground">Contact for rates</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-medium">8 classes/month</span>
                      <span className="text-sm text-muted-foreground">Contact for rates</span>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/70 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Skill Tiers</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-medium">Beginner</span>
                      <span className="text-sm text-muted-foreground">Foundation skills</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-medium">Advanced</span>
                      <span className="text-sm text-muted-foreground">Competitive play</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-medium">Elite</span>
                      <span className="text-sm text-muted-foreground">Tournament prep</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" data-testid="button-pricing-contact">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Contact for Pricing
                  </Button>
                </Link>
                <a href="mailto:chessnation.us@gmail.com">
                  <Button variant="outline" size="lg" data-testid="button-pricing-email">
                    Email Us
                  </Button>
                </a>
                <a href="tel:7708585756">
                  <Button variant="outline" size="lg" data-testid="button-pricing-phone">
                    Call Us
                  </Button>
                </a>
              </div>
            </div>

            <Card className="mb-16" data-testid="card-training-games">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                      Training Games & Practice Matches
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      ChessNation arranges training games against peers, stronger opponents, and 
                      thematic positions to accelerate your improvement.
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-6">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Online games with coach supervision
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Matches against appropriately rated opponents
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Structured post-game analysis sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Thematic position practice for opening preparation
                      </li>
                    </ul>
                    <Link to="/contact">
                      <Button variant="outline" data-testid="button-request-games">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Request Training Games
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary/80 rounded-xl p-8 md:p-12 text-center shadow-md">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to Start Your Chess Journey?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Request a free evaluation to discuss your goals and find the right training program for you.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" data-testid="button-join-training">
                  Join Training
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

export default Training;
