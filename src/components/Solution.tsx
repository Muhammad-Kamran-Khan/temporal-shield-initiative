import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, RefreshCw, Clock, Dna, Atom } from "lucide-react";
import pillsImage from "@/assets/pills-diagram.jpg";
import pharmaResearch from "@/assets/pharma-research.jpg";

const Solution = () => {
  const pills = [
    {
      phase: "Pre-Exposure",
      name: "Sentinel Pill",
      icon: Shield,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      description: "Preconditions biological systems by enhancing endogenous radioprotective pathways",
      keyFeatures: [
        "Nano-encapsulated antioxidants (amifostine derivatives, glutathione mimetics)",
        "Epigenetic primers using CRISPRa technology",
        "Targeted delivery to bone marrow, GI tract, and neuronal tissue",
        "Upregulation of DNA repair genes (TP53, ATM, BRCA1)"
      ],
      mechanism: "Creates transient cellular resilience through antioxidant saturation and DNA repair pathway activation"
    },
    {
      phase: "During Exposure",
      name: "Aegis Pill", 
      icon: Zap,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      description: "Provides real-time radiomitigation during exposure with immediate protective deployment",
      keyFeatures: [
        "Synthetic DNA repair enzymes (photolyases, glycosylases)",
        "Quantum dot-mediated ROS sensors with responsive release",
        "Self-assembling peptide hydrogels for isotope binding",
        "Real-time biomarker detection and payload activation"
      ],
      mechanism: "Triggered release upon radiation exposure, deploying enzymes and radical scavengers in real-time"
    },
    {
      phase: "Post-Exposure",
      name: "Purge Pill",
      icon: RefreshCw,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10", 
      borderColor: "border-purple-500/20",
      description: "Facilitates systemic chelation and promotes intracellular repair and immunomodulation",
      keyFeatures: [
        "Chelating nanopolymers for isotope binding (Cs-137, Sr-90, I-131)",
        "Microbiota-responsive release mechanisms",
        "Postbiotic repair factors (butyrate, NAD+ boosters)",
        "Mitochondrial recovery and anti-inflammatory response"
      ],
      mechanism: "Systemic and local detoxification with tissue regeneration through metabolic enhancement"
    }
  ];

  const innovations = [
    {
      icon: Dna,
      title: "Nanotechnology Integration",
      description: "Advanced nanocarriers for targeted delivery and controlled release"
    },
    {
      icon: Atom,
      title: "Synthetic Biology",
      description: "Engineered biological systems for enhanced radioprotection"
    },
    {
      icon: Clock,
      title: "Temporal Coordination",
      description: "Time-phased approach matching biological response patterns"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Our Solution
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Revolutionary</span> Three-Phase Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The world's first comprehensive radiation protection system combining nanotechnology, 
              synthetic biology, and temporal pharmacology for complete coverage.
            </p>
          </div>

          {/* Research Laboratory Image */}
          <div className="text-center mb-16">
            <div className="relative">
              <img 
                src={pharmaResearch} 
                alt="Pharmaceutical research laboratory"
                className="mx-auto rounded-2xl shadow-strong max-w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Advanced Pharmaceutical Development</h3>
                <p className="text-white/90">State-of-the-art laboratory facilities for radiation protection research</p>
              </div>
            </div>
          </div>

          {/* Pills Detail Cards */}
          <div className="space-y-8 mb-16">
            {pills.map((pill, index) => (
              <Card key={index} className={`bg-gradient-card ${pill.borderColor} border-2 shadow-medium hover:shadow-strong transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 ${pill.bgColor} rounded-xl`}>
                      <pill.icon className={`h-8 w-8 ${pill.color}`} />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        Phase {index + 1}: {pill.phase}
                      </Badge>
                      <CardTitle className="text-2xl">{pill.name}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg">{pill.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Key Components</h4>
                    <ul className="space-y-2">
                      {pill.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`p-4 ${pill.bgColor} rounded-lg border ${pill.borderColor}`}>
                    <h4 className="font-semibold mb-2">Mechanism of Action</h4>
                    <p className="text-sm">{pill.mechanism}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Innovation Highlights */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-medium">
            <h3 className="text-2xl font-bold text-center mb-8">Breakthrough Innovations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {innovations.map((innovation, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <innovation.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{innovation.title}</h4>
                  <p className="text-muted-foreground text-sm">{innovation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;