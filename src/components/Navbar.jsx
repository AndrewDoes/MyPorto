import React from "react";

const navLinks = ["home", "about", "skills", "project", "contact"];

const NavItem = ({ section, activePage, setActivePage }) => {
    const isActive = activePage === section;
    return (
        <button
            className={`px-8 py-5 text-sm m-0 font-medium transition-colors transition-border duration-300 ${
                isActive ? 'text-white underline' : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setActivePage(section)}
        >
            {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
    );
}

export default function Navbar({ activePage, setActivePage }){
    return(
        <nav className="w-full top-0 left-0 right-0 bg-opacity-80 z-40 flex justify-between px-10 py-5">
            <div className="text-white flex items-center">
                <h1 className="text-3xl font-bold items-center">My Web Porto</h1>
            </div>
            <div className="justify-evenly flex items-center py-0 space-x-2 md:space-x-4">
                {navLinks.map(link => (
                    <NavItem 
                        key={link} 
                        section={link} 
                        activePage={activePage} 
                        setActivePage={setActivePage} 
                    />
                ))}
            </div>
        </nav>
    )
}