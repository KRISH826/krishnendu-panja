import Hero from '@/constants/HeroData'
import React from 'react'

const HeroSection = () => {
    return (
        <section>
            <div className="bg-background flex min-h-screen w-full flex-col justify-center">
                <Hero
                    badgeText="✦  Senior Full Stack Engineer"
                    headingLine1="Engineering Scalable"
                    headingLine2="Full-Stack Solutions."
                    description="Full stack developer with 4+ years of experience leading end-to-end development for scalable, high-traffic applications. Expert in optimizing performance, accessibility, and robust backend architecture."
                    primaryCtaLabel="Go to Portfolio !"
                    secondaryCtaLabel="Start Journey"
                    bottomTagline={"Collaborative and user-focused,\ndelivering responsive, engaging\ninterfaces that drive conversions."}
                    scrollText="Scroll to Discover"
                />
            </div>
        </section>
    )
}

export default HeroSection