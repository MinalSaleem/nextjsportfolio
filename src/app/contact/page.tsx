import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div className='bg-zinc-900 text-gray-200 mt-20 flex flex-col items-center w-full h-screen px-4 md:px-8 lg:px-16 py-8'>
      <div className='my-8'>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-600">Contact Me</h2>
      </div>

      <div className="w-full md:w-2/3 lg:w-1/2">
        <form className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="w-full md:w-80 px-4 py-2 text-sm bg-zinc-800 text-gray-200 placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full md:w-80 px-4 py-2 text-sm bg-zinc-800 text-gray-200 placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <textarea
            placeholder="Your message"
            name="message"
            rows={4}
            className="w-full md:w-80 px-4 py-2 text-sm bg-zinc-800 text-gray-200 placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none"
          ></textarea>
          <button className="w-full md:w-80 bg-gray-600 hover:bg-black hover:text-gray-600 text-black px-4 py-2 rounded font-bold shadow-lg transition-all duration-300">
            SEND MESSAGE
          </button>
        </form>
      </div>

      <div className="mt-16 flex space-x-8">
        <Link
          href="https://github.com/MinalSaleem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={42}
            className='text-gray-600 hover:text-gray-500 hover:scale-110 hover:z-10 duration-100 cursor-pointer'
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/minalsaleem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size={42}
            className='text-gray-600 hover:text-gray-500 hover:scale-110 hover:z-10 duration-100 cursor-pointer '
          />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
