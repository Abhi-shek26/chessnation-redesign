import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Trophy, ChevronRight, Clock } from "lucide-react";
import tournamentBgImage from "@/assets/backgrounds/chess_tournament_page_background.png";

const upcomingTournaments = [
  {
    id: 1,
    name: "ChessNation Spring Open",
    date: "March 15-16, 2026",
    location: "Johns Creek, GA",
    category: "Open/Rated",
    participants: "Expected 100+ players",
  },
  {
    id: 2,
    name: "Scholastic Championship Series",
    date: "April 5, 2026",
    location: "Johns Creek, GA",
    category: "Scholastic",
    participants: "K-12 Students",
  },
  {
    id: 3,
    name: "Georgia State Qualifier",
    date: "May 10-11, 2026",
    location: "Johns Creek, GA",
    category: "Championship",
    participants: "Rated Players Only",
  },
];

const Tournaments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${tournamentBgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
        <section className="py-16 md:py-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-testid="text-tournaments-title">
                ChessNation Tournaments
              </h1>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-tournaments-subtitle">
                Experience professionally organized chess competitions with fair play standards, 
                accurate ratings, and a welcoming atmosphere for players of all levels.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" data-testid="button-view-tournaments">
                    View Upcoming Tournaments
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" data-testid="button-host-tournament">
                    Host a Tournament
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Scholastic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Age-appropriate tournaments for K-12 students with sections based on grade level 
                    and skill. Perfect for young players building their competitive experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Open/Rated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    USCF-rated tournaments open to all players. Multiple sections ensure competitive 
                    games at every skill level with official rating implications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Championships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Premier events featuring longer time controls, invitational formats, and 
                    qualification pathways to state and national championships.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
              Upcoming Tournaments
            </h2>

            <div className="space-y-4 mb-16">
              {upcomingTournaments.map((tournament) => (
                <Card key={tournament.id} data-testid={`card-tournament-${tournament.id}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{tournament.name}</h3>
                          <Badge variant="secondary">{tournament.category}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {tournament.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {tournament.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {tournament.participants}
                          </span>
                        </div>
                      </div>
                      <Link to="/contact">
                        <Button variant="outline" data-testid={`button-register-${tournament.id}`}>
                          Register Interest
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-secondary/30 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Host a ChessNation Tournament
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Partner with us to bring professional tournament experiences to your community. 
                We provide technology, expertise, and operational support.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" data-testid="button-host-cta">
                  Learn More About Hosting
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
