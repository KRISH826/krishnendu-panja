"use client"

import { motion } from 'motion/react'
import Link from 'next/link'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Career', href: '#' },
    { label: 'Delivery', href: '#' },
    { label: 'Contact', href: '#' },
]
const signUpHref = '/resume.pdf'
const signUpLabel = 'Download CV'


const Header = () => {
    return (
        <header className='absolute overflow-hidden top-0 left-0 right-0 z-50'>
            <div className="container">
                <motion.nav
                    className="w-full py-5 md:py-6 flex items-center justify-between"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
                        {/* <LogoIcon className='size-8 text-white' /> */}
                        <span className="text-white text-xl font-semibold tracking-tight group-hover:tracking-wide transition-all duration-300">
                            Krishnendu Panja
                        </span>
                    </Link>

                    {/* Center Nav Links */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.href}
                                className="text-white/85 hover:text-white text-[15px] font-medium transition-colors duration-200 relative group"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/70 group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <motion.a
                            href={signUpHref}
                            className="border border-white/80 text-white rounded-full px-6 py-2 text-[14px] font-medium relative overflow-hidden group"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                                {signUpLabel}
                            </span>
                        </motion.a>

                        <button className="lg:hidden text-white p-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>
                    </div>
                </motion.nav>
                {/* Top-right corner */}
                <motion.div
                    className="absolute top-2 right-6 md:top-4 md:right-10 lg:-right-1.5 w-12 h-12 pointer-events-none hidden md:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    <span className="absolute top-0 right-0 w-full h-px bg-linear-to-l from-white/25 to-transparent" />
                    <span className="absolute top-0 right-0 w-px h-full bg-linear-to-b from-white/25 to-transparent" />
                </motion.div>
            </div>
        </header>
    )
}

export default Header