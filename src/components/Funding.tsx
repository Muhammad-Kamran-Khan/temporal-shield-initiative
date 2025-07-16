import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Building, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Funding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedRaised, setAnimatedRaised] = useState(0);
  const [animatedGoal, setAnimatedGoal] = useState(0);
  const [animatedDonors, setAnimatedDonors] = useState(0);
  const [animatedMonths, setAnimatedMonths] = useState(0);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const fundingBreakdown = [
    {
      category: "Reagents & Materials",
      amount: "Rs. 2,700,000",
      percentage: 54,
      description:
        "Funds will cover specialized ingredients for our three-pill system, including chelators, antioxidants, enzymes, NAD+ boosters, and smart delivery materials like nanomaterials, hydrogels, and capsule coatings.",
    },
    {
      category: "Lab Formulation & Testing",
      amount: "Rs. 1,200,000",
      percentage: 24,
      description:
        "Supports formulation and in vitro testing, including gut-release simulations, isotope-binding studies, enzyme activity assays, toxicity screening, and shelf-stability analysis.",
    },
    {
      category: "Design, Documentation & Scientifc Reports",
      amount: "Rs. 500,000",
      percentage: 10,
      description:
        "Enables the creation of scientific visuals, research papers, lab schematics, and grant documentation to ensure transparent communication and professional reporting.",
    },
    {
      category: "Outreach & Awareness",
      amount: "Rs. 600,000",
      percentage: 12,
      description: "Funds will support public engagement through social media, educational content, animations, and outreach sessions in schools and universities to spread scientific awareness.",
    },
  ];

  const donorTiers = [
    {
      icon: User,
      tier: "Individual Supporter",
      amount: "$50 - $1,000",
      benefits: [
        "Quarterly research updates",
        "Access to research publications",
        "Invitation to virtual presentations",
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Building,
      tier: "Institutional Partner",
      amount: "$10,000 - $100,000",
      benefits: [
        "All Individual Supporter benefits",
        "Quarterly advisory calls with research team",
        "Recognition in research publications",
        "Early access to licensing opportunities",
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
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
        "Naming rights consideration",
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const currentFunding = {
    raised: 125000,
    goal: 5000000,
    donors: 47,
    months: 6,
  };

  const progressPercentage = (currentFunding.raised / currentFunding.goal) * 100;

  // Animation functions
  const animateValue = (start: number, end: number, duration: number, setValue: (value: number) => void) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (end - start) * easeOutQuart;
      setValue(Math.round(current));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            
            // Animate main funding numbers
            animateValue(0, currentFunding.raised, 2000, setAnimatedRaised);
            animateValue(0, currentFunding.goal, 2000, setAnimatedGoal);
            animateValue(0, currentFunding.donors, 1500, setAnimatedDonors);
            animateValue(0, currentFunding.months, 1500, setAnimatedMonths);
            animateValue(0, progressPercentage, 2500, setAnimatedProgress);
            
            // Animate breakdown percentages
            const percentages = fundingBreakdown.map(item => item.percentage);
            setAnimatedPercentages(new Array(percentages.length).fill(0));
            
            percentages.forEach((percentage, index) => {
              setTimeout(() => {
                animateValue(0, percentage, 1500, (value) => {
                  setAnimatedPercentages(prev => {
                    const newArray = [...prev];
                    newArray[index] = value;
                    return newArray;
                  });
                });
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, currentFunding.raised, currentFunding.goal, currentFunding.donors, currentFunding.months, progressPercentage, fundingBreakdown]);

  const scrollToDonate = () => {
    const element = document.getElementById("donate");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id="funding" className="py-20 bg-gradient-to-b from-white via-[#eaf9ff] to-[#eaf9ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4 rounded-full border-gray-200 md:px-2">
              Funding Campaign
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
                Accelerate
              </span>{" "}
              Life-Saving Research
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Join us in revolutionizing radiation protection. Your investment
              will directly fund breakthrough research that could protect
              millions of lives.
            </p>
          </div>

          {/* Funding Progress */}
          <Card className="mb-16 bg-gradient-card border-blue-200 shadow-strong">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    Rs. {(animatedRaised / 1000).toFixed(0)}K
                  </div>
                  <div className="text-gray-500">Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    Rs. {(animatedGoal / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-gray-500">Goal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {animatedDonors}
                  </div>
                  <div className="text-gray-500">Donors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {animatedMonths}
                  </div>
                  <div className="text-gray-500">Months Left</div>
                </div>
              </div>
              <Progress value={animatedProgress} max={100} className="h-4 mb-4 [&>*]:bg-blue-600" />
              <div className="text-center">
                <p className="text-gray-500 mb-4">
                  {animatedProgress.toFixed(1)}% of goal reached
                </p>
                <Button variant="cta" size="lg" className="text-white bg-green-500" onClick={scrollToDonate}>
                  Contribute Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Funding Breakdown */}
          <div className="mb-0">
            <h3 className="text-2xl font-bold text-center mb-8">
              How Your Funding Will Be Used
            </h3>
            <div className="space-y-4">
              {fundingBreakdown.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-r from-white via-[#f2fbff] to-[#eefaff] border border-gray-100 shadow-md"
                >
                  <CardContent className="py-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <div className="flex items-center space-x-3 mb-2 md:mb-0">
                        <h4 className="text-lg font-semibold">
                          {item.category}
                        </h4>
                        <Badge variant="outline" className="rounded-full border-gray-200 px-2.5">{item.percentage}%</Badge>
                      </div>
                      <div className="text-xl font-bold text-blue-600">
                        {item.amount}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">
                      {item.description}
                    </p>
                    <Progress value={animatedPercentages[index] || 0} className="h-2  [&>*]:bg-blue-600" />
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Step 3: Research PDF Attachment */}
            <div className="mt-15 bg-gradient-to-r from-white via-[#f9fdff] to-[#fafeff] rounded-2xl p-8 border border-blue-200 shadow-md max-w-3xl mx-auto mb-0 hover:shadow-lg">
              <h3 className="text-3xl font-bold text-center mb-4">Funding & Research Details</h3>
              <p className="text-gray-600 text-center mb-6">
                See full breakdown of fund usage and research timeline in our detailed PDF.
              </p>
              <div className="flex justify-center">
                <a
                  href="/funding and timeline .pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Download PDF
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funding;