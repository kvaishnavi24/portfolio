import React from 'react';
import { Mail, FolderOpen, Code, GraduationCap, Lightbulb } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-white via-wine-100 to-wine-200 pt-24 pb-16"
    >
      <div className="container mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Text Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Hello there! I'm{' '}
              <span className="text-wine-800 bg-gradient-to-r from-wine-700 to-wine-900 bg-clip-text text-transparent">
                Vaishnavi K
              </span>
              .
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium mb-6">
              Aspiring Computer Science Engineer | Future Innovator
            </h2>
            <p className="text-lg text-gray-800 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Driven by a deep curiosity for technology and a passion for problem-solving. As a Computer Science Engineering student, I'm eager to contribute to the ever-evolving world of software development by creating impactful digital solutions, developing interactive data science dashboards, and building efficient, database-driven web applications.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-wine-800 text-white rounded-full shadow-md hover:bg-wine-900 focus:outline-none focus:ring-2 focus:ring-wine-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                Let's Connect
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-wine-800 text-wine-800 rounded-full hover:bg-wine-50 focus:outline-none focus:ring-2 focus:ring-wine-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FolderOpen className="w-5 h-5" />
                Explore My Projects
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">My Interests Include:</h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 bg-white border border-wine-200 text-wine-800 rounded-full px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:shadow-md hover:bg-wine-50">
                  <Code className="w-4 h-4" /> Web Development
                </span>
                <span className="inline-flex items-center gap-2 bg-white border border-wine-200 text-wine-800 rounded-full px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:shadow-md hover:bg-wine-50">
                  <Lightbulb className="w-4 h-4" /> Data Science
                </span>
                <span className="inline-flex items-center gap-2 bg-white border border-wine-200 text-wine-800 rounded-full px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:shadow-md hover:bg-wine-50">
                  <GraduationCap className="w-4 h-4" /> Machine Learning
                </span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-wine-200 via-wine-300 to-wine-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -inset-0 bg-gradient-to-tl from-wine-500 via-wine-300 to-white rounded-full opacity-10 animate-pulse duration-3000"></div>

              {/* Profile image with border */}
              <div className="relative rounded-full overflow-hidden border-8 border-wine-100 shadow-2xl transition-transform hover:scale-[1.03] duration-500 ease-in-out z-10">
                <img
                  src="src/images/home.jpg"
                  alt="Vaishnavi K - Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-900/20 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 right-0 bg-wine-800 text-white px-6 py-3 rounded-full shadow-lg text-sm md:text-base font-semibold transform transition-all duration-300 hover:scale-105 z-20">
                Ready to Learn & Grow!
              </div>

              {/* Floating dots */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-wine-500 rounded-full opacity-70"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-wine-600 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 left-1/3 w-6 h-6 bg-wine-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
