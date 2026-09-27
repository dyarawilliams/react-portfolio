import React from 'react'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t border-slate-200 bg-white/80 py-6 text-slate-600 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row'>
        <p className='text-sm'>© {currentYear} Dyara Williams. All rights reserved.</p>
        <a href='#home' className='inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-yellow-700 dark:hover:text-yellow-400'>
          Back to top
          <ArrowUp size={16} aria-hidden='true' />
        </a>
      </div>
    </footer>
  )
}

export default Footer