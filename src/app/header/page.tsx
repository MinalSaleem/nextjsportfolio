"use client";
import React from 'react'
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div className='bg-zinc-950 text-gray-600 p-6 flex justify-between w-full fixed top-0 md:flex z-10'>

        <div className='flex justify-between'>
            <h2 className='text-4xl font-bold'>Minal</h2>
        </div>
       
        <div className={`flex-col mr-8 md:space-x-6 md:block mt-3 md:mt-0 md:flex-row sm:flex-col gap-4 font-semibold ${isOpen ? 'flex' : 'hidden'} md:flex `}>
            <Link href={'./'} className='hover:text-gray-600 hover:scale-110 hover:z-10 duration-100'>Home</Link>
            <Link href={'./about'} className='hover:text-gray-600 hover:scale-110 hover:z-10 duration-100'>About</Link>
            <Link href={'./project'} className='hover:text-gray-600 hover:scale-110 hover:z-10 duration-100'>Project</Link>
            <Link href={'./skills'} className='hover:text-gray-600 hover:scale-110 hover:z-10 duration-100'>Skills</Link>
            <Link href={'./contact'}className='hover:text-gray-600 hover:scale-110 hover:z-10 duration-100' >Contact</Link>
        </div>
        
        <div>
            <button onClick={toggleMenu}>
                <IoMenu size={28}
                className='md:hidden'/>
            </button>
        </div>
    </div>
  )
}
