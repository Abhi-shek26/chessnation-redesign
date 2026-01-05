import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Trophy, Layers, CheckCircle, ChevronRight } from "lucide-react";

const franchiseModels = [
  {
    icon: GraduationCap,
    title: "Training Franchise",
    description: "Bring ChessNation's proven training methodology to your community. Includes curriculum, coaching support, and student management tools.",
    features: ["Complete training curriculum", "Coach certification", "Marketing support", "Technology platform access"],
  },
  {
    icon: Trophy,
    title: "Tournament Franchise",
    description: "Host professionally organized ChessNation tournaments in your region. Perfect for clubs, schools, and community organizations.",
    features: ["Tournament management system", "USCF rating support", "Operational playbook", "Brand partnership"],
  },
  {
    icon: Layers,
    title: "Hybrid Franchise",
    description: "Combine training and tournament operations for a complete chess center experience. Ideal for dedicated chess facilities.",
    features: ["Full curriculum access", "Tournament hosting rights", "Comprehensive support", "Exclusive territory"],
  },
];

const Franchise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="text-franchise-title">
                Franchise Opportunities
              </h1>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-franchise-subtitle">
                Partner with ChessNation to bring world-class chess training and tournaments 
                to your community. We provide the systems, technology, and support you need to succeed.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" data-testid="button-apply-franchise">
                  Apply for Franchise
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {franchiseModels.map((model) => (
                <Card key={model.title}>
                  <CardHeader>
                    <model.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>{model.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{model.description}</p>
                    <ul className="space-y-2">
                      {model.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Franchise Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Proven business model with established brand recognition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Comprehensive training and ongoing operational support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Access to ChessEvents.AI technology platform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Marketing materials and promotional support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Network of fellow franchise partners</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Passion for chess and youth development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Commitment to ChessNation quality standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Suitable venue or ability to secure one</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Initial investment capital (varies by model)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Local market knowledge and connections</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary/30 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to Join the ChessNation Network?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Submit your franchise application to start a conversation about bringing 
                ChessNation to your community.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" data-testid="button-apply-cta">
                  Apply for Franchise
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

export default Franchise;
