import React from 'react';
import { Award, GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

const educationItems: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'KLEF, Vaddeswaram',
    location: 'Andhra Pradesh',
    period: '2020 - 2024',
    details: [
      'Current GPA: 9.4/10',
      'Specializing in Data Science and big data Analytics',
      'Member of the College Coding Club',
      'Participated in various hackathons and technical events'
    ]
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Sri Chaitanya Junior College',
    location: 'Andhra Pradesh',
    period: '2018 - 2020',
    details: [
      'Achieved 95% in Mathematics and Science',
      'Participated in various science competitions',
      'Class Representative and active participant in cultural activities'
    ]
  },
  {
    degree: 'Secondary School (10th Grade)',
    institution: 'N St Mathews Public School, Vijayawada',
    location: 'Andhra Pradesh',
    period: '2017 - 2018',
    details: [
      'CGPA: 8.5/10',
      'Completed core subjects including Mathematics, Social Sciences, and Languages',
      'Actively participated in school-level science exhibitions and quizzes',
      'Recognized for academic excellence and discipline'
    ]
  }
];

const certifications: CertificationItem[] = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Fundamental understanding of AWS Cloud concepts, services, and architecture'
  },
  {
    name: 'Oracle Certified Professional',
    issuer: 'Oracle',
    date: '2023',
    description: 'Advanced proficiency in Oracle database administration and development'
  },
  {
    name: 'RedHat Certified Enterprise Application Developer',
    issuer: 'RedHat',
    date: '2024',
    description: 'Expert-level skills in enterprise Java application development'
  },
  {
    name: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    date: '2023',
    description: 'Proficiency in AI implementation within Salesforce ecosystem'
  },
  {
    name: 'PowerBI Workshop',
    issuer: 'Microsoft',
    date: '2023',
    description: 'Data visualization and business intelligence using Power BI'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-wine-50 via-wine-100 to-wine-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-wine-800 mb-4">Education & Certifications</h2>
          <p className="text-lg text-wine-700 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my knowledge and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mt-16">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-wine-700" />
              <h3 className="text-2xl font-bold text-wine-800">Educational Background</h3>
            </div>

            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-wine-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-wine-700 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <h4 className="text-xl font-bold text-wine-800 mb-2">{item.degree}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-wine-600 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-wine-700" />
                        {item.institution}, {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-wine-700" />
                        {item.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-wine-700">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-wine-700" />
              <h3 className="text-2xl font-bold text-wine-800">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-wine-700"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-wine-800">{cert.name}</h4>
                    <span className="text-sm text-wine-700 font-medium">{cert.date}</span>
                  </div>
                  <p className="text-wine-600 font-medium mb-2">{cert.issuer}</p>
                  {cert.description && (
                    <p className="text-wine-600 text-sm">{cert.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
