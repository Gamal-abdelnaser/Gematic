import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    content:
      'An exceptional developer who consistently delivers high-quality work. His attention to detail and ability to translate designs into pixel-perfect code is remarkable.',
    author: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechCorp',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    content:
      'Working with him was a fantastic experience. He understood our requirements perfectly and delivered beyond expectations. Highly recommended for any frontend project.',
    author: 'Michael Roberts',
    role: 'Startup Founder',
    company: 'InnovateTech',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    content:
      'Brilliant problem solver with deep React expertise. He tackled complex challenges with elegant solutions and always met deadlines. A true professional.',
    author: 'Emily Watson',
    role: 'Tech Lead',
    company: 'DesignStudio',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 section-light">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What people{' '}
            <span className="gradient-text">say about me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure of working with.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-all"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-glow">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.author}</h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
