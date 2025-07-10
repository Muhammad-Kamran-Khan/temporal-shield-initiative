import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  TriadShield
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Pioneering the future of radiation protection through innovative 
                three-phase pharmaceutical technology combining nanotechnology, 
                synthetic biology, and temporal pharmacology.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About the Research
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('solution')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Our Solution
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('impact')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Global Impact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('funding')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Funding Goals
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>funding@triadshield.org</span>
                </li>
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>123 Research Drive<br />Innovation Center, CA 94301</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © 2024 TriadShield Research Initiative. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Research Ethics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;