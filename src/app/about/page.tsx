import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className='bg-zinc-900 text-gray-600 h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start'>
        <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2 text-gray-600">
            <h1 className="text-5xl my-6 text-gray-600 font-bold">About Me </h1>
          
                <p className='text-base md:text-lg'>My journey in IT began in 2023 since then, I have had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.</p>
                <p className=' text-base md:text-lg'> I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
                <Image 
                        src="/main.jpg"
                        alt="Profile Pic" 
                        width={300} 
                        height={300} 
                        className="object-cover rounded-full h-80 w-80 hover:scale-110 hover:z-10 duration-100"   
                    />
            </div>
    </div>
  )
}
