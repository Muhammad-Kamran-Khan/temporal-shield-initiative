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
      progress: 25,
      status: "Early Stage",
      description: "Developing nanocarriers for targeted radiation protection",
      publications: 2,
      patents: 0
    },
    {
      title: "Synthetic Biology Applications", 
      progress: 15,
      status: "Concept Phase",
      description: "Exploring engineered biological systems for protection",
      publications: 1,
      patents: 0
    },
    {
      title: "Temporal Pharmacology",
      progress: 35,
      status: "Proof of Concept",
      description: "Time-phased drug release mechanisms research",
      publications: 2,
      patents: 1
    },
    {
      title: "Pre-Clinical Safety Studies",
      progress: 20,
      status: "Initial Testing",
      description: "Safety evaluation in laboratory models",
      publications: 1,
      patents: 0
    }
  ];

  const facilities = [
    {
      name: "University Research Laboratory",
      equipment: ["Basic Cell Culture", "Spectrophotometry", "Small Animal Models", "Data Analysis Software"],
      image: researchLab
    },
    {
      name: "Computational Research Center",
      equipment: ["Molecular Modeling", "Statistical Analysis", "Literature Database", "Collaboration Platform"],
      image: dataAnalysisLab
    }
  ];

  const achievements = [
    { icon: Award, label: "Conference Presentations", value: "6" },
    { icon: FileBarChart, label: "Patent Application", value: "1" },
    { icon: FlaskConical, label: "Active Experiments", value: "12" },
    { icon: Microscope, label: "Research Collaborations", value: "3" }
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
              <span className="bg-gradient-hero bg-clip-text text-transparent">Early-Stage</span> Research Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our preliminary research establishes the scientific foundation for breakthrough 
              radiation protection. Funding will accelerate development and enable clinical trials.
            </p>
          </div>

          {/* Research Progress */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Current Research Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
                        <Badge variant={area.status === "Proof of Concept" ? "default" : "secondary"}>
                          {area.status}
                        </Badge>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>{area.publications} Study{area.publications !== 1 ? 'ies' : 'y'}</div>
                        <div>{area.patents} Patent{area.patents !== 1 ? 's' : ''}</div>
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
            <h3 className="text-2xl font-bold text-center mb-8">Available Research Infrastructure</h3>
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
              <h3 className="text-2xl font-bold text-center mb-8">Research Milestones</h3>
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