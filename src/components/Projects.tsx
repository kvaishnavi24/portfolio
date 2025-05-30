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
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agrivi.com%2Fblog%2Fclimate-change-impacts-on-agriculture%2F&psig=AOvVaw2PTLl_R9qVA6Pb1l3ygBVN&ust=1748670730499000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiS0KLAyo0DFQAAAAAdAAAAABAL.jpeg', // Agriculture/Climate themed image
    link: 'https://github.com/kvaishnavi24?tab=repositories'
  },
  {
    title: 'Bus Ticket Reservation Booking System',
    description: 'Designed and implemented a web-based system with user registration, seat booking, payment integration, and ticket generation using JSP, Servlets, and MySQL.',
    technologies: ['JSP', 'Servlets', 'MySQL', 'HTML', 'CSS'],
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fbus-ticket&psig=AOvVaw2inopDg-MiFtf7-mjnNfEx&ust=1748670820800000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODXqM3Ayo0DFQAAAAAdAAAAABAW.jpeg', // Bus/Transport themed image
    link: 'https://github.com/kvaishnavi24?tab=repositories'
  },
  {
    title: 'Web-Based Resource Library for Educational Materials',
    description: 'Built an online platform for students to access study materials, with authentication, file uploads, search, and role-based access using PHP and MySQL.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpulse%2Fweb-based-resource-library-educational-materials-likhitha-chowdary--eylyc&psig=AOvVaw28SXVpZa8QIMZVlF894EaR&ust=1748670875561000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCkiObAyo0DFQAAAAAdAAAAABAE.jpeg', // Education themed image
    link: 'https://github.com/kvaishnavi24?tab=repositories'
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
