
import { Briefcase, School, Code, FileText, Database } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-cyber-light-blue/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-cyber-lightest-slate">
            <span className="text-cyber-teal font-mono mr-2">01.</span>About Me
          </h2>
          <div className="h-px bg-cyber-teal/30 w-full max-w-xs mb-8"></div>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 text-cyber-slate space-y-4">
              <p>
                Hello! I'm Moeez, a Computer Science student and aspiring Cybersecurity Analyst based in Islamabad, Pakistan. 
                Currently pursuing my Bachelor's degree at Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST), 
                I'm passionate about leveraging technology to solve complex security challenges.
              </p>
              <p>
                I've developed dozens of projects in cybersecurity, ranging from IoT security solutions to AI-driven threat detection systems. 
                As the first author of the research paper "AI for Securing IoT Devices for Business Analytics," I presented my findings 
                at the 23rd International Research Conference, showcasing how artificial intelligence can enhance IoT security in 
                business environments.
              </p>
              <p>
                My expertise spans multiple areas including data analysis, machine learning, and cybersecurity. I hold several industry 
                certifications from Google, Microsoft, and Cisco, demonstrating my commitment to staying current with evolving security 
                technologies. Beyond academics, I founded StickyBits.pk, where I've gained valuable experience in business operations, 
                market analysis, and customer relations while maintaining focus on secure business practices.
              </p>
              
              <div className="pt-4">
                <h3 className="text-cyber-light-slate font-semibold mb-3">Key Strengths:</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Code size={16} className="text-cyber-teal" />
                    <span>Problem-solving Skills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Database size={16} className="text-cyber-teal" />
                    <span>Statistical Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText size={16} className="text-cyber-teal" />
                    <span>Communication Skills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <School size={16} className="text-cyber-teal" />
                    <span>Continuous Learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Briefcase size={16} className="text-cyber-teal" />
                    <span>Adaptability</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-md border-2 border-cyber-teal relative group">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Moeez Nabi Wani"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 border-[3px] border-cyber-teal rounded-md translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
