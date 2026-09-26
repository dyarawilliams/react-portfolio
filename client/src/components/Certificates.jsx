import React from 'react'
import certificateImg from '../assets/certificate.png'
import {motion} from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const Certificates = () => {
    const certificate = [
        {
            id: 1,
            title: 'Programming for Everybody (Getting Started with Python)',
            issuer: 'Coursera',
            date: '2026',
            credentialUrl: 'https://coursera.org/share/f2909cf2de3326817e129e11ff79e862'
        },
        {
            id: 2,
            title: 'Getting started with Google Workspace Specialization',
            issuer: 'Coursera',
            date: '2026',
            credentialUrl: 'https://coursera.org/share/d6935079df74be3c20383279d0120d75'
        },
        {
            id: 3,
            title: 'Search Engine Optimization (SEO) with Squarespace',
            issuer: 'Coursera',
            date: '2023',
            credentialUrl: 'https://coursera.org/share/c20660644a911c0a04332ad98e3e67fb'
        },
        {
            id: 4,
            title: 'Legacy Responsive Web Design V8',
            issuer: 'freeCodeCamp',
            date: '2020',
            credentialUrl: 'https://freecodecamp.org/certification/dyarawilliams/responsive-web-design'
        }
    ]

    return (
        <section id='certificates' className='min-h-screen flex items-center relative overflow-hidden py-20'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14'>
                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
                    <div className='lg:w-2/5 w-full flex justify-center' data-aos='fade-right'>
                        <div className='relative group'>
                            <div className='absolute inset-0 bg-linear-to-r from-slate-600 to-slate-800 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500'></div>
                            <div className='relative w-50 h-50 xs:w-65 xs:h-65 md:w-80 md:h-80 lg:w-96 lg:h-96'>
                                <img src={certificateImg} alt="Certificates" className='w-full h-full object-cover rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500' />
                                <div className='absolute inset-0 border-2 border-slate-500/30 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500' />
                                <div className='absolute inset-0 border-2 border-slate-500/30 rounded-full scale-125 group-hover:scale-150 transition-transform duration-500' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-3/5 w-full' data-aos='fade-left'>
                        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 mb-5'>
                            <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
                            <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>Certifications</span>
                        </div>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold dark:text-white text-gray-900'>
                            My <span className='mt-4 text-yellow-500 dark:text-yellow-400'>Certificates</span>
                        </h2>
                        <motion.div
                            variants={containerVariants}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, margin: '-100px' }}
                            className='grid grid-cols-1 border-t border-b border-gray-200/50 dark:border-zinc-800/50 w-full'>
                            {certificate.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    variants={itemVariants}
                                    className={`p-3 sm:p-4 flex flex-col justify-between group relative transition-colors duration-300 hover:bg-slate-500/5 dark:hover:bg-slate-500/10 ${index < certificate.length - 1 ? 'border-b' : ''} border-gray-200/50 dark: border-zinc-800/50`}>
                                        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
                                            <div className='flex items-start gap-3'>
                                                <div className='p-2 rounded-xl bg-slate-50/10 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300 shrink-0'>
                                                    <Award size={20} />
                                                </div>
                                                <div>
                                                    <h3 className='font-bold dark:text-white text-gray-900 group=hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors'>{cert.title}</h3>
                                                    <span className='text-sm font-medium text-gray-600 dark:text-zinc-400 block mt-0.5'>{cert.issuer}</span>
                                                </div>
                                            </div>
                                        
                                        <div className='flex items-center justify-between sm:flex-col sm:items-end gap-1.5 shrink-0 max-sm:border-t max-sm:border-gray-100/50 max-sm:dark:border-zinc-700/30'>
                                            <div className='flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-zinc-400'>
                                                <Calendar size={13} />
                                                <span>{cert.date}</span>
                                            </div>
                                            <a href={cert.credentialUrl} target='_blank' rel='noreferrer noopener' className='inline-flex items-center gap-1text-xs font-semibold text-green-600 dark:text-green-400 hover:underline'>
                                                Verify <ExternalLink size={11} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Certificates