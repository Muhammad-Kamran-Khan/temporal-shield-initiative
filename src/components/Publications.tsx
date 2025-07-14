import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Quote } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Preliminary Studies on Multi-Phase Radiation Protection: A Novel Approach",
      authors: "Chen, S., Rodriguez, M., Watson, E.",
      journal: "Radiation Research Society Conference Proceedings",
      year: "2024",
      type: "Conference Abstract",
      abstract: "Initial proof-of-concept studies demonstrate the feasibility of a three-phase pharmaceutical approach to radiation protection, showing promising results in cellular studies."
    },
    {
      title: "Nanotechnology Applications in Radioprotective Drug Design: Literature Review",
      authors: "Rodriguez, M., Chen, S.",
      journal: "Biomedical Research Quarterly",
      year: "2024",
      type: "Review Article",
      abstract: "Comprehensive analysis of current nanotechnology approaches in radiation protection, identifying gaps and opportunities for innovative drug delivery systems."
    },
    {
      title: "Pre-Clinical Safety Assessment of Novel Radioprotective Compounds",
      authors: "Watson, E., Chen, S., Thompson, L.",
      journal: "Toxicology Research Letters",
      year: "2023",
      type: "Preliminary Study",
      abstract: "Initial safety evaluation of radioprotective compound formulations in cellular and small animal models, establishing foundation for future clinical development."
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Preliminary Study": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Review Article": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Conference Abstract": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
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
              <span className="bg-gradient-hero bg-clip-text text-transparent">Preliminary</span> Research & Publications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our early-stage research establishes the scientific foundation for our three-phase 
              radiation protection system. These preliminary studies support our funding proposal.
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
                          <div className="text-xs">
                            {pub.type === "Conference Abstract" ? "Presented 2024" :
                             pub.type === "Review Article" ? "Under Review" :
                             "Pre-Clinical Stage"}
                          </div>
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
                <h3 className="text-2xl font-bold mb-4">Research Database & Protocols</h3>
                <p className="text-muted-foreground mb-6">
                  Access our preliminary research data, experimental protocols, and methodology. 
                  All research follows institutional review board guidelines and ethical standards.
                </p>
                <Button variant="cta" size="lg" className="group">
                  View Research Protocols
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