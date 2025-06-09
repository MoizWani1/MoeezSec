
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Code, Link as LinkIcon, FileText, Briefcase, School } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "AI in Securing IoT Devices for Business Analytics",
      description: "Research paper presented at the 23rd International Research Conference, focusing on leveraging AI for enhancing security in IoT systems used in business data environments.",
      image: "https://images.unsplash.com/photo-1563770660941-10a63607683a",
      category: ["research", "ai", "iot"],
      technologies: ["AI", "IoT", "Cybersecurity", "Business Analytics"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "StickyBits.pk - E-Commerce Platform",
      description: "Founded and managed a small-scale e-commerce business, conducting market research, supplier negotiations, and business analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      category: ["business", "e-commerce"],
      technologies: ["Market Research", "E-Commerce", "Analytics", "Customer Service"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "2nd International Conference on Emerging Trends",
      description: "Collaborated with the organizing team to manage technical setups and co-hosted sessions, facilitating discussions with speakers and attendees.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      category: ["conference", "leadership"],
      technologies: ["Event Management", "Technical Setup", "Public Speaking"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Programming Education Initiative",
      description: "Volunteered at Govt. High School Haji Gam, Skardu, teaching computer programming and organizing coding competitions to enhance problem-solving skills.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      category: ["education", "volunteer"],
      technologies: ["Programming Education", "Competition Organization", "Mentoring"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Machine Learning for Predictive Security",
      description: "Academic project focused on implementing machine learning algorithms for predictive security measures in networked environments.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      category: ["academic", "ai", "security"],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Security Analysis"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "Created comprehensive visualization dashboards for data analysis and decision-making using Power BI and related technologies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: ["data", "visualization"],
      technologies: ["Power BI", "Data Analysis", "Dashboard Design"],
      demoLink: "#",
      codeLink: "#",
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "research", label: "Research" },
    { id: "ai", label: "AI & ML" },
    { id: "business", label: "Business" },
    { id: "education", label: "Education" },
    { id: "security", label: "Security" },
    { id: "data", label: "Data Analysis" },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeTab));

  return (
    <section id="projects" className="py-20 bg-cyber-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-cyber-lightest-slate">
            <span className="text-cyber-teal font-mono mr-2">03.</span>Featured Work & Experience
          </h2>
          <div className="h-px bg-cyber-teal/30 w-full max-w-xs mb-12"></div>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="overflow-x-auto pb-4">
              <TabsList className="bg-cyber-light-blue/20">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-cyber-teal data-[state=active]:text-cyber-blue"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <Card key={project.id} className="bg-cyber-light-blue/30 border-cyber-light-blue overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-cyber-blue/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button size="sm" variant="outline" asChild className="border-cyber-teal text-cyber-teal hover:bg-cyber-teal hover:text-cyber-blue">
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <Eye size={16} className="mr-1" />
                            Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild className="border-cyber-teal text-cyber-teal hover:bg-cyber-teal hover:text-cyber-blue">
                          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <FileText size={16} className="mr-1" />
                            Details
                          </a>
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-cyber-lightest-slate mb-2 flex items-start">
                        <LinkIcon size={16} className="text-cyber-teal mr-2 mt-1 shrink-0" />
                        {project.title}
                      </h3>
                      <p className="text-cyber-slate text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="bg-cyber-teal/10 text-cyber-teal border-cyber-teal/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Projects;
