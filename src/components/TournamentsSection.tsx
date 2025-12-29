import { Trophy, Clock, DollarSign, Users, ExternalLink, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Tournament {
  id: number;
  name: string;
  type: "swiss" | "arena" | "knockout";
  prize: string;
  entryFee: string;
  date: string;
  time: string;
  platform: string;
  participants: number;
  maxParticipants: number;
  status: "upcoming" | "live" | "completed";
}

const tournaments: Tournament[] = [
  {
    id: 1,
    name: "Grand Master Showdown",
    type: "swiss",
    prize: "$2,500",
    entryFee: "$10",
    date: "Jan 5, 2026",
    time: "8:00 PM",
    platform: "Lichess.org",
    participants: 128,
    maxParticipants: 256,
    status: "upcoming",
  },
  {
    id: 2,
    name: "Weekend Blitz Arena",
    type: "arena",
    prize: "$1,500",
    entryFee: "$5",
    date: "Jan 3, 2026",
    time: "6:00 PM",
    platform: "Chess.com",
    participants: 89,
    maxParticipants: 150,
    status: "live",
  },
  {
    id: 3,
    name: "Rapid Championship",
    type: "swiss",
    prize: "$3,000",
    entryFee: "$15",
    date: "Jan 10, 2026",
    time: "7:00 PM",
    platform: "Lichess.org",
    participants: 64,
    maxParticipants: 128,
    status: "upcoming",
  },
  {
    id: 4,
    name: "Bullet Frenzy",
    type: "arena",
    prize: "$800",
    entryFee: "$3",
    date: "Jan 2, 2026",
    time: "9:00 PM",
    platform: "Chess.com",
    participants: 200,
    maxParticipants: 200,
    status: "completed",
  },
  {
    id: 5,
    name: "Masters Invitational",
    type: "knockout",
    prize: "$5,000",
    entryFee: "$25",
    date: "Jan 15, 2026",
    time: "5:00 PM",
    platform: "Lichess.org",
    participants: 16,
    maxParticipants: 32,
    status: "upcoming",
  },
  {
    id: 6,
    name: "Sunday Swiss Open",
    type: "swiss",
    prize: "$1,200",
    entryFee: "$5",
    date: "Jan 7, 2026",
    time: "4:00 PM",
    platform: "Chess.com",
    participants: 95,
    maxParticipants: 128,
    status: "upcoming",
  },
];

const getStatusStyle = (status: Tournament["status"]) => {
  switch (status) {
    case "live":
      return "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    case "upcoming":
      return "bg-primary/10 text-primary border-primary/30";
    case "completed":
      return "bg-muted text-muted-foreground border-border/50";
  }
};

const getTypeStyle = (type: Tournament["type"]) => {
  switch (type) {
    case "swiss":
      return "bg-blue-500/15 text-blue-600 dark:text-blue-400";
    case "arena":
      return "bg-violet-500/15 text-violet-600 dark:text-violet-400";
    case "knockout":
      return "bg-rose-500/15 text-rose-600 dark:text-rose-400";
  }
};

const TournamentCard = ({ tournament, index }: { tournament: Tournament; index: number }) => {
  return (
    <div 
      className="glass-card p-6 hover-lift group relative overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide ${getTypeStyle(tournament.type)}`}>
              {tournament.type}
            </span>
            <h3 className="text-lg font-heading font-bold mt-3 group-hover:text-primary transition-colors">
              {tournament.name}
            </h3>
          </div>
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${getStatusStyle(tournament.status)}`}>
            {tournament.status === "live" && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            )}
            {tournament.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Prize</span>
              <p className="font-bold text-foreground">{tournament.prize}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-accent" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Entry</span>
              <p className="font-bold text-foreground">{tournament.entryFee}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Clock className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">{tournament.date}</span>
              <p className="font-semibold text-foreground">{tournament.time}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Users className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Players</span>
              <p className="font-semibold text-foreground">{tournament.participants}/{tournament.maxParticipants}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <span className="text-sm text-muted-foreground flex items-center gap-1.5">
            <ExternalLink className="w-4 h-4" />
            {tournament.platform}
          </span>
          <Button 
            variant={tournament.status === "live" ? "hero" : "outline"} 
            size="sm" 
            className="group/btn"
          >
            {tournament.status === "completed" ? "Results" : tournament.status === "live" ? "Join" : "Register"}
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const TournamentsSection = () => {
  return (
    <section id="tournaments" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      
      {/* Chess pieces */}
      <div className="absolute top-40 left-10 text-5xl text-primary/[0.04] animate-rook select-none hidden lg:block">♜</div>
      <div className="absolute bottom-40 right-10 text-5xl text-primary/[0.04] animate-bishop select-none hidden lg:block">♝</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Compete & Win
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Featured <span className="gradient-text">Tournaments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join exciting tournaments, compete against players worldwide, and win amazing prizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament, index) => (
            <div key={tournament.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <TournamentCard tournament={tournament} index={index} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="group">
            View All Tournaments
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;
