'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center"
      >
        <p className="text-accent-green text-lg mb-4 font-mono">04. What's Next?</p>
        <h2 className="text-5xl md:text-6xl font-bold text-navy-lightest mb-6">
          Get In Touch
        </h2>
        <p className="text-navy-light text-lg mb-12 leading-relaxed">
          I'm currently looking for new opportunities, and my inbox is always open. Whether
          you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <motion.a
          href="mailto:your.email@example.com"
          className="inline-block border-2 border-accent-green text-accent-green px-8 py-4 rounded hover:bg-accent-green/10 transition-all text-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.a>

        {/* Footer */}
        <motion.footer
          className="mt-24 text-navy-light text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p>Built by Your Name</p>
          <p className="mt-2">
            Inspired by{' '}
            <a
              href="https://gazijarin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-green hover:underline"
            >
              Gazi Jarin
            </a>
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
};

export default Contact;
