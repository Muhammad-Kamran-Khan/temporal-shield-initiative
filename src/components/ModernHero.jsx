import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Heart, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const ModernHero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const stats = [
    { value: "$2.5M", label: "Funding Goal", icon: Shield },
    { value: "3", label: "Protective Phases", icon: Zap },
    { value: "Millions", label: "Lives Protected", icon: Heart }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Hero Image with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)",
              "radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)",
              "radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -20, 20],
                x: [null, -10, 10],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Animated Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-lg rounded-full px-6 py-3 border border-accent/30"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="h-5 w-5 text-accent-foreground" />
            </motion.div>
            <span className="text-sm font-medium text-accent-foreground">
              Breakthrough Radiation Protection Technology
            </span>
          </motion.div>

          {/* Main Headline with Typewriter Effect */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <motion.span 
                className="bg-gradient-hero bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Triadic Radioprotective
              </motion.span>
              <br />
              <motion.span 
                className="text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Pharmacology
              </motion.span>
            </h1>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Revolutionary <span className="text-primary font-semibold">three-phase pharmaceutical system</span> providing comprehensive protection 
            against ionizing radiation through advanced <span className="text-success font-semibold">nanotechnology</span> and <span className="text-warning font-semibold">synthetic biology</span>
          </motion.p>

          {/* Interactive Key Benefits */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-16"
          >
            {[
              { icon: Shield, text: "Pre-Exposure Protection", color: "primary" },
              { icon: Zap, text: "Real-Time Mitigation", color: "success" },
              { icon: Heart, text: "Post-Exposure Recovery", color: "warning" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className={`p-4 bg-${benefit.color}/10 rounded-2xl border border-${benefit.color}/20 group-hover:bg-${benefit.color}/20 transition-all duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <benefit.icon className={`h-8 w-8 text-${benefit.color}`} />
                </motion.div>
                <span className="text-lg font-medium group-hover:text-primary transition-colors">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => scrollToSection('donate')}
                className="group relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center">
                  Fund This Research
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => scrollToSection('solution')}
                className="bg-background/10 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              >
                Explore 3D Solution
              </Button>
            </motion.div>
          </motion.div>

          {/* Dynamic Stats */}
          <motion.div 
            variants={itemVariants}
            className="pt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                    currentStat === index 
                      ? 'bg-primary/10 border-primary/30 scale-105' 
                      : 'bg-background/5 border-border/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={currentStat === index ? { rotate: 360 } : {}}
                    transition={{ duration: 2 }}
                    className="flex justify-center mb-4"
                  >
                    <div className={`p-3 rounded-full ${currentStat === index ? 'bg-primary/20' : 'bg-muted/20'}`}>
                      <stat.icon className={`h-8 w-8 ${currentStat === index ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                  </motion.div>
                  <motion.div 
                    className={`text-4xl font-bold mb-2 ${currentStat === index ? 'text-primary' : 'text-foreground'}`}
                    animate={currentStat === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium">Discover More</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernHero;