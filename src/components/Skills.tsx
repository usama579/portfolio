'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Cloud,
  Smartphone,
  Database,
  TestTube
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
      staggerChildren: 0.1
    }
  }
};

export default function Skills() {
  const skills = {
    frontend: [
      { name: 'React Native', level: 95, years: 5 },
      { name: 'React.js', level: 90, years: 4 },
      { name: 'TypeScript', level: 85, years: 3 },
      { name: 'JavaScript (ES6+)', level: 95, years: 5 },
      { name: 'Redux/Zustand', level: 80, years: 3 },
      { name: 'Next.js', level: 85, years: 3 }
    ],
    mobile: [
      { name: 'Android Kotlin', level: 90, years: 4 },
      { name: 'Android Java', level: 85, years: 3 },
      { name: 'Jetpack Compose', level: 80, years: 2 },
      { name: 'React Native', level: 95, years: 5 },
      { name: 'iOS Development', level: 75, years: 2 },
      { name: 'Flutter (Dart)', level: 70, years: 1 }
    ],
    backend: [
      { name: 'Node.js', level: 90, years: 4 },
      { name: 'Express.js', level: 85, years: 4 },
      { name: 'MongoDB', level: 80, years: 3 },
      { name: 'MySQL/PostgreSQL', level: 75, years: 3 },
      { name: 'GraphQL', level: 70, years: 2 },
      { name: 'Kotlin (Backend)', level: 75, years: 2 }
    ],
    cloud: [
      { name: 'AWS (EC2, S3, Lambda)', level: 85, years: 3 },
      { name: 'Firebase', level: 90, years: 4 },
      { name: 'Google Cloud Platform', level: 75, years: 2 },
      { name: 'CI/CD Pipelines', level: 75, years: 2 },
      { name: 'Docker', level: 70, years: 2 },
      { name: 'Kubernetes', level: 65, years: 1 }
    ]
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mastered through years of hands-on experience building production-ready applications across multiple platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-6">
                  {category === 'frontend' && <Code className="w-8 h-8 text-purple-400 mr-3" />}
                  {category === 'mobile' && <Smartphone className="w-8 h-8 text-pink-400 mr-3" />}
                  {category === 'backend' && <Server className="w-8 h-8 text-green-400 mr-3" />}
                  {category === 'cloud' && <Cloud className="w-8 h-8 text-blue-400 mr-3" />}
                  <h3 className="text-xl font-semibold text-white capitalize">
                    {category === 'frontend' ? 'Frontend & Web' :
                     category === 'mobile' ? 'Mobile Development' :
                     category === 'backend' ? 'Backend & Database' : 'Cloud & DevOps'}
                  </h3>
                </div>

                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.years} years</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <div className="text-right text-sm text-purple-400 font-medium">
                        {skill.level}%
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}