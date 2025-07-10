import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Rocket, Heart, Shield, Users, Building, Atom, Calendar, TrendingUp } from "lucide-react";

const ModernImpact = () => {
  const applications = [
    {
      icon: Rocket,
      title: "Space Exploration",
      description: "Protecting astronauts during long-duration missions to Mars and beyond",
      impact: "Enable safe deep space travel",
      timeline: "2026-2030",
      beneficiaries: "Future astronauts",
      progress: 25,
      color: "blue",
      details: "Critical for Mars missions where radiation exposure is 100x higher than Earth"
    },
    {
      icon: Heart,
      title: "Cancer Treatment",
      description: "Reducing radiation toxicity in radiotherapy patients",
      impact: "50% reduction in side effects",
      timeline: "2027-2029",
      beneficiaries: "18M cancer patients/year",
      progress: 40,
      color: "red",
      details: "Enabling higher radiation doses for better cancer outcomes with fewer complications"
    },
    {
      icon: Shield,
      title: "Nuclear Safety",
      description: "Protection for workers in nuclear facilities and emergency responders",
      impact: "Zero radiation casualties",
      timeline: "2025-2027",
      beneficiaries: "500K nuclear workers",
      progress: 60,
      color: "yellow",
      details: "Essential protection for Chernobyl cleanup crews and nuclear plant workers"
    },
    {
      icon: Users,
      title: "Military Applications",
      description: "Protecting personnel in radiological warfare scenarios",
      impact: "Enhanced force protection",
      timeline: "2026-2028",
      beneficiaries: "2M military personnel",
      progress: 30,
      color: "green",
      details: "Critical for operations in contaminated environments and nuclear threat scenarios"
    }
  ];

  const globalImpact = [
    {
      metric: "Lives Protected",
      value: "20M+",
      description: "Annually across all applications",
      icon: Users,
      trend: "+150%"
    },
    {
      metric: "Medical Procedures",
      value: "18M",
      description: "Safer cancer treatments per year",
      icon: Heart,
      trend: "+200%"
    },
    {
      metric: "Space Missions",
      value: "100%",
      description: "Protection for deep space travel",
      icon: Rocket,
      trend: "NEW"
    },
    {
      metric: "Market Value",
      value: "$50B",
      description: "Potential global market size",
      icon: TrendingUp,
      trend: "+300%"
    }
  ];

  const timeline = [
    { year: "2025", milestone: "Phase I Clinical Trials", status: "upcoming" },
    { year: "2026", milestone: "Phase II Efficacy Studies", status: "planned" },
    { year: "2027", milestone: "Phase III Multi-center Trials", status: "planned" },
    { year: "2028", milestone: "Regulatory Approval", status: "planned" },
    { year: "2029", milestone: "Commercial Launch", status: "planned" },
    { year: "2030", milestone: "Global Deployment", status: "planned" }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              Global Impact
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming <span className="bg-gradient-hero bg-clip-text text-transparent">Human Safety</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our triadic radioprotective system will revolutionize how humanity approaches radiation exposure, 
              enabling safer medical treatments, space exploration, and nuclear operations worldwide.
            </p>
          </motion.div>

          {/* Global Impact Metrics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {globalImpact.map((metric, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gradient-card border border-border/20 shadow-medium h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-full">
                        <metric.icon className="h-6 w-6 text-primary" />
                      </div>
                    </motion.div>
                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-sm font-medium mb-2">{metric.metric}</div>
                    <div className="text-xs text-muted-foreground mb-3">{metric.description}</div>
                    <Badge variant="outline" className="text-xs">
                      {metric.trend}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Application Areas */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">Revolutionary Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`bg-gradient-card border-2 border-${app.color}-500/20 shadow-medium h-full`}>
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <motion.div 
                          className={`p-3 bg-${app.color}-500/10 rounded-xl`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <app.icon className={`h-8 w-8 text-${app.color}-500`} />
                        </motion.div>
                        <div>
                          <CardTitle className="text-xl">{app.title}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {app.timeline}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{app.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Impact</div>
                          <div className="font-medium">{app.impact}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Beneficiaries</div>
                          <div className="font-medium">{app.beneficiaries}</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-muted-foreground">Research Progress</span>
                          <span className="text-xs font-medium">{app.progress}%</span>
                        </div>
                        <Progress value={app.progress} className="h-2" />
                      </div>

                      <div className={`p-3 bg-${app.color}-500/10 rounded-lg border border-${app.color}-500/20`}>
                        <p className="text-xs text-muted-foreground">{app.details}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Timeline */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-card rounded-3xl p-8 border border-border shadow-medium">
              <h3 className="text-3xl font-bold text-center mb-12">Research & Development Timeline</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-primary/20"></div>
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative flex items-center"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        {index % 2 === 0 && (
                          <Card className="bg-background/50 backdrop-blur-sm border border-border/20">
                            <CardContent className="p-4">
                              <div className="text-lg font-semibold text-primary mb-1">{item.year}</div>
                              <div className="text-sm">{item.milestone}</div>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                      
                      {/* Timeline Node */}
                      <motion.div 
                        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      <div className={`flex-1 ${index % 2 === 1 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                        {index % 2 === 1 && (
                          <Card className="bg-background/50 backdrop-blur-sm border border-border/20">
                            <CardContent className="p-4">
                              <div className="text-lg font-semibold text-primary mb-1">{item.year}</div>
                              <div className="text-sm">{item.milestone}</div>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Be Part of Medical History</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your support accelerates the timeline for this life-saving technology. Together, we can create 
                a future where radiation exposure no longer threatens human health and exploration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernImpact;