import React from 'react'
import Image from 'next/image'

export default function Project() {
  return (
    <div className='bg-zinc-900 text-gray-600 mt-20 items-center justify-center flex flex-col md:flex-col w-full  h-screen'>

      <div className='my-11'>
        <h2 className="flex text-5xl font-bold mb-4 text-center justify-center">My Projects</h2>
      </div>

      <div className="h-[60%] w-[80%] bg-zinc-950 rounded-xl border border-black text-neutral-50 p-5">
        <div className='flex justify-around md:flex-row flex-col'>

          <div className='flex flex-col items-center'> 
            <Image src="/download.png" alt='html,css&tsproject' height={500} width={200}/>
            <a href="https://github.com/MinalSaleem/Hackathon" target="_blank" rel="noopener noreferrer">
            <p className= "text-gray-600 hover:underline text-xl">Html,Css,Ts</p>
            </a>
          </div>

          <div className='flex flex-col items-center'>
            <Image src="/tss.jpg" alt='typescriptproject' height={100} width={200}/>
            <a href="https://github.com/MinalSaleem/Typescript-45-Exercise" target="_blank" rel="noopener noreferrer">
            <p className= "text-gray-600 hover:underline text-xl">Typescript</p>
            </a>
          </div>

          <div className='flex flex-col items-center'>
            <Image src="/nextjss.jpeg" alt='nextjsproject' height={100} width={200}/>
            <a href="https://github.com/MinalSaleem/nextjs-class-assignment" target="_blank" rel="noopener noreferrer">
            <p className= "text-gray-600 hover:underline text-xl">Nextjs</p>
            </a>
          </div>

        </div>

      </div>

    </div>
  
  )
}
