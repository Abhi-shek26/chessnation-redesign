import { ArrowUpRight, Mail, Phone, MapPin, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Training", href: "/training" },
    { name: "Tournaments", href: "/tournaments" },
    { name: "Technology", href: "/technology" },
    { name: "Franchise", href: "/franchise" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

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
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoImage} 
                alt="ChessNation Logo" 
                className="w-36 h-36 object-contain"
              />
              <div>
                <span className="font-heading text-2xl font-bold gradient-text block leading-tight">ChessNation</span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase whitespace-nowrap">Train • Compete • Master</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-lg leading-relaxed">
              Training and building tomorrow's chess talents through world-class coaching, 
              competitive exposure, and cutting-edge technology.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://youtube.com/@chessnation_us?si=FZGjqDcHPHDhReRG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="footer-link-youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61570828734641" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="footer-link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-8">
            <h4 className="font-heading font-bold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-1" />
                <a href="mailto:chessnation.us@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  chessnation.us@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-1" />
                <a href="tel:7708585756" className="text-muted-foreground hover:text-primary transition-colors">
                  (770) 858-5756
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-muted-foreground">
                  11340 Lakefield Dr, STE#200<br />
                  Johns Creek, GA 30097
                </span>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-foreground">Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/training" className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group">
                  Chess Training
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/tournaments" className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group">
                  Tournament Series
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group">
                  Franchise Opportunities
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group">
                  Community Initiatives
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 ChessNation.Us. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
