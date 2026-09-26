import React, { useState } from 'react'
import { FaHome, FaUser, FaCode, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', link: '#home', icon: FaHome },
    { name: 'About', link: '#about', icon: FaUser },
    { name: 'Skills', link: '#skills', icon: FaCode },
    { name: 'Certificates', link: '#certificates', icon: FaCertificate },
    { name: 'Projects', link: '#projects', icon: FaProjectDiagram },
    { name: 'Contact', link: '#contact', icon: FaEnvelope },
  ];

  return (
    <div className='fixed z-50 bottom-0 left-0 right-0 flex justify-center'>
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative w-[95%] max-w-4xl mb-4'
      >
        <div className='relative bg-slate-700/95 backdrop-blur-xl rounded-2xl border border-slate-500/80 dark:bg-slate-900/80 dark:border-slate-700/70 xs:px-2 xs:py-3 px-3 py-4'>
          <div className='absolute -top-5 right-3'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className='p-2 rounded-full bg-slate-800 text-slate-100 shadow-lg transition-colors backdrop-blur-sm dark:bg-slate-700 dark:text-slate-100'>
              {darkMode ? (
                <Sun className='w-5 h-5 text-slate-800 dark:text-slate-100' />
              ) : (
                <Moon className='w-5 h-5 text-slate-100' />
              )}
            </motion.button>
          </div>
          <div className='flex items-center justify-around gap-1'>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;
              return (
                <motion.a
                  key={item.name}
                  href={item.link}
                  onClick={() => setActiveTab(item.name)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='flex flex-col items-center gap-0.5 px-2 py-1.5 relative group flex-1'>
                  {isActive && (
                    <motion.div
                      layoutId='activeTab'
                      className='absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-slate-800 dark:bg-white rounded-full'
                      transition={{ duration: 0.3 }}></motion.div>
                  )}
                  <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-100'}`} />
                  <span className={`max-[640px]:text-xs text-[14px] font-medium transition-all duration-300
                    ${isActive
                      ? 'text-white'
                      : 'text-slate-100 group-hover:text-white'
                    }`}>
                    {item.name}
                  </span>
                </motion.a>
              )
            })}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar