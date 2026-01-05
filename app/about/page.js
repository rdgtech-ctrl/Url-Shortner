"use client"
import React, { useState } from 'react'
import Image from "next/image";

const about = () => {
    return (
        <div className='flex flex-col rounded-2xl items-center bg-purple-100 min-h-screen m-2 md:m-4 p-4 md:p-7 gap-6 md:gap-8 border-4 md:border-6 border-purple-400'>
            
            <div className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 flex justify-center relative">
                <Image 
                    className="mix-blend-darken object-contain" 
                    src={"/aboutus.jpg"} 
                    alt="Image of about us" 
                    fill={true}
                />
            </div>
            
            
            <div className='flex flex-col items-center justify-center font-bold gap-3 md:gap-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl px-2'>
                <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                    We believe that the simplest tools should also be the most powerful. Our URL shortener was created with a clear purpose: to eliminate unnecessary barriers and deliver instant results. In a world where most platforms require sign-ups, logins, and personal data, we chose a different path—speed, simplicity, and accessibility for everyone.
                </p>
                <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                    Our platform allows users to shorten URLs without any registration, login, or account creation. This means no waiting, no verification emails, and no friction. Just paste your long link, generate a short URL, and share it instantly. By removing authentication layers, we make the process faster, more efficient, and far more user-friendly.
                </p>
                <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                    We focus on building a robust and lightweight system that performs reliably under all conditions. Whether you are sharing links on social media, sending them via messages, embedding them in documents, or using them for quick access, our service is designed to work seamlessly and consistently. The absence of user accounts also reduces complexity, making the platform more secure, scalable, and easy to maintain.
                </p>
                <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                    Time efficiency is at the core of everything we build. We understand that users don't want distractions—they want solutions. That's why our interface is clean, intuitive, and free from clutter. Every feature exists for a reason, and every interaction is optimized to save time.

                    Privacy is another value we take seriously. Since we do not require logins or personal information, users can shorten links without worrying about data tracking or account misuse. Our approach ensures a more private and straightforward experience while maintaining high performance and reliability.
                </p>
                <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                    Our mission is to provide a fast, dependable, and universally accessible URL shortening service that anyone can use—anytime, anywhere. By keeping things simple and removing unnecessary obstacles, we aim to redefine how efficient web tools should work.
                </p>
            </div>
        </div>
    )
}

export default about