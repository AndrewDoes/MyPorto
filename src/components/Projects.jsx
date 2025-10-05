import hcilec from "../assets/HCIlec.png"
import hcilab from "../assets/HCIlab.png"
import cashierapp from "../assets/CashierApp.png"
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const projects = [
    {
        id: 1,
        title: "Human Computer Interaction (LEC)",
        description: "A project that I made for Human Computer Interaction (LEC) course at Binus University to introduce myself to native web developing with HTML, CSS, and JS with a focus on user experience and user interface design.",
        image: hcilec,
        language: ["HTML", "CSS", "JS"],
        link: "https://hci-project-lec.vercel.app/"
    },
    {
        id: 2,
        title: "Human Computer Interaction (LAB)",
        description: "A project to further develop my understanding of web development with HTML, CSS, and JS with a focus on responsiveness and functionality",
        image: hcilab,
        language: ["HTML", "CSS", "JS"],
        link: "https://hci-project-lab.vercel.app/"
    },
    {
        id: 3,
        title: "Next.js Cashier Program",
        description: "Self-initiated cashier program with Next.js and Firebase",
        image: cashierapp,
        language: ["Next.js", "Firebase"],
        link: "https://nextjs-cashier-program.vercel.app/"
    }
]

const ProjectCards = ({ title, description, image, link }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div 
                className="w-80 h-96 rounded-xl bg-gray-700 shadow-lg flex flex-col justify-center items-center p-6 cursor-pointer"
                onClick={handleFlip}
            >
                <div className="w-full h-48 mb-4 rounded-md overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <h1 className="text-indigo-300 text-xl font-bold text-center">{title}</h1>
                <p className="text-white text-sm mt-2">Click to flip</p>
            </div>
            <div 
                className="w-80 h-96 rounded-xl bg-gray-800 shadow-lg flex flex-col justify-between items-center p-6 cursor-pointer"
                onClick={handleFlip}
            >
                <h2 className="text-indigo-300 text-xl font-bold text-center">{title}</h2>
                <p className="text-white text-md text-center flex-grow flex items-center">{description}</p>
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full text-center bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg z-40 hover:bg-indigo-500 transition-colors"
                    onClick={() => {window.location.href = link}}
                >
                    Visit Project
                </a>
            </div>
        </ReactCardFlip>
    );
}

// ... your main Projects component that maps over the data

export default function Projects() {
    return (
        <div className="flex flex-col w-screen py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-15 text-center">Projects</h1>
            <div className="flex w-screen h-full px-60 justify-between items-center">
                {projects.map(project => <ProjectCards key={project.id} id={project.id} title={project.title} description={project.description} image={project.image} link={project.link}/>)}
            </div>
        </div>
    )
}