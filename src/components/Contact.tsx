import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setSubmitError(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-wine-700 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <div className="bg-wine-700 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8 opacity-90">
                Feel free to reach out to me using any of the contact methods below. I'm open to discussing new opportunities, projects, or just connecting!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-4" size={20} />
                  <a href="mailto:2200030438cseh@gmail.com" className="hover:underline">2200030438cseh@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4" size={20} />
                  <a href="tel:9032034945" className="hover:underline">+91 9032034945</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-4" size={20} />
                  <span>Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-4" size={20} />
                  <a href="https://www.linkedin.com/in/vaishu24" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/vaishu24</a>
                </div>
                <div className="flex items-center">
                  <Github className="mr-4" size={20} />
                  <a href="https://github.com/kvaishnavi24" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/kvaishnavi24</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
              
              {submitMessage && (
                <div 
                  className={`p-4 mb-6 rounded-md ${submitError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
                >
                  {submitMessage}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-500 focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-wine-700 text-white rounded-md hover:bg-wine-800 transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;