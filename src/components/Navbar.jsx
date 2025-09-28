import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/skills', name: 'Skills' },
    { path: '/project', name: 'Project' },
    { path: '/contact', name: 'Contact' }
];

const NavItem = ({ path, name }) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <Link
            to={path}
            className={`px-8 py-5 text-sm m-0 font-medium transition-colors duration-300 ${isActive ? 'text-white underline' : 'text-gray-300 hover:text-white'
                }`}
        >
            {name}
        </Link>
    );
}

export default function Navbar(){
    return(
        <nav className="w-full top-0 left-0 right-0 bg-opacity-80 z-40 flex justify-between px-10 py-5">
            <div className="text-white flex items-center">
                <h1 className="text-3xl font-bold items-center">My Web Porto</h1>
            </div>
            <div className="justify-evenly flex items-center py-0 space-x-2 md:space-x-4">
                {navLinks.map(link => (
                    <NavItem 
                        key={link.path} 
                        path={link.path} 
                        name={link.name} 
                    />
                ))}
            </div>
        </nav>
    )
}