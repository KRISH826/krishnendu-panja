'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  HiLightBulb,
  HiShieldCheck,
  HiSupport,
  HiDatabase,
  HiSwitchHorizontal,
} from 'react-icons/hi';
import { motion } from "motion/react";

export default function FeaturesData() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <div className="theme-injected flex w-full flex-col items-center justify-center" id="work">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="sm:mb-12 mb-6 text-center text-3xl leading-[0.98] font-semibold md:text-5xl"
        >
          How I Work & Deliver Value
        </motion.h1>

        <motion.div
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-muted/50 rounded-3xl ring-0 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] h-full">
              <CardContent className="p-6">
                <div className="bg-muted dark:bg-muted/10 mb-2 size-fit rounded-lg p-px">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.05),0_0px_2px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.05)]">
                    <HiLightBulb className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-lg font-medium">High-Performance Code</h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  I write clean, highly optimized code ensuring blazing-fast load times, seamless user experiences, and minimal technical debt.
                </p>
                <div className="bg-muted dark:bg-muted/10 inline-flex rounded-lg p-0.5">
                  <div className="text-muted-foreground inline-flex items-center rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.04),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]">
                    Performance First
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-muted/50 rounded-3xl ring-0 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] h-full">
              <CardContent className="p-6">
                <div className="bg-muted dark:bg-muted/10 mb-2 size-fit rounded-lg p-px">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.05),0_0px_2px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.05)]">
                    <HiDatabase className="h-5 w-5 text-purple-500" />
                  </div>
                </div>
                <h3 className="mb-1 text-lg font-medium">Rapid & Reliable Delivery</h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Committed to meeting deadlines without ever compromising on quality. I utilize CI/CD for swift, automated, and safe deployments.
                </p>
                <div className="bg-muted dark:bg-muted/10 inline-flex rounded-lg p-0.5">
                  <div className="text-muted-foreground inline-flex items-center rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.04),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]">
                    On-Time Execution
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="md:row-span-2">
            <Card className="bg-muted/50 flex flex-col justify-between rounded-3xl ring-0 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)] h-full">
              <CardContent className="p-6">
                <div className="bg-muted dark:bg-muted/10 mb-3 size-fit rounded-lg p-px">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.05),0_0px_2px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.05)]">
                    <HiShieldCheck className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-medium">
                  End-to-End Project Ownership
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Whether working on freelance projects or enterprise solutions, I take full ownership of the product lifecycle—from gathering requirements and architectural design to final deployment and maintenance.
                </p>

                <div className="space-y-3">
                  <div className="bg-muted dark:bg-muted/10 flex items-center justify-between rounded-md px-3 py-2 text-xs">
                    <span className="text-muted-foreground">Collaboration</span>
                    <span className="font-medium">Direct & Transparent</span>
                  </div>
                  <div className="bg-muted dark:bg-muted/10 flex items-center justify-between rounded-md px-3 py-2 text-xs">
                    <span className="text-muted-foreground">Workflows</span>
                    <span className="font-medium">Agile / Iterative</span>
                  </div>
                  <div className="bg-muted dark:bg-muted/10 flex items-center justify-between rounded-md px-3 py-2 text-xs">
                    <span className="text-muted-foreground">Support</span>
                    <span className="font-medium">Continuous Iteration</span>
                  </div>
                </div>
              </CardContent>

              <div className="px-6 pb-6">
                <div className="bg-muted dark:bg-muted/10 inline-flex rounded-lg p-0.5">
                  <div className="text-muted-foreground inline-flex items-center rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.04),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]">
                    Freelance Ready
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-muted/50 rounded-3xl ring-0 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] h-full">
              <CardContent className="p-6">
                <div className="bg-muted dark:bg-muted/10 mb-2 size-fit rounded-lg p-px">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.05),0_0px_2px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.05)]">
                    <HiSwitchHorizontal className="h-5 w-5 text-pink-500" />
                  </div>
                </div>
                <h3 className="mb-1 text-lg font-medium">Client-Centric Approach</h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  I partner closely with clients to deeply understand their business goals and translate them into robust, scalable software.
                </p>
                <div className="bg-muted dark:bg-muted/10 inline-flex rounded-lg p-0.5">
                  <div className="text-muted-foreground inline-flex items-center rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.04),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]">
                    Clear Communication
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-muted/50 rounded-3xl ring-0 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] h-full">
              <CardContent className="p-6">
                <div className="bg-muted dark:bg-muted/10 mb-2 size-fit rounded-lg p-px">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.05),0_0px_2px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.05)]">
                    <HiSupport className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
                <h3 className="mb-1 text-lg font-medium">Future-Proof Solutions</h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Building maintainable architectures that adapt and grow. I ensure the codebase is clean, well-documented, and easy to scale.
                </p>
                <div className="bg-muted dark:bg-muted/10 inline-flex rounded-lg p-0.5">
                  <div className="text-muted-foreground inline-flex items-center rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.04),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]">
                    Sustainable Engineering
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
