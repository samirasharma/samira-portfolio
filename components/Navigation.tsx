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
    { name: 'Samira Sharma', href: '#hero' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a192f]/95 backdrop-blur-sm shadow-lg' : 'bg-[#0a192f]'
      }`}
      style={{ minHeight: '100px' }} // Add this line

    >
      <div className="flex justify-center items-center px-16 max-w-screen-2xl mx-auto relative"
      style={{ padding: '2rem 4rem' }} >
        {/* Center: Nav links */}
        <div className="flex items-center gap-12">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`text-[#ccd6f6] hover:text-[#64ffda] transition-colors ${
                i === 0 ? 'text-base font-medium' : 'text-base font-normal'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={i === 0 ? { scale: 1.05 } : {}}
              whileTap={i === 0 ? { scale: 0.95 } : {}}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Right side: Social icons (absolute positioned) */}
        <div className="flex items-center gap-6 absolute right-16">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
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