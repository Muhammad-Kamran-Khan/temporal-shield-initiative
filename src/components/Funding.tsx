import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DollarSign, Users, Target, TrendingUp, Heart, Building, User } from "lucide-react";

const Funding = () => {
  const fundingBreakdown = [
    {
      category: "Research & Development",
      amount: "$1,500,000",
      percentage: 60,
      description: "Nanoparticle synthesis, formulation development, and preclinical studies"
    },
    {
      category: "Laboratory Equipment",
      amount: "$400,000", 
      percentage: 16,
      description: "Specialized equipment for nanotechnology and radiobiology research"
    },
    {
      category: "Personnel",
      amount: "$350,000",
      percentage: 14,
      description: "Research scientists, technicians, and regulatory specialists"
    },
    {
      category: "Regulatory & Compliance",
      amount: "$150,000",
      percentage: 6,
      description: "FDA consultations, regulatory submissions, and compliance activities"
    },
    {
      category: "Operations & Administration",
      amount: "$100,000",
      percentage: 4,
      description: "Facility costs, utilities, and administrative support"
    }
  ];

  const donorTiers = [
    {
      icon: User,
      tier: "Individual Supporter",
      amount: "$50 - $1,000",
      benefits: [
        "Quarterly research updates",
        "Access to research publications",
        "Invitation to virtual presentations"
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Building,
      tier: "Institutional Partner", 
      amount: "$10,000 - $100,000",
      benefits: [
        "All Individual Supporter benefits",
        "Quarterly advisory calls with research team",
        "Recognition in research publications",
        "Early access to licensing opportunities"
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Heart,
      tier: "Founding Sponsor",
      amount: "$100,000+",
      benefits: [
        "All previous tier benefits",
        "Dedicated research liaison",
        "Board advisory position opportunity",
        "Co-development partnership discussions",
        "Naming rights consideration"
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const currentFunding = {
    raised: 125000,
    goal: 2500000,
    donors: 47,
    daysLeft: 365
  };

  const progressPercentage = (currentFunding.raised / currentFunding.goal) * 100;

  const scrollToDonate = () => {
    const element = document.getElementById('donate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="funding" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Funding Campaign
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Accelerate</span> Life-Saving Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us in revolutionizing radiation protection. Your investment will directly fund 
              breakthrough research that could protect millions of lives.
            </p>
          </div>

          {/* Funding Progress */}
          <Card className="mb-16 bg-gradient-card border-primary/20 shadow-strong">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    ${(currentFunding.raised / 1000).toFixed(0)}K
                  </div>
                  <div className="text-muted-foreground">Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    ${(currentFunding.goal / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-muted-foreground">Goal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {currentFunding.donors}
                  </div>
                  <div className="text-muted-foreground">Donors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {currentFunding.daysLeft}
                  </div>
                  <div className="text-muted-foreground">Days Left</div>
                </div>
              </div>
              <Progress value={progressPercentage} className="h-4 mb-4" />
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  {progressPercentage.toFixed(1)}% of goal reached
                </p>
                <Button variant="cta" size="lg" onClick={scrollToDonate}>
                  Contribute Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Funding Breakdown */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">How Your Funding Will Be Used</h3>
            <div className="space-y-4">
              {fundingBreakdown.map((item, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <div className="flex items-center space-x-3 mb-2 md:mb-0">
                        <h4 className="text-lg font-semibold">{item.category}</h4>
                        <Badge variant="outline">{item.percentage}%</Badge>
                      </div>
                      <div className="text-xl font-bold text-primary">{item.amount}</div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                    <Progress value={item.percentage} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Donor Tiers */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Partnership Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {donorTiers.map((tier, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 ${tier.bgColor} rounded-full`}>
                        <tier.icon className={`h-6 w-6 ${tier.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{tier.tier}</CardTitle>
                        <div className={`text-xl font-bold ${tier.color}`}>{tier.amount}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4"
                      onClick={scrollToDonate}
                    >
                      Contribute
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funding;