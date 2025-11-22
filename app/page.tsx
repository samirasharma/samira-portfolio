'use client';

import Navigation from '@/components/Navigation';
import NavSpacer from '@/components/NavSpacer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Navigation />
      <NavSpacer />
      
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  );
}