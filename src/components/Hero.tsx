'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Code,
  Eye
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

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

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Code className="w-20 h-20 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Usama Tariq
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-4xl text-purple-300 font-semibold mb-4">
              Your Mobile & Web Development Partner
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-full text-sm border border-purple-400/30">
                React Native Expert
              </span>
              <span className="px-4 py-2 bg-blue-600/30 text-blue-200 rounded-full text-sm border border-blue-400/30">
                MERN Stack Specialist
              </span>
              <span className="px-4 py-2 bg-green-600/30 text-green-200 rounded-full text-sm border border-green-400/30">
                Android Kotlin Expert
              </span>
              <span className="px-4 py-2 bg-orange-600/30 text-orange-200 rounded-full text-sm border border-orange-400/30">
                AWS Certified
              </span>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            I've built 8+ production apps with <strong className="text-white">150K+ combined downloads</strong> and served
            <strong className="text-white">500+ healthcare providers</strong>. Specialized in React Native cross-platform development,
            native Android Kotlin apps, and scalable web platforms. My clients see <strong className="text-white">40% productivity improvements</strong>
            and <strong className="text-white">25% increased operational efficiency</strong>. From healthcare startups to enterprise solutions,
            I deliver results that matter to your bottom line.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2 text-purple-400" />
              Wazirabad, Punjab, Pakistan
            </div>
            <a
              href="https://wa.me/923414834446"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2 text-purple-400" />
              (+92) 341-4834446
            </a>
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-2 text-purple-400" />
              usamacheema08@gmail.com
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="#projects"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold"
            >
              <Eye className="w-5 h-5 mr-2" />
              View My Work
            </Link>
            <a
              href="https://wa.me/923414834446?text=Hi%20Usama%2C%20I%27m%20interested%20in%20hiring%20you%20for%20a%20project.%20Can%20we%20discuss%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hire Me Now
            </a>
            <a
              href="https://github.com/usama579"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Portfolio
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </motion.section>
  );
}