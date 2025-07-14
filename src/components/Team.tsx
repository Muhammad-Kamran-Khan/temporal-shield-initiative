import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, Users, GraduationCap, Mail, Linkedin } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";

const Team = () => {
  const researchers = [
    {
      name: "Dr. Sarah Chen",
      title: "Lead Researcher",
      specialization: "Radiation Biology & Pharmacology",
      education: "PhD in Molecular Biology, MIT",
      experience: "15+ years in radioprotective drug development",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      email: "s.chen@radprotect.org",
      linkedin: "sarahchen-phd"
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Senior Research Scientist",
      specialization: "Biochemistry & Drug Design",
      education: "PhD in Biochemistry, Stanford University",
      experience: "12+ years in pharmaceutical research",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      email: "m.rodriguez@radprotect.org",
      linkedin: "michaelrodriguez-biochem"
    },
    {
      name: "Dr. Emily Watson",
      title: "Research Scientist",
      specialization: "Toxicology & Clinical Research",
      education: "PhD in Toxicology, Johns Hopkins",
      experience: "8+ years in clinical drug trials",
      image: "https://images.unsplash.com/photo-1594824020348-198b2d4b2ad1?w=400&h=400&fit=crop&crop=face",
      email: "e.watson@radprotect.org",
      linkedin: "emilywatson-toxicology"
    }
  ];

  const coordinators = [
    {
      name: "Dr. James Parker",
      title: "Project Coordinator",
      specialization: "Research Management & Strategy",
      education: "PhD in Project Management, Harvard",
      experience: "10+ years managing biomedical research projects",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      email: "j.parker@radprotect.org",
      linkedin: "jamesparker-pm"
    },
    {
      name: "Lisa Thompson",
      title: "Operations Coordinator", 
      specialization: "Laboratory Operations & Compliance",
      education: "MS in Biomedical Science, UCLA",
      experience: "7+ years in research operations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      email: "l.thompson@radprotect.org",
      linkedin: "lisathompson-ops"
    }
  ];

  const TeamMemberCard = ({ member, type }) => (
    <Card className="group bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative mb-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
            />
            <div className="absolute -bottom-2 -right-2 p-2 bg-primary rounded-full">
              {type === 'researcher' ? (
                <Microscope className="h-4 w-4 text-primary-foreground" />
              ) : (
                <Users className="h-4 w-4 text-primary-foreground" />
              )}
            </div>
          </div>

          {/* Name and Title */}
          <h4 className="text-xl font-bold mb-1">{member.name}</h4>
          <Badge variant="secondary" className="mb-3">
            {member.title}
          </Badge>

          {/* Specialization */}
          <p className="text-sm font-medium text-primary mb-2">
            {member.specialization}
          </p>

          {/* Education */}
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <GraduationCap className="h-4 w-4 mr-2" />
            <span>{member.education}</span>
          </div>

          {/* Experience */}
          <p className="text-sm text-muted-foreground mb-4">
            {member.experience}
          </p>

          {/* Contact Links */}
          <div className="flex space-x-3">
            <a
              href={`mailto:${member.email}`}
              className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={`https://linkedin.com/in/${member.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet the <span className="bg-gradient-hero bg-clip-text text-transparent">Research Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our multidisciplinary team combines decades of experience in radiation biology, 
              drug development, and clinical research to deliver breakthrough protection solutions.
            </p>
          </div>

          {/* Researchers Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Microscope className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Principal Researchers</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchers.map((researcher, index) => (
                <TeamMemberCard 
                  key={index} 
                  member={researcher} 
                  type="researcher"
                />
              ))}
            </div>
          </div>

          {/* Coordinators Section */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Users className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Project Coordinators</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {coordinators.map((coordinator, index) => (
                <TeamMemberCard 
                  key={index} 
                  member={coordinator} 
                  type="coordinator"
                />
              ))}
            </div>
          </div>

          {/* Research Collaboration */}
          <div className="mt-16">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img 
                src={teamMeeting} 
                alt="Research team collaboration"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-8 max-w-2xl">
                  <h3 className="text-3xl font-bold text-white mb-4">Collaborative Research Excellence</h3>
                  <p className="text-white/90 text-lg">
                    Our multidisciplinary approach combines expertise from radiation biology, 
                    pharmaceutical sciences, and clinical research to deliver breakthrough solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-card border-primary/20 shadow-medium max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  Interested in collaborating with our team or learning more about our research? 
                  We welcome partnerships with fellow researchers, institutions, and organizations.
                </p>
                <a
                  href="mailto:team@radprotect.org"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Our Team
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;