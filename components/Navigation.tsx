// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import EmailIcon from '@mui/icons-material/Email';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import DescriptionIcon from '@mui/icons-material/Description';

// const Navigation = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '#hero' },
//     { name: 'About', href: '#about' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Projects', href: '#projects' },
//   ];

//   const socialLinks = [
//     { icon: <EmailIcon />, href: 'mailto:samiraverse.ai@gmail.com', label: 'Email' },
//     { icon: <GitHubIcon />, href: 'https://github.com/samirasharma', label: 'GitHub' },
//     { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/samira-sharma', label: 'LinkedIn' },
//     { icon: <DescriptionIcon />, href: '/resume.pdf', label: 'Resume' },
//   ];

//   return (
//     <>
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? 'bg-navy-darkest/95 backdrop-blur-sm shadow-lg' : 'bg-navy-darkest'
//       }`}
//       style={{ padding: '1rem 4rem' }}
//     >
//       <div className="flex justify-between items-center" style={{ maxWidth: '100%' }}>
//         {/* Left: Name + Menu together */}
//         <div className="flex items-center" style={{ gap: '2.5rem' }}>
//           <motion.a
//             href="#hero"
//             className="text-navy-lightest text-base font-semibold hover:text-accent-green transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Samira Sharma
//           </motion.a>

//           {navItems.map((item, i) => (
//           <motion.a
//             key={item.name}
//             href={item.href}
//             onClick={(e) => {
//               e.preventDefault();
//             const target = document.querySelector(item.href);
//           if (target) {
//             const navHeight = 80; // Adjust this to your navbar height
//             const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
//             window.scrollTo({ top: targetPosition, behavior: 'smooth' });
//       }
//     }}
//     className="text-navy-lightest hover:text-accent-green transition-colors font-normal"
//     style={{ fontSize: '0.9rem' }}
//     initial={{ opacity: 0, y: -20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: i * 0.1 }}
//   >
//     {item.name}
//   </motion.a>
// ))}


//         </div>

//         {/* Right: Social Icons */}
//         <div className="flex items-center" style={{ gap: '1.5rem' }}>
//           {socialLinks.map((link, i) => (
//             <motion.a
//               key={i}
//               href={link.href}
//               target={link.href.startsWith('http') ? '_blank' : undefined}
//               rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//               className="text-navy-lightest hover:text-accent-green transition-colors"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 + i * 0.1 }}
//               aria-label={link.label}
//             >
//               {link.icon}
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </motion.nav>
//      {/* Spacer div that pushes content down */}
//      <div style={{ height: '100px', backgroundColor: '#0a192f' }}></div>
//     </>
//   );
// };

// export default Navigation;




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
      style={{ padding: '1.5rem 4rem', height: '80px' }}
    >
      <div className="flex justify-between items-center h-full" style={{ maxWidth: '100%' }}>
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



// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// html {
//   scroll-behavior: smooth;
//   scroll-padding-top: 80px;
// }

// body {
//   background-color: #0a192f;
//   color: #8892b0;
//   font-family: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
//   line-height: 1.6;
//   overflow-x: hidden;
//   padding-top: 0;
// }


// h1, h2, h3, h4, h5, h6 {
//   color: #ccd6f6;
//   font-weight: 600;
// }

// a {
//   color: #64ffda;
//   text-decoration: none;
//   transition: all 0.3s ease;
// }

// a:hover {
//   color: #64ffda;
//   filter: brightness(1.2);
// }

// section {
//   min-height: 100vh;
//   /* padding: 40px 0; */
//   padding-top: 80px;
//   padding-bottom:40px;
//   max-width: 1000px;
//   margin: 0 auto;
// }


// section[id] {
//   scroll-margin-top: 120px;
// }

// @media (max-width: 768px) {
//   section {
//     padding: 80px 20px;
//   }
// }

// .section-heading {
//   position: relative;
//   display: flex;
//   align-items: center;
//   margin: 10px 0 40px;
//   width: 100%;
//   font-size: clamp(26px, 5vw, 32px);
//   white-space: nowrap;
//   color: #ccd6f6;
//   font-weight: 600;
// }

// .section-heading::before {
//   content: attr(data-number);
//   position: relative;
//   margin-right: 10px;
//   color: #64ffda;
//   font-size: clamp(16px, 3vw, 20px);
//   font-weight: 400;
// }

// .section-heading::after {
//   content: "";
//   display: block;
//   position: relative;
//   width: 300px;
//   height: 1px;
//   margin-left: 20px;
//   background-color: #233554;
// }

// @media (max-width: 768px) {
//   .section-heading::after {
//     width: 100%;
//   }
// }

// ::-webkit-scrollbar {
//   width: 12px;
// }

// ::-webkit-scrollbar-track {
//   background: #0a192f;
// }

// ::-webkit-scrollbar-thumb {
//   background: #233554;
//   border-radius: 6px;
// }

// ::-webkit-scrollbar-thumb:hover {
//   background: #64ffda;
// }

// /* Button resets for clean styling */
// button {
//   background: none;
//   border: none;
//   padding: 0;
//   font: inherit;
//   cursor: pointer;
//   outline: inherit;
//   color: inherit;
// }

// /* Experience section specific styles */
// #experience button {
//   background: transparent !important;
// }