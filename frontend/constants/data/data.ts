import { CareerData } from "../CareerData";

export const defaultJobs: CareerData[] = [
    {
        id: 'fca',
        title: 'FCA.ORG.UK — Financial Conduct Authority',
        description: 'As Lead Frontend Engineer, architected and directed the full UI/UX redesign of the UK financial regulator platform. Established a custom Angular and SCSS frontend framework, ensuring strict WCAG 2.1 compliance and driving a 90% increase in user engagement.',
        department: 'Application',
        location: 'Remote',
        type: 'Full-time',
        featured: true,
        href: 'https://www.fca.org.uk/',
    },
    {
        id: 'finreg',
        title: 'FINREG-E.COM — Regulatory Intelligence Platform',
        description: 'Spearheaded frontend architecture and UI/UX modernization as Lead Engineer. Designed and engineered a sophisticated RIG reporting module using Angular and Material UI, resulting in a highly scalable platform and an 85% boost in user engagement.',
        department: 'Application',
        location: 'Remote',
        type: 'Full-time',
        href: 'https://finreg-e.com/',
    },
    {
        id: 'chalets',
        title: 'Chalets Direct - UK',
        description: 'Served as Lead Frontend Architect for the end-to-end platform rebuild. Designed the frontend architecture and led UI/UX development to deliver a modern, high-performance, and conversion-focused browsing experience for holiday rentals.',
        department: 'Application',
        location: 'Remote',
        type: 'Full-time',
        featured: true,
        href: 'https://www.chaletsdirect.com/',
    },
    {
        id: 'proquantic',
        title: 'Proquantic-Website',
        description: 'Engineered a high-performance analytics platform using React, TypeScript, and Recharts. Implemented live data visualization, secure role-based access, and a fully responsive architecture to drive actionable business insights.',
        department: 'Website',
        location: 'Remote',
        type: 'Full-time',
        href: 'https://proquantic.com/',
    },

    {
        id: 'classpoint',
        title: 'ClassPoint — EdTech Learning Platform',
        description: 'Built an interactive Edtech learning application using React and Material UI and Node js. Designed animated quiz/slide interfaces that drove 3× session engagement increase.',
        department: 'Full Stack',
        location: 'Remote',
        type: 'Full-time',
        href: 'https://www.classpoint.app/',
    },
    {
        id: 'Zovara',
        title: 'Zovara — Ecommerce',
        description: 'Developed a robust full-stack e-commerce platform using the PERN stack (PostgreSQL, Express, React, Node.js). Features include a dynamic product catalog, secure Razorpay integration, order tracking, and a comprehensive admin dashboard.',
        department: 'Full Stack',
        location: 'Remote',
        type: 'Full-time',
        href: 'https://www.dropculture.krishnendupanja.online',
    },
    {
        id: "studiopod",
        title: "STUDIOPOD - Video Communication Platform",
        description: "Engineered a scalable video communication platform using the MERN stack (MongoDB, Express, React, Node.js). Implemented real-time video features, secure user authentication, and a responsive interface for seamless virtual collaboration.",
        location: "Remote",
        type: "Contract",
        href: "https://www.thestudiopod.com/",
        department: "Full Stack"
    }
];

export const experiences: Experience[] = [
    {
        title: "UI Developer",
        job: "Freelancer",
        date: "2020-2021",
        contents: [
            "Developed responsive, cross-browser web interfaces for diverse clients using HTML, CSS, and WordPress.",
            "Translated client requirements into clean, maintainable code and pixel-perfect UI designs.",
            "Built reusable components and optimized page performance to improve load times and scalability.",
            "Collaborated closely with designers and back-end developers to deliver end-to-end solutions on tight deadlines.",
        ],
    },
    {
        title: "Junior UI/UX Designer",
        job: "Sentientgeeks",
        date: "2021-2022",
        contents: [
            "Designed user-friendly, visually consistent interfaces in Figma and Photoshop for web and mobile products.",
            "Conducted usability testing and user research to uncover pain points, driving a 10% increase in critical user-journey completion.",
            "Delivered fully responsive designs following accessibility (WCAG) and performance best practices across devices.",
        ],
    },
    {
        title: "UI/UX Developer & Frontend Developer",
        job: "Sentientgeeks",
        date: "2023-2025",
        contents: [
            "Led UI/UX development for high-traffic web applications using Angular, React, and Next.js, from wireframing to implementation.",
            "Architected component-driven interfaces with Tailwind CSS and Chakra UI, cutting development cycles by 15% and lifting conversion metrics by 20%.",
            "Ran user research, usability testing, and A/B testing in collaboration with cross-functional teams to ship pixel-perfect, responsive designs.",
            "Spearheaded migration of a legacy codebase to modern React architecture, reducing technical debt and improving long-term maintainability.",
        ],
    },
    {
        title: "Senior Frontend Developer & Full Stack Engineer",
        job: "Sentientgeeks",
        date: "2025-Present",
        contents: [
            "Own full-stack architecture for production applications, building scalable frontends (React, Next.js, Angular) alongside Node.js/Express + TypeScript backends on PostgreSQL.",
            "Designed and shipped an AI-powered product discovery system, integrating LLM-based tool-use (DeepSeek) and structured tagging (Gemini) for natural-language search with dynamic filters.",
            "Improved system performance and reliability by resolving complex data-layer issues (type casting, indexing, caching) across PostgreSQL and Redis.",
            "Mentored frontend engineers and set technical direction for component architecture, code quality, and deployment practices on AWS/GCP.",
        ],
    },
];