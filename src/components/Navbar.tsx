import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['About', 'Skills', 'Projects', 'Activities', 'Contact'];

  const closeMenu = () => setIsMenuOpen(false);

  return (
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
            className="text-2xl font-bold cursor-pointer"
            onClick={closeMenu}
            aria-label="Home"
          >
            Welcome.
          </motion.a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80} // Adjust for fixed navbar height
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                activeClass="text-white font-semibold"
                role="button"
                tabIndex={0}
              >
                {section}
              </Link>
            ))}

            {/* Resume Button as anchor */}
            <a
                href="https://drive.google.com/file/d/1gxK1TRNWdTi1_IBsdBhR6pitF6A20hw9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold transition-colors"
                aria-label="Open Resume PDF in new tab"
              >
                <FileText size={20} />
                Resume
              </a>
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
                <Link
                  key={section}
                  to={section.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                  activeClass="text-white font-semibold"
                  role="button"
                  tabIndex={0}
                >
                  {section}
                </Link>
              ))}

              {/* Resume Button as anchor for mobile */}
              <a
                href="https://drive.google.com/file/d/1gxK1TRNWdTi1_IBsdBhR6pitF6A20hw9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold transition-colors"
                aria-label="Open Resume PDF in new tab"
              >
                <FileText size={20} />
                Resume
              </a>

            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
