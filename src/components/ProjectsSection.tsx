import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gymnastic from "../assets/22.png"
import ali from "../assets/ali.png"
import modivo from "../assets/modivo.png"
import calculator from "../assets/calculator.png"
import elevate from "../assets/elevate.png"
import beshwy from "../assets/beshoy.png"
const projects = [
  {
    title: 'Elevate Fitness Platform',
    description:
      'A modern fitness platform designed for gyms and coaches, featuring multiple sports programs, subscription plans, smart fitness calculators, and an admin dashboard. Built with a focus on performance, scalability, and clean user experience.',
    image: elevate, // غير الاسم حسب الصورة عندك
    tags: ['React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Framer Motion'],
    liveUrl: 'https://elevate-fit-app.netlify.app/',
    githubUrl: 'https://github.com/Gamal-abdelnaser/Elevate',
    featured: true,
  },
  
  {
    title: 'Ali Fit',
    description:
      'A modern fitness web application focused on workout programs, user progress tracking, and a clean mobile-first experience. Designed to deliver a smooth and engaging fitness journey.',
    image: ali,
    tags: ['React', 'Tailwind CSS', 'Responsive Design'],
    liveUrl: 'https://ali-fit.netlify.app/',
    githubUrl: 'https://github.com/Gamal-abdelnaser/AliFit',
    featured: false,
  },
  {
    title: 'Gymnastic App',
    description:
      'A fitness-focused web application designed for gymnastic training programs, featuring workout planning, progress visualization, and a mobile-first responsive layout.',
    image: gymnastic,
    tags: ['React', 'Tailwind CSS', 'UI/UX Design'],
    liveUrl: 'https://gymnasticc.netlify.app/',
    githubUrl: 'https://github.com/Gamal-abdelnaser/gymnastic',
    featured: false,
  },
  {
    title: 'Investment Calculator',
    description:
      'A responsive financial calculator that helps users estimate investment growth based on different inputs. Built with a focus on accuracy, performance, and clear data visualization.',
    image: calculator,
    tags: ['React', 'JavaScript', 'Financial Logic'],
    liveUrl: 'https://investment-app-calculator.netlify.app/',
    githubUrl: 'https://github.com/Gamal-abdelnaser/investment-calculator',
    featured: true,
  },
  {
    title: 'Beshwy – Graphic Design Portfolio',
    description:
      'A visual branding project for Beshwy, focusing on graphic design, social media visuals, and brand identity. The project highlights creative layouts, color harmony, and visual storytelling tailored for digital platforms.',
    image: beshwy, // اسم الصورة عندك
    tags: ['Graphic Design', 'Brand Identity', 'Social Media Design', 'Visual Design'],
    liveUrl: 'https://beshoy-magdy.netlify.app', // لو مجرد showcase
    githubUrl: '', // ممكن تشيله لو مش كود
    featured: false,
  },

  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with cart functionality, payment integration, and admin dashboard. Built for scalability and performance.',
    image: modivo,
    tags: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
    liveUrl: 'https://modivo.vercel.app/',
    githubUrl: 'https://github.com/Gamal-abdelnaser/modivo',
    featured: true,
  },
  

 
  // {
  //   title: 'Weather Dashboard',
  //   description:
  //     'A beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts.',
  //   image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop',
  //   tags: ['Vue.js', 'OpenWeather API', 'Mapbox'],
  //   liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com',
  //   featured: false,
  // },
  // {
  //   title: 'Portfolio Generator',
  //   description:
  //     'A tool that helps developers create stunning portfolios in minutes with customizable themes and easy deployment.',
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  //   tags: ['React', 'Node.js', 'Puppeteer'],
  //   liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com',
  //   featured: false,
  // },
];

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`group relative rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-medium transition-all ${
      project.featured ? 'md:col-span-1' : ''
    }`}
  >
    {/* Image */}
    <div className="relative h-48 lg:h-56 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Hover Actions */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
          aria-label="View live demo"
        >
          <ExternalLink size={18} />
        </motion.a>
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-card text-foreground shadow-lg"
          aria-label="View source code"
        >
          <Github size={18} />
        </motion.a>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 lg:py-32 section-dark">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-sm font-medium text-primary mb-4 block">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Projects I've{' '}
              <span className="gradient-text">built</span>
            </h2>
          </div>
          <Button variant="outline" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All on GitHub
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
