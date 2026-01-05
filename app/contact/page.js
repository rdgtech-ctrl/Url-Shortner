"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { LucideContact2 } from 'lucide-react';

const contact = () => {
    return (
        <div>
            <div className='flex flex-row justify-between rounded-2xl items-center bg-purple-100 min-h-screen  md:m-4 p-4 md:p-7 gap-6 md:gap-8 border-4 md:border-6 border-purple-400'>

                <div className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 flex justify-center relative">
                    <Image
                        className="mix-blend-darken object-contain"
                        src={"/contactus.jpg"}
                        alt="Image of about us"
                        fill={true}
                    />
                </div>
                <div className='p-8 flex flex-col gap-2'>
                    <div className="font-medium text-8xl flex gap-4">Contact Us</div>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-4'>
                            {/*fullname,email,msg*/}
                            <label className='font-medium text-xl' htmlFor="name" >Full Name</label>
                            <input  className="w-full border-2 border-purple-400 rounded-lg p-3 bg-purple-100 text-black placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:shadow-lg transition-all duration-200" />

                            <label className='font-medium text-xl' htmlFor="email">E-mail</label>
                            <input className="w-full border-2 border-purple-400 rounded-lg p-3 bg-purple-100 text-black placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:shadow-lg transition-all duration-200  focus:outline-purple-600 rounded-md" type="text" />

                            <label className='font-medium text-xl' htmlFor="Message">Message</label>
                            <input className="w-full border-2 border-purple-400 rounded-lg p-3 bg-purple-100 text-black placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:shadow-lg transition-all duration-200  focus:outline-purple-600 rounded-md"  type="text" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            {/*Contact,basedin*/}
                            <h3 className='font-medium text-2xl'>Contact</h3>
                            <h4>musouka@gmail.com</h4>

                            <h3 className='font-medium text-2xl'>Based in</h3>
                            <h4>Bangalore The Silicion Valley Of India</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}


export default contact