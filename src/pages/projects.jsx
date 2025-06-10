import { ExternalLink, Github, GithubIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ArrowRight } from 'lucide-react';

// Import project images
import project1Image from '@/assets/screencapture-localhost-5173-projects-2025-06-10-12_59_29.png';
import project2Image from '@/assets/screencapture-localhost-TOK-BROKER-index-php-2025-06-10-13_29_57.png';
import project3Image from '@/assets/screencapture-localhost-5173-about-2025-05-18-19_12_32.png';
import project4Image from '@/assets/Screenshot 2024-12-18 112307.png';
import project5Image from '@/assets/Screenshot 2025-03-10 143017.png';

const Projects = () => {
  const ref = useScrollAnimation();

  const completedProjects = [
    {
      title: "MERN E-Commerce Platform",
      description: "A full-stack e-commerce platform built with MERN stack, featuring user authentication, product management, shopping cart, and payment integration.",
      image: project1Image,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      category: 'Frontend Project',
      githubUrl: "#",
      status: 'Completed',
    },
    {
      title: "Real-Time Chat Application",
      description: "A real-time chat application with features like private messaging, group chats, and file sharing.",
      image: project2Image,
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      category: 'Realtime Project',
      githubUrl: "#",
      status: 'Completed',
    },
    {
      title: "AnimePlay",
      description: "A 18+ filter anime database app using Redux, Jikan API, and more. Allows users to browse, search, and filter anime content with advanced controls.",
      image: project4Image,
      technologies: ["React", "Redux", "18+ filter", "Jikan API", "Tailwind CSS"],
      category: 'Anime Database',
      githubUrl: "https://github.com/TanzeelNaqash/anime-play",
      status: 'Completed',
    },
    {
      title: "Real-Time Chat Application",
      description: "A full-featured chat application with real-time messaging using Socket.io and WebRTC. Built as a monolithic architecture with user authentication, private messaging, group chats, videoCall, audioCall, and file sharing capabilities.",
      image: project5Image,
      technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Express.js"],
      category: 'Realtime Project',
      githubUrl: "https://github.com/TanzeelNaqash/REX-CHAT-APP/tree/v3",
      status: 'Completed',
    }
  ];

  const ongoingProjects = [
    {
      title: "LabourHunt - Microservices Platform",
      description: "A microservices-based platform connecting skilled workers with job opportunities, featuring real-time notifications and location-based job matching.",
      image: project3Image,
      technologies: ["React", "Node.js", "Docker", "Kubernetes", "MongoDB", "Redis"],
      category: 'Microservice Project',
      status: 'In Progress',
    }
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
    >
      <Card className="h-full overflow-hidden">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-secondary text-secondary-foreground">
              {project.category}
            </Badge>
            {project.status && (
              <Badge variant="secondary" className={project.status === 'In Progress' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}>
                {project.status}
              </Badge>
            )}
          </div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3 text-foreground">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="primary"
                className="bg-secondary text-secondary-foreground text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="dark:text-white hover:dark:text-white/80 w-full "
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <GithubIcon className="w-4 h-4 mr-2" />
            View Code
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Projects | Tanzeel Naqash</title>
        <meta name="description" content="Explore my portfolio of web development projects, including full-stack applications, real-time systems, and microservices." />
      </Helmet>
      <Navigation/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of my work, showcasing my skills and experience in web development.
          </p>
        </motion.div>

        {/* Ongoing Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground">
            Currently Working On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Completed Projects Section */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-foreground">
            Completed Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Projects; 