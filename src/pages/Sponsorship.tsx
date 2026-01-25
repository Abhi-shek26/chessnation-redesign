import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Trophy, Award, Star, Users, Globe, Megaphone, ChevronRight } from "lucide-react";
import initiativesBgImage from "@/assets/backgrounds/chess_initiatives_page_background.png";

const Sponsorship = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(${initiativesBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
        
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 glass-panel-strong p-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="text-sponsorship-title">
                Sponsorship Opportunities
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-sponsorship-subtitle">
                Partner with ChessNation to support the next generation of chess champions 
                and gain visibility in the chess community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card data-testid="card-sponsor-student">
                <CardContent className="p-8">
                  <Heart className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Sponsor a Chess Student</h3>
                  <p className="text-muted-foreground mb-4">
                    Support promising scholastic or junior players by enabling access to elite 
                    coaching, tournaments, and training resources.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Fund training programs for talented students
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Cover tournament entry fees and travel
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Provide equipment and learning materials
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card data-testid="card-tournament-sponsor">
                <CardContent className="p-8">
                  <Trophy className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Become a Tournament Sponsor</h3>
                  <p className="text-muted-foreground mb-4">
                    Sponsor ChessNation-hosted tournaments and circuits to reach chess 
                    enthusiasts and their families.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Scholastic tournaments and championships
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Regional and state-level competitions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Special events and chess festivals
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 md:p-12 mb-16 border border-border">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                Sponsor Benefits
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <Star className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Brand & Logo Placement</h4>
                    <p className="text-sm text-muted-foreground">
                      Prominent display on tournament materials and venues
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Website Visibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Featured on ChessNation website and digital promotions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Megaphone className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Live Stream Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                      Announced during live streams and tournament broadcasts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Youth Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Association with youth talent development and excellence
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Trophy className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Event Presence</h4>
                    <p className="text-sm text-muted-foreground">
                      Product and merchandise display at chess events
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Championship Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                      Recognition during major championships and ceremonies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="mb-16" data-testid="card-hall-of-fame">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Hall of Fame
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Join our prestigious Hall of Fame for long-term recognition and legacy branding. 
                    Honor contributors who make a lasting impact on chess development.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-secondary/30 rounded-xl p-6">
                    <h4 className="font-semibold mb-3">Permanent Recognition</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Engraved recognition at training centers
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Display in tournament halls
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Digital Hall of Fame page feature
                      </li>
                    </ul>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-6">
                    <h4 className="font-semibold mb-3">Ongoing Visibility</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Website and marketing mentions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Tournament banner recognition
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Championship ceremony acknowledgment
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary/30 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Become a Sponsor
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ready to make a difference in chess education? Contact us to discuss 
                sponsorship opportunities tailored to your goals.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" data-testid="button-sponsorship-contact">
                  Contact Us
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

export default Sponsorship;
