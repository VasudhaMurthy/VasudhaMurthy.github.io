import { useEffect, useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Facebook, Download, Code2, Database, Github as Git, Terminal, Cpu, Users, MonitorSmartphone, Brain, Palette, Server } from 'lucide-react';
 

function App() {
  const [activeSection, setActiveSection] = useState('home');
  useScroll();
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [cursorPosition] = useState({ x: 0, y: 0 });


  const handleScroll = () => {
    const sections = sectionsRef.current;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 300 && window.scrollY < sectionTop + sectionHeight - 300) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('section'));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadResume = () => {
    const resumeUrl = 'src/Assets/Vasudha A M - Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vasudha_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const calculateRotation = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = cursorPosition.x - centerX;
    const deltaY = cursorPosition.y - centerY;

    const rotateX = (deltaY / centerY) * 15; 
    const rotateY = -(deltaX / centerX) * 15; 

    return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const skills = [
    {
      icon: <Code2 size={50} />,
      name: 'Programming',
      details: [
        { icon: <Code2 size={20} />, name: 'Python' },
        { icon: <MonitorSmartphone size={20} />, name: 'C' },
        { icon: <Terminal size={20} />, name: 'HTML/CSS' },
      ]
    },
    {
      icon: <Database size={50} />,
      name: 'Database',
      details: [
        { icon: <Database size={20} />, name: 'SQL' },
        { icon: <Server size={20} />, name: 'MongoDB' },
        { icon: <Brain size={20} />, name: 'Query Optimization' }
      ]
    },
    {
      icon: <Git size={50} />,
      name: 'Version Control',
      details: [
        { icon: <Git size={20} />, name: 'Git' },
        { icon: <Github size={20} />, name: 'GitHub' },
      ]
    },
    {
      icon: <Terminal size={50} />,
      name: 'Frameworks',
      details: [
        { icon: <MonitorSmartphone size={20} />, name: 'React' },
        { icon: <Terminal size={20} />, name: 'Flask' },
        { icon: <Terminal size={20} />, name: 'Django' }
      ]
    },
    {
      icon: <Cpu size={50} />,
      name: 'Tools',
      details: [
        { icon: <Code2 size={20} />, name: 'VSCode' },
        { icon: <Server size={20} />, name: 'Figma' },
        { icon: <Palette size={20} />, name: 'Canva' }
      ]
    },
    {
      icon: <Users size={50} />,
      name: 'Soft Skills',
      details: [
        { icon: <Users size={20} />, name: 'Communication' },
        { icon: <Users size={20} />, name: 'Teamwork' },
        { icon: <Terminal size={20} />, name: 'Time Management' }
      ]
    }
  ];

  const activities = [
    {
      title: 'National Level Hackathon',
      description: 'Participated in SIET Tumkur 24 hour Hackathon',
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      title: 'Build For Bengaluru',
      description: 'Top 20 position in SKIT 12 hour Hackathon',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Python Excellence',
      description: 'Top 5 position in college-level Python competition',
      color: 'from-pink-500/20 to-orange-500/20'
    },
    {
      title: 'Social Impact',
      description: 'Conducted social media awareness for high school students',
      color: 'from-orange-500/20 to-blue-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="gradient-blob top-0 left-0" />
      <div className="gradient-blob bottom-0 right-0" style={{ animationDelay: '-10s' }} />

      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center md:justify-between">
            <div className="text-xl font-bold">Welcome.</div>
            <div className="hidden items-center justify-center md:flex space-x-9 pt-2 pr-9 font-bold">
              <a href="#home" className={`hover:text-blue-400 transition ${activeSection === 'home' ? 'text-blue-400' : ''}`}>Home</a>
              <a href="#about" className={`hover:text-blue-400 transition ${activeSection === 'about' ? 'text-blue-400' : ''}`}>About</a>
              <a href="#skills" className={`hover:text-blue-400 transition ${activeSection === 'skills' ? 'text-blue-400' : ''}`}>Skills</a>
              <a href="#projects" className={`hover:text-blue-400 transition ${activeSection === 'projects' ? 'text-blue-400' : ''}`}>Projects</a>
              <a href="#activities" className={`hover:text-blue-400 transition ${activeSection === 'activities' ? 'text-blue-400' : ''}`}>Activities</a>
              <a href="#contact" className={`hover:text-blue-400 transition ${activeSection === 'contact' ? 'text-blue-400' : ''}`}>Contact</a>
              <button
                onClick={downloadResume}
                className="flex items-center space-x-4 bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center pt-20 floating-card ${activeSection === 'home' ? 'active' : 'inactive'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4"
            >
              Hi, I'm Vasudha A M
            </motion.h1>
            <div className="text-3xl mb-6">
              And I am {' '}
              <TypeAnimation
                sequence={[
                  'a Full Stack Developer.',
                  2000,
                  'a Python Developer.',
                  2000,
                  'an Artist.',
                  2000,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                className="text-blue-400"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mb-4 font-semibold"
            >
              Fluent in Python and occasional gibberish when debugging at 2 AM. 
              A creative coder focused towards a role where I can build cool stuff, break things (fix them again), and learn something new every day.
            </motion.p>
            
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection('contact');
                  }
                }}
              >
                Get in touch
              </motion.button>
          </div>
          <div className="md:w-1/2 relative mt-8 md:mt-0">
            <motion.div
              className="w-64 h-64 mx-auto"
              style={{
                transform: calculateRotation(),
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl animate-pulse"></div>
              <div className="relative w-[270px] h-[270px] custom-shape overflow-hidden bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
                <img
                  src="src/Assets/VasudhaMurthy1.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

      {/* About Section */}
      <section id="about" className={` py-20 relative floating-card ${activeSection === 'about' ? 'active' : 'inactive'}`}>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/10"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-300 mb-4 text-lg">
                I am a curious and enthusiastic developer who loves turning ideas into functional, real-world solutions. 
                I enjoy working across the stack, from crafting dynamic frontends with React.js to building scalable backends with Node.js, Flask, and MongoDB.
                I have experience integrating APIs, AI models (GPT, BERT), and real-time features into applications. 
                </p>
                <p className="text-gray-300 mb-8 text-lg">
                My journey in tech has been driven by curiosity and a desire to create meaningful impact through software development.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
                <div className="relative bg-gray-800/50 rounded-lg p-6 border border-white/10">
                  <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
                  <ul className="space-y-2 font-semibold">
                    <li>🎓 Computer Science Student [S J B Institute of Technology]</li>
                    <li>💻 Full Stack Developer</li>
                    <li>🎨 Creative Problem Solver</li>
                    <li>🌱 Continuous Learner</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`min-h-screen py-20 floating-card ${activeSection === 'skills' ? 'active' : 'inactive'}`}>
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="skill-card group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/30 transition border border-white/5 "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ zIndex: isHovered ? 10 : 0 }}
              >
                <div className="flex items-center space-x-3 mb-4 md:grid-cols-2">
                  <div className="text-blue-400">{skill.icon}</div>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>

                {isHovered && (
                  <motion.div
                    className="skill-details absolute top-0 left-0 w-full h-full bg-gray-900/80 backdrop-blur-md p-6 rounded-xl flex flex-col justify-center items-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    style={{ zIndex: 11 }}
                  >
                    <div className="space-y-3">
                      {skill.details.map((detail, i) => (
                        <div key={i} className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                          {detail.icon}
                          <span>{detail.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>


      {/* Projects Section */}
      <section id="projects" className={` py-20 floating-card ${activeSection === 'projects' ? 'active' : 'inactive'}`}>
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'GoTogether',
                  desc: 'Smart Ride-Sharing & Rewards Platform with React, Node.js, and MongoDB',
                  tech: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
                },
                {
                  title: 'CogniChat',
                  desc: 'Mental health chatbot using BERT and GPT with dynamic persona switching',
                  tech: ['Python', 'Flask', 'MongoDB', 'NLP'],
                },
                {
                  title: 'PillPal',
                  desc: 'Telegram bot for medication reminders with AI-powered health suggestions',
                  tech: ['Python', 'MongoDB', 'OpenAI GPT'],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/30 transition border border-white/5"
                >
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className={`py-20 floating-card ${activeSection === 'activities' ? 'active' : 'inactive'}`}>
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <h2 className="text-4xl font-bold mb-12 text-center">Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="activity-card bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-white/5"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${activity.color} rounded-xl blur-xl opacity-20`}></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      {activity.title}
                    </h3>
                    <p className="text-gray-300">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-40 floating-card ${activeSection === 'contact' ? 'active' : 'inactive'}`}>
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/VasudhaMurthy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition transform hover:scale-110">
                <Github size={32} />
              </a>
              <a href="https://linkedin.com/in/VasudhaMurthy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition transform hover:scale-110">
                <Linkedin size={32} />
              </a>
              <a href="mailto:vasudha.murthy08@gmail.com" className="text-gray-300 hover:text-white transition transform hover:scale-110">
                <Mail size={32} />
              </a>
              <a href="https://www.instagram.com/vasudha._.murthy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition transform hover:scale-110">
                <Instagram size={32} />
              </a>
              <a href="https://www.facebook.com/VasudhaMurthy08/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition transform hover:scale-110">
                <Facebook size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;