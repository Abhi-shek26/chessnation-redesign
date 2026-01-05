import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Trophy, Building2, Heart, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-training-overview">
                Training Overview
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Structured development programs designed to build tomorrow's chess champions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <GraduationCap className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Beginner Programs</h3>
                  <p className="text-sm text-muted-foreground">Learn fundamentals with expert coaches</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Trophy className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Tournament Prep</h3>
                  <p className="text-sm text-muted-foreground">Get ready for competitive play</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">School Programs</h3>
                  <p className="text-sm text-muted-foreground">Scholastic chess excellence</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Private Coaching</h3>
                  <p className="text-sm text-muted-foreground">Personalized one-on-one training</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Link to="/training">
                <Button variant="hero" data-testid="button-learn-more-training">
                  Learn More About Training
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-tournaments-overview">
                Tournaments Overview
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professionally organized chess competitions for all skill levels
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">K-12</span>
                </div>
                <h3 className="font-semibold mb-2">Scholastic Events</h3>
                <p className="text-sm text-muted-foreground">Age-appropriate tournaments for students</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">USCF</span>
                </div>
                <h3 className="font-semibold mb-2">Rated Tournaments</h3>
                <p className="text-sm text-muted-foreground">Official USCF-rated competitions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">GA</span>
                </div>
                <h3 className="font-semibold mb-2">Regional Championships</h3>
                <p className="text-sm text-muted-foreground">Pathway to state and national events</p>
              </div>
            </div>
            <div className="text-center">
              <Link to="/tournaments">
                <Button variant="hero" data-testid="button-view-all-tournaments">
                  View All Tournaments
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-technology-teaser">
                ChessEvents.AI
              </h2>
              <p className="text-muted-foreground mb-8">
                We're building cutting-edge chess technology to power the next generation of training 
                and tournaments. AI-powered analytics, automated tournament management, and more.
              </p>
              <Link to="/technology">
                <Button variant="hero" data-testid="button-explore-tech">
                  Explore Technology
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-franchise-teaser">
                Franchise Opportunities
              </h2>
              <p className="text-muted-foreground mb-8">
                Partner with ChessNation to bring world-class chess training and tournaments 
                to your community. We provide the systems, technology, and support you need.
              </p>
              <Link to="/franchise">
                <Button variant="hero" data-testid="button-franchise-info">
                  Learn About Franchising
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

export default Index;
