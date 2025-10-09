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
            className="w-full text-center py-4 text-2xl text-white hover:bg-gray-700 transition-colors"
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
                
                <button onClick={toggleMenu} className="text-white z-50">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </nav>

            <div className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
