import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, Sparkles, ArrowRight, Play } from "lucide-react";
import ChessPieces from "@/components/ChessPieces";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Chess pattern overlay */}
      <div className="absolute inset-0 bg-chess-board opacity-40" />
      <div className="absolute inset-0 bg-chess-pattern" />
      {/* Chess pieces layer */}
      <ChessPieces />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-[10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-[10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[150px]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8 animate-fade-in backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Online Chess Tournaments</span>
            <Sparkles className="w-4 h-4" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 animate-slide-up leading-[1.1]">
            <span className="text-foreground">Master the</span>
            <br />
            <span className="gradient-text">Royal Game</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up stagger-2 leading-relaxed">
            Compete in world-class tournaments, challenge players globally, and rise through the ranks. 
            Your path to chess mastery begins here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-3">
            <Link to="/auth" className="contents">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Live
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-20 animate-slide-up stagger-4 max-w-3xl mx-auto">
            {[
              { icon: Trophy, value: "150+", label: "Tournaments", color: "from-primary/20 to-primary/5" },
              { icon: Users, value: "10K+", label: "Active Players", color: "from-accent/20 to-accent/5" },
              { icon: Calendar, value: "$50K+", label: "Prize Pool", color: "from-primary/20 to-accent/5" },
            ].map((stat, index) => (
              <div key={index} className="group glass-card p-5 md:p-7 hover-lift cursor-default">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-3xl md:text-4xl font-heading font-bold text-foreground block">{stat.value}</span>
                <span className="text-sm text-muted-foreground mt-1 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
