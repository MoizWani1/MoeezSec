
import { Progress } from "@/components/ui/progress";
import { Shield, Lock, Database, Laptop, Globe, Code, FileText, School, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "React", level: 80 },
    { name: "SQL & Database Management", level: 85 },
    { name: "HTML/CSS/TypeScript", level: 80 },
    { name: "Data Analysis (Pandas, NumPy)", level: 85 },
    { name: "Machine Learning", level: 75 }
  ];

  const areasOfExpertise = [
    {
      title: "Cybersecurity Analysis",
      icon: Shield,
      description: "Specializing in IoT security, threat detection, and implementing robust security measures across networks."
    },
    {
      title: "AI & Machine Learning",
      icon: Code,
      description: "Experience with TensorFlow and Scikit-learn for developing predictive models and intelligent security systems."
    },
    {
      title: "Data Analysis",
      icon: Database,
      description: "Proficient in analyzing datasets, performing statistical analysis, and deriving actionable insights."
    },
    {
      title: "Web Development",
      icon: Globe,
      description: "Creating responsive web applications using React, HTML, CSS, and TypeScript."
    },
    {
      title: "Database Design",
      icon: Database,
      description: "Designing and implementing database systems with MySQL and related technologies."
    },
    {
      title: "Data Visualization",
      icon: Laptop,
      description: "Creating insightful visualizations using Power BI, Matplotlib, and other tools."
    }
  ];

  const certifications = [
    "Google Cybersecurity Professional Certificate",
    "Career Essentials in Cybersecurity (Microsoft & LinkedIn)",
    "Ethical Hacker (Cisco Networking Academy)",
    "Endpoint Security (Cisco Networking Academy)",
    "Cybersecurity with Cloud Computing (LinkedIn)"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-cyber-lightest-slate">
            <span className="text-cyber-teal font-mono mr-2">02.</span>Skills & Expertise
          </h2>
          <div className="h-px bg-cyber-teal/30 w-full max-w-xs mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-cyber-light-slate mb-4">Technical Proficiency</h3>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-cyber-light-slate">{skill.name}</span>
                      <span className="text-cyber-teal font-mono">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-cyber-light-blue" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-cyber-light-slate mb-4">Certifications</h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass-card p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-cyber-teal/20 flex items-center justify-center">
                      <Shield size={16} className="text-cyber-teal" />
                    </div>
                    <span className="text-cyber-light-slate">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-cyber-light-slate mb-8">Areas of Expertise</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfExpertise.map((area, index) => (
              <Card key={index} className="bg-cyber-light-blue/20 border-cyber-light-blue">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-cyber-teal/20 flex items-center justify-center mb-4">
                    <area.icon size={24} className="text-cyber-teal" />
                  </div>
                  <h4 className="text-lg font-semibold text-cyber-light-slate mb-2">{area.title}</h4>
                  <p className="text-cyber-slate text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
