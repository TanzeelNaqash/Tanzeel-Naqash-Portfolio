import { Code, Server, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function SkillsSection() {
  const ref = useScrollAnimation();

  const skillCategories = [
    {
      icon: Code,
      name: 'Frontend Development',
      skills: [
        { name: 'HTML & CSS', level: 'Expert' },
        { name: 'JavaScript (ES6+)', level: 'Advanced' },
        { name: 'React & Tailwind CSS', level: 'Advanced' },
        { name: 'Responsive Design', level: 'Expert' },
      ],
    },
    {
      icon: Server,
      name: 'Backend Development',
      skills: [
        { name: 'Node.js & Express.js', level: 'Advanced' },
        { name: 'MongoDB & Mongoose', level: 'Advanced' },
        { name: 'Socket.io & WebSockets', level: 'Advanced' },
        { name: 'REST APIs', level: 'Advanced' },
      ],
    },
    {
      icon: Settings,
      name: 'Architecture & Tools',
      skills: [
        { name: 'Microservices', level: 'Advanced' },
        { name: 'Monolithic Architecture', level: 'Expert' },
        { name: 'Git & Version Control', level: 'Expert' },
        { name: 'Deployment & Hosting', level: 'Advanced' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
              className="transition-transform duration-300"
            >
              <Card className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all theme-transition h-full">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                    {category.name}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (skillIndex * 0.1), duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-slate-600 dark:text-slate-400">{skill.name}</span>
                        <span className="text-sm text-primary">{skill.level}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
