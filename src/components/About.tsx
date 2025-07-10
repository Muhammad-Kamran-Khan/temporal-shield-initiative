import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Rocket, Hospital, Shield, AlertTriangle, Zap } from "lucide-react";
import scienceBg from "@/assets/science-bg.jpg";

const About = () => {
  const applications = [
    {
      icon: Rocket,
      title: "Space Exploration",
      description: "Protecting astronauts from cosmic radiation during long-duration missions to Mars and beyond",
      color: "text-blue-500"
    },
    {
      icon: Hospital,
      title: "Medical Patients",
      description: "Safeguarding radiotherapy patients from harmful side effects while maintaining treatment efficacy",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "First Responders",
      description: "Emergency personnel protection during nuclear accidents and radiological incidents",
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "Military Personnel",
      description: "Defense against radiological weapons and protection in contaminated environments",
      color: "text-purple-500"
    }
  ];

  const urgencyFactors = [
    {
      icon: AlertTriangle,
      title: "Rising Nuclear Threats",
      description: "Increasing geopolitical tensions and nuclear proliferation create urgent need for protection"
    },
    {
      icon: Rocket,
      title: "Space Race Acceleration",
      description: "Commercial space travel and Mars missions require advanced radiation protection"
    },
    {
      icon: Zap,
      title: "Medical Advancement",
      description: "Growing use of radiation therapy demands better patient protection solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${scienceBg})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              The Challenge
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why <span className="bg-gradient-hero bg-clip-text text-transparent">Radiation Protection</span> Matters Now
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Current radiation protection methods are inadequate for modern challenges. Our three-phase 
              approach represents the first comprehensive solution for temporal radiation protection.
            </p>
          </div>

          {/* Problem Statement */}
          <Card className="mb-16 bg-gradient-card border-destructive/20 shadow-medium">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-destructive/10 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-destructive">The Critical Gap</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Existing radioprotective drugs are limited to single-phase protection and often cause 
                    severe side effects. There's no comprehensive solution that addresses pre-exposure 
                    preparation, real-time protection during exposure, and post-exposure detoxification. 
                    This gap puts millions of people at risk across multiple industries and scenarios.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Applications Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Critical Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 bg-background rounded-full ${app.color}`}>
                        <app.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{app.title}</h4>
                        <p className="text-muted-foreground">{app.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Urgency Factors */}
          <div className="bg-accent/30 rounded-2xl p-8 border border-accent/50">
            <h3 className="text-2xl font-bold text-center mb-8 text-accent-foreground">
              Why Funding Is Urgent
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {urgencyFactors.map((factor, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent rounded-full">
                      <factor.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-accent-foreground">{factor.title}</h4>
                  <p className="text-accent-foreground/80 text-sm">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;