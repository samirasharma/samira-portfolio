'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <TwitterIcon />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <EmailIcon />, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.p variants={itemVariants} className="text-accent-green mb-5 text-lg">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-navy-lightest mb-3"
        >
          Your Name.
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-navy-light mb-5"
        >
          <TypeAnimation
            sequence={[
              'I build things for the web.',
              2000,
              'I create digital experiences.',
              2000,
              'I design and develop.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-navy-light text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          I'm a software engineer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products at{' '}
          <a href="https://example.com" className="text-accent-green hover:underline">
            Your Company
          </a>
          .
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 mb-12">
          <a
            href="#projects"
            className="border-2 border-accent-green text-accent-green px-8 py-4 rounded hover:bg-accent-green/10 transition-all text-lg font-medium"
          >
            Check out my work!
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex gap-6">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-light hover:text-accent-green transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="fixed left-10 bottom-0 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-navy-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {socialLinks.slice(0, 3).map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-light hover:text-accent-green transition-all hover:-translate-y-1"
          >
            {link.icon}
          </a>
        ))}
      </motion.div>

      <motion.div
        className="fixed right-10 bottom-0 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-navy-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="mailto:your.email@example.com"
          className="text-navy-light hover:text-accent-green transition-all hover:-translate-y-1"
          style={{ writingMode: 'vertical-rl' }}
        >
          your.email@example.com
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
