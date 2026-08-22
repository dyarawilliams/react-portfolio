import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

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
        ? 'bg-linear-to-br from-slate-950 via-[#0f172a] to-slate-900 min-h-screen text-slate-100 transition-colors duration-300'
        : 'bg-linear-to-br from-slate-50 via-white to-slate-100 min-h-screen text-slate-900 transition-colors duration-300'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
    </div>
  )
}

export default App