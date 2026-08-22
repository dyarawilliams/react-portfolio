import React from 'react'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { ArrowRight } from 'lucide-react'
import about from '../assets/about.png'


const CV = '#'

const About = () => {
    const socialLinks = [
        {
            icon: FaGithub,
            label: 'GitHub',
            url: 'https://github.com/dyarawilliams',
            color: 'text-gray-700 hover:text-slate-900 hover:border-slate-900/40 dark:text-slate-200 dark:hover:text-white dark:hover:border-white/40'
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/dyarawilliams',
            color: 'text-gray-700 hover:text-blue-500 hover:border-blue-500/40 dark:text-slate-200 dark:hover:text-blue-400 dark:hover:border-blue-400/40'
        },
        {
            icon: FaXTwitter,
            label: 'X',
            url: 'https://x.com/xChaoticRage',
            color: 'text-black hover:text-black hover:border-black/40 dark:text-white dark:hover:text-white dark:hover:border-white/40'
        },
        {
            icon: FaYoutube,
            label: 'YouTube',
            url: 'https://www.youtube.com/@dyarawilliams',
            color: 'text-gray-700 hover:text-red-500 hover:border-red-500/40 dark:text-slate-200 dark:hover:text-red-400 dark:hover:border-red-400/40'
        }
    ]

    return (
        <section id='about' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
            <div className='max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10'>
                <div className='order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left' data-aos='fade-right'>
                    <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 border border-slate-300 text-gray-700 dark:bg-slate-800/60 dark:border-slate-700 dark:text-slate-200 mb-4'>
                        <span className='w-2 h-2 rounded-full bg-slate-500 animate-pulse'></span>
                        <span className='text-xs sm:text-sm font-semibold tracking-wider uppercase'>About Me</span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-slate-100 leading-tight'>Turning Ideas into
                        <span className='text-yellow-600 dark:text-yellow-400 block'>Innovations</span>
                    </h2>
                    <p className='text-base lg:text-lg mb-8 leading-relaxed text-gray-700 dark:text-slate-300 max-w-xl'>I am a Highly motivated, detail-oriented software engineer based in South Carolina skilled in utilizing diverse programming languages, frameworks, and tools to deliver high-quality solutions.</p>
                    <div className='flex gap-4 mb-8'>
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon
                            return (
                                <a
                                    key={index}
                                    href={social.url}
                                    aria-label={social.label}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    data-aos='zoom-in'
                                    data-aos-delay={index * 100}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/60 backdrop-blur-sm text-gray-700 dark:text-slate-200 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}>
                                    <IconComponent />
                                </a>
                            )
                        })}
                    </div>
                    <a
                        href="#contact"
                        data-aos='fade-up'
                        data-aos-delay='300'
                        target='_blank'
                        rel='noreferrer'
                        className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-slate-600 via-[#203584] to-slate-800 hover:shadow-[0_0_40px_rgba(234,179,8,0.7)] transition-all duration-300 transform hover:scale-105'
                    >
                        Let's Talk
                        <ArrowRight size={18} />
                    </a>
                    </div>
                    <div className='relative order-1 lg:order-2 flex justify-center' data-aos='fade-left'>
                        <div className='relative w-full max-w-sm sm:max-w-md'>
                            <div className='absolute inset-0 bg-linear-to-r from-slate-600 to-slate-800 rounded-[40%_60%_60%/40%_60%_70%] filter blur-xl opacity-40 animate-pulse' />
                            <div className='absolute inset-0 bg-linear-to-r from-slate-600 to-slate-800 rounded-[40%_60%_60%/40%_60%_70%] transform rotate-3 scale-105' />
                            <img src={about} alt="About" className='relative z-10 rounded-[40%_60%_60%/40%_60%_70%] shadow-2xl w-full h-auto object-cover border-2 border-slate-500/30 backdrop-blur-sm' />
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default About