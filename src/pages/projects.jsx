import { ExternalLink, Github, GithubIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const completedProjects = [
    {
      title: 'Daily Tasks',
      description: 'A modern and responsive Todo application for managing daily tasks. Features include adding, removing, and marking tasks as complete, with a clean and intuitive user interface. The app provides a seamless experience for organizing daily activities with smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
      technologies: ['React', 'CSS', 'Local Storage', 'Context API', 'Responsive Design'],
      category: 'Frontend Project',
      githubUrl: 'https://github.com/TanzeelNaqash/todo-app',
      status: 'Completed',
    },
    {
      title: 'Tok Broker',
      description: 'A comprehensive real estate e-commerce platform built with PHP. Features include user authentication, property search with advanced filters, property posting and management, responsive design, and detailed property listings. Users can browse, search, and post properties with all necessary details and images.',
      image: './src/assets/screencapture-localhost-TOK-BROKER-index-php-2025-06-10-13_29_57.png',
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      category: 'Full Stack Project',
      githubUrl: 'https://github.com/TanzeelNaqash/TOK-BROKER.github.io',
      status: 'Completed',
    },
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
      title: 'Weather.io',
      description: 'Weather.io is a sleek weather app built with Vite and React, giving you real-time weather updates with a smooth, responsive design. It features dynamic backgrounds that match the weather, an easy-to-use search, and animated effects for a modern touch. Whether on desktop or mobile, it keeps forecasts clear and navigation effortless.',
      image: './src/assets/screencapture-localhost-5173-projects-2025-06-10-12_59_29.png',
      technologies: ['React', 'Weather.io', 'Api', '5 days Forecast', 'Responsive', 'Realtime'],
      category: 'Frontend Project',
      githubUrl: 'https://github.com/TanzeelNaqash/weather.io/tree/v1.2.0',
      status: 'Completed',
    },
    {
      title: 'Recipe Seeker',
      description: 'A comprehensive recipe discovery app built with React and TheMealDB API. Features include recipe search functionality, random recipe generation, detailed recipe information including ingredients, cooking instructions, and nutritional details. The app provides a user-friendly interface for exploring new recipes, saving favorites, and getting detailed cooking instructions.',
      image: './src/assets/Screenshot 2024-11-06 125016.png',
      technologies: ['React', 'TheMealDB API', 'CSS', 'Context API', 'Responsive Design'],
      category: 'Frontend Project',
      githubUrl: 'https://github.com/TanzeelNaqash/recipe-seeker/tree/master',
      status: 'Completed',
    },
  ];

  const ongoingProjects = [
    {
      title: 'LabourHunt - Microservices Platform',
      description: 'A scalable job marketplace platform built with microservices architecture. Features include job posting, candidate matching, real-time notifications, and advanced search capabilities. Currently implementing the core services and API gateway.',
      image: './src/assets/screencapture-localhost-5173-about-2025-05-18-19_12_32.png',
      technologies: ['React', 'Microservices', 'Node.js', 'MongoDB', 'REST APIs'],
      category: 'Microservice Project',
      githubUrl: 'https://github.com/TanzeelNaqash/LabourHunt',
      status: 'In Progress',
    },
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
        <meta name="description" content="Explore my projects including web applications, full-stack development, and frontend projects." />
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
            A collection of projects I've worked on, showcasing my skills and experience
            in Frontend development, full-stack development, monolithic, microservices, and real-time applications.
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