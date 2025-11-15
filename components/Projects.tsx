'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import FolderIcon from '@mui/icons-material/Folder';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = [
    {
      title: 'Featured Project 1',
      description:
        'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      tech: ['React', 'Node.js', 'Express', 'Spotify API', 'Styled Components'],
      github: 'https://github.com/yourusername/project1',
      external: 'https://project1.com',
      featured: true,
    },
    {
      title: 'Featured Project 2',
      description:
        'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
      github: 'https://github.com/yourusername/project2',
      external: 'https://project2.com',
      featured: true,
    },
  ];

  const otherProjects = [
    {
      title: 'Integrating Algolia Search',
      description:
        'A guide to integrating Algolia search with WordPress. Includes custom plugin development and front-end implementation.',
      tech: ['Algolia', 'WordPress', 'PHP', 'JavaScript'],
      github: 'https://github.com/yourusername/algolia-project',
    },
    {
      title: 'Google Keep Clone',
      description:
        'A simple Google Keep clone built with React and Firebase. Features include create, edit, delete notes with real-time sync.',
      tech: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/yourusername/keep-clone',
      external: 'https://keep-clone.com',
    },
    {
      title: 'Apple Redesign',
      description:
        'A conceptual redesign of the Apple website homepage. Built with React and Framer Motion for smooth animations.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/apple-redesign',
      external: 'https://apple-redesign.com',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A weather dashboard that shows current weather and forecast for any city. Uses OpenWeather API.',
      tech: ['Vue.js', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/yourusername/weather-dashboard',
      external: 'https://weather-dashboard.com',
    },
  ];

  return (
    <section id="projects" ref={ref} className="px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading" data-number="03.">
          Some Things I've Built
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              className="relative grid md:grid-cols-12 gap-4 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
            >
              {/* Project Image Placeholder */}
              <div
                className={`md:col-span-7 relative ${
                  i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'
                }`}
              >
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video bg-navy-medium rounded overflow-hidden relative group"
                >
                  <div className="absolute inset-0 bg-accent-green/20 mix-blend-multiply group-hover:bg-transparent transition-all"></div>
                  <div className="w-full h-full flex items-center justify-center text-accent-green text-4xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-6 ${
                  i % 2 === 0
                    ? 'md:col-start-7 md:text-right'
                    : 'md:col-start-1 md:row-start-1'
                }`}
              >
                <p className="text-accent-green text-sm font-mono mb-2">Featured Project</p>
                <h3 className="text-2xl font-semibold text-navy-lightest mb-4">
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-green transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="bg-navy-dark p-6 rounded shadow-lg mb-4">
                  <p className="text-navy-light">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-4 text-sm font-mono text-navy-light mb-4 ${
                    i % 2 === 0 ? 'md:justify-end' : ''
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-light hover:text-accent-green transition-colors"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-light hover:text-accent-green transition-colors"
                  >
                    <LaunchIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-navy-lightest text-center mb-12">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <motion.div
                key={i}
                className="bg-navy-dark p-8 rounded flex flex-col hover:translate-y-[-5px] transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <FolderIcon className="text-accent-green text-5xl" />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-light hover:text-accent-green transition-colors"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-light hover:text-accent-green transition-colors"
                      >
                        <LaunchIcon />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-navy-lightest mb-3 group-hover:text-accent-green transition-colors">
                  {project.title}
                </h4>
                <p className="text-navy-light mb-6 flex-1">{project.description}</p>
                <ul className="flex flex-wrap gap-3 text-sm font-mono text-navy-light">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
