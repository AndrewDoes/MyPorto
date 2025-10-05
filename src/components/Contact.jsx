import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-300 mb-12">
          I'm currently open to new opportunities. Feel free to reach out!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <h2 className="text-2xl font-semibold text-indigo-400">Contact Me Directly</h2>
          <a href="mailto:andrewsutiono01@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
            <HiOutlineMail size={30} />
            <span>My Email</span>
          </a>
          <a href="https://github.com/AndrewDoes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
            <FaGithub size={30} />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/nicholas-andrew-sutiono" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
            <FaLinkedin size={30} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Right Side: Form */}
        <form 
          action="https://formspree.io/f/mwprqkbg" // <-- PASTE YOUR FORMPSREE URL HERE
          method="POST"
          className="w-full flex-1 flex flex-col gap-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea 
              name="message" 
              id="message"
              required
              rows="5"
              className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-500 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}