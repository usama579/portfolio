'use client';

import { motion } from 'framer-motion';
import {
  Coffee,
  Users,
  Code,
  Award,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Zap,
  Building,
  Calendar,
  TrendingUp,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// Import modular components
import { Hero, Skills, Projects, Services, Contact } from '@/components';

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

const CountUpAnimation = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          const increment = end / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return <span ref={ref}>{count}</span>;
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { icon: Coffee, label: "Years Experience", value: 5, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 50, suffix: "+" },
    { icon: Code, label: "Projects Completed", value: 35, suffix: "+" },
    { icon: Award, label: "Technologies Mastered", value: 15, suffix: "+" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Better Living Fitness",
      rating: 5,
      comment: "Usama transformed our fitness app completely. The iOS compatibility improvements and performance optimization exceeded our expectations. His attention to detail and professional approach made the entire process smooth and successful."
    },
    {
      name: "Michael Chen",
      role: "CTO, Ka Expertise",
      rating: 5,
      comment: "Working with Usama for 2 years was fantastic. His expertise in React Native and backend optimization helped us scale our platform to thousands of users. The AI-powered features he implemented are game-changing for our business."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Founder, Plumm Health",
      rating: 5,
      comment: "The mental health platform Usama built is incredible. The AI chatbot integration and secure authentication features are exactly what we needed. His understanding of healthcare compliance requirements was impressive."
    },
    {
      name: "Ahmed Hassan",
      role: "Founder, CropWise",
      rating: 5,
      comment: "The Android Kotlin app Usama developed for our agriculture management system is outstanding. The Jetpack Compose UI is smooth, and the IoT integration works flawlessly. Highly recommend his Android development skills."
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Better Living Fitness',
      period: 'December 2024 – Present',
      location: 'Remote',
      description: 'Leading the development of a cross-platform fitness application, focusing on iOS compatibility and performance optimization.',
      achievements: [
        'Improved app performance by 60% through code optimization',
        'Successfully migrated legacy codebase to React Native 0.74',
        'Implemented real-time health data synchronization',
        'Led code review process and mentored junior developers'
      ],
      technologies: ['React Native', 'Firebase', 'iOS/Android', 'HealthKit'],
      impact: 'Increased user engagement by 45% and app store rating to 4.8 stars'
    },
    {
      title: 'Android Developer & Full Stack Developer',
      company: 'Ka Expertise',
      period: 'January 2023 – December 2024',
      location: 'Remote',
      description: 'Built multiple mobile applications using React Native and developed native Android apps with Kotlin.',
      achievements: [
        'Developed 3 production-ready React Native applications',
        'Built 2 native Android apps using Kotlin and Jetpack Compose',
        'Optimized backend APIs reducing response time by 50%',
        'Implemented AWS cloud infrastructure with 99.9% uptime'
      ],
      technologies: ['React Native', 'Android Kotlin', 'Jetpack Compose', 'Node.js', 'AWS'],
      impact: 'Applications served 15K+ active users with zero security incidents'
    },
    {
      title: 'React Native & Android Developer',
      company: 'FMHero',
      period: 'January 2022 – December 2022',
      location: 'Remote',
      description: 'Enhanced HVAC service management application and developed companion Android app.',
      achievements: [
        'Added 15+ new features improving user workflow',
        'Developed native Android version using Kotlin',
        'Implemented comprehensive testing suite with 90% coverage',
        'Integrated advanced calendar and mapping features'
      ],
      technologies: ['React Native', 'Android Kotlin', 'Testing Library', 'Google Maps'],
      impact: 'Reduced average service completion time by 30%'
    },
    {
      title: 'Full Stack Developer',
      company: 'Plumm',
      period: 'March 2021 – December 2021',
      location: 'Remote',
      description: 'Led the development of a comprehensive mental health platform with AI chatbot integration.',
      achievements: [
        'Built secure mental health platform with HIPAA compliance',
        'Developed AI-powered chatbot (EMMA) with NLP capabilities',
        'Implemented video calling and real-time messaging',
        'Created crisis detection and intervention system'
      ],
      technologies: ['React Native', 'AI/ML', 'WebRTC', 'Socket.io'],
      impact: 'Helped 10K+ users access mental health services'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Usama Tariq
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-6"
            >
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link>
              <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  <CountUpAnimation end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Journey</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A track record of delivering exceptional results across React Native, Android Kotlin, and full-stack development
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative"
                  >
                    <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 hidden md:block"></div>

                    <div className="md:ml-20 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-colors">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <div className="flex items-center text-purple-400 text-lg font-semibold mb-2">
                            <Building className="w-5 h-5 mr-2" />
                            {exp.company}
                          </div>
                          <div className="flex items-center text-gray-400 mb-4 lg:mb-0">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.period} • {exp.location}
                          </div>
                        </div>
                        <div className="text-green-400 font-semibold text-right">
                          {exp.impact}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6">{exp.description}</p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                                <ArrowRight className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h2>
              <p className="text-xl text-gray-300">
                What clients say about my React Native, Android Kotlin, and full-stack development work
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="text-center">
                <Quote className="w-12 h-12 text-purple-400 mx-auto mb-6" />

                <p className="text-xl text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].comment}"
                </p>

                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>

              {testimonials.length > 1 && (
                <>
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="flex justify-center space-x-2 mt-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-purple-400' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Usama Tariq. Built with Next.js, TypeScript, and Tailwind CSS.
            </div>
            <div className="flex items-center space-x-4">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-gray-400">Made with passion for great code</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}