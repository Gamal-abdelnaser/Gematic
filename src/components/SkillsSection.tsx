import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / Sass', level: 90 },
      { name: 'JavaScript', level: 92 },
      // { name: 'TypeScript', level: 88 },
      { name: 'React.js', level: 90 },
    ],
  },
  {
    title: 'UI Libraries',
    skills: [
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Chakra UI', level: 85 },
      // { name: 'Shadcn/ui', level: 90 },
      { name: 'Material UI', level: 80 },
      // { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    title: 'Animation & Motion',
    skills: [
      { name: 'Framer Motion', level: 88 },
      { name: 'CSS Animations', level: 90 },
      // { name: 'GSAP', level: 75 },
      // { name: 'Lottie', level: 70 },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Figma', level: 85 },
      { name: 'VS Code', level: 95 },
      // { name: 'Webpack / Vite', level: 85 },
      { name: 'npm', level: 90 },
    ],
  },
];

const softSkills = [
  'Problem Solving',
  'Communication',
  'Team Collaboration',
  // 'Time Management',
  'Adaptability',
  'Attention to Detail',
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 lg:py-32 section-light">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technologies I{' '}
            <span className="gradient-text">work with</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Constantly learning and evolving with the latest frontend technologies 
            to build exceptional user experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
