'use client'

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import dynamic from 'next/dynamic';

const ButterflyAnimation = dynamic(() => import('./ButterflyAnimation'), { ssr: false });

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
    { icon: <GitHubIcon />, href: 'https://github.com/samirasharma', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/samira-sharma', label: 'LinkedIn' },
    { icon: <TwitterIcon />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <EmailIcon />, href: 'mailto:samiraverse.ai@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6" >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full flex flex-col items-center justify-center text-center"
      >
        {/* Animation above text */}
        <motion.div variants={itemVariants} className="mb-2">
          <ButterflyAnimation />
        </motion.div>
        <motion.p variants={itemVariants} className="text-slate mb-5 text-lg text-center">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-4xl font-bold text-orange mb-3 text-center"
        >
          Samira Sharma
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-l md:text-l font-bold text-light-blue mb-5 text-center"
        >
          <TypeAnimation
            sequence={[
              'I create stuffs for fun.',
              2000,
              'I code and automate life.',
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-slate text-md md:text-md max-w-md mb-0 leading-relaxed text-center"
        >
          I am technical lead in a US company. I have always been captivated by the idea of creating systems to make positive difference in people&apos;s live and  have diverse experience in building applications, automating large scale systems and in optimizing cost and workflows.
        </motion.p>
<motion.div variants={itemVariants} className="mt-16">
  <a
    href="mailto:samiraverse.ai@gmail.com"
    className="inline-flex items-center gap-5 border-2 border-orange text-orange px-12 py-6 rounded hover:bg-orange/10 transition-all text-lg font-medium"
    style={{ padding: '1.5rem 2rem', marginTop:'3rem' }}
  >
    <EmailIcon fontSize="medium" />
          Let&apos;s connect    !
  </a>
      </motion.div>
</motion.div>
    </section>
  );
};

export default Hero;
