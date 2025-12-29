import { Shield, Target, Zap, Globe, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Fair Play Guaranteed",
    description: "Advanced anti-cheat systems ensure fair competition for all players.",
    gradient: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-500",
  },
  {
    icon: Target,
    title: "Skill-Based Matching",
    description: "Play against opponents of your level with our intelligent rating system.",
    gradient: "from-violet-500/20 to-violet-600/5",
    iconColor: "text-violet-500",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "Winners receive their prizes within 24 hours of tournament completion.",
    gradient: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-500",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Connect with chess enthusiasts from over 100 countries worldwide.",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-500",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      
      {/* Chess pieces */}
      <div className="absolute top-32 left-[10%] text-7xl text-primary/[0.04] animate-queen select-none hidden lg:block">♛</div>
      <div className="absolute bottom-32 right-[10%] text-5xl text-primary/[0.04] animate-pawn select-none hidden lg:block">♟</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              About Us
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-[1.1]">
              The Ultimate <br />
              <span className="gradient-text">Chess Platform</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              ChessNation is the premier destination for competitive online chess. 
              Founded by passionate chess players, we've built a platform that combines 
              the thrill of competition with the elegance of the royal game.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Our mission is to make high-quality chess tournaments accessible to everyone, 
              from beginners looking to test their skills to grandmasters seeking worthy opponents. 
              With fair play at our core and a supportive community, we're redefining online chess competition.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { value: "150+", label: "Tournaments/Month" },
                { value: "100+", label: "Countries" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-5 rounded-2xl glass-card">
                  <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right content - Features */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-7 hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="font-heading font-bold mb-3 text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
