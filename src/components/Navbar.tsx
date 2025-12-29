import { Mail, Phone, Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Tournaments", href: "/#tournaments" },
  { name: "Results", href: "/#results" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          <Link to="/#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-royal group-hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="text-xl text-primary-foreground font-bold">♔</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold gradient-text leading-tight">
                ChessNation
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
                Play • Compete • Win
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 bg-secondary/50 rounded-full px-2 py-1 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground font-medium transition-all rounded-full hover:bg-background/80"
              >
                {link.name}
              </Link>
            ))}
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

            <Link to="/auth" className="hidden sm:flex">
              <Button variant="hero" size="sm" className="gap-2">
                <Sparkles className="w-4 h-4" />
                Join Now
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
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all font-medium"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border/20">
                <Link to="/auth">
                  <Button variant="hero" className="w-full">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Join Now
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
