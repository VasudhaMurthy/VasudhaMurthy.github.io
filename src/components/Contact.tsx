import { Phone, Mail, Linkedin, Github, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from './Section';

export function Contact() {
  const socialLinks = [
    {
      icon: <Mail size={24} className="text-blue-400" />,
      label: "Email",
      href: "mailto:vasudha.murthy08@gmail.com",
      color: "hover:bg-red-600"
    },
    {
      icon: <Instagram size={24} className="text-blue-400" />,
      label: "Instagram",
      href: "https://www.instagram.com/vasudha._.murthy/",
      color: "hover:bg-pink-600"
    },
    {
      icon: <Facebook size={24} className="text-blue-400" />,
      label: "Facebook",
      href: "https://www.facebook.com/VasudhaMurthy08",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Linkedin size={24} className="text-blue-400" />,
      label: "LinkedIn",
      href: "http://www.linkedin.com/in/vasudhamurthy",
      color: "hover:bg-blue-700"
    },
    {
      icon: <Github size={24} className="text-blue-400" />,
      label: "GitHub",
      href: "https://github.com/VasudhaMurthy",
      color: "hover:bg-gray-700"
    }
  ];

  return (
    <Section id="contact" className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <Phone className="text-blue-400" size={32} />
          <h2 className="text-4xl font-bold">Contact Me</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ scale: 1.02 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 bg-gray-900 p-6 rounded-lg transition-colors ${link.color}`}
              >
                {link.icon}
                <span className="text-lg">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}