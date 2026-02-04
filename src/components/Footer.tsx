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
    <footer className="py-10 bg-card border-t border-border/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-chess-board opacity-40" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[60px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logoImage} 
                alt="ChessNation Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <span className="font-heading text-lg font-bold gradient-text block leading-tight">ChessNation</span>
                <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase whitespace-nowrap">Train • Compete • Master</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Training and building tomorrow's chess talents through world-class coaching, 
              competitive exposure, and cutting-edge technology.
            </p>
            <div className="flex gap-2">
              <a 
                href="https://youtube.com/@chessnation_us?si=FZGjqDcHPHDhReRG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="footer-link-youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61570828734641" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="footer-link-facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-4">
            <h4 className="font-heading font-semibold text-sm mb-3 text-foreground">Quick Links</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3 text-foreground">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-primary mt-0.5" />
                <a href="mailto:chessnation.us@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  chessnation.us@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-primary mt-0.5" />
                <a href="tel:7708585756" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  (770) 858-5756
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  11340 Lakefield Dr, STE#200<br />
                  Johns Creek, GA 30097
                </span>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3 text-foreground">Programs</h4>
            <ul className="space-y-1.5">
              <li>
                <Link to="/training" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                  Chess Training
                </Link>
              </li>
              <li>
                <Link to="/tournaments" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                  Tournament Series
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                  Franchise Opportunities
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                  Community Initiatives
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 ChessNation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
