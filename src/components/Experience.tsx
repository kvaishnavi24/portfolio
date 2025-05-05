import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Research Intern',
    company: 'AIIMS Hospital',
    period: 'Present',
    description: [
      'Collected real-time patient data for analysis and system development',
      'Segmented and analyzed medical audio data using .wav processing tools',
      'Assisted in the development of a web-based assistive application for medical use',
      'Worked closely with medical professionals to understand data workflows'
    ],
    technologies: ['.wav tools', 'Python', 'Data Collection', 'Web Technologies']
  },
  {
    title: 'President, Data Science Club',
    company: 'KL University',
    period: '2024 – 2025',
    description: [
      'Organized workshops and hackathons to enhance student skills in data science',
      'Led mentorship programs focused on real-world applications of data analysis',
      'Collaborated with faculty and industry professionals to deliver technical sessions',
      'Oversaw club operations and guided members in using industry-standard tools'
    ],
    technologies: ['Power BI', 'SQL', 'Tableau', 'Excel', 'Python']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-wine-700 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-wine-300 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-12 w-8 h-8 bg-wine-700 rounded-full flex items-center justify-center text-white">
                  {index + 1}
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-wine-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-wine-700 font-medium">{exp.company}</p>
                    </div>
                    <p className="text-gray-600 mt-1 md:mt-0">{exp.period}</p>
                  </div>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-wine-100 text-wine-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;