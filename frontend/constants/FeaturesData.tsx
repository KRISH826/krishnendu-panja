'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  HiLightBulb,
  HiShieldCheck,
  HiSupport,
  HiDatabase,
  HiSwitchHorizontal,
} from 'react-icons/hi';

export default function FeaturesData() {
  return (
    <div className="theme-injected flex w-full flex-col items-center justify-center px-6 py-16">
      <h1 className="mb-12 max-w-3xl text-center text-3xl leading-[0.98] font-semibold md:text-5xl">
        My Expertise & Work Culture
      </h1>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="bg-muted/50 rounded-3xl ring-0 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <CardContent className="p-6">
            <div className="bg-muted dark:bg-muted/10 mb-2 size-fit rounded-lg p-px">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.05),0_0px_2px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.05)]">
                <HiLightBulb className="h-5 w-5 text-orange-500" />
              </div>
            </div>
            <h3 className="text-lg font-medium">Frontend Technologies</h3>
            <p className="text-muted-foreground mb-3 text-sm">
              HTML5, CSS3, JavaScript (ES6+), TypeScript
            </p>
            <div className="bg-muted dark:bg-muted/10 inline-flex rounded-lg p-0.5">
              <div className="text-muted-foreground inline-flex items-center rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.04),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]">
                Core Web
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50 rounded-3xl ring-0 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <CardContent className="p-6">
            <div className="bg-muted dark:bg-muted/10 mb-2 size-fit rounded-lg p-px">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.05),0_0px_2px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.05)]">
                <HiDatabase className="h-5 w-5 text-purple-500" />
              </div>
            </div>
            <h3 className="mb-1 text-lg font-medium">Frameworks & Libraries</h3>
            <p className="text-muted-foreground mb-3 text-sm">
              React.js, Next.js, Angular, React Redux, Redux Toolkit, RTK Query
            </p>
            <div className="bg-muted dark:bg-muted/10 inline-flex rounded-lg p-0.5">
              <div className="text-muted-foreground inline-flex items-center rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.04),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]">
                Modern Stack
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50 row-span-2 flex flex-col justify-between rounded-3xl ring-0 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)]">
          <CardContent className="p-6">
            <div className="bg-muted dark:bg-muted/10 mb-3 size-fit rounded-lg p-px">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.05),0_0px_2px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.05)]">
                <HiShieldCheck className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-medium">
              Development Practices & Work Culture
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Responsive Design, Cross-Browser Compatibility, Frontend Architecture, CI/CD Pipeline, SEO. Built with Agile and User-Centered Design methodologies.
            </p>

            <div className="space-y-3">
              <div className="bg-muted dark:bg-muted/10 flex items-center justify-between rounded-md px-3 py-2 text-xs">
                <span className="text-muted-foreground">Accessibility</span>
                <span className="font-medium">WCAG 2.1 Compliance</span>
              </div>
              <div className="bg-muted dark:bg-muted/10 flex items-center justify-between rounded-md px-3 py-2 text-xs">
                <span className="text-muted-foreground">Backend</span>
                <span className="font-medium">Node.js, Express</span>
              </div>
              <div className="bg-muted dark:bg-muted/10 flex items-center justify-between rounded-md px-3 py-2 text-xs">
                <span className="text-muted-foreground">Databases</span>
                <span className="font-medium">MongoDB, PostgreSQL</span>
              </div>
            </div>
          </CardContent>

          <div className="px-6 pb-6">
            <div className="bg-muted dark:bg-muted/10 inline-flex rounded-lg p-0.5">
              <div className="text-muted-foreground inline-flex items-center rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.04),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]">
                Best Practices
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-muted/50 rounded-3xl ring-0 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <CardContent className="p-6">
            <div className="bg-muted dark:bg-muted/10 mb-2 size-fit rounded-lg p-px">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.05),0_0px_2px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.05)]">
                <HiSwitchHorizontal className="h-5 w-5 text-pink-500" />
              </div>
            </div>
            <h3 className="mb-1 text-lg font-medium">Styling Frameworks</h3>
            <p className="text-muted-foreground mb-3 text-sm">
              CSS, Tailwind CSS, Material UI, Bootstrap, Sass, SCSS, Prime NG
            </p>
            <div className="bg-muted dark:bg-muted/10 inline-flex rounded-lg p-0.5">
              <div className="text-muted-foreground inline-flex items-center rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.04),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]">
                Pixel Perfect
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50 rounded-3xl ring-0 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <CardContent className="p-6">
            <div className="bg-muted dark:bg-muted/10 mb-2 size-fit rounded-lg p-px">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_6px_0_rgba(0,0,0,0.07),0_2px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.05),0_0px_2px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.05)]">
                <HiSupport className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <h3 className="mb-1 text-lg font-medium">Design & Collaboration</h3>
            <p className="text-muted-foreground mb-3 text-sm">
              Figma, Adobe Photoshop, GitHub, AWS, GCP
            </p>
            <div className="bg-muted dark:bg-muted/10 inline-flex rounded-lg p-0.5">
              <div className="text-muted-foreground inline-flex items-center rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium shadow-[inset_0_-2px_0.5px_0px_rgba(0,0,0,0),inset_0px_2px_0_2px_rgba(255,255,255,1),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)] dark:bg-black/20 dark:shadow-[inset_0_-1px_0px_0px_rgba(0,0,0,0.1),inset_0px_1px_0px_0px_rgba(255,255,255,0.04),0_0px_2px_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.05)]">
                Cloud & Team
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
