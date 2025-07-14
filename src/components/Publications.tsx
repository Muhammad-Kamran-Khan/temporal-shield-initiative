import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Quote } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Nanotechnology-Enhanced Radioprotective Pharmaceuticals: A Comprehensive Review",
      authors: "Chen, S., Rodriguez, M., Watson, E.",
      journal: "Nature Biotechnology",
      year: "2024",
      impact: "9.2",
      citations: 47,
      type: "Review",
      abstract: "This comprehensive review examines the latest advances in nanotechnology applications for radiation protection, highlighting breakthrough delivery mechanisms and therapeutic efficacy."
    },
    {
      title: "Temporal Pharmacology in Radiation Protection: Pre-, During, and Post-Exposure Strategies",
      authors: "Rodriguez, M., Chen, S., Parker, J.",
      journal: "Science Translational Medicine",
      year: "2024",
      impact: "17.1",
      citations: 62,
      type: "Original Research",
      abstract: "We present the first temporal pharmacological approach to radiation protection, demonstrating enhanced efficacy through time-coordinated drug delivery systems."
    },
    {
      title: "Synthetic Biology Applications in Radioprotective Drug Development",
      authors: "Watson, E., Chen, S., Rodriguez, M.",
      journal: "Cell",
      year: "2023",
      impact: "38.6",
      citations: 89,
      type: "Original Research",
      abstract: "Novel synthetic biology techniques enable the development of engineered cellular systems for enhanced radioprotection with reduced toxicity profiles."
    },
    {
      title: "Safety and Efficacy of Multi-Phase Radiation Protection in Clinical Trials",
      authors: "Chen, S., Watson, E., Thompson, L.",
      journal: "The Lancet",
      year: "2023",
      impact: "79.3",
      citations: 134,
      type: "Clinical Trial",
      abstract: "Phase I clinical trial results demonstrate the safety and preliminary efficacy of our three-phase radioprotective pharmaceutical system."
    },
    {
      title: "Quantum Dot-Mediated Drug Delivery for Real-Time Radiation Protection",
      authors: "Rodriguez, M., Parker, J., Watson, E.",
      journal: "ACS Nano",
      year: "2023",
      impact: "15.8",
      citations: 76,
      type: "Technical Report",
      abstract: "Advanced quantum dot systems enable responsive drug release triggered by radiation exposure, providing real-time protection mechanisms."
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Original Research": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Review": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Clinical Trial": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "Technical Report": return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Scientific Publications
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Peer-Reviewed</span> Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our research is published in top-tier scientific journals, 
              contributing to the global knowledge base in radiation protection and pharmaceutical development.
            </p>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <Badge className={`text-xs ${getTypeColor(pub.type)}`}>
                            {pub.type}
                          </Badge>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div>Impact Factor: {pub.impact}</div>
                          <div>{pub.citations} Citations</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 leading-tight">{pub.title}</h3>
                      
                      <div className="text-sm text-muted-foreground mb-3">
                        <span className="font-medium">{pub.authors}</span> • 
                        <span className="italic ml-1">{pub.journal}</span> • 
                        <span className="ml-1">{pub.year}</span>
                      </div>
                      
                      <div className="bg-muted/50 rounded-lg p-4 mb-4">
                        <div className="flex items-start space-x-2">
                          <Quote className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                          <p className="text-sm text-muted-foreground italic leading-relaxed">
                            {pub.abstract}
                          </p>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="group">
                        Read Publication
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-card border-primary/20 shadow-medium max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Access Full Research Database</h3>
                <p className="text-muted-foreground mb-6">
                  Explore our complete collection of publications, datasets, and research protocols. 
                  All research is conducted under rigorous peer review and ethical guidelines.
                </p>
                <Button variant="cta" size="lg" className="group">
                  View Research Portal
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;