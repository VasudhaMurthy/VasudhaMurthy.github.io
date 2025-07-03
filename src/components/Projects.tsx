import { 
  Trash2, 
  Car, 
  Brain, 
  Pill,
  MapPin,
  MessageSquareHeart,
  Github
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from './Section';

export function Projects() {
  const projects = [
    {
      title: 'RegenX',
      description: 'Dynamic Geofencing-Based Waste Management Platform using Flask, PostgreSQL, and Firebase Cloud Messaging. Features real-time tracking, dynamic geofencing, and AI-enabled complaint handling.',
      icon: <Trash2 className="text-green-400" size={32} />,
      features: [
        'Real-time waste tracking',
        'Dynamic geofencing with GeoPy',
        'AI-enabled complaint handling',
        'Live map visualization'
      ],
      github: 'https://github.com/vasudhamurthy/RegenX'
    },
    {
      title: 'GoTogether',
      description: 'Smart Ride-Sharing & Rewards Platform built with Node.js, Express, MongoDB, and React. Enables pooling and reward-based ride-sharing with real-time route optimization.',
      icon: <Car className="text-blue-400" size={32} />,
      features: [
        'Progressive web app',
        'Real-time route optimization',
        'SmartCar API integration',
        'Secure payment processing'
      ],
      github: 'https://github.com/vasudhamurthy/GoTogether'
    },
    {
      title: 'CogniChat',
      description: 'A Cognitive Assessment Therapist chatbot using BERT, GPT, Flask, and MongoDB. Features dynamic persona switching based on real-time emotion detection.',
      icon: <MessageSquareHeart className="text-purple-400" size={32} />,
      features: [
        'BERT & GPT integration',
        'Dynamic persona switching',
        'Real-time emotion detection',
        'NLP-based optimization'
      ],
      github: 'https://github.com/VasudhaMurthy/CogniChatAI'
    },
    {
      title: 'PillPal',
      description: 'A Telegram bot for medication reminders with AI-generated diet and exercise suggestions. Built with Python asyncio and integrated with OpenAI GPT.',
      icon: <Pill className="text-pink-400" size={32} />,
      features: [
        'Medication reminders',
        'AI-powered suggestions',
        'Async task handling',
        'Input validation'
      ],
      github: 'https://github.com/VasudhaMurthy/PillPal'
    }
  ];

  return (
    <Section id="projects" className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <Brain className="text-blue-400" size={36} />
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              className="bg-gray-900/80 p-8 rounded-2xl border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {project.icon}
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <motion.a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-base">View</span>
                  <Github size={22} />
                </motion.a>
              </div>
              <p className="text-gray-300 mb-4 text-base">{project.description}</p>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-base text-gray-400">
                    <MapPin size={16} className="text-blue-400 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
