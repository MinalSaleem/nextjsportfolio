import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";

export default function Skills() {
  return (
    <div className='bg-zinc-900 text-gray-600 mt-20 pb-20 flex flex-col md:flex-col w-full h-screen'>

      <div className='my-11'>
        <h2 className="flex text-5xl font-bold mb-4 text-center justify-center">My Skills</h2>
      </div>
      
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-10 content-around px-5">

          <div className='w-full max-w-[350px] md:w-[25vw] h-[180px] bg-black rounded-md flex flex-col items-center p-4 justify-center hover:scale-110 hover:z-10 duration-100'>
            <div className="text-6xl text-gray-600">
            <FaHtml5 />
            </div>
            <h2 className='text-3xl text-gray-600 font-bold mt-2'>Html</h2>
          </div>

          <div className='w-full max-w-[350px] md:w-[25vw] h-[180px] bg-black rounded-md flex flex-col items-center p-4 justify-center hover:scale-110 hover:z-10 duration-100'>
            <div className="text-6xl text-gray-600">
            <FaCss3Alt />
            </div>
            <h2 className='text-3xl text-gray-600 font-bold mt-2'>Css</h2>
          </div>

          <div className='w-full max-w-[350px] md:w-[25vw] h-[180px] bg-black rounded-md flex flex-col items-center p-4 justify-center hover:scale-110 hover:z-10 duration-100'>
            <div className="text-6xl text-gray-600">
            <SiJavascript />
            </div>
            <h2 className='text-3xl text-gray-600 font-bold mt-2'>JavaScript</h2>
          </div>

          <div className='w-full max-w-[350px] md:w-[25vw] h-[180px] bg-black rounded-md flex flex-col items-center p-4 justify-center hover:scale-110 hover:z-10 duration-100'>
            <div className="text-6xl text-gray-600">
            <BiLogoTypescript />
            </div>
            <h2 className='text-3xl text-gray-600 font-bold mt-2'>TypeScript</h2>
          </div>

          <div className='w-full max-w-[350px] md:w-[25vw] h-[180px] bg-black rounded-md flex flex-col items-center p-4 justify-center hover:scale-110 hover:z-10 duration-100'>
            <div className="text-6xl text-gray-600">
                <RiNextjsFill /> 
            </div>
            <h2 className='text-3xl text-gray-600 font-bold mt-2'>Next.js</h2>
          </div>

          <div className='w-full max-w-[350px] md:w-[25vw] h-[180px] bg-black rounded-md flex flex-col items-center p-4 justify-center hover:scale-110 hover:z-10 duration-100'>
            <div className="text-6xl text-gray-600">
            <FaFigma /> 
            </div>
            <h2 className='text-3xl text-gray-600 font-bold mt-2'>Figma</h2>
          </div>
   
        </div>
    
  </div>
  )
}

