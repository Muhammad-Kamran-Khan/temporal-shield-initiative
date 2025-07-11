import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 border border-accent">
            <Shield className="h-4 w-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">
              Breakthrough Radiation Protection Technology
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Triadic Radioprotective
            </span>
            <br />
            <span className="text-foreground">Pharmacology</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionary three-phase pharmaceutical system providing comprehensive protection 
            against ionizing radiation through advanced nanotechnology and synthetic biology
          </p>

          {/* Key Benefits */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 my-12">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <span className="text-lg font-medium">Pre-Exposure Protection</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-success/10 rounded-full">
                <Zap className="h-6 w-6 text-success" />
              </div>
              <span className="text-lg font-medium">Real-Time Mitigation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-warning/10 rounded-full">
                <Heart className="h-6 w-6 text-warning" />
              </div>
              <span className="text-lg font-medium">Post-Exposure Recovery</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => scrollToSection('donate')}
              className="group"
            >
              Fund This Research
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$2.5M</div>
              <div className="text-muted-foreground">Funding Goal</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-muted-foreground">Protective Phases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Millions</div>
              <div className="text-muted-foreground">Lives Protected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;