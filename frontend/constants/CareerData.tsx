'use client';

import { useState } from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { FaArrowRight, FaMapMarkerAlt, FaClock, FaFire } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { cn } from '@/lib/utils';
import { motion } from "motion/react";
import { defaultJobs } from './data/data';


export type Career1JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
export type Career1LocationType = 'Remote' | 'Hybrid' | 'On-site';

export interface CareerData {
  id: string;
  title: string;
  description: string;
  department: string;
  location: Career1LocationType;
  type: Career1JobType;
  featured?: boolean;
  href?: string;
}

export interface Career1Department {
  label: string;
  value: string;
}

export interface Career1Cta {
  text: string;
  linkLabel: string;
  href?: string;
}

export interface Career1Props {
  badge?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  departments?: Career1Department[];
  jobs?: CareerData[];
  cta?: Career1Cta;
  className?: string;
}


const defaultDepartments: Career1Department[] = [
  { label: 'All', value: 'all' },
  { label: 'Website', value: 'Website' },
  { label: 'Application', value: 'Application' },
  { label: 'Full Stack', value: 'Full Stack' },
];



const defaultCta: Career1Cta = {
  text: "Interested in working together on a project?",
  linkLabel: 'Download My Resume',
  href: '/resume.pdf',
};



const locationVariant: Record<Career1LocationType, string> = {
  Remote: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900',
  Hybrid: 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900',
  'On-site': 'bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-900',
};



function DeptTab({
  dept,
  isActive,
  count,
  onClick,
}: {
  dept: Career1Department;
  isActive: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium',
        'transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
        isActive
          ? 'bg-foreground text-background shadow-sm'
          : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground',
      )}
    >
      {dept.label}
      {dept.value !== 'all' && (
        <span
          className={cn(
            'inline-flex size-4 items-center justify-center rounded-full text-[10px] font-semibold tabular-nums',
            isActive ? 'bg-background/20 text-background' : 'bg-border text-muted-foreground',
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}

function JobRow({ job }: { job: CareerData }) {
  const rowContent = (
    <div
      className={cn(
        'group relative flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-6',
        'transition-colors duration-150',
      )}
    >

      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/80 transition-colors sm:text-base">
            {job.title}
          </h3>
          {job.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600 border border-amber-100 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900">
              <FaFire className="size-2.5" />
              Hot
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground sm:text-sm line-clamp-1">
          {job.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap sm:shrink-0">

        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium',
            locationVariant[job.location],
          )}
        >
          <FaMapMarkerAlt className="size-2.5" />
          {job.location}
        </span>


        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          <FaClock className="size-2.5" />
          {job.type}
        </span>

        <span className="ml-auto flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background sm:ml-3">
          <FaArrowRight className="size-3 transition-transform duration-400 group-hover:translate-x-0.5" />
        </span>
      </div>
    </div>
  );

  const href = job.href ?? '#';
  const label = `View ${job.title} role`;

  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="border-b border-border last:border-b-0"
    >
      <a href={href} aria-label={label} className="block">
        {rowContent}
      </a>
    </motion.li>
  );
}

function CtaBanner({ cta }: { cta: Career1Cta }) {
  const href = cta.href ?? '#';
  const isDownload = href.endsWith('.pdf');

  return (
    <div className="mt-6 flex flex-col items-start gap-3 rounded-xl border border-border bg-muted/50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background border border-border text-muted-foreground">
          <FiBriefcase className="size-3.5" />
        </span>
        <p className="text-sm text-muted-foreground">{cta.text}</p>
      </div>
      <a
        href={href}
        download={isDownload}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:underline underline-offset-4 transition-all"
      >
        {cta.linkLabel}
        <FaArrowRight className="size-3" />
      </a>
    </div>
  );
}


export default function CareerData({
  badge = 'My Projects',
  heading = 'Things I Have',
  headingHighlight = 'Built',
  description = 'A curated collection of websites, applications, and full-stack products I have designed and engineered — each one shipped with precision, performance, and real-world impact.',
  departments = defaultDepartments,
  jobs = defaultJobs,
  cta = defaultCta,
  className,
}: Career1Props) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredJobs =
    activeTab === 'all' ? jobs : jobs.filter((j) => j.department === activeTab);

  const countByDept = (value: string) =>
    value === 'all' ? jobs.length : jobs.filter((j) => j.department === value).length;

  return (
    <section className={cn('w-full bg-background', className)}>
      <div className="mx-auto container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 space-y-4 sm:mb-12"
        >

          {badge && (
            <span className="relative inline-flex items-center px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-medium text-white/90 border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden">
              {/* Shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-linear-to-r from-transparent via-white/10 to-transparent" />
              <span className="relative flex items-center gap-1"><HiSparkles className="size-3 text-foreground" /> {badge}</span>
            </span>
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

        {departments.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {departments.map((dept) => (
              <DeptTab
                key={dept.value}
                dept={dept}
                isActive={activeTab === dept.value}
                count={countByDept(dept.value)}
                onClick={() => setActiveTab(dept.value)}
              />
            ))}
          </motion.div>
        )}

        <div className="rounded-xl border border-border bg-card px-4 sm:px-6">
          {filteredJobs.length > 0 ? (
            <ul role="list">
              {filteredJobs.map((job) => (
                <JobRow key={job.id} job={job} />
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center gap-3 py-14 text-center">
              <span className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <FiBriefcase className="size-4" />
              </span>
              <p className="text-sm font-medium text-foreground">No openings right now</p>
              <p className="max-w-xs text-xs text-muted-foreground">
                We don&lsquo;t have any open roles in this department at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
        {cta && <CtaBanner cta={cta} />}
      </div>
    </section>
  );
}

export { CareerData };

