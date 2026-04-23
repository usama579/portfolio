'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  Smartphone,
  Globe,
  Database,
  Shield,
  Code,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Smartphone,
      title: "React Native Development",
      description: "Cross-platform mobile applications using React Native for iOS and Android with seamless user experience",
      features: ["iOS & Android Apps", "Cross-platform Compatibility", "Native Performance", "App Store Deployment", "Push Notifications"],
      price: "Starting at $2,500",
      popular: true,
      timeline: "4-8 weeks"
    },
    {
      icon: Code,
      title: "Android Kotlin Development",
      description: "Native Android applications using Kotlin with Jetpack Compose for modern, performant mobile experiences",
      features: ["Native Android Apps", "Jetpack Compose UI", "Material Design 3", "Performance Optimization", "Google Play Store"],
      price: "Starting at $3,000",
      popular: false,
      timeline: "6-10 weeks"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications using React.js, Next.js with optimal performance and SEO",
      features: ["React.js/Next.js", "Responsive Design", "SEO Optimization", "Performance Tuning", "Progressive Web Apps"],
      price: "Starting at $1,500",
      popular: false,
      timeline: "3-6 weeks"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable backend solutions with Node.js, Express.js, and cloud integration for robust applications",
      features: ["Node.js/Express.js", "Database Design", "REST/GraphQL APIs", "Cloud Deployment", "Microservices"],
      price: "Starting at $2,000",
      popular: false,
      timeline: "4-8 weeks"
    },
    {
      icon: Shield,
      title: "Full Stack Solutions",
      description: "Complete end-to-end solutions from concept to deployment with ongoing maintenance and support",
      features: ["Frontend + Backend", "Database Integration", "User Authentication", "24/7 Support", "Maintenance"],
      price: "Starting at $4,000",
      popular: false,
      timeline: "8-12 weeks"
    }
  ];

  const handleGetStarted = (serviceTitle: string) => {
    const subject = encodeURIComponent(`Inquiry about ${serviceTitle}`);
    const body = encodeURIComponent(`Hi Usama,\n\nI'm interested in your ${serviceTitle} service. Please provide more details about:\n\n- Project timeline\n- Detailed pricing\n- Next steps\n\nBest regards`);

    window.open(`mailto:usamacheema08@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Services I Offer</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive development services tailored to bring your vision to life with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all hover:border-purple-400/50 hover:transform hover:scale-105 cursor-pointer ${
                  service.popular ? 'border-purple-400/50 ring-2 ring-purple-400/20' : 'border-white/20'
                } ${selectedService === index ? 'ring-2 ring-blue-400/40' : ''}`}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-300 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">Timeline: {service.timeline}</div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGetStarted(service.title);
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg transition-all transform hover:scale-105 font-semibold flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h3>
              <p className="text-gray-300 mb-6">
                I also offer custom solutions for unique requirements. Let's discuss your specific needs and create something amazing together.
              </p>
              <button
                onClick={() => handleGetStarted("Custom Development Solution")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-semibold"
              >
                Discuss Custom Project
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}