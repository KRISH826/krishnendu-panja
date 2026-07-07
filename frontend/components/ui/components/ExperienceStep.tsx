import React from 'react'
import { Timeline } from '../timeline'
import { experiences } from '@/constants/data/data'

const ExperienceStep = () => {
    return (
        <div className='container'>

            <div className="relative w-full overflow-clip">
                <Timeline data={experiences} />
            </div>
        </div>
    )
}

export default ExperienceStep