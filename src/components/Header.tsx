import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code, User, Briefcase, BookOpen, GraduationCap, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

type NavLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const navLinks: NavLink[] = [
  { name: 'Home', href: 'home', icon: <Code size={20} /> },
  { name: 'About', href: 'about', icon: <User size={20} /> },
  { name: 'Skills', href: 'skills', icon: <Briefcase size={20} /> },
  { name: 'Projects', href: 'projects', icon: <BookOpen size={20} /> },
  { name: 'Experience', href: 'experience', icon: <Briefcase size={20} /> },
  { name: 'Education', href: 'education', icon: <GraduationCap size={20} /> },
  { name: 'Contact', href: 'contact', icon: <Mail size={20} /> },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const grapeWineColor = 'bg-wine-50/95'; // Define your grape wine background color
  const grapeWineHover = 'hover:text-wine-700';
  const grapeWineActive = 'text-wine-700';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        `${grapeWineColor} backdrop-blur-sm shadow-md py-3`
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className={`text-xl lg:text-2xl font-semibold text-wine-700 ${grapeWineHover} transition-colors cursor-pointer flex items-center gap-2`}
          >
            <Code size={24} /> <span className="hidden md:inline">Vaishnavi K</span>
            <span className="inline md:hidden font-bold">VK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`text-gray-700 ${grapeWineHover} transition-colors font-medium cursor-pointer flex items-center gap-2`}
                activeClass={grapeWineActive}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-gray-700 ${grapeWineHover} transition-colors`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={`fixed top-0 left-0 w-full h-full z-50 ${grapeWineColor} backdrop-blur-sm flex flex-col items-center justify-center gap-6 py-8`}
        >
          <button
            className={`absolute top-4 right-4 text-gray-700 ${grapeWineHover} transition-colors`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`text-lg text-gray-700 ${grapeWineHover} transition-colors font-medium flex items-center gap-3`}
              onClick={() => setMobileMenuOpen(false)}
              activeClass={grapeWineActive}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;