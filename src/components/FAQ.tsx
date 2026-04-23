'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on complexity. A simple React Native app typically takes 4-8 weeks, while complex full-stack solutions can take 8-12 weeks. I provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you work with startups or only established companies?",
      answer: "I work with both startups and established companies. From MVP development for early-stage startups to scaling solutions for enterprise clients, I adapt my approach to meet your specific needs and budget constraints."
    },
    {
      question: "What's included in your development process?",
      answer: "My process includes discovery & planning, UI/UX design consultation, development, testing, deployment, and post-launch support. I provide regular progress updates, code reviews, and maintain clear communication throughout the project."
    },
    {
      question: "Can you help with App Store and Play Store submissions?",
      answer: "Absolutely! I handle the complete app store submission process including preparing app metadata, screenshots, compliance requirements, and addressing any review feedback. I ensure your app meets all store guidelines for smooth approval."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, I offer ongoing maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements. Support packages are customized based on your needs and can include 24/7 monitoring."
    },
    {
      question: "What makes your React Native development different?",
      answer: "With 5+ years of React Native experience and 150K+ app downloads, I focus on performance optimization, native integration, and cross-platform compatibility. I ensure your app feels native on both iOS and Android while maintaining a single codebase."
    },
    {
      question: "How do you handle project communication and updates?",
      answer: "I maintain transparent communication through regular video calls, detailed progress reports, and real-time updates via WhatsApp or email. You'll have direct access to me throughout the project lifecycle."
    },
    {
      question: "What's your payment structure?",
      answer: "I typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, I offer milestone-based payments. All pricing is transparent with no hidden costs, and I provide detailed quotes upfront."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Common questions from clients about my development process and services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-purple-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-purple-400" />
                    )}
                  </div>
                </button>

                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Have a specific question not covered here?
            </p>
            <a
              href="https://wa.me/923414834446?text=Hi%20Usama%2C%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-semibold"
            >
              Ask Your Question
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}