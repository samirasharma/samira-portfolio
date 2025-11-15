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
      company: 'Company One',
      position: 'Senior Software Engineer',
      duration: 'Jan 2023 - Present',
      url: 'https://company1.com',
      responsibilities: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, and WordPress',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      ],
    },
    {
      company: 'Company Two',
      position: 'Software Engineer',
      duration: 'Jun 2021 - Dec 2022',
      url: 'https://company2.com',
      responsibilities: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and React',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, and more',
      ],
    },
    {
      company: 'Company Three',
      position: 'Junior Developer',
      duration: 'Jan 2020 - May 2021',
      url: 'https://company3.com',
      responsibilities: [
        'Engineered and maintained major features of the platform using React, Redux, and Node.js',
        'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences',
        'Proposed and implemented scalable solutions to issues identified with cloud services and internal tools',
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading" data-number="02.">
          Where I've Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mt-12">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-3 text-left whitespace-nowrap border-l-2 md:border-l-2 md:border-b-0 border-b-2 transition-all ${
                  activeTab === i
                    ? 'border-accent-green text-accent-green bg-navy-medium/30'
                    : 'border-navy-medium text-navy-light hover:bg-navy-medium/20 hover:text-accent-green'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[400px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold text-navy-lightest">
                  {experiences[activeTab].position}{' '}
                  <a
                    href={experiences[activeTab].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-green hover:underline"
                  >
                    @ {experiences[activeTab].company}
                  </a>
                </h3>
                <p className="text-navy-light mt-1">{experiences[activeTab].duration}</p>
              </div>

              <ul className="space-y-4">
                {experiences[activeTab].responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start text-navy-light"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ArrowRightIcon className="text-accent-green mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
