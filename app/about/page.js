"use client"
import React, { useState } from 'react'

import Image from "next/image";


const about = () => {
    return (
        <div className='flex flex-col rounded-2xl items-center bg-purple-100 h-full m-4 p-7 gap- border-6 border-purple-400'>
            <div className=" h-96 w-96 flex justify-start relative">
                <Image className="mix-blend-darken" src={"/aboutus.jpg"} alt="Image of about us" fill={true} ></Image>
            </div>
            <div className='flex flex-col items-center justify-center font-bold gap-3'>
                <p>We believe that the simplest tools should also be the most powerful. Our URL shortener was created with a clear purpose: to eliminate unnecessary barriers and deliver instant results. In a world where most platforms require sign-ups, logins, and personal data, we chose a different path—speed, simplicity, and accessibility for everyone.</p>
                <p>
                    Our platform allows users to shorten URLs without any registration, login, or account creation. This means no waiting, no verification emails, and no friction. Just paste your long link, generate a short URL, and share it instantly. By removing authentication layers, we make the process faster, more efficient, and far more user-friendly.
                </p>
                <p>We focus on building a robust and lightweight system that performs reliably under all conditions. Whether you are sharing links on social media, sending them via messages, embedding them in documents, or using them for quick access, our service is designed to work seamlessly and consistently. The absence of user accounts also reduces complexity, making the platform more secure, scalable, and easy to maintain.</p>
                <p>
                    Time efficiency is at the core of everything we build. We understand that users don’t want distractions—they want solutions. That’s why our interface is clean, intuitive, and free from clutter. Every feature exists for a reason, and every interaction is optimized to save time.

                    Privacy is another value we take seriously. Since we do not require logins or personal information, users can shorten links without worrying about data tracking or account misuse. Our approach ensures a more private and straightforward experience while maintaining high performance and reliability.
                </p>
                <p>
                    Our mission is to provide a fast, dependable, and universally accessible URL shortening service that anyone can use—anytime, anywhere. By keeping things simple and removing unnecessary obstacles, we aim to redefine how efficient web tools should work.
                </p>
            </div>
        </div >
    )
}

export default about