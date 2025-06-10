import { GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/TanzeelNaqash/', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/tanzeel-naqash-0b18a5269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: InstagramIcon, href: 'https://instagram.com/tanzeel_naqash', label: 'Twitter' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-slate-600 dark:text-slate-400">
              &copy; {new Date().getFullYear()}  Tanzeel Naqash. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  delay: 0.1 * index,
                  duration: 0.3
                }}
                viewport={{ once: true }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  onClick={() => window.open(link.href, '_blank')}
                >
                  <link.icon className="w-5 h-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
