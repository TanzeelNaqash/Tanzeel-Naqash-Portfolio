import { Mail, Github, Linkedin, ArrowRight, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function ContactSection() {
  const ref = useScrollAnimation();

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tanzeelnaqash987@gmail.com',
      href: 'mailto:tanzeelnaqash987@gmail.com',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/tanzeel-naqash',
      href: 'https://www.linkedin.com/in/tanzeel-naqash-0b18a5269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/TanzeelNaqash',
      href: 'https://github.com/TanzeelNaqash',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@tanzeelnaqash',
      href: 'https://instagram.com/tanzeel_naqash',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities and interesting projects.
            Whether you're a company looking to hire, or you're just looking to chat, I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
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
                <Card className="bg-white dark:bg-slate-800 shadow-sm theme-transition h-full">
                  <CardContent className="p-6">
                    {/* <div className="text-primary mb-4">
                      <method.icon className="w-8 h-8 mx-auto text-[#e2e2e2]" />
                    </div> */}
                   
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">
                      <div className="text-primary mb-4">
                      <method.icon className="w-8 h-8 mx-auto text-primary text-slate-600 dark:text-slate-400" />
                    </div>
                        {method.title}
                      </h3>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              className="inline-flex items-center px-8 py-3 bg-primary dark:bg-secondary text-primary-foreground hover:bg-primary/90 font-medium"
              onClick={(e) => {
                e.preventDefault();
                try {
                  window.location.href = 'mailto:tanzeelnaqash987@gmail.com';
                } catch (error) {
                  console.error('Error opening mail client:', error);
                }
              }}
            >
              Say Hello
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
