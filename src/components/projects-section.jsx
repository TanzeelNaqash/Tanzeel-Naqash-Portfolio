import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Link } from 'wouter';

export default function ProjectsSection() {
  const ref = useScrollAnimation();

  const projects = [
    {
      title: 'AnimePlay',
      description: 'A 18+ filter anime database app using Redux, Jikan API, and more. Allows users to browse, search, and filter anime content with advanced controls.',
      image: './src/assets/Screenshot 2024-12-18 112307.png',
      technologies: ['React', 'Redux','18+ filter', 'Jikan API', 'Tailwind CSS'],
      category: 'Anime Database',
      githubUrl: 'https://github.com/TanzeelNaqash/anime-play',
      status: 'Completed',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A full-featured chat application with real-time messaging using Socket.io and WebRTC. Built as a monolithic architecture with user authentication, private messaging, group chats, videoCall, audioCall,  and file sharing capabilities.',
      image: './src/assets/Screenshot 2025-03-10 143017.png',
      technologies: ['React', 'Node.js', 'Socket.io','WebRTC', 'MongoDB', 'Express.js'],
      category: 'Realtime Project',
      githubUrl: 'https://github.com/TanzeelNaqash/REX-CHAT-APP/tree/v3',
      status: 'Completed',
    },
    {
      title: 'LabourHunt - Microservices Platform',
      description: 'A scalable job marketplace platform built with microservices architecture. Features include job posting, candidate matching, real-time notifications, and advanced search capabilities. Currently implementing the core services and API gateway.',
      image: './src/assets/screencapture-localhost-5173-about-2025-05-18-19_12_32.png',
      technologies: ['React', 'Microservices', 'Node.js', 'MongoDB', 'REST APIs'],
      category: 'Microservices Project',
      githubUrl: 'https://github.com/TanzeelNaqash/LabourHunt',
      status: 'In Progress',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Some of the projects I've worked on recently. Each one presents unique challenges and learning opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
              <Card className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all theme-transition h-full overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-secondary text-secondary-foreground">
                      {project.category}
                    </Badge>
                    <Badge variant="secondary" className={project.status === 'In Progress' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}>
                      {project.status || 'Completed'}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="dark:text-white hover:dark:text-white/80 w-full border"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/projects">
            <Button
              variant="outline"
              className="inline-flex items-center px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium"
            >
              View All Projects
              <ExternalLink/>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
