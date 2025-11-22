
'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Navigation />   {/* stays fixed properly */}
      
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  );
}

