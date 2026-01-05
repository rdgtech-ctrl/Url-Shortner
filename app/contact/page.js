"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { LucideContact2 } from 'lucide-react';

const contact = () => {
    return (
        <div>
            <div className='flex flex-col rounded-2xl items-center bg-purple-100 min-h-screen m-2 md:m-4 p-4 md:p-7 gap-6 md:gap-8 border-4 md:border-6 border-purple-400'>

                <div className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 flex justify-center relative">
                    <Image
                        className="mix-blend-darken object-contain"
                        src={"/contactus.jpg"}
                        alt="Image of about us"
                        fill={true}
                    />
                </div>
            </div>
            <div>
                
            </div>
        </div>


    )
}


export default contact