import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 bg-card border-t border-border/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-chess-board opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      
      {/* Chess piece */}
      <div className="absolute bottom-10 right-20 text-8xl text-primary/[0.03] select-none hidden lg:block">♔</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-royal">
                <span className="text-xl text-primary-foreground font-bold">♔</span>
              </div>
              <div>
                <span className="font-heading text-2xl font-bold gradient-text block leading-tight">ChessNation</span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Play • Compete • Win</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              The premier destination for competitive online chess tournaments. 
              Join thousands of players and become the next champion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Tournaments", "Results", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-foreground">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Fair Play Rules", "Refund Policy"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 ChessNation.Us. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
