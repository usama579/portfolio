'use client';

import { motion } from 'framer-motion';
import {
  MessageCircle,
  FileText,
  Code,
  TestTube,
  Rocket,
  HeartHandshake,
  CheckCircle,
  Clock
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Process() {
  const processSteps = [
    {
      icon: MessageCircle,
      title: "Discovery & Consultation",
      description: "We discuss your vision, requirements, target audience, and project goals. I analyze your needs and provide expert recommendations.",
      duration: "1-2 days",
      deliverables: ["Project scope document", "Technical recommendations", "Timeline estimate"]
    },
    {
      icon: FileText,
      title: "Planning & Architecture",
      description: "I create detailed project specifications, technical architecture, and wireframes. You'll see exactly what we're building before we start.",
      duration: "3-5 days",
      deliverables: ["Technical specifications", "Project wireframes", "Development roadmap"]
    },
    {
      icon: Code,
      title: "Development & Building",
      description: "Agile development with regular check-ins and progress updates. You'll see your project come to life with weekly demos and iterations.",
      duration: "4-10 weeks",
      deliverables: ["Weekly progress reports", "Live demo sessions", "Code reviews"]
    },
    {
      icon: TestTube,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing across devices and platforms. Performance optimization, security testing, and user experience validation.",
      duration: "1-2 weeks",
      deliverables: ["Testing reports", "Performance metrics", "Bug fix documentation"]
    },
    {
      icon: Rocket,
      title: "Deployment & Launch",
      description: "App store submissions, server deployment, and go-live support. I handle all technical aspects of getting your product to users.",
      duration: "3-7 days",
      deliverables: ["Live application", "Deployment documentation", "Launch support"]
    },
    {
      icon: HeartHandshake,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and enhancements. I'm your long-term technology partner, ensuring your product continues to succeed.",
      duration: "Ongoing",
      deliverables: ["Monthly reports", "Performance monitoring", "Feature updates"]
    }
  ];

  const guarantees = [
    "100% original code - no templates or copy-paste",
    "Regular communication and progress updates",
    "Clean, documented, and maintainable code",
    "Cross-platform compatibility guaranteed",
    "30-day post-launch bug-fix guarantee",
    "Complete source code ownership"
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that has delivered successful projects for 50+ clients across 5 years
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                      <div className="flex items-center text-purple-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>

                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connection line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Guarantees Section */}
          <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">My Quality Guarantees</h3>
              <p className="text-gray-300">
                Your success is my priority. Here's what I guarantee with every project:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center p-4 bg-green-600/10 rounded-lg border border-green-400/20">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{guarantee}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="https://wa.me/923414834446?text=Hi%20Usama%2C%20I'd%20like%20to%20discuss%20my%20project%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Project Today
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}