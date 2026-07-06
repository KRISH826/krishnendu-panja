import { CareerData } from "../CareerData";

export const defaultJobs: CareerData[] = [
    // ── Website Projects ───────────────────────────────────────────────────────
    {
        id: 'fca',
        title: 'FCA.ORG.UK — Financial Conduct Authority',
        description: 'Directed full UI/UX redesign of the UK financial regulator website. Ensured WCAG 2.1 compliance, boosted engagement by 90%, and built a custom Angular + SCSS frontend framework.',
        department: 'Website',
        location: 'Remote',
        type: 'Contract',
        featured: true,
        href: 'https://www.fca.org.uk/',
    },
    {
        id: 'finreg',
        title: 'FINREG-E.COM — Regulatory Intelligence Platform',
        description: 'Led platform-wide UI/UX overhaul using Angular and Material UI. Engineered a sophisticated RIG reporting module; improved user engagement by 85%.',
        department: 'Website',
        location: 'Remote',
        type: 'Full-time',
        href: 'https://finreg-e.com/',
    },
    {
        id: 'krishnendu-portfolio',
        title: 'Personal Identity Website — krishnendupanja.online',
        description: 'Designed and built this very site from scratch using Next.js 16, Tailwind CSS, Framer Motion, and MapLibre. Optimised for SEO, performance, and accessibility.',
        department: 'Website',
        location: 'Remote',
        type: 'Full-time',
        featured: true,
        href: 'https://www.krishnendupanja.online',
    },

    // ── Application Projects ────────────────────────────────────────────────────
    {
        id: 'classpoint',
        title: 'ClassPoint — EdTech Learning Platform',
        description: 'Built an interactive Edtech learning application using React and Material UI. Designed animated quiz/slide interfaces that drove 3× session engagement increase.',
        department: 'Application',
        location: 'Remote',
        type: 'Full-time',
        href: 'https://www.classpoint.app/',
    },
    {
        id: 'sentientgeeks-app',
        title: 'SentientGeeks — Enterprise UI Overhaul',
        description: 'Migrated a large-scale enterprise app from legacy code to React 18. Eliminated 30% of technical debt, boosted user engagement by 80%, and introduced a component design system.',
        department: 'Application',
        location: 'Hybrid',
        type: 'Full-time',
        featured: true,
        href: '#',
    },
    {
        id: 'dashboard-analytics',
        title: 'Analytics Dashboard — Real-time Data Visualisation',
        description: 'Developed a high-performance analytics dashboard with live chart updates, role-based access control, and a responsive layout using React, TypeScript, and Recharts.',
        department: 'Application',
        location: 'Remote',
        type: 'Contract',
        href: '#',
    },

    // ── Full Stack Projects ─────────────────────────────────────────────────────
    {
        id: 'fullstack-saas',
        title: 'SaaS Boilerplate — Next.js + Node.js + PostgreSQL',
        description: 'End-to-end SaaS starter with Next.js App Router, tRPC, Prisma ORM, Stripe billing, and JWT auth. Deployed on Vercel + Railway with CI/CD pipelines.',
        department: 'Full Stack',
        location: 'Remote',
        type: 'Full-time',
        featured: true,
        href: '#',
    },
    {
        id: 'ecommerce-platform',
        title: 'E-Commerce Platform — React + Node.js + MongoDB',
        description: 'Full-stack e-commerce solution with product catalogue, cart, Razorpay payment gateway, order tracking, and an admin panel — built with React, Express.js, and MongoDB.',
        department: 'Full Stack',
        location: 'Remote',
        type: 'Full-time',
        href: '#',
    },
    {
        id: 'realtime-chat',
        title: 'Real-time Chat App — Socket.io + Next.js + Redis',
        description: 'Scalable chat application featuring rooms, typing indicators, read receipts, and message persistence. Uses Socket.io, Redis pub/sub, and a Next.js frontend.',
        department: 'Full Stack',
        location: 'Remote',
        type: 'Contract',
        href: '#',
    },
];