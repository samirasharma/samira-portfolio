'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'PostgreSQL',
    'MongoDB',
  ];

  return (
    <section id="about" ref={ref} className="px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading" data-number="01.">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4">
            <p className="text-navy-light">
              Hello! I'm Your Name, and I enjoy creating things that live on the internet.
              My interest in web development started back in 2018 when I decided to try
              editing custom themes — turns out hacking together a custom website taught me
              a lot about HTML & CSS!
            </p>

            <p className="text-navy-light">
              Fast-forward to today, and I've had the privilege of working at{' '}
              <a href="#" className="text-accent-green hover:underline">
                a startup
              </a>
              ,{' '}
              <a href="#" className="text-accent-green hover:underline">
                a large corporation
              </a>
              , and{' '}
              <a href="#" className="text-accent-green hover:underline">
                a digital agency
              </a>
              . My main focus these days is building accessible, inclusive products and
              digital experiences for a variety of clients.
            </p>

            <p className="text-navy-light">
              I also recently launched a course that covers everything you need to know to
              build a web app with the latest technologies.
            </p>

            <p className="text-navy-light">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech, i) => (
                <motion.li
                  key={tech}
                  className="flex items-center text-navy-light text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                >
                  <ArrowRightIcon className="text-accent-green mr-2" fontSize="small" />
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Profile Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="relative z-10 rounded overflow-hidden">
              <div className="aspect-square bg-navy-medium rounded flex items-center justify-center text-accent-green text-6xl border-2 border-accent-green group-hover:border-accent-green/50 transition-all">
                <span className="font-bold">YN</span>
              </div>
              <div className="absolute inset-0 bg-accent-green/20 mix-blend-multiply group-hover:bg-transparent transition-all rounded"></div>
            </div>
            <div className="absolute inset-0 border-2 border-accent-green rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
