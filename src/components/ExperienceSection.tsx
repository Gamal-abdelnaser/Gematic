import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    period: '2023 - Present',
    description:
      'Leading frontend development for enterprise SaaS products. Architecting scalable React applications and mentoring junior developers.',
    highlights: ['React', 'TypeScript', 'Team Lead'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'StartupHub Inc.',
    period: '2021 - 2023',
    description:
      'Built and maintained multiple client-facing web applications. Implemented design systems and improved performance by 40%.',
    highlights: ['Next.js', 'Tailwind CSS', 'Performance'],
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    company: 'Digital Agency XYZ',
    period: '2020 - 2021',
    description:
      'Started my professional journey building responsive websites and learning modern frontend frameworks.',
    highlights: ['HTML/CSS', 'JavaScript', 'WordPress'],
  },
  {
    type: 'education',
    title: 'Computer Science Degree',
    company: 'State University',
    period: '2016 - 2020',
    description:
      'Bachelor\'s degree with focus on software engineering and web technologies. Graduated with honors.',
    highlights: ['GPA 3.8', 'Dean\'s List', 'CS Major'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 lg:py-32 section-light">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">
            Experience & Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My professional{' '}
            <span className="gradient-text">journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my career growth and educational background.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.period}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
              </div>

              {/* Content */}
              <div className="ml-20 md:ml-0 md:w-[calc(50%-2rem)]">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all"
                >
                  {/* Icon & Period */}
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      {exp.type === 'work' ? (
                        <Briefcase className="w-5 h-5 text-primary" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                  <p className="text-sm text-primary mb-3">{exp.company}</p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
