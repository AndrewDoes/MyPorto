import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'project', name: 'Project' },
    { id: 'contact', name: 'Contact' }
];

// NavItem now triggers the scroll function passed from App.jsx
const NavItem = ({ sectionId, name, onNavigate }) => {
    return (
        <button
            onClick={() => onNavigate(sectionId)}
            className="px-5 py-2 lg:px-8 lg:py-5 text-sm m-0 font-medium text-gray-300 hover:text-white transition-colors duration-300"
        >
            {name}
        </button>
    );
}
export default function Navbar({onNavigate}){
    return(
        <nav className="fixed w-full top-0 left-0 right-0 bg-opacity-80 z-40 flex justify-between px-10 lg:px-20 py-5 bg-gradient-to-r from-gray-800 to-black">
            <div className="text-white flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
                <h1 className="text-4xl lg:text-5xl items-center font-mono font-extralight">Andrew<span className="text-indigo-400">Does</span>.com</h1>
            </div>
            <div className="justify-evenly flex items-center py-0 space-x-2 md:space-x-4">
                {navLinks.map(link => (
                    <NavItem 
                        key={link.id} 
                        sectionId={link.id} 
                        name={link.name}
                        onNavigate={onNavigate}
                    />
                ))}
            </div>
        </nav>
    )
}