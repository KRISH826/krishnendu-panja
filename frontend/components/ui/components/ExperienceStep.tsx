import React from 'react'
import { Timeline } from '../timeline'
import { experiences } from '@/constants/data/data'

const ExperienceStep = () => {
    return (
        <div className='container'>
            <span className="relative inline-flex items-center px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-medium text-white/90 border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden">
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-linear-to-r from-transparent via-white/10 to-transparent" />
                <span className="relative">✦ Work Experience</span>
            </span>
            <div className="heading mt-4">
                <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl'>
                    Work Experience
                </h2>
                <p className='max-w-xl mt-3 text-sm text-muted-foreground sm:text-base'>
                    Here is a comprehensive list of my professional experience, showcasing my journey as a Frontend Developer and Full Stack Engineer.
                </p>
            </div>
            <div className="relative w-full overflow-clip">
                <Timeline data={experiences} />
            </div>
        </div>
    )
}

export default ExperienceStep