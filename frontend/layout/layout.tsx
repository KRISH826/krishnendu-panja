"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import SplashScreen from "@/components/ui/components/SplashScreen";
import { ReactLenis } from "lenis/react";

const Pagelayout = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ReactLenis
            root
            options={{
                duration: 1.2,
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
                infinite: false,
                lerp: 0.08,
            }}
        >
            {loading ? (
                <SplashScreen />
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </ReactLenis>
    );
};

export default Pagelayout;