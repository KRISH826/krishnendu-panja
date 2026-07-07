"use client"
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/footer'
import SplashScreen from '@/components/ui/components/SplashScreen'

const Pagelayout = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2500)
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <>
            {
                loading ? <>
                    <SplashScreen />
                </> : <>
                    <Header />
                    {children}
                    <Footer />
                </>
            }
        </>
    )
}

export default Pagelayout