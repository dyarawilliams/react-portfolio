const Skills = () => {
    const skills = [
        { name: 'JavaScript', percentage: 90, color: '#F7DF1E' },
        { name: 'Python', percentage: 85, color: '#3776AB' },
        { name: 'React JS', percentage: 80, color: '#61DBFB' },
        { name: 'Node.js', percentage: 75, color: '#339933' },
        { name: 'Tailwind CSS', percentage: 85, color: '#38BDF8' },
    ]

    return (
        <section id='skills' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative' >
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/50 rounded-full blur-3xl'></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/50 rounded-full blur-3xl'></div>
            </div>

            <div className='max-w-6xl mx-auto w-full relative z-10'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 mb-5'>
                        <span className='w-2 h-2 rounded-full bg-yellow-500 animate-pulse'></span>
                        <span className=''>Expertise</span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                        My <span className='mt-4 text-yellow-500 dark:text-yellow-400'>Skills</span>
                    </h2>
                    <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                        Technologies and tools I use to build modern, responsive, and high-performance applications.
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
                    {skills.map((skill, index) => {
                        const radius = 60
                        const circumference = 2 * Math.PI * radius
                        const offset = circumference - (skill.percentage / 100) * circumference
                        const size = 150

                        return (
                            <div key={index} className='flex flex-col items-center' data-aos='fade-up' data-aos-delay={index * 100}>
                                <div className='relative' style={{ width: size, height: size }}>
                                    <svg className='transform -rotate-90' width={size} height={size}>
                                        <circle cx={size / 2} cy={size / 2} r={radius} fill='none' stroke='#e5e7eb' strokeWidth='10' className='dark:stroke-gray-700' />
                                        <circle
                                            cx={size / 2}
                                            cy={size / 2}
                                            r={radius}
                                            fill='none'
                                            stroke={skill.color}
                                            strokeWidth='10'
                                            strokeDasharray={circumference}
                                            strokeDashoffset={offset}
                                            strokeLinecap='round'
                                            className='transition-all duration-1000 ease-out'
                                            style={{transition: 'stroke-dashoffset 1.5s ease-in-out'}} />
                                    </svg>
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <div>
                                            <span className='text-3xl font-bold dark:text-white text-gray-900'>
                                                {skill.percentage}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className='mt-4 text-base font-medium text-center dark:text-gray-200 text-gray-900'>{skill.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills