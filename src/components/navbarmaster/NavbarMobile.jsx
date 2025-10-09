import React, { useState } from 'react';

const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'project', name: 'Project' },
    { id: 'contact', name: 'Contact' }
];

const MobileNavItem = ({ sectionId, name, onNavigate, closeMenu }) => {
    const handleClick = () => {
        onNavigate(sectionId);
        closeMenu();
    };

    return (
        <button
            onClick={handleClick}
            className="w-full text-center py-4 bg-gray-800 text-xl text-white hover:bg-gray-700 transition-colors"
        >
            {name}
        </button>
    );
};

export default function NavbarMobile({ onNavigate }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="w-full sticky top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50 flex justify-between items-center px-6 py-4">
                <h1 className="text-xl font-bold text-white">My Web Porto</h1>
                
                <button 
                    onClick={toggleMenu} 
                    className="relative z-50 w-8 h-8 flex flex-col justify-around"
                >
                    {/* Top line */}
                    <span className={`block w-full h-0.5 bg-white transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5 translate-x-2' : ''}`}></span>
                    {/* Middle line (fades out) */}
                    <span className={`block w-full h-0.5 bg-white transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                    {/* Bottom line */}
                    <span className={`block w-full h-0.5 bg-white transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5 translate-x-2' : ''}`}></span>
                </button>
            </nav>

            {/* The Dropdown Menu */}
            {/* It is now positioned at the top and slides down into view */}
            <div 
                className={`fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 z-40 pt-20 transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="flex flex-col w-full">
                    {navLinks.map(link => (
                        <MobileNavItem
                            key={link.id}
                            sectionId={link.id}
                            name={link.name}
                            onNavigate={onNavigate}
                            closeMenu={() => setIsOpen(false)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

