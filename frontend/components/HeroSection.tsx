import Hero3 from '@/constants/HeroData'
import React from 'react'

const HeroSection = () => {
    const customNavLinks = [
        { label: "Pricing", href: "#" },
        { label: "Products", href: "#" },
        { label: "About", href: "#" },
        { label: "Features", href: "#" },
        { label: "Support", href: "#" },
    ];
    return (
        <section>
            <div className="bg-background flex min-h-screen w-full flex-col justify-center">
                <Hero3
                    brandName="Watermelon"
                    navLinks={customNavLinks}
                    language="EN"
                    signUpLabel="Sign up"
                    signUpHref="#"
                    badgeText="✦  Award-winning digital studio"
                    headingLine1="Building bold ideas"
                    headingLine2="into reality."
                    description="Experiences that stand strong, scale fast, and look exceptional. We help brands and businesses design meaningful digital products."
                    primaryCtaLabel="View Work"
                    primaryCtaHref="#"
                    secondaryCtaLabel="Start Journey"
                    secondaryCtaHref="#"
                    bottomTagline={"Transforming creative thinking\ninto impactful solutions that\ndrive real results."}
                    scrollText="Scroll to Discover"
                />
            </div>
        </section>
    )
}

export default HeroSection