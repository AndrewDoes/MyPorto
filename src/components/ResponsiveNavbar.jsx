import React, { useState, useEffect } from 'react';
import Navbar from './navbarmaster/Navbar';
import NavbarMobile from './navbarmaster/NavbarMobile';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
};

export default function ResponsiveNavbar({ onNavigate }) {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    return isDesktop ? <Navbar onNavigate={onNavigate} /> : <NavbarMobile onNavigate={onNavigate} />;
}
