import { Send } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import contactImg from '../assets/contact.png'

const Contact = () => {
    const [state, handleSubmit] = useForm('xrpbyvee')

    return (
        <section id='contact' className='py-20 relative overflow-hidden'>
            <div className='container mx-auto px-6 max-w-6xl relative z-10'>
                <div className='text-center mb-6' data-aos='fade-up'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-3 dark:text-white text-gray-900'>
                        Get
                        <span className='text-yellow-500 dark:text-yellow-400'> In Touch</span>
                    </h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    {state.succeeded ? (
                        <p role='status' className='dark:bg-slate-900/40 bg-white/70 p-8 sm:p-10 rounded-3xl border dark:border-slate-600 border-slate-300 text-center dark:text-white text-slate-900 order-2 lg:order-1'>
                            Thanks for your message. I will be in touch soon.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className='flex flex-col gap-3 dark:bg-slate-900/40 bg-white/70 p-8 sm:p-10 rounded-3xl border dark:border-slate-600 border-slate-300 backdrop-blur-sm w-full max-w-xl mx-auto lg:mx-0 order-2 lg:order-1' data-aos='fade-right'>
                            <input type='text' name='name' placeholder='Name' aria-label='Name' className='w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-slate-700 border-slate-200 dark:bg-slate-950/60 bg-white dark:text-white text-slate-900 focus:border-yellow-500 dark:focus:border-yellow-400' required />
                            <ValidationError field='name' errors={state.errors} />
                            <input type='email' name='email' placeholder='Email' aria-label='Email' className='w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-slate-700 border-slate-200 dark:bg-slate-950/60 bg-white dark:text-white text-slate-900 focus:border-yellow-500 dark:focus:border-yellow-400' data-aos='fade-up' data-aos-delay='200' required />
                            <ValidationError field='email' errors={state.errors} />
                            <textarea name='message' rows='5' placeholder='Message' aria-label='Message' className='w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-slate-700 border-slate-200 dark:bg-slate-950/60 bg-white dark:text-white text-slate-900 focus:border-yellow-500 dark:focus:border-yellow-400' data-aos='fade-up' data-aos-delay='300' required />
                            <ValidationError field='message' errors={state.errors} />
                            {state.errors?.length > 0 && <p role='alert' className='text-red-600 dark:text-red-400'>There was a problem sending your message. Please try again.</p>}
                            <button type='submit' disabled={state.submitting} className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium text-base bg-yellow-600 hover:bg-yellow-700 active:scale-98 transition-all cursor-pointer w-full sm:w-fit disabled:opacity-60 disabled:cursor-not-allowed' data-aos='fade-up' data-aos-delay='300'>
                                <Send size={18} />
                                {state.submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                    <div className='flex justify-center w-full relative order-1 lg:order-2' data-aos='fade-left'>
                        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                            <div className='w-75 h-90 rounded-full bg-yellow-400/65 dark:bg-yellow-500/40 blur-3xl scale-110' />
                        </div>
                        <img src={contactImg} alt="Contact" className='w-96 h-110 object-cover rounded-3xl relative z-10' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact