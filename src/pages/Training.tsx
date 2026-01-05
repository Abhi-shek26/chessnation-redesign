import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Target, Trophy, Users, ChevronRight } from "lucide-react";
import trainingBgImage from "@/assets/backgrounds/chess_training_page_background.png";

const Training = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8"
          style={{ backgroundImage: `url(${trainingBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="text-training-title">
                Training Tomorrow's Chess Talent
              </h1>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-training-subtitle">
                At ChessNation, we believe chess excellence requires more than coaching—it requires 
                structured development, competitive exposure, and a supportive community.
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
                  <GraduationCap className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Training Philosophy</h3>
                  <p className="text-muted-foreground">
                    Our approach combines classical chess principles with modern analytical techniques. 
                    We focus on building strong fundamentals while developing each player's unique style 
                    and strategic thinking capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Structured Development</h3>
                  <p className="text-muted-foreground">
                    Every student follows a personalized development path based on their current level, 
                    goals, and learning style. We track progress meticulously and adjust training 
                    programs to maximize improvement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Trophy className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Tournament Preparation</h3>
                  <p className="text-muted-foreground">
                    Competitive play is essential for growth. We prepare students for tournament 
                    success with opening preparation, time management training, and psychological 
                    readiness coaching.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Who Is This For?</h3>
                  <p className="text-muted-foreground">
                    Our programs serve scholastic players of all levels—from beginners learning the 
                    basics to advanced players preparing for national championships. Parents seeking 
                    quality chess education for their children will find a supportive environment here.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary/30 rounded-xl p-8 md:p-12 text-center">
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
