import React from 'react';
import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaPaintBrush,
} from 'react-icons/fa';

const categories = [
  {
    icon: <FaLaptopCode className="text-wine-700 text-4xl animate-float" />,
    title: 'Web Development',
    description:
      'Building responsive and interactive websites using modern frameworks and technologies.',
  },
  {
    icon: <FaServer className="text-wine-700 text-4xl animate-float" />,
    title: 'Backend Development',
    description:
      'Creating robust server-side applications and API integrations.',
  },
  {
    icon: <FaCode className="text-wine-700 text-4xl animate-float" />,
    title: 'Programming',
    description:
      'Proficient in C, Java, Python, R, JavaScript, and other programming languages.',
  },
  {
    icon: <FaCloud className="text-wine-700 text-4xl animate-float" />,
    title: 'Data analytics',
    description: 'Developing cloud based data analytics using azure.',
  },
  {
    icon: <FaDatabase className="text-wine-700 text-4xl animate-float" />,
    title: 'Database Management',
    description:
      'Designing and managing database systems with SQL and NoSQL technologies.',
  },
  {
    icon: <FaPaintBrush className="text-wine-700 text-4xl animate-float" />,
    title: 'UI/UX Design',
    description:
      'Creating user-friendly interfaces with a focus on user experience.',
  },
];

const skills = {
  'Frontend Development': [
    { name: 'HTML5', level: 85 },
    { name: 'CSS3', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 90 },
  ],
  'Backend Development': [
    { name: 'Java', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'Node.js', level: 85 },
    { name: 'SQL', level: 80 },
  ],
  'Tools & Others': [
    { name: 'Git', level: 90 },
    { name: 'PowerBI,Tableau', level: 75 },
    { name: 'MongoDB', level: 65 },
    { name: 'UX/UI', level: 70 },
  ],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            My <span className="text-wine-700">Skills</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Here are my technical skills and areas of expertise that I’ve developed through education and projects.
          </p>
          <div className="w-16 h-1 bg-wine-700 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300 border border-wine-100 text-center"
            >
              <div className="flex justify-center mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.title}</h3>
              <p className="text-gray-600 text-sm">{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([group, skillList]) => (
            <div
              key={group}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border border-wine-100"
            >
              <h4 className="text-xl font-bold text-wine-700 mb-4">{group}</h4>
              {skillList.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-wine-700 transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
