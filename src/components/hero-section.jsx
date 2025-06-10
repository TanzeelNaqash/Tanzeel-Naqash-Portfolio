import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const handleScrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-500 font-medium mb-4"
          >
            Hi, my name is
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4"
          >
            Tanzeel Naqash.
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-slate-600 dark:text-slate-400 mb-8"
          >
            I build things for the web.
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I'm a MERN stack developer specializing in building exceptional digital experiences.
          Currently, I'm focused on creating scalable, modern web applications using MongoDB, Express.js, React, and Node.js.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => handleScrollToSection('#projects')}
            className="inline-flex items-center px-8 py-3 bg-green-700 text-primary-foreground hover:bg-green-700/90 font-medium"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            onClick={() => handleScrollToSection('#contact')}
            className="inline-flex items-center px-8 py-3 border-primary dark:text-white hover:bg-primary hover:dark:text-primary-foreground font-medium"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
