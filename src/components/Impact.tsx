import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Globe, DollarSign, Calendar, TrendingUp, Award } from "lucide-react";

const Impact = () => {
  const marketData = [
    {
      icon: Users,
      title: "Potential Beneficiaries",
      value: "50M+",
      description: "People worldwide at risk from radiation exposure",
      progress: 85
    },
    {
      icon: DollarSign,
      title: "Market Size",
      value: "$8.2B",
      description: "Global radioprotective drugs market by 2030",
      progress: 92
    },
    {
      icon: Globe,
      title: "Geographic Reach",
      value: "195",
      description: "Countries that could benefit from this technology",
      progress: 100
    }
  ];

  const milestones = [
    {
      phase: "Phase 1",
      title: "Preclinical Development",
      duration: "18 months",
      budget: "$800K",
      deliverables: [
        "Nanoparticle synthesis and characterization",
        "In vitro efficacy testing",
        "Toxicology studies",
        "Formulation optimization"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Animal Studies",
      duration: "24 months",
      budget: "$1.2M",
      deliverables: [
        "Safety studies in animal models",
        "Efficacy validation in radiation exposure models",
        "Pharmacokinetics and bioavailability",
        "Regulatory pathway preparation"
      ]
    },
    {
      phase: "Phase 3",
      title: "Clinical Translation",
      duration: "36 months", 
      budget: "$500K",
      deliverables: [
        "IND application preparation",
        "Clinical trial design",
        "Manufacturing scale-up",
        "Regulatory approval process"
      ]
    }
  ];

  const outcomes = [
    {
      icon: Users,
      title: "Lives Saved",
      description: "Protect millions from radiation-induced cancers and acute radiation syndrome"
    },
    {
      icon: TrendingUp,
      title: "Economic Impact",
      description: "Reduce healthcare costs by preventing radiation-related diseases"
    },
    {
      icon: Award,
      title: "Scientific Leadership",
      description: "Establish new paradigm in radiation protection and emergency preparedness"
    }
  ];

  return (
    <section id="impact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Global Impact
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transforming <span className="bg-gradient-hero bg-clip-text text-transparent">Global Health</span> Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our breakthrough technology will revolutionize radiation protection across multiple sectors, 
              saving lives and advancing human exploration capabilities.
            </p>
          </div>

          {/* Market Opportunity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {marketData.map((item, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-primary">{item.value}</div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <Progress value={item.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Development Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Development Roadmap</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="bg-gradient-card border-l-4 border-l-primary shadow-medium">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{milestone.phase}</Badge>
                      <div className="text-sm text-muted-foreground flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{milestone.duration}</span>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                    <div className="text-2xl font-bold text-success mb-4">{milestone.budget}</div>
                    <ul className="space-y-2">
                      {milestone.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="bg-accent/20 rounded-2xl p-8 border border-accent/30">
            <h3 className="text-2xl font-bold text-center mb-8">Expected Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent/50 rounded-full">
                      <outcome.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-accent-foreground">{outcome.title}</h4>
                  <p className="text-accent-foreground/80 text-sm">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;