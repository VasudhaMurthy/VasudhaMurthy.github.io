import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const titles = ['competitive coder', 'python developer', 'an artist'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const updateText = () => {
      if (!isDeleting) {
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          return;
        }
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      }
    };

    const timeout = setTimeout(updateText, isDeleting ? 50 : 150);
    return () => clearTimeout(timeout);
  }, [displayText, titleIndex, isDeleting, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Vasudha A M</h1>
          <div className="flex items-center gap-2 text-xl md:text-2xl mb-4">
            <span className="text-gray-300">I am a</span>
            <span className="text-blue-400 font-semibold">{displayText}<span className="animate-blink">|</span></span>
          </div>
          <p className="text-gray-300 text-base md:text-lg mb-6">
            Speaks fluent Python and occasional{' '}
            <span className="font-mono bg-red-500/10 text-red-400 px-1 rounded">
              SyntaxError
            </span>{' '}
            at 2 AM. Living the loop of build, break, debug, repeat.
          </p>
          <a 
            href="#contact"
            className="inline-flex px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors text-white font-medium text-base"
          >
            Get in touch
          </a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" 
            alt="Profile" 
            className="rounded-full w-72 h-72 object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}