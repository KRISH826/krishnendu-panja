import React from 'react'
import { DiaTextReveal } from '../dia-text-reveal'
import { motion } from "motion/react"

const SplashScreen = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='min-h-screen w-full bg-black flex items-center justify-center'>
            <DiaTextReveal text={"Krishnendu Panja"} className="text-[clamp(24px,4vw,48px)] font-bold tracking-tight" />
        </motion.div>
    )
}

export default SplashScreen