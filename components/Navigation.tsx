'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditIcon from '@mui/icons-material/Edit';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { icon: <EmailIcon fontSize="small" />, href: 'mailto:samira.sharmaaa@gmail.com', label: 'Email' },
    { icon: <GitHubIcon fontSize="small" />, href: 'https://github.com/samirasharma', label: 'GitHub' },
    { icon: <LinkedInIcon fontSize="small" />, href: 'https://linkedin.com/in/samira-sharma', label: 'LinkedIn' },
    { icon: <EditIcon fontSize="small" />, href: '/resume.pdf', label: 'Resume' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy-darkest/95 backdrop-blur-sm shadow-lg' : 'bg-navy-darkest'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-navy-lightest text-xl font-semibold hover:text-accent-green transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Samira Sharma
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-navy-lightest hover:text-accent-green transition-colors text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent-green z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-navy-darkest z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-navy-lightest text-2xl hover:text-accent-green transition-colors"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Social Icons - Mobile */}
              <div className="flex gap-6 mt-8">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-navy-lightest hover:text-accent-green transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
