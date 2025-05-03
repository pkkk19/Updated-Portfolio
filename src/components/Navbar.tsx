
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Home, User, Mail, BookOpen, Briefcase, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-100, 0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="container mx-auto px-6">
        <div className="glassmorphism rounded-full py-2 px-4 border border-secondary/20 relative" style={{ backdropFilter: "blur(16px)" }}>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between">
            <div className="flex-1 text-center">
              <span className="text-secondary font-medium">Prabesh Shrestha</span>
            </div>
            <button
              onClick={toggleMenu}
              className="text-secondary hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center space-x-8">
            <NavItem icon={<Home size={20} />} id="home" label="Home" onClick={handleNavClick} />
            <NavItem icon={<User size={20} />} id="about" label="About" onClick={handleNavClick} />
            <NavItem icon={<Code size={20} />} id="skills" label="Skills" onClick={handleNavClick} />
            <NavItem icon={<Briefcase size={20} />} id="projects" label="Projects" onClick={handleNavClick} />
            <NavItem icon={<BookOpen size={20} />} id="blog" label="Blog" onClick={handleNavClick} />
            <NavItem icon={<Mail size={20} />} id="contact" label="Contact" onClick={handleNavClick} />
          </ul>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[200px]"
            >
              <div className="glassmorphism rounded-lg py-2 border border-secondary/20" style={{ 
                background: "rgba(0, 0, 0, 0.74)",
                backdropFilter: "blur(100px)"
              }}>
                <ul className="flex flex-col">
                  <NavItemMobile icon={<Home size={20} />} id="home" label="Home" onClick={handleNavClick} />
                  <NavItemMobile icon={<User size={20} />} id="about" label="About" onClick={handleNavClick} />
                  <NavItemMobile icon={<Code size={20} />} id="skills" label="Skills" onClick={handleNavClick} />
                  <NavItemMobile icon={<Briefcase size={20} />} id="projects" label="Projects" onClick={handleNavClick} />
                  <NavItemMobile icon={<BookOpen size={20} />} id="blog" label="Blog" onClick={handleNavClick} />
                  <NavItemMobile icon={<Mail size={20} />} id="contact" label="Contact" onClick={handleNavClick} />
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ icon, id, label, onClick }: { icon: React.ReactNode; id: string; label: string; onClick: (id: string) => void }) => (
  <li>
    <button
      onClick={() => onClick(id)}
      className="flex items-center space-x-2 text-secondary hover:text-white transition-colors"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  </li>
);

const NavItemMobile = ({ icon, id, label, onClick }: { icon: React.ReactNode; id: string; label: string; onClick: (id: string) => void }) => (
  <li>
    <button
      onClick={() => onClick(id)}
      className="flex items-center space-x-2 text-secondary hover:text-white transition-colors px-4 py-2 hover:bg-secondary/10 w-full text-left"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  </li>
);

export default Navbar;
