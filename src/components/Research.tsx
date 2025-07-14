import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Microscope, FlaskConical, FileBarChart, Award } from "lucide-react";
import researchLab from "@/assets/research-lab.jpg";
import dataAnalysisLab from "@/assets/data-analysis-lab.jpg";

const Research = () => {
  const researchAreas = [
    {
      title: "Nanotechnology Drug Delivery",
      progress: 78,
      status: "In Progress",
      description: "Advanced nanocarriers for targeted radiation protection",
      publications: 12,
      patents: 3
    },
    {
      title: "Synthetic Biology Applications",
      progress: 65,
      status: "Phase II",
      description: "Engineered biological systems for enhanced protection",
      publications: 8,
      patents: 2
    },
    {
      title: "Temporal Pharmacology",
      progress: 92,
      status: "Near Completion",
      description: "Time-phased drug release mechanisms",
      publications: 15,
      patents: 5
    },
    {
      title: "Clinical Safety Trials",
      progress: 45,
      status: "Phase I",
      description: "Human safety and efficacy testing",
      publications: 6,
      patents: 1
    }
  ];

  const facilities = [
    {
      name: "Radiation Biology Laboratory",
      equipment: ["Linear Accelerator", "Cell Culture Facilities", "Flow Cytometry", "Confocal Microscopy"],
      image: researchLab
    },
    {
      name: "Data Analysis Center",
      equipment: ["High-Performance Computing", "Bioinformatics Workstations", "Statistical Software", "AI/ML Platforms"],
      image: dataAnalysisLab
    }
  ];

  const achievements = [
    { icon: Award, label: "Peer-Reviewed Publications", value: "41" },
    { icon: FileBarChart, label: "Patent Applications", value: "11" },
    { icon: FlaskConical, label: "Active Experiments", value: "156" },
    { icon: Microscope, label: "Research Collaborations", value: "8" }
  ];

  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Scientific Research
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Evidence-Based</span> Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our research is grounded in rigorous scientific methodology with peer-reviewed 
              publications and ongoing clinical trials validating our approach.
            </p>
          </div>

          {/* Research Progress */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Current Research Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
                        <Badge variant={area.status === "Near Completion" ? "default" : "secondary"}>
                          {area.status}
                        </Badge>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>{area.publications} Publications</div>
                        <div>{area.patents} Patents</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{area.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{area.progress}%</span>
                      </div>
                      <Progress value={area.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Facilities */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Research Facilities</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-medium overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={facility.image} 
                      alt={facility.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-xl font-bold text-white">{facility.name}</h4>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h5 className="font-semibold mb-3">Key Equipment</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {facility.equipment.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Achievements */}
          <Card className="bg-gradient-card border-primary/20 shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Research Achievements</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Research;