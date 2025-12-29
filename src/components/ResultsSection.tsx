import { Trophy, Medal, Star, TrendingUp, Crown, Users } from "lucide-react";

interface Player {
  rank: number;
  name: string;
  country: string;
  rating: number;
  wins: number;
  earnings: string;
}

const topPlayers: Player[] = [
  { rank: 1, name: "Magnus Carlsen Jr.", country: "🇳🇴", rating: 2847, wins: 142, earnings: "$12,500" },
  { rank: 2, name: "Hikaru Nakamura", country: "🇺🇸", rating: 2812, wins: 128, earnings: "$9,800" },
  { rank: 3, name: "Fabiano Caruana", country: "🇮🇹", rating: 2795, wins: 115, earnings: "$8,200" },
  { rank: 4, name: "Ding Liren", country: "🇨🇳", rating: 2780, wins: 98, earnings: "$6,500" },
  { rank: 5, name: "Ian Nepomniachtchi", country: "🇷🇺", rating: 2765, wins: 87, earnings: "$5,100" },
];

interface Result {
  tournament: string;
  winner: string;
  prize: string;
  date: string;
  participants: number;
}

const recentResults: Result[] = [
  { tournament: "Winter Classic 2025", winner: "Magnus Carlsen Jr.", prize: "$2,500", date: "Dec 20, 2025", participants: 256 },
  { tournament: "Holiday Blitz Championship", winner: "Hikaru Nakamura", prize: "$1,800", date: "Dec 18, 2025", participants: 198 },
  { tournament: "December Rapid Open", winner: "Fabiano Caruana", prize: "$1,500", date: "Dec 15, 2025", participants: 164 },
  { tournament: "Masters Arena Finals", winner: "Ding Liren", prize: "$3,000", date: "Dec 12, 2025", participants: 128 },
];

const getRankConfig = (rank: number) => {
  switch (rank) {
    case 1:
      return { 
        IconComponent: Crown, 
        bg: "bg-gradient-to-br from-amber-400/20 to-amber-500/10", 
        text: "text-amber-500", 
        ring: "ring-2 ring-amber-400/30",
        glow: "shadow-[0_0_20px_rgba(251,191,36,0.15)]"
      };
    case 2:
      return { 
        IconComponent: Medal, 
        bg: "bg-gradient-to-br from-slate-300/20 to-slate-400/10", 
        text: "text-slate-400", 
        ring: "ring-2 ring-slate-400/30",
        glow: ""
      };
    case 3:
      return { 
        IconComponent: Medal, 
        bg: "bg-gradient-to-br from-orange-400/20 to-orange-500/10", 
        text: "text-orange-500", 
        ring: "ring-2 ring-orange-400/30",
        glow: ""
      };
    default:
      return { 
        IconComponent: Star, 
        bg: "bg-secondary", 
        text: "text-muted-foreground", 
        ring: "",
        glow: ""
      };
  }
};

const ResultsSection = () => {
  return (
    <section id="results" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 pattern-dots opacity-40" />
      
      {/* Decorative */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      {/* Chess pieces */}
      <div className="absolute top-20 right-20 text-6xl text-primary/[0.04] animate-king select-none hidden lg:block">♚</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            Leaderboard
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Top <span className="gradient-text">Players</span> & Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See who's dominating the leaderboard and check out our latest tournament results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Leaderboard */}
          <div className="glass-card-strong p-6 md:p-8">
            <h3 className="text-xl font-heading font-bold mb-8 flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              Top Ranked Players
            </h3>
            <div className="space-y-3">
              {topPlayers.map((player) => {
                const rankConfig = getRankConfig(player.rank);
                const IconComponent = rankConfig.IconComponent;
                return (
                  <div
                    key={player.rank}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-secondary/60 ${
                      player.rank <= 3 ? "bg-secondary/40" : "bg-secondary/20"
                    } ${rankConfig.ring} ${rankConfig.glow}`}
                  >
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${rankConfig.bg}`}>
                      <IconComponent className={`w-6 h-6 ${rankConfig.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{player.country}</span>
                        <span className="font-bold truncate">{player.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-3">
                        <span>Rating: <span className="text-foreground font-semibold">{player.rating}</span></span>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <span>Wins: <span className="text-foreground font-semibold">{player.wins}</span></span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-bold text-lg">{player.earnings}</span>
                      <div className="text-xs text-muted-foreground">Total Earnings</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Results */}
          <div className="glass-card-strong p-6 md:p-8">
            <h3 className="text-xl font-heading font-bold mb-8 flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <Medal className="w-6 h-6 text-accent" />
              </div>
              Recent Tournament Results
            </h3>
            <div className="space-y-4">
              {recentResults.map((result, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 border border-border/20 hover:border-primary/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{result.tournament}</h4>
                    <span className="text-primary font-bold text-lg">{result.prize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>
                      Winner: <span className="text-foreground font-semibold">{result.winner}</span>
                    </span>
                    <span>{result.date}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {result.participants} participants
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
