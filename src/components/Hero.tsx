
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-cyber-teal font-mono">Hi, my name is</p>
              <h1 className="text-4xl md:text-6xl font-bold text-cyber-lightest-slate">
                Moeez Nabi Wani
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-cyber-slate">
                AI & Cybersecurity Researcher
              </h2>
            </div>
            
            <p className="text-cyber-slate text-lg max-w-lg">
              Computer Science undergraduate specializing in AI for IoT security, data analysis, and machine learning. 
              Passionate about developing innovative solutions for cybersecurity challenges.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-transparent hover:bg-cyber-teal text-cyber-teal hover:text-cyber-blue border border-cyber-teal group">
                <a href="#projects" className="flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </Button>
              <Button variant="outline" className="border-cyber-teal text-cyber-teal hover:bg-cyber-teal hover:text-cyber-blue">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="terminal-window h-full">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 font-mono text-xs text-cyber-light-slate">terminal - cybersec@moeez:~</div>
              </div>
              
              <div className="font-mono text-xs sm:text-sm text-cyber-light-slate">
                <p className="mb-2"><span className="text-cyber-teal">$</span> whoami</p>
                <p className="mb-2">Moeez Nabi Wani - AI & Cybersecurity Researcher</p>
                
                <p className="mb-2"><span className="text-cyber-teal">$</span> skills --list</p>
                <p className="mb-2">['Python', 'React', 'Data Analysis', 'Machine Learning', 'IoT Security']</p>
                
                <p className="mb-2"><span className="text-cyber-teal">$</span> education</p>
                <p className="mb-2">Bachelor of Science in Computer Science</p>
                <p className="mb-2">SZABIST, Islamabad (Expected: 2026)</p>
                
                <p className="mb-2"><span className="text-cyber-teal">$</span> contact --info</p>
                <p className="mb-2">Email: Moizwani6@gmail.com</p>
                <p className="mb-2">LinkedIn: linkedin.com/in/moeez0317</p>
                <p className="mb-2">GitHub: github.com/MoizWani1</p>
                
                <p className="mb-2"><span className="text-cyber-teal">$</span> <span className="animate-pulse-slow">|</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
