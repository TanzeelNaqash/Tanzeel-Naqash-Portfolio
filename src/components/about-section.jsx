import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import profileImage from '../assets/image.png';

export default function AboutSection() {
  const ref = useScrollAnimation();

  const technologies = [
    'HTML & CSS',
    'JavaScript (ES6+)',
    'React & Tailwind CSS',
    'Node.js & Express.js',
    'MongoDB & Socket.io',
    'Microservices & Monolith',
  ];

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
              About Me
            </h2>
            
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Hello! I'm Tanzeel, a passionate MERN stack developer creating
                scalable web applications that make a difference. My journey in web development started back in 2023
                when I decided to combine my love for problem-solving with modern JavaScript technologies.
              </p>

              <p>
                Fast-forward to today,
                My main focus these days is building full-stack applications using MongoDB, Express.js, React, and Node.js,
                with expertise in both microservices and monolithic architectures.
              </p>

              <p>Here are a few technologies I've been working with recently:</p>

              <div className="grid grid-cols-2 gap-2 text-sm">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="text-primary mr-2">▸</span>
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                src={profileImage}
                alt="Tanzeel Naqash - Full Stack Developer"
                className="rounded-xl shadow-lg w-80 h-80 object-cover"
              />
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
