'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Public Service Enterprise Group (PSEG)',
      position: 'Senior Technical Lead',
      duration: 'Sept 2019 - Present',
      responsibilities: [
        'Automated the secure migration of 3M+ documents from legacy FileNet using Python scripting and SFTP — saving weeks of manual intervention and improving data integrity.',
        'Saved $2M in platform upgrade costs by evaluating technical dependencies and recommending no-Upgrade alternative to leaderships',
        'Exploring the use of ML to intelligently target automation pain points and reduce repetitive tasks.',
        'Acted as a Subject Matter Expert (SME) for multiple projects replacing legacy applications, ensuring seamless transitions and minimizing disruptions.'

      ],
    },
    {
      company: 'Cloudchomp Inc',
      position: 'DevOps Engineer',
      duration: 'August 2018 - May 2019',
      responsibilities: [
        'Automated CI/CD pipelines and cloud infrastructures in AWS',
        'Managed 50+ servers across distributed systems',
        'Maintained and optimized the product release pipeline phases',
      ],
    },
    {
      company: 'Bajra Technologies',
      position: 'Research Assistant',
      duration: 'Jan 2020 - May 2021',
      responsibilities: [
        'Conducted research on machine learning algorithms for natural language processing',
        'Developed Python-based tools for data analysis and visualization',
        'Co-authored research paper on sentiment analysis published in academic journal',
      ],
    },
  ];

  return (
    
   
    <section id="experience" ref={ref} className="px-6">
      <h2 className="section-heading" data-number="02.">
          Experience
        </h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >

        {/* Horizontal Tabs */}
        <div className="flex" style={{ marginBottom: '3rem' }}>
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="relative transition-colors"
              style={{ marginRight: '4rem', background: 'transparent', border: 'none', paddingBottom: '1rem' }}
            >
              <span
                className={`text-sm uppercase tracking-wider ${
                  activeTab === i
                    ? 'font-medium underline'
                    : 'hover:text-navy-lightest'
                }`}
                style={{ color: activeTab === i ? '#64ffda' : '#8892b0' }}
              >
                {exp.company}
              </span>
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors ${
                  activeTab === i ? 'bg-accent-green' : 'bg-navy-medium'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ marginTop: '3rem' }}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <h3 className="text-2xl font-semibold text-navy-lightest" style={{ marginBottom: '1rem' }}>
                {experiences[activeTab].position}{' '}
                <span className="text-accent-green">
                  @ {experiences[activeTab].company}
                </span>
              </h3>
              <p className="text-navy-light text-sm uppercase tracking-widest">
                {experiences[activeTab].duration}
              </p>
            </div>

            <ul style={{ marginTop: '2.5rem' }}>
              {experiences[activeTab].responsibilities.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start text-navy-light leading-relaxed"
                  style={{ marginBottom: '1.5rem' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ArrowRightIcon 
                    className="text-accent-green mr-4 mt-0.5 flex-shrink-0" 
                    sx={{ fontSize: 20 }} 
                  />
                  <span className="text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;