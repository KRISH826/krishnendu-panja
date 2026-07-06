'use client';

import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";
import { motion } from "motion/react"

const integrations = [
    { name: 'MongoDB', icon: 'mongo.svg' },
    { name: 'Next.js', icon: 'next-js.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'Node.js', icon: 'node-js.svg' },
    { name: 'AWS', icon: 'aws.svg' },
    { name: 'GCP', icon: 'gcp.svg' },
    { name: 'Docker', icon: 'docker.svg' },
    { name: 'React', icon: 'react.svg' },
    { name: 'PostgreSQL', icon: 'pgsql.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
    { name: 'SCSS', icon: 'scss.svg' },
    { name: 'Material UI', icon: 'material.svg' },
    { name: 'Vite', icon: 'vitejs.svg' },
    { name: 'HTML5', icon: 'html5.svg' },
    { name: 'Accessibility', icon: 'accessibility.svg' },
    { name: 'GitHub', icon: 'github.svg' },
    { name: 'VS Code', icon: 'visualstudiocode.svg' },
];

const columnLayout = [
    [0],
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9, 10, 11],
    [12, 13, 14, 15],
    [16, 17],
    [18],
];
function IntegrationCard({ app, index }: { app: (typeof integrations)[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group bg-muted/50 relative flex h-16 w-16 items-center justify-center rounded-lg shadow-[inset_0_0_2px_2px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08),0px_1px_2px_-1px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.06)] sm:h-20 sm:w-20 lg:h-24 lg:w-24 dark:shadow-[inset_0_0_2px_2px_rgba(255,255,255,0.04),inset_0_0_0_1px_rgba(255,255,255,0.08),0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.5),0px_2px_4px_0px_rgba(0,0,0,0.4)] transition-all hover:scale-110"
        >
            <Image
                src={`/icons/${app.icon}`}
                alt={app.name}
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
            />
        </motion.div>
    );
}

export default function SkillIntegration() {
    return (
        <section className="bg-muted/50 relative h-full w-full overflow-hidden py-16">
            <div className="container mx-auto max-w-5xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center md:mb-12"
                >
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        <HiSparkles className="size-3 text-foreground" />
                        My Skills
                    </div>
                    <h2 className="text-foreground mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Modern tech stack for scalable solutions
                    </h2>
                </motion.div>

                <div className="relative mx-auto mb-4 max-w-4xl">
                    <div className="flex flex-wrap justify-center gap-4 md:hidden">
                        {integrations.map((app, index) => (
                            <IntegrationCard key={app.name} app={app} index={index} />
                        ))}
                    </div>

                    <div className="hidden items-center justify-center gap-2 md:flex lg:gap-4">
                        {columnLayout.map((colIndices, i) => (
                            <div key={i} className="flex flex-col gap-2 lg:gap-4">
                                {colIndices.map((index) => {
                                    const app = integrations[index];
                                    return <IntegrationCard key={app.name} app={app} index={index} />;
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
