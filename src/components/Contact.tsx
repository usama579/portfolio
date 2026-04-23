'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Usama,\n\n` +
      `My name is ${formData.name} and I'm interested in working with you.\n\n` +
      `Project Type: ${formData.projectType}\n` +
      `Email: ${formData.email}\n\n` +
      `Project Details:\n${formData.message}\n\n` +
      `Please let me know your availability and next steps.\n\n` +
      `Best regards,\n${formData.name}`
    );

    // Open email client
    window.open(`mailto:usamacheema08@gmail.com?subject=${subject}&body=${body}`, '_blank');

    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const projectTypes = [
    'React Native Mobile App',
    'Android Kotlin App',
    'Web Application (React/Next.js)',
    'Backend API Development',
    'Full Stack Solution',
    'Custom Development',
    'Consultation & Code Review'
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Let's discuss your project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={slideInLeft}>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always excited to work on new projects and collaborate with innovative teams.
                Whether you need a React Native app, Android Kotlin application, web solution, or full-stack development, I'm here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <a href="mailto:usamacheema08@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      usamacheema08@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">WhatsApp</h4>
                    <a
                      href="https://wa.me/923414834446?text=Hi%20Usama%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20discuss%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      (+92) 341-4834446
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mr-4">
                    <ExternalLink className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">GitHub</h4>
                    <a
                      href="https://github.com/usama579"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      github.com/usama579
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mr-4">
                    <ExternalLink className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/usama-tariq-is579/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <span className="text-gray-300">Wazirabad, Punjab, Pakistan</span>
                    <br />
                    <span className="text-sm text-gray-400">Available for remote work worldwide</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Project Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors appearance-none cursor-pointer text-base"
                    style={{ minHeight: '56px' }}
                  >
                    <option value="" disabled className="bg-gray-800">Select Project Type *</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type} className="bg-gray-800">
                        {type}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project... *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg transition-all transform font-semibold flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105'
                    } text-white`}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
                <p className="text-sm text-gray-400 mt-4">
                  * Required fields. I typically respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-16">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:usamacheema08@gmail.com"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Directly
              </a>
              <a
                href="https://www.linkedin.com/in/usama-tariq-is579/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/usama579"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Portfolio
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}