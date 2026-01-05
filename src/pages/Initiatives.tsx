import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Globe, Award, ChevronRight, Sparkles } from "lucide-react";

const initiatives = [
  {
    icon: Users,
    title: "Women & Girls in Chess",
    description: "Dedicated programs to encourage and support female chess players at all levels. We're committed to closing the gender gap in competitive chess through targeted outreach, mentorship, and tournament opportunities.",
  },
  {
    icon: Globe,
    title: "Regional Championships",
    description: "Building pathways to excellence through regional championship events that give players competitive experience and qualification opportunities for state and national competitions.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Chess as a tool for community development. We partner with schools, libraries, and community centers to bring chess education to underserved areas and create positive social impact.",
  },
  {
    icon: Award,
    title: "Chess Endowment",
    description: "Building sustainable funding for chess development through our endowment initiative. Contributions support scholarships, equipment, and program expansion for years to come.",
  },
];

const Initiatives = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="text-initiatives-title">
                Initiatives & Impact
              </h1>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-initiatives-subtitle">
                Beyond training and tournaments, ChessNation is committed to building a sustainable 
                chess ecosystem that creates lasting impact in our communities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" data-testid="button-partner">
                    Partner with ChessNation
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" data-testid="button-support">
                    Support an Initiative
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {initiatives.map((initiative) => (
                <Card key={initiative.title}>
                  <CardHeader>
                    <initiative.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{initiative.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-secondary/30 rounded-xl p-8 md:p-12 mb-16">
              <div className="max-w-3xl mx-auto text-center">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Sponsorship Opportunities
                </h2>
                <p className="text-muted-foreground mb-6">
                  Corporate and individual sponsors play a crucial role in expanding our reach and 
                  impact. Sponsorship supports tournament prizes, equipment, training scholarships, 
                  and community programs. Your support helps us develop the next generation of 
                  chess talent.
                </p>
                <Link to="/contact">
                  <Button variant="hero" data-testid="button-sponsor-cta">
                    Become a Sponsor
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Get Involved
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether as a volunteer, sponsor, or community partner, there are many ways to 
                support ChessNation's mission. Contact us to learn how you can make a difference.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" data-testid="button-get-involved">
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

export default Initiatives;
