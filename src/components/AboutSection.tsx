import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Mastery',
    description: 'Expert in React, javascript, and modern CSS frameworks',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Turning complex challenges into elegant solutions',
  },
  {
    icon: Rocket,
    title: 'Performance Focused',
    description: 'Building fast, optimized applications that scale',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative mindset with clear communication',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 relative section-dark">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Crafting digital experiences with{' '}
              <span className="gradient-text">precision & passion</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Frontend Developer with 3+ years of experience building modern web 
                applications. My journey started with curiosity about how websites work, 
                and evolved into a deep passion for creating intuitive user experiences.
              </p>
              <p>
                I specialize in React and javascript. I believe great software is built at the intersection of 
                clean code and thoughtful design.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                technical writing.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: '3+', label: 'Years Experience' },
                // { value: '50+', label: 'Projects Completed' },
                { value: '20+', label: 'Happy Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl lg:text-4xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
