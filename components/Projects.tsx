'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AssignmentIcon from '@mui/icons-material/Assignment';


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = [
    {
      title: 'Capri- A full stack AI',
      description: 'An end-to-end intelligent assistant built from scratch—ML models, computer vision, Arduino control, and voice interface.',
      tags: ['Python', 'Scikit-Learn', 'OpenCV', 'Arduino'],
      github: 'https://github.com/samirasharma/s-jarvis',
      live: '',
    },
    {
      title: 'AI powered question generator',
      description: 'A small JS library that This is an AI-powered app that generates practice questions from handwritten or printed notes using OCR and NLP.',
      tags: ['Python, Hugging Face Transformers, T5, PyTorch, Streamlit, Tesseract OCR'],
      github: 'https://github.com/samirasharma/text-to-questions-ai',
      live: '',
    },
    {
      title: '123',
      description: '.................................',
      tags: ['PYTHON', 'OPENAI', 'FASTAPI'],
      github: 'https://github.com/yourusername/ai-chat',
      live: '',
    },
  ];

  const otherProjects = [
    {
      title: 'ABC',
      description: 'An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.',
      tags: ['Python (Flask)', 'Vue.js', 'Bootstrap', 'SQL'],
      github: 'https://github.com/yourusername/tdsb',
      live: '',
    },
    {
      title: 'DEF',
      description: '..........',
      tags: ['Javascript', 'HTML / CSS'],
      github: 'https://github.com/youruserame/adam-ai',
      live: '',
    },
    {
      title: 'GHI',
      description: '..............................',
      tags: ['Node.js (Express.js)', 'React.js', 'PostgreSQL'],
      github: '',
    },
    {
      title: 'JKL',
      description: '............................................',
      tags: ['Javascript', 'Node.js', 'Natural NLP', 'Telegram API'],
      github: 'https://github.com/yourusername/odin-bot',
    },
    {
      title: 'MNO',
      description: '...................................',
      tags: ['Python'],
      github: 'https://github.com/yourusername/minimax-stonehenge',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
   
    <section id="projects" ref={ref} className="px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
      <h2 className="section-heading" data-number="03.">
          Passion Projects
        </h2>

        {/* Featured Projects Carousel */}
        <div className="mb-20" style={{ position: 'relative' }}>
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease-out',
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {featuredProjects.map((project, index) => (
                <div key={index} style={{ minWidth: '100%', position: 'relative' }}>
                  {/* Card Background */}
                  <div
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #0a192f 100%)',
                      borderRadius: '12px',
                      padding: '80px 60px',
                      minHeight: '500px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    {/* Decorative Icon */}
                    <div style={{ marginBottom: '30px', opacity: 0.6 }}>
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          margin: '0 auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <div style={{ fontSize: '48px' }}>👾</div>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3
                      style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        marginBottom: '30px',
                        textTransform: 'lowercase',
                      }}
                    >
                      {project.title.toLowerCase()}
                    </h3>

                    {/* Project Description */}
                    <p
                      style={{
                        fontSize: '18px',
                        color: '#e6f1ff',
                        lineHeight: '1.8',
                        maxWidth: '700px',
                        marginBottom: '30px',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' }}>
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            color: '#ca7558',
                            fontSize: '12px',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div style={{ display: 'flex', gap: '20px' }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#ffffff', opacity: 0.9, transition: 'opacity 0.3s' }}
                        onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                        onMouseOut={(e) => (e.currentTarget.style.opacity = '0.9')}
                      >
                        <GitHubIcon sx={{ fontSize: 32 }} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#ffffff', opacity: 0.9, transition: 'opacity 0.3s' }}
                        onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                        onMouseOut={(e) => (e.currentTarget.style.opacity = '0.9')}
                      >
                        <OpenInNewIcon sx={{ fontSize: 32 }} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#ffffff',
                transition: 'background 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
            >
              <ChevronLeftIcon sx={{ fontSize: 32 }} />
            </button>
            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#ffffff',
                transition: 'background 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
            >
              <ChevronRightIcon sx={{ fontSize: 32 }} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '30px' }}>
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: index === currentSlide ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: index === currentSlide ? '#ca7558' : '#495670',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '20px' }}>
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              style={{
                background: '#0a192f',
                borderRadius: '12px',
                padding: '35px 30px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '280px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Header with Folder and Links */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <AssignmentIcon sx={{ fontSize: 44, color: '#ca7558' }} />
                <div style={{ display: 'flex', gap: '14px' }}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#a8b2d1', transition: 'color 0.3s' }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#ca7558')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#a8b2d1')}
                    >
                      <OpenInNewIcon sx={{ fontSize: 22 }} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#a8b2d1', transition: 'color 0.3s' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#ca7558')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#a8b2d1')}
                  >
                    <GitHubIcon sx={{ fontSize: 22 }} />
                  </a>
                </div>
              </div>

              {/* Project Title */}
              <h4 style={{ fontSize: '21px', fontWeight: '600', color: '#ccd6f6', marginBottom: '14px' }}>
                {project.title}
              </h4>

              {/* Project Description */}
              <p style={{ fontSize: '14px', color: '#8892b0', lineHeight: '1.7', marginBottom: 'auto', paddingBottom: '20px' }}>
                {project.description}
              </p>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '13px',
                      color: '#a8b2d1',
                      fontFamily: 'monospace',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
         {/* Footer Copyright */}
         <div style={{ marginTop: '100px', paddingTop: '40px', borderTop: '1px solid #233554', textAlign: 'center' }}>
          <p style={{ color: '#8892b0', fontSize: '14px', marginBottom: '8px' }}>
            Built by Samira Sharma
          </p>
          <p style={{ color: '#8892b0', fontSize: '14px' }}>
            All rights reserved.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;