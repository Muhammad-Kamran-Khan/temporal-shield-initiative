import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Globe, Clock, Award, Lightbulb } from "lucide-react";

const EnhancedAbout = () => {
  const challenges = [
    {
      icon: Users,
      title: "Vulnerable Populations",
      description: "Astronauts, medical patients, military personnel, and first responders face radiation exposure daily",
      stats: "10M+ people at risk globally"
    },
    {
      icon: Target,
      title: "Current Limitations",
      description: "Existing radiation protection is reactive, incomplete, and lacks temporal coordination",
      stats: "60% protection gap in current methods"
    },
    {
      icon: Clock,
      title: "Time-Critical Response",
      description: "Radiation damage occurs in seconds, requiring immediate and sustained protection",
      stats: "< 30 seconds for optimal intervention"
    }
  ];

  const opportunities = [
    {
      icon: Globe,
      title: "Global Impact",
      description: "Space exploration, medical treatments, nuclear safety, and emergency response",
      benefit: "Millions of lives protected"
    },
    {
      icon: Award,
      title: "Medical Breakthroughs",
      description: "Safer cancer treatments, enhanced radiotherapy, reduced side effects",
      benefit: "50% reduction in radiation toxicity"
    },
    {
      icon: Lightbulb,
      title: "Technology Innovation",
      description: "Pioneering nanotechnology applications in preventive medicine",
      benefit: "Next-generation pharmaceutical delivery"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              The Critical Need
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Why This Research <span className="bg-gradient-hero bg-clip-text text-transparent">Matters</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Radiation exposure poses an immediate and growing threat to human health across multiple domains. 
              Our triadic approach represents the first comprehensive solution to this critical challenge.
            </p>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-card rounded-3xl p-8 border border-border shadow-medium">
              <h3 className="text-3xl font-bold mb-8 text-center">The Radiation Protection Challenge</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="flex justify-center mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="p-4 bg-destructive/10 rounded-full">
                        <challenge.icon className="h-8 w-8 text-destructive" />
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-semibold mb-3">{challenge.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{challenge.description}</p>
                    <div className="text-sm font-medium text-destructive bg-destructive/10 rounded-full px-4 py-2">
                      {challenge.stats}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6">Our Revolutionary Approach</h3>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                The first-ever <span className="text-primary font-semibold">temporally-coordinated pharmaceutical system</span> 
                that provides comprehensive protection before, during, and after radiation exposure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Before",
                  title: "Prophylactic Preparation",
                  description: "Cellular conditioning and DNA repair enhancement",
                  color: "bg-blue-500/10 border-blue-500/20 text-blue-500",
                  features: ["Antioxidant saturation", "Gene upregulation", "Tissue targeting"]
                },
                {
                  phase: "During", 
                  title: "Real-Time Protection",
                  description: "Immediate damage mitigation and repair activation",
                  color: "bg-green-500/10 border-green-500/20 text-green-500",
                  features: ["Enzyme deployment", "ROS scavenging", "Isotope binding"]
                },
                {
                  phase: "After",
                  title: "Recovery Enhancement", 
                  description: "Detoxification and regenerative support",
                  color: "bg-purple-500/10 border-purple-500/20 text-purple-500",
                  features: ["Chelation therapy", "Immune modulation", "Tissue repair"]
                }
              ].map((approach, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`h-full ${approach.color} border-2 hover:shadow-strong transition-all duration-300`}>
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold mb-2">{approach.phase}</div>
                        <h4 className="text-xl font-semibold mb-3">{approach.title}</h4>
                        <p className="text-muted-foreground mb-4">{approach.description}</p>
                      </div>
                      <ul className="space-y-2">
                        {approach.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-card rounded-3xl p-8 border border-border shadow-medium">
              <h3 className="text-3xl font-bold mb-8 text-center">Transformative Impact Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {opportunities.map((opportunity, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="flex justify-center mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="p-4 bg-success/10 rounded-full">
                        <opportunity.icon className="h-8 w-8 text-success" />
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-semibold mb-3">{opportunity.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{opportunity.description}</p>
                    <div className="text-sm font-medium text-success bg-success/10 rounded-full px-4 py-2">
                      {opportunity.benefit}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Research Innovation */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Scientific Innovation</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                This research represents a paradigm shift from reactive radiation treatment to 
                <span className="text-primary font-semibold"> proactive, intelligent protection</span>. 
                By combining nanotechnology, synthetic biology, and temporal pharmacology, we're creating 
                the world's first comprehensive radiation protection system.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAbout;