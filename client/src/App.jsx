import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    AOS.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className={
      darkMode
        ? 'bg-slate-950 min-h-screen text-slate-100 transition-colors duration-300'
        : 'bg-slate-50 min-h-screen text-slate-900 transition-colors duration-300'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App