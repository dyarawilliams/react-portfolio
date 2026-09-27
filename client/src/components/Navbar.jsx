import React, { useState } from 'react'
import { FaHome, FaUser, FaCode, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Sun, Moon, X, Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home', icon: FaHome },
    { name: 'About', link: '#about', icon: FaUser },
    { name: 'Skills', link: '#skills', icon: FaCode },
    { name: 'Certificates', link: '#certificates', icon: FaCertificate },
    { name: 'Projects', link: '#projects', icon: FaProjectDiagram },
    { name: 'Contact', link: '#contact', icon: FaEnvelope },
  ];

  return (
    <div className='fixed z-50 w-full mt-4 flex justify-center'>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative bg-white/85 dark:bg-linear-to-br dark:from-slate-950 dark:to-black backdrop-blur-xl rounded-2xl shadow-2xl px-6 py-3 w-[90%] max-w-4xl border border-slate-200/80 dark:border-gray-700/50'
      >
        <div className='flex items-center justify-between'>
          <motion.a
            href='/'
            whileHover={{ scale: 1.05 }}
            className='text-2xl font-bold bg-linear-to-r from-yellow-600 to-amber-700 dark:to-white bg-clip-text text-transparent'
          >
            DW<span className='text-gray-800 dark:text-white'>.</span>
          </motion.a>
          <div className='hidden md:flex items-center gap-6'>
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className='text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors font-medium'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='flex items-center gap-2'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className='p-2 rounded-full bg-amber-100 text-amber-900 shadow-lg transition-colors backdrop-blur-sm hover:bg-amber-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600'>
              {darkMode ? (
                  <Sun className='w-5 h-5' />
              ) : (
                  <Moon className='w-5 h-5' />
              )}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden p-2 rounded-lg bg-slate-100 dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors'
            >
              {isOpen ? (
                <X className='w-5 h-5 text-gray-700 dark:text-white' />
              ) : (
                <Menu className='w-5 h-5 text-gray-700 dark:text-white' />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='md:hidden overflow-hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700'
            >
              <div className='flex flex-col gap-3'>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20}}
                    animate={{ opacity: 1, x: 0}}
                    transition={{ delay: index * 0.05 }}
                    className='text-center py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-slate-900/20 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all font-medium'
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Navbar