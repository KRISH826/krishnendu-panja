'use client';

import React from 'react'
import { HiSparkles, HiCheckCircle } from 'react-icons/hi2'
import { motion } from "motion/react";

type Highlight = {
    label: string;
    description: string;
};

type Props = {
    badge?: string;
    heading?: string;
    headingHighlight?: string;
    description?: string;
    highlights?: Highlight[];
}

const defaultHighlights: Highlight[] = [
    {
        label: "Scalable Code",
        description: "I architect clean, modular code built to grow — from MVP to enterprise scale without rewrites.",
    },
    {
        label: "Location Flexible",
        description: "Open to remote, hybrid, or on-site roles anywhere in the world. Location is never a barrier.",
    },
    {
        label: "Flexible Hours",
        description: "Available across time zones — whether you're in IST, EST, or PST, I adapt to your schedule.",
    },
    {
        label: "End-to-End Ownership",
        description: "From requirements to deployment, I own the full lifecycle and deliver with accountability.",
    },
];

const AboutUs = ({
    badge = "About Me",
    heading = "About Me",
    headingHighlight,
    description = "Full Stack Engineer with 5+ years of experience building scalable, high-performance web applications. I specialize in JavaScript, TypeScript, React.js, Next.js, and Node.js. I care deeply about clean architecture, beautiful UI, and code that lasts — bringing precision and full ownership to every project I touch.",
    highlights = defaultHighlights,
}: Props) => {
    return (
        <section className='about_us_sec'>
            <div className="container">
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                    <div className="content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="mb-10 space-y-4 sm:mb-12"
                        >
                            {badge && (
                                <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                    <HiSparkles className="size-3 text-foreground" />
                                    {badge}
                                </div>
                            )}

                            {(heading || headingHighlight) && (
                                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                                    {heading}{' '}
                                    {headingHighlight && (
                                        <span className="relative inline-block">
                                            <span className="relative z-10 text-foreground">{headingHighlight}</span>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-x-0 bottom-0.5 h-[6px] rounded-full bg-primary/15 dark:bg-primary/20"
                                            />
                                        </span>
                                    )}
                                </h2>
                            )}

                            {description && (
                                <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
                                    {description}
                                </p>
                            )}

                            {highlights && highlights.length > 0 && (
                                <ul className="mt-6 space-y-3">
                                    {highlights.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -16 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-60px" }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <HiCheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                                            <div>
                                                <span className="text-sm font-semibold text-foreground">{item.label} — </span>
                                                <span className="text-sm text-muted-foreground">{item.description}</span>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs