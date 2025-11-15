'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { icon: <EmailIcon />, href: 'mailto:your.email@example.com', label: 'Email' },
    { icon: <GitHubIcon />, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <DescriptionIcon />, href: '/resume.pdf', label: 'Resume' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-darkest/95 backdrop-blur-sm shadow-lg' : 'bg-navy-darkest'
      }`}
    >
      <div className="w-full px-8 md:px-16 py-4 md:py-5">
        <div className="flex justify-between items-center">
          {/* Logo - Left */}
          <motion.a
            href="#hero"
            className="text-navy-lightest text-lg md:text-xl font-semibold hover:text-accent-green transition-colors flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Your Name
          </motion.a>

          {/* Center Menu */}
          <div className="flex items-center gap-6 md:gap-12 mx-auto">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-navy-lightest hover:text-accent-green transition-colors text-sm md:text-base font-medium whitespace-nowrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Social Icons - Right */}
          <div className="flex items-center gap-4 md:gap-5 flex-shrink-0">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-navy-lightest hover:text-accent-green transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
