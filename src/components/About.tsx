import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-wine-700 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I'm a passionate Computer Science Engineering student with a strong interest in software development and cutting-edge technologies. My academic journey has equipped me with a solid foundation in programming concepts, algorithms, and software engineering principles.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Beyond academics, I actively engage in practical projects that allow me to apply theoretical knowledge to real-world challenges. I believe in continuous learning and staying up-to-date with the latest tech trends and industry best practices.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm particularly drawn to web development, AI/ML applications, and creating user-friendly solutions that solve practical problems. I'm excited about the possibilities that technology offers and am eager to make meaningful contributions to the field.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[calc(33%-1rem)] border-t-4 border-wine-700 transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Problem Solver</h3>
              <p className="text-gray-600">I enjoy tackling complex challenges and finding efficient, elegant solutions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[calc(33%-1rem)] border-t-4 border-wine-700 transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Learner</h3>
              <p className="text-gray-600">I quickly adapt to new technologies and programming languages.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[calc(33%-1rem)] border-t-4 border-wine-700 transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Team Player</h3>
              <p className="text-gray-600">I thrive in collaborative environments and effectively communicate ideas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;