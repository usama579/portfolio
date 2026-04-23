'use client';

import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Play,
  Eye,
  ExternalLink
} from 'lucide-react';
import Image from 'next/image';
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

const ProjectImageCarousel = ({ images, title }: { images: string[], title: string }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-80 bg-gray-900 rounded-lg overflow-hidden group">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <Image
          src={images[currentImage]}
          alt={`${title} screenshot ${currentImage + 1}`}
          width={300}
          height={600}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
          sizes="300px"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImage ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Plumm - Healthcare Application',
      description: 'Comprehensive healthcare platform connecting patients with medical professionals for better health outcomes.',
      longDescription: 'Plumm revolutionizes healthcare delivery by providing seamless access to medical consultations, health tracking, and care management. Features include telemedicine, health analytics, appointment scheduling, and integrated care coordination.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'WebRTC', 'HealthKit'],
      images: ['/projects/plummOne.png', '/projects/plummTwo.png', '/projects/plummThree.png', '/projects/plummFour.png'],
      category: 'mobile',
      status: 'Live',
      timeline: '8 months',
      role: 'Lead Developer',
      challenges: ['HIPAA compliance', 'Real-time video calls', 'Health data integration', 'Scalability'],
      results: ['10K+ active users', 'Featured in App Store', 'Healthcare provider partnerships', '4.8 star rating'],
      liveUrl: 'https://apps.apple.com/in/app/plumm/id1604618955',
      androidUrl: 'https://play.google.com/store/apps/details?id=com.plumm',
      featured: true
    },
    {
      id: 2,
      title: 'BetterLiving Workouts - Fitness App',
      description: 'Comprehensive fitness and wellness application with personalized workout plans and health tracking.',
      longDescription: 'A complete fitness ecosystem that provides personalized workout routines, nutrition tracking, and wellness coaching. Features AI-powered recommendations, social challenges, and comprehensive health analytics.',
      tech: ['React Native', 'Firebase', 'HealthKit', 'Google Fit', 'Machine Learning', 'Redux'],
      images: ['/projects/betterlivingfitnessOne.png', '/projects/betterlivingfitnessTwo.png', '/projects/betterlivingfitnessThree.png'],
      category: 'mobile',
      status: 'Live',
      timeline: '6 months',
      role: 'Full Stack Developer',
      challenges: ['Health data sync', 'Offline workout access', 'Performance optimization', 'Cross-platform compatibility'],
      results: ['50K+ downloads', '4.8 star rating', 'Featured fitness app', 'Top 10 in health category'],
      liveUrl: 'https://apps.apple.com/pk/app/betterliving-workouts/id1503902385',
      androidUrl: 'https://play.google.com/store/apps/details?id=com.betterlivingfitness.betterlivingfitness',
      featured: true
    },
    {
      id: 3,
      title: 'Meo Health - Long COVID Care Platform',
      description: 'Full-stack healthcare platform for long COVID patients with web portal, iOS and Android mobile apps.',
      longDescription: 'Revolutionary full-stack platform designed specifically for long COVID patients, providing comprehensive symptom tracking, personalized care plans, and connection with specialized healthcare providers. Available as web platform, iOS app, and Android app with real-time health monitoring and evidence-based treatment protocols.',
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'HealthKit', 'Analytics', 'WebRTC', 'Next.js'],
      images: ['/projects/meohealthOne.png', '/projects/meohealthTwo.png', '/projects/meohealthWebOne.png', '/projects/meohealthWebTwo.png', '/projects/meohealthWebThree.png'],
      status: 'Live',
      timeline: '10 months',
      role: 'Full-Stack Developer',
      challenges: ['Complex health data', 'HIPAA compliance', 'Real-time monitoring', 'Medical integration', 'Cross-platform sync'],
      results: ['5K+ patients helped', 'Medical professional adoption', 'Healthcare partnerships', 'Clinical validation'],
      liveUrl: 'https://apps.apple.com/us/app/meo-health/id6468690625',
      androidUrl: 'https://play.google.com/store/apps/details?id=com.meohealth',
      webUrl: 'https://www.home.meohealth.com',
      category: 'web',
      featured: true
    },
    {
      id: 12,
      title: 'Grant Dashboard - Blockchain Management',
      description: 'Comprehensive grant management dashboard for blockchain-based funding programs with real-time analytics.',
      longDescription: 'Professional web dashboard for managing blockchain grant programs, featuring real-time transaction monitoring, applicant management, funding distribution tracking, and comprehensive analytics for grant administrators and stakeholders.',
      tech: ['React.js', 'TypeScript', 'Web3.js', 'Chart.js', 'Material-UI', 'Redux'],
      images: ['/projects/granddashboardWebOne.png', '/projects/grantdashboardWebTwo.png'],
      category: 'web',
      status: 'Live',
      timeline: '5 months',
      role: 'Frontend Developer',
      challenges: ['Blockchain integration', 'Real-time data visualization', 'Web3 connectivity', 'Complex state management'],
      results: ['$1M+ grants managed', 'Administrative efficiency +60%', 'Real-time transparency', 'Multi-chain support'],
      webUrl: 'https://grants.stacks.org/',
      featured: true
    },
    {
      id: 4,
      title: 'FMHero - HVAC Services Platform',
      description: 'Professional HVAC services, compliance management, and documentation platform for facility management.',
      longDescription: 'Comprehensive facility management solution for HVAC professionals, featuring service scheduling, compliance tracking, documentation management, and real-time reporting. Streamlines operations for commercial and residential HVAC services.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Cloud Storage', 'Push Notifications', 'GPS'],
      images: ['/projects/fmheroOne.png', '/projects/fmheroTwo.png', '/projects/fmheroThree.png'],
      category: 'mobile',
      status: 'Live',
      timeline: '7 months',
      role: 'Mobile Developer',
      challenges: ['Offline functionality', 'Document management', 'GPS tracking', 'Compliance automation'],
      results: ['1K+ HVAC professionals', 'Industry adoption', 'Efficiency improvements', 'Compliance automation'],
      liveUrl: 'https://apps.apple.com/us/app/fmhero/id1570918942',
      androidUrl: 'https://play.google.com/store/apps/details?id=com.fmhero.mobile',
      featured: true
    },
    {
      id: 5,
      title: 'Baby Care - Health & Development',
      description: 'Comprehensive baby care application for tracking health, development, and milestones.',
      longDescription: 'Complete baby care solution providing health tracking, developmental milestone monitoring, feeding schedules, and pediatric guidance. Features growth charts, vaccination reminders, and healthcare provider connectivity.',
      tech: ['Android Kotlin', 'Jetpack Compose', 'Room Database', 'Firebase', 'HealthKit'],
      images: ['/projects/babycareOne.png', '/projects/babycareTwo.png', '/projects/babycareThree.png'],
      category: 'android',
      status: 'Live',
      timeline: '4 months',
      role: 'Android Developer',
      challenges: ['Data synchronization', 'Offline access', 'Health data privacy', 'User experience'],
      results: ['10K+ downloads', '4.5 star rating', 'Parent community', 'Healthcare integration'],
      androidUrl: 'https://play.google.com/store/apps/details?id=com.baby_care',
      featured: true
    },
    {
      id: 6,
      title: 'Baby Care Backend API',
      description: 'Scalable Node.js backend API powering baby care application with health tracking and pediatric data management.',
      longDescription: 'Robust backend infrastructure supporting the Baby Care mobile app with secure data storage, pediatric growth charts, vaccination schedules, and healthcare provider integration. Built with Node.js and MongoDB for optimal performance.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT Authentication', 'Cloud Storage'],
      category: 'backend',
      status: 'Live',
      timeline: '3 months',
      role: 'Backend Developer',
      challenges: ['Health data security', 'API performance', 'Data validation', 'Scalability'],
      results: ['10K+ API calls daily', '99.9% uptime', 'HIPAA compliant', 'Real-time sync'],
      liveUrl: 'https://babyappbackend.cyclic.app/',
      featured: true
    },
    {
      id: 7,
      title: 'UCare Skin Backend API',
      description: 'Advanced skincare platform backend with AI-powered skin analysis and personalized treatment recommendations.',
      longDescription: 'Sophisticated backend system powering a skincare platform with machine learning algorithms for skin analysis, treatment tracking, and personalized product recommendations. Features secure user management and real-time data processing.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Machine Learning APIs', 'Image Processing', 'JWT'],
      category: 'backend',
      status: 'Live',
      timeline: '5 months',
      role: 'Lead Backend Developer',
      challenges: ['Image processing', 'ML integration', 'Real-time analysis', 'Data security'],
      results: ['5K+ skin analyses', 'AI accuracy 95%', 'Sub-2s response time', 'Global deployment'],
      liveUrl: 'https://devapi.ucareskin.fr',
      featured: true
    },
    {
      id: 8,
      title: 'Stacks Grant Platform Backend',
      description: 'Blockchain grant management system backend with smart contract integration and automated funding workflows.',
      longDescription: 'Enterprise-grade backend for blockchain-based grant management platform. Handles crypto transactions, smart contract interactions, automated funding distributions, and compliance reporting for decentralized grant programs.',
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Blockchain APIs', 'Smart Contracts', 'Redis'],
      category: 'backend',
      status: 'Live',
      timeline: '6 months',
      role: 'Backend Developer',
      challenges: ['Blockchain integration', 'Smart contracts', 'Transaction security', 'Compliance'],
      results: ['$500K+ grants processed', 'Zero security incidents', 'Multi-chain support', 'Automated workflows'],
      liveUrl: 'https://stacks-grant-backend.herokuapp.com',
      featured: true
    },
    {
      id: 9,
      title: 'UCare Skin Production API',
      description: 'Production-grade skincare platform API serving global users with advanced dermatological features and analytics.',
      longDescription: 'High-performance production API for the UCare Skin platform serving users worldwide. Features advanced skincare analysis, product recommendations, dermatologist consultations, and comprehensive user analytics.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'AWS Lambda', 'API Gateway'],
      category: 'backend',
      status: 'Live',
      timeline: '4 months',
      role: 'Backend Developer',
      challenges: ['Global scalability', 'Performance optimization', 'Data analytics', 'API versioning'],
      results: ['Global user base', 'Sub-1s API response', '99.99% uptime', 'Multi-region deployment'],
      liveUrl: 'https://api.ucareskin.fr',
      featured: true
    },
    {
      id: 10,
      title: 'CropWise - Smart Agriculture Platform',
      description: 'Revolutionary AgriTech mobile platform for smart farming with IoT integration and crop management.',
      longDescription: 'Advanced agriculture management application that empowers farmers with real-time crop monitoring, weather predictions, and data-driven farming decisions. Features IoT sensor integration, crop disease detection, and yield optimization recommendations.',
      tech: ['Android Kotlin', 'Jetpack Compose', 'IoT Integration', 'Machine Learning', 'Firebase', 'GPS'],
      images: ['/projects/cropwiseOne.png', '/projects/cropwiseTwo.png'],
      category: 'android',
      status: 'Live',
      timeline: '7 months',
      role: 'Lead Android Developer',
      challenges: ['IoT device integration', 'Offline functionality', 'GPS tracking', 'Real-time data sync'],
      results: ['100+ farms using', 'Increased crop yield by 30%', '4.7 star rating', 'Government partnerships'],
      androidUrl: 'https://play.google.com/store/apps/details?id=com.titanlogics.cropwise',
      featured: true
    },
    {
      id: 11,
      title: 'Pixel Dancer - Photo Editor',
      description: 'Advanced photo editing and animation app with professional-grade features and modern UI.',
      longDescription: 'Professional photo editing platform bringing desktop-quality features to mobile devices. Features advanced filters, animations, AI-powered enhancements, and cloud synchronization for creative professionals and enthusiasts.',
      tech: ['Android Kotlin', 'Jetpack Compose', 'OpenGL', 'Machine Learning', 'Cloud Storage'],
      images: ['/projects/pixeldancerOne.png', '/projects/pixeldancerTwo.png', '/projects/pixeldancerThree.png'],
      category: 'android',
      status: 'Live',
      timeline: '6 months',
      role: 'Lead Android Developer',
      challenges: ['Performance optimization', 'Complex animations', 'Memory management', 'UI/UX design'],
      results: ['50K+ downloads', '4.6 star rating', 'Featured app', 'Professional adoption'],
      androidUrl: 'https://play.google.com/store/apps/details?id=com.rainmin.pd',
      featured: true
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'mobile', label: 'React Native', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'android', label: 'Android Kotlin', count: projects.filter(p => p.category === 'android').length },
    { key: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { key: 'backend', label: 'Backend APIs', count: projects.filter(p => p.category === 'backend').length }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Showcasing my best work across React Native, Android Kotlin, Web Development, and Backend APIs
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveTab(category.key)}
                  className={`px-6 py-3 rounded-lg transition-colors flex items-center space-x-2 ${
                    activeTab === category.key
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{category.count}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter(project => {
                const matches = activeTab === 'all' || project.category === activeTab;
                console.log(`Project ${project.title} (${project.category}) matches activeTab ${activeTab}:`, matches);
                return matches;
              })
              .map((project) => (
                <motion.div
                  key={`${activeTab}-${project.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all group"
                >
                  {project.images && (
                    <ProjectImageCarousel images={project.images} title={project.title} />
                  )}

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-6">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-purple-400 font-semibold">Timeline:</span>
                        <span className="text-gray-300 ml-2">{project.timeline}</span>
                      </div>
                      <div>
                        <span className="text-purple-400 font-semibold">Role:</span>
                        <span className="text-gray-300 ml-2">{project.role}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-purple-400 font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col space-y-3">
                      {/* Show triple buttons for full-stack platforms with web, iOS and Android */}
                      {(project.webUrl && project.androidUrl && project.liveUrl) ? (
                        <div className="flex flex-col space-y-2">
                          <a
                            href={project.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-all font-medium"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Website
                          </a>
                          <div className="flex space-x-3">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-all font-medium"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              iOS App
                            </a>
                            <a
                              href={project.androidUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-all font-medium"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Android App
                            </a>
                          </div>
                        </div>
                      ) : (project.androidUrl && project.liveUrl && project.category === 'mobile') ? (
                        <div className="flex space-x-3">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-all font-medium"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            iOS App
                          </a>
                          <a
                            href={project.androidUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-all font-medium"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Android App
                          </a>
                        </div>
                      ) : project.category === 'backend' ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live API
                        </a>
                      ) : project.category === 'android' && project.androidUrl ? (
                        <a
                          href={project.androidUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Download Android App
                        </a>
                      ) : project.webUrl ? (
                        <a
                          href={project.webUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Website
                        </a>
                      ) : project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Download iOS App
                        </a>
                      ) : null}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Project Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                {selectedProject.images && (
                  <ProjectImageCarousel images={selectedProject.images} title={selectedProject.title} />
                )}

                <div className="mt-6">
                  <p className="text-gray-300 text-lg mb-6">{selectedProject.longDescription}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-4 text-xl">Project Impact</h4>
                      <ul className="space-y-3">
                        {selectedProject.results.map((result: string, index: number) => (
                          <li key={index} className="text-gray-300 flex items-center">
                            <TrendingUp className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-purple-400 font-semibold mb-4 text-xl">Key Challenges Solved</h4>
                      <ul className="space-y-3">
                        {selectedProject.challenges.map((challenge: string, index: number) => (
                          <li key={index} className="text-gray-300 flex items-center">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{selectedProject.timeline}</div>
                      <div className="text-purple-400 text-sm">Development Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{selectedProject.status}</div>
                      <div className="text-purple-400 text-sm">Current Status</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{selectedProject.role}</div>
                      <div className="text-purple-400 text-sm">My Role</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-purple-400 font-semibold mb-4 text-xl">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-purple-600/30 text-purple-300 rounded-lg text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    {selectedProject.category === 'backend' ? (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold text-lg"
                      >
                        <ExternalLink className="w-5 h-5 mr-3" />
                        View Live API
                      </a>
                    ) : selectedProject.category === 'android' && selectedProject.androidUrl ? (
                      <a
                        href={selectedProject.androidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold text-lg"
                      >
                        <ExternalLink className="w-5 h-5 mr-3" />
                        Download from Play Store
                      </a>
                    ) : selectedProject.webUrl ? (
                      <a
                        href={selectedProject.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold text-lg"
                      >
                        <ExternalLink className="w-5 h-5 mr-3" />
                        Visit Website
                      </a>
                    ) : (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold text-lg"
                      >
                        <ExternalLink className="w-5 h-5 mr-3" />
                        Download from App Store
                      </a>
                    )}

                    {/* Show all platform buttons for full-stack projects */}
                    {(selectedProject.webUrl && selectedProject.androidUrl && selectedProject.liveUrl) && (
                      <div className="space-y-3">
                        <a
                          href={selectedProject.webUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all font-medium"
                        >
                          <ExternalLink className="w-5 h-5 mr-3" />
                          View Website
                        </a>
                        <div className="flex space-x-4">
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all font-medium"
                          >
                            Download for iOS
                          </a>
                          <a
                            href={selectedProject.androidUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all font-medium"
                          >
                            Download for Android
                          </a>
                        </div>
                      </div>
                    )}
                    {(selectedProject.androidUrl && selectedProject.liveUrl && selectedProject.category !== 'android' && selectedProject.category !== 'backend' && !selectedProject.webUrl) && (
                      <div className="flex space-x-4">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all font-medium"
                        >
                          Download for iOS
                        </a>
                        <a
                          href={selectedProject.androidUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all font-medium"
                        >
                          Download for Android
                        </a>
                      </div>
                    )}

                    {selectedProject.webUrl && selectedProject.category !== 'web' && selectedProject.category !== 'backend' && (
                      <a
                        href={selectedProject.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Website
                      </a>
                    )}

                    <a
                      href="https://wa.me/923414834446?text=Hi%20Usama%2C%20I%20saw%20your%20project%20and%20I%27m%20interested%20in%20hiring%20you%20for%20a%20similar%20project.%20Can%20we%20discuss%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSelectedProject(null)}
                      className="bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 font-semibold text-lg"
                    >
                      Hire Me for Similar Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}