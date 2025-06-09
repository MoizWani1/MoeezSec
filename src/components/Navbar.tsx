
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-blue/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-cyber-teal">Moeez<span className="text-cyber-light-slate">Sec</span></Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              className="navlink font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" className="border-cyber-teal text-cyber-teal hover:bg-cyber-teal hover:text-cyber-blue">
            <a href="/#contact">Get In Touch</a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-cyber-teal">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-cyber-navy/95 backdrop-blur-md">
          <div className="flex flex-col items-center pt-10 space-y-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl navlink"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="outline" className="border-cyber-teal text-cyber-teal hover:bg-cyber-teal hover:text-cyber-blue">
              <a href="/#contact" onClick={() => setIsMenuOpen(false)}>Get In Touch</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
