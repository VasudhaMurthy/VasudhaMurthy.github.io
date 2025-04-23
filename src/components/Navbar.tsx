import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';
import { Resume } from './Resume';

export function Navbar() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['About', 'Skills', 'Projects', 'Activities', 'Contact'];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              Welcome
            </motion.a>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <motion.a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {section}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsResumeOpen(true)}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
              >
                <FileText size={20} />
                Resume
              </motion.button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-sm rounded-b-lg py-4"
            >
              <div className="flex flex-col space-y-4 px-4">
                {sections.map((section) => (
                  <a
                    key={section}
                    href={`#${section.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {section}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsResumeOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <FileText size={20} />
                  Resume
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}