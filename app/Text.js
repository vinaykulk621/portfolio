"use client"
import React, { useEffect } from 'react'
import Typed from 'typed.js'

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
        <p className="element"></p>
    )
}

export default Text
