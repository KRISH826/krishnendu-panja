"use client"

import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#' },
    { label: 'Career', href: '#' },
    { label: 'Delivery', href: '#' },
    { label: 'Contact', href: '#contact' },
]
const signUpHref = '/resume.pdf'
const signUpLabel = 'Download CV'


const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    useEffect(() => {
        if (!isDrawerOpen) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsDrawerOpen(false)
            }
        }

        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = originalOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isDrawerOpen])

    const closeDrawer = () => setIsDrawerOpen(false)

    return (
        <header className='absolute overflow-visible top-0 left-0 right-0 z-50'>
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
                            className="hidden sm:inline-flex border border-white/80 text-white rounded-full px-6 py-2 text-[14px] font-medium relative overflow-hidden group"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                                {signUpLabel}
                            </span>
                        </motion.a>

                        <button
                            type="button"
                            aria-label="Open navigation menu"
                            aria-expanded={isDrawerOpen}
                            aria-controls="mobile-navigation-drawer"
                            onClick={() => setIsDrawerOpen(true)}
                            className="lg:hidden inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                        >
                            <Menu className="size-5" aria-hidden="true" />
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

            <AnimatePresence>
                {isDrawerOpen && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Close navigation menu"
                            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            onClick={closeDrawer}
                        />

                        <motion.aside
                            id="mobile-navigation-drawer"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation"
                            className="fixed right-0 top-0 z-[60] flex h-dvh w-[min(86vw,360px)] flex-col overflow-y-auto border-l border-white/15 bg-neutral-950/95 px-6 py-5 text-white shadow-2xl backdrop-blur-xl lg:hidden"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <Link href="/" onClick={closeDrawer} className="min-w-0">
                                    <span className="block truncate text-lg font-semibold">
                                        Krishnendu Panja
                                    </span>
                                    <span className="mt-1 block text-xs font-medium uppercase tracking-[0.28em] text-white/45">
                                        Portfolio
                                    </span>
                                </Link>

                                <button
                                    type="button"
                                    aria-label="Close navigation menu"
                                    onClick={closeDrawer}
                                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
                                >
                                    <X className="size-5" aria-hidden="true" />
                                </button>
                            </div>

                            <nav className="mt-10 flex flex-col gap-2">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        onClick={closeDrawer}
                                        className="group flex items-center justify-between text-base font-medium text-white/85 transition hover:text-white"
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.35, delay: 0.08 + idx * 0.05, ease: 'easeOut' }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="mt-auto pt-8">
                                <motion.a
                                    href={signUpHref}
                                    onClick={closeDrawer}
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Download className="size-4" aria-hidden="true" />
                                    {signUpLabel}
                                </motion.a>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
