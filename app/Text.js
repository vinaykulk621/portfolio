"use client"
import { Inter } from "next/font/google"
import { Allerta_Stencil } from "next/font/google"
import React, { useEffect } from 'react'
import Typed from 'typed.js'


const inter = Inter({ subsets: ['latin'], weight: ['400', '300'], variable: '--font-Inter' })
const allerta = Allerta_Stencil({ subsets: ['latin'], weight: ['400'], variable: '--font-Alerta' })
const Text = () => {
    useEffect(() => {
        const options = {
            strings: ["Hello There"],
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
        // <p className={`element font-sans ${inter.variable} text-8xl text-gray-400`}></p>
        <p className={`element font-alerta ${allerta.variable} text-7xl text-gray-200`}></p>
    )
}

export default Text
