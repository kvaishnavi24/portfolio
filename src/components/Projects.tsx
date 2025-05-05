import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'The Role of Big Data in Analyzing Climate Change Impacts on Agricultural Productivity',
    description: 'Developed a comprehensive data analysis pipeline to assess the impact of climate change on crop yields using big data techniques, statistical models, and visualizations.',
    technologies: ['Python', 'Pandas', 'Big Data', 'Matplotlib'],
    image: 'https://images.pexels.com/photos/3025156/pexels-photo-3025156.jpeg', // Agriculture/Climate themed image
    link: '#'
  },
  {
    title: 'Bus Ticket Reservation Booking System',
    description: 'Designed and implemented a web-based system with user registration, seat booking, payment integration, and ticket generation using JSP, Servlets, and MySQL.',
    technologies: ['JSP', 'Servlets', 'MySQL', 'HTML', 'CSS'],
    image: 'https://images.pexels.com/photos/3859981/pexels-photo-3859981.jpeg', // Bus/Transport themed image
    link: '#'
  },
  {
    title: 'Web-Based Resource Library for Educational Materials',
    description: 'Built an online platform for students to access study materials, with authentication, file uploads, search, and role-based access using PHP and MySQL.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg', // Education themed image
    link: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-wine-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-wine-100 text-wine-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block text-wine-700 font-medium hover:text-wine-800"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/kvaishnavi24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-wine-700 text-white rounded-md hover:bg-wine-800 transition-colors font-medium"
          >
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
