import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              TriadShield
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Solution
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Impact
            </button>
            <button 
              onClick={() => scrollToSection('funding')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Funding
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
            <Button variant="cta" onClick={() => scrollToSection('donate')}>
              Fund This Research
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('solution')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Solution
              </button>
              <button 
                onClick={() => scrollToSection('impact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Impact
              </button>
              <button 
                onClick={() => scrollToSection('funding')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Funding
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" onClick={() => scrollToSection('contact')}>
                  Contact
                </Button>
                <Button variant="cta" onClick={() => scrollToSection('donate')}>
                  Fund This Research
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;