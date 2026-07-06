import Hero3 from '@/constants/HeroData'
import React from 'react'

const HeroSection = () => {
    const customNavLinks = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Work", href: "#work" },
        { label: "Contact", href: "#contact" },
    ];
    return (
        <section>
            <div className="bg-background flex min-h-screen w-full flex-col justify-center">
                <Hero3
                    brandName="KRISHNENDU PANJA"
                    navLinks={customNavLinks}
                    language="EN"
                    signUpLabel="Download Cv"
                    signUpHref="/resume.pdf"
                    badgeText="✦  Senior Full Stack Engineer"
                    headingLine1="Engineering Scalable"
                    headingLine2="Full-Stack Solutions."
                    description="Full stack developer with 4+ years of experience leading end-to-end development for scalable, high-traffic applications. Expert in optimizing performance, accessibility, and robust backend architecture."
                    primaryCtaLabel="Go to Portfolio !"
                    primaryCtaHref="#projects"
                    secondaryCtaLabel="Start Journey"
                    secondaryCtaHref="#features"
                    bottomTagline={"Collaborative and user-focused,\ndelivering responsive, engaging\ninterfaces that drive conversions."}
                    scrollText="Scroll to Discover"
                />
            </div>
        </section>
    )
}

export default HeroSection