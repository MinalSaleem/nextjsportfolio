"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="py-20 px-6 md:px-10 bg-zinc-900 text-gray-600 min-h-screen flex items-center justify-center w-full"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl mx-auto space-y-6 md:space-y-0 md:space-x-8">
    
        <div className="text-center md:text-left flex-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h1 className="text-2xl font-bold">Hello, I&apos;m</h1>
          </div>

          <h1 className="className mt-2 text-3xl md:text-4xl font-bold text-zinc-950">
            Minal Saleem
          </h1>

          <p className="hidden md:block py-4 text-gray-600 text-base md:text-lg">I am deeply passionate about technology, with a focus on AI and web development. I love building websites using HTML, CSS, TypeScript, and JavaScript. Currently, I am learning Next.js to make my projects more interactive and engaging. Problem-solving excites me, and I enjoy crafting websites that are easy to use and visually appealing.</p>

  

          <div className="w-full md:w-[240px] p-3 mt-4 text-lg rounded-md bg-gray-600 hover:bg-black hover:text-gray-600 text-black mx-auto md:mx-0">
            <Link href={"https://github.com/MinalSaleem"} target="_blank">
              <button
                className="flex items-center space-x-4 justify-center md:justify-start text-xl font-bold "
                type="button"
              >
                Github Account
                <FaGithub size={28} className="ml-6" />
              </button>
            </Link>
          </div>
        </div>


        <div className="w-full md:w-auto flex justify-center mb-6 md:mb-0">
          <Image
            src="/main.jpg"
            width={400}
            height={300}
            alt="picture"
            className="object-cover rounded-full h-80 w-80 hover:scale-110 hover:z-10 duration-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;