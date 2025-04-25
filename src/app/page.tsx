'use client';

import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50/50 via-white to-rose-50/50 pt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="mb-8 relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/profile.jpg"
                  alt="Sunil Timilsina"
                  width={192}
                  height={192}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600">
              SUNIL TIMILSINA
            </h1>
            <h2 className="text-2xl text-gray-600 mb-4">Senior Full Stack Engineer</h2>
            <div className="flex flex-col items-center gap-2 mb-6 text-gray-600">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Dallas, Texas 75038
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                641-819-2196
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                timilsina613789@gmail.com
              </p>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              7+ Years of Full Stack Development Experience
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#contact"
                className="btn-primary"
              >
                Get in Touch
              </a>
              <a
                href="/resume/SunilTimilsina_Resume.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-gray-700 hover:bg-gray-800"
                download
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <Experience />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
