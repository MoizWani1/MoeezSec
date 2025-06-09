
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Globe } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Moizwani6@gmail.com",
      link: "mailto:Moizwani6@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+923193672223",
      link: "tel:+923193672223"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-cyber-light-blue/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-cyber-lightest-slate">
            <span className="text-cyber-teal font-mono mr-2">04.</span>Get In Touch
          </h2>
          <div className="h-px bg-cyber-teal/30 w-full max-w-xs mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-cyber-slate">
                I'm currently available for freelance work and consulting opportunities. 
                Whether you have a project in mind or just want to say hello, feel free to 
                reach out and I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mt-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-cyber-teal/10 flex items-center justify-center">
                      <item.icon size={20} className="text-cyber-teal" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-cyber-light-slate">{item.title}</h3>
                      <a 
                        href={item.link} 
                        className="text-cyber-slate hover:text-cyber-teal transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <h3 className="text-lg font-semibold text-cyber-light-slate mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/moeez0317" 
                    className="w-10 h-10 rounded-full bg-cyber-teal/10 hover:bg-cyber-teal/20 flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 text-cyber-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/MoizWani1" 
                    className="w-10 h-10 rounded-full bg-cyber-teal/10 hover:bg-cyber-teal/20 flex items-center justify-center transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 text-cyber-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-cyber-light-blue/30 p-6 rounded-lg border border-cyber-light-blue/50">
              <h3 className="text-lg font-semibold text-cyber-light-slate mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-cyber-light-slate">Your Name</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-cyber-light-blue/20 border-cyber-light-blue/50 focus-visible:border-cyber-teal focus-visible:ring-cyber-teal/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-cyber-light-slate">Your Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-cyber-light-blue/20 border-cyber-light-blue/50 focus-visible:border-cyber-teal focus-visible:ring-cyber-teal/20"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-cyber-light-slate">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-cyber-light-blue/20 border-cyber-light-blue/50 focus-visible:border-cyber-teal focus-visible:ring-cyber-teal/20"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-cyber-light-slate">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px] bg-cyber-light-blue/20 border-cyber-light-blue/50 focus-visible:border-cyber-teal focus-visible:ring-cyber-teal/20"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-cyber-teal text-cyber-blue hover:bg-cyber-teal/80 w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
