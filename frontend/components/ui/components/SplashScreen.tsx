import React from 'react'
import { DiaTextReveal } from '../dia-text-reveal'
import { motion } from "motion/react"

const SplashScreen = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='min-h-screen w-full bg-black flex items-center justify-center'>
            <DiaTextReveal text={"Krishnendu Panja"} className="text-[clamp(32px,5vw,64px)] font-[family-name:var(--font-cursive)] tracking-normal" />
        </motion.div>
    )
}

export default SplashScreen