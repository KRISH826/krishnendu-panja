'use client';

import React from 'react'
import { HiSparkles } from 'react-icons/hi2'
import { motion } from "motion/react";

type Props = {
    badge?: string;
    heading?: string;
    headingHighlight?: string;
    description?: string;
}

const AboutUs = ({
    badge = "About Me",
    heading = "About Me",
    headingHighlight,
    description = "I'm a results-oriented Full Stack Engineer with 5+ years of experience designing, developing, and delivering scalable web applications that drive real business impact. Based in Kolkata, India, I specialize in JavaScript, TypeScript, React.js, Next.js, Node.js, and cloud-native solutions. I thrive at the intersection of clean architecture and beautiful UI — writing high-performance code that's maintainable, accessible, and built to scale. Whether collaborating with cross-functional teams or owning a project end-to-end, I bring precision, ownership, and a relentless focus on quality to every line of code I write.",
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
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs