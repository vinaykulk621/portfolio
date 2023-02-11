"use client"
import { Inter } from '@next/font/google'
import React, { useEffect } from 'react'
import Typed from 'typed.js'


const inter = Inter({ subsets: ['latin'], weight: ['400', '300'], variable: '--font-Inter' })
const Text = () => {
    useEffect(() => {
        const options = {
            strings: ["Hello There👋", "This Is Vinay"],
            typeSpeed: 150,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
            cursorChar: "|",
            showCursor: false,
        }
        const typed = new Typed('.element', options)
        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <p className={`element font-sans ${inter.variable} text-8xl`}></p>
    )
}

export default Text
