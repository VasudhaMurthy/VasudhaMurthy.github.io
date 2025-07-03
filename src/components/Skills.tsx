import { 
  Code2, 
  Database, 
  Link, 
  Smartphone,
  Github,
  Globe,
  Server
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from './Section';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export function Skills() {
  const skills: Skill[] = [
    {
      name: "Programming",
      icon: <Code2 className="text-blue-400" size={32} />,
      description: "Python, C, Java, Solidity, Kotlin"
    },
    {
      name: "Web Development",
      icon: <Globe className="text-green-400" size={32} />,
      description: "HTML, CSS, React.js, Node.js, Express, Flask"
    },
    {
      name: "Database",
      icon: <Database className="text-yellow-400" size={32} />,
      description: "SQL, MongoDB, Firebase"
    },
    {
      name: "Tools and Platforms",
      icon: <Github className="text-pink-400" size={32} />,
      description: "Git & GitHub, Eclipse, Android Studio"
    },
        {
      name: "Mobile Development",
      icon: <Smartphone className="text-purple-400" size={32} />,
      description: "Kotlin, Android Studio, Firebase"
    },
    {
      name: "Blockchain Development:",
      icon: <Link className="text-orange-400" size={32} />,
      description: "Solidity, Hardhat, MetaMask, IPFS"
    }
  ];

  return (
    <Section id="skills" className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <Server className="text-blue-400" size={32} />
          <h2 className="text-4xl font-bold">Skills & Technologies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-3">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}