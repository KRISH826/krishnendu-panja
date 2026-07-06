import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monsterrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

const BASE_URL = "https://www.krishnendupanja.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title ───────────────────────────────────────────────────────────────────
  title: {
    default: "Krishnendu Panja — Full Stack Engineer & UI Developer",
    template: "%s | Krishnendu Panja",
  },

  // ── Description ─────────────────────────────────────────────────────────────
  description:
    "Full Stack Engineer with 5+ years of experience building scalable, high-performance web applications. Specializing in React.js, Next.js, TypeScript, and Node.js. Available globally for remote and on-site roles.",

  // ── Keywords ────────────────────────────────────────────────────────────────
  keywords: [
    "Krishnendu Panja",
    "Full Stack Engineer",
    "Frontend Developer",
    "UI Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer Kolkata",
    "Freelance Developer India",
    "Remote Full Stack Developer",
    "JavaScript Engineer",
  ],

  // ── Authors & Creator ───────────────────────────────────────────────────────
  authors: [{ name: "Krishnendu Panja", url: BASE_URL }],
  creator: "Krishnendu Panja",
  publisher: "Krishnendu Panja",

  // ── Canonical & Alternates ──────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Robots ──────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Krishnendu Panja",
    title: "Krishnendu Panja — Full Stack Engineer & UI Developer",
    description:
      "Full Stack Engineer with 5+ years of experience building scalable, high-performance web applications. Based in Kolkata, India. Available globally.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krishnendu Panja — Full Stack Engineer & UI Developer",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Krishnendu Panja — Full Stack Engineer & UI Developer",
    description:
      "Full Stack Engineer with 5+ years of experience. React.js, Next.js, TypeScript, Node.js. Available globally for remote & on-site roles.",
    creator: "@krishnendupanja",
    images: ["/og-image.png"],
  },

  // ── App / PWA ────────────────────────────────────────────────────────────────
  applicationName: "Krishnendu Panja Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Icons ───────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

// ── Viewport (themeColor moved here per Next.js 14+ deprecation) ──────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monsterrat.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
