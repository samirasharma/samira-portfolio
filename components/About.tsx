'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologies = [
    'Python',
    'Next.js',
    'FileNet',
    'AI',
    'Machine Learning',
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

        <div className="flex flex-row gap-12 items-start">
          <div className="flex-[2] space-y-4">
            <p className="text-slate">
              I'm Samira, a Technical Lead passionate about creating impactful systems. With experience across startups and large enterprises, I specialize in building scalable applications, automating workflows, and optimizing cloud infrastructure.
            </p>

            <p className="text-slate">
              My work spans full-stack development, cloud architecture (AWS, Azure), and AI/ML integration. I've led teams to deliver high-impact projects that unlock large cost savings and also optimize workflows.
            </p>

            <p className="text-slate">
              Here are a few technologies I've been working with:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech, i) => (
                <motion.li
                  key={tech}
                  className="flex items-center text-slate text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                >
                  <ArrowRightIcon className="text-orange mr-2" fontSize="small" />
                  {tech}
                </motion.li>
              ))}
            </ul>

            <p className="text-slate">
              Outside of tech, I am a children book author and a certified plant-based nutritionist. I genuinely believe in building systems that acutally make people's lives better.
            </p>
          </div>

          {/* Profile Image - Right Side */}
          <motion.div
            className="flex-[1] relative group min-w-[250px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
	<div className="relative z-10 rounded-lg overflow-hidden">
  	<div className="aspect-square bg-navy-medium rounded-lg overflow-hidden border-2 border-orange group-hover:border-orange/50 transition-all relative">
    	<img 
      		src="/profile.jpg" 
      		alt="Samira Sharma" 
      		className="w-full h-full object-cover"
    	/>
    <div className="absolute inset-0 bg-orange mix-blend-multiply group-hover:bg-transparent transition-all"></div>
  </div>
</div>
<div className="absolute inset-0 border-2 border-orange rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
</motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
