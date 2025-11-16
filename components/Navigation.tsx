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
    { icon: <EmailIcon />, href: 'mailto:samiraverse.ai@gmail.com', label: 'Email' },
    { icon: <GitHubIcon />, href: 'https://github.com/samirasharma', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/samira-sharma', label: 'LinkedIn' },
    { icon: <DescriptionIcon />, href: '/resume.pdf', label: 'Resume' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-darkest/95 backdrop-blur-sm shadow-lg' : 'bg-navy-darkest'
      }`}
      style={{ padding: '1rem 4rem' }}
    >
      <div className="flex justify-between items-center" style={{ maxWidth: '100%' }}>
        {/* Left: Name + Menu together */}
        <div className="flex items-center" style={{ gap: '2.5rem' }}>
          <motion.a
            href="#hero"
            className="text-navy-lightest text-base font-semibold hover:text-accent-green transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Samira Sharma
          </motion.a>

          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-navy-lightest hover:text-accent-green transition-colors font-normal"
              style={{ fontSize: '0.9rem' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center" style={{ gap: '1.5rem' }}>
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
    </motion.nav>
  );
};

export default Navigation;
