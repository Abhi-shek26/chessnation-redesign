import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Training", href: "/training" },
  { name: "Tournaments", href: "/tournaments" },
  { name: "Technology", href: "/technology" },
  { name: "Franchise", href: "/franchise" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Sponsorship", href: "/sponsorship" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* Main nav */}
      <nav className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-card/90 backdrop-blur-2xl shadow-soft border-b border-border/20' 
          : 'bg-card/60 backdrop-blur-xl'
      }`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0 mr-4">
            <img 
              src={logoImage} 
              alt="ChessNation Logo" 
              className="w-16 h-16 object-contain group-hover:scale-105 transition-all duration-300"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-heading text-xl font-bold gradient-text leading-tight whitespace-nowrap">
                ChessNation
              </span>
              <span className="text-[9px] text-muted-foreground font-medium tracking-wider uppercase whitespace-nowrap">
                Train • Compete • Master
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 bg-secondary/50 rounded-full px-2 py-1 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 font-medium transition-all rounded-full ${
                    isActive 
                      ? 'text-primary bg-primary/10 shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/80'
                  }`}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-11 h-11 rounded-xl bg-secondary/80 hover:bg-secondary flex items-center justify-center transition-all duration-300 group overflow-hidden border border-border/50"
              aria-label="Toggle theme"
            >
              <Sun className={`w-5 h-5 absolute transition-all duration-500 ${
                theme === 'light' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'
              } text-primary`} />
              <Moon className={`w-5 h-5 absolute transition-all duration-500 ${
                theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'
              } text-primary`} />
            </button>

            <Link to="/contact" className="hidden sm:flex">
              <Button variant="hero" size="sm" className="gap-2">
                <Sparkles className="w-4 h-4" />
                Join Training
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden w-11 h-11 rounded-xl bg-secondary/80 hover:bg-secondary flex items-center justify-center transition-colors border border-border/50"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-5 h-5">
                <X className={`w-5 h-5 absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} />
                <Menu className={`w-5 h-5 absolute transition-all duration-300 ${!isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-card/98 backdrop-blur-2xl border-t border-border/20">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-4 py-3 rounded-xl transition-all font-medium ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-border/20">
                <Link to="/login">
                  <Button variant="hero" className="w-full">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Join Training
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
