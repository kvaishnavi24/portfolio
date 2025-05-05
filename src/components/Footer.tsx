import React from 'react';
import { Linkedin, Github as GitHub, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-wine-500 mb-2">Vaishnavi K</h2>
            <p className="text-gray-400">Computer Science Engineering Student</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-wine-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-wine-500 transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-wine-500 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-wine-500 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-wine-500 transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/vaishu24"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wine-700 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/kvaishnavi24"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wine-700 transition-colors"
            >
              <GitHub size={20} />
            </a>
            <a
              href="mailto:2200030438cseh@gmail.com"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-wine-700 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vaishnavi K. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-wine-500 transition-colors"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;