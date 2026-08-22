import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import hero from '../assets/hero.png'
import CV from '../assets/Dyara-Williams-Resume-2026.pdf'
import { Eye, Mail } from 'lucide-react';

const Hero = () => {
  const socialIcons = [
    { icon: FaInstagram, alt: 'Instagram', link: '#' },
    { icon: FaLinkedin, alt: 'LinkedIn', link: '#' },
    { icon: FaGithub, alt: 'GitHub', link: '#' },
  ];

  return (
    <section id='home' className='min-h-screen flex items-center relative overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-8 lg:px-14 py-12 lg:-mt-14 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
          <div className='lg:w-2/5 w-full flex justify-center' data-aos='fade-right'>
            <div className='relative group'>
              <div className='absolute inset-0 bg-linear-to-r from-slate-600 to-slate-800 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500' />
              <div className='relative w-50 h-50 xs:w-65 xs:h-65 md:w-80 md:h-80 lg:w-96 lg:h-96'>
                <img src={hero} alt="hero" className='w-full h-full object-cover rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500' />
                <div className='absolute inset-0 border-2 border-slate-500/30 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500' />
                <div className='absolute inset-0 border-2 border-slate-500/30 rounded-full scale-125 group-hover:scale-150 transition-transform duration-500' />
              </div>
            </div>
          </div>
          <div className='lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left' data-aos='fade-left'>
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 border border-slate-300 text-gray-700 dark:bg-slate-800/60 dark:border-slate-700 dark:text-slate-200 mb-5'>
              <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
              <span className='text-sm font-medium text-gray-700 dark:text-slate-200'>Available for work</span>
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-gray-900 dark:text-slate-100'>
              Hi, I'm <span className='text-yellow-500'>D'yara</span>
            </h1>
            <h2 className='text-xl sm:text-2xl font-mono mb-4 text-gray-700 dark:text-slate-300'>
              <span className='text-gray-500 dark:text-slate-400'>&lt; </span>
              Software Engineer /
              <span className='text-gray-500 dark:text-slate-400'> &gt;</span>
            </h2>
            <p className='mb-6 leading-relaxed max-w-md lg:max-w-lg text-gray-700 dark:text-slate-300'>
              I specialize in building web applications that are not only functional but also visually appealing. My goal is to create seamless user experiences through clean and efficient code.
            </p>
            <div className='flex gap-8 mb-7'>
              {[
                { number: '5+', label: 'Years of Experience' },
                { number: '50+', label: 'Projects' },
                { number: '5+', label: 'Happy Clients' },
              ].map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-2xl font-bold text-gray-900 dark:text-slate-100'>{stat.number}</div>
                  <div className='text-xs text-gray-500 dark:text-slate-400'>{stat.label}</div>
                </div>
              ))}
            </div>
            <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
              <a
                href={CV}
                target='_blank'
                rel='noreferrer'
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white dark:text-white font-semibold bg-linear-to-r from-slate-700 via-[#203584] to-slate-900 hover:shadow-[0_0_40px_rgba(234,179,8,0.7)] transition-all duration-300 transform hover:scale-105 border border-slate-600'
              >
                <Eye size={18} />
                View Resume
              </a>
              <a
                href='#contact'
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-slate-700 bg-slate-100/80 text-gray-800 dark:border-slate-500 dark:bg-slate-800/60 dark:text-slate-100 dark:hover:bg-slate-700 hover:bg-slate-200 hover:shadow-[0_0_40px_rgba(234,179,8,0.7)] transition-all duration-300 transform hover:scale-105 font-semibold'
              >
                <Mail size={18} />
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero