import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const [top, setTop] = useState(window.scrollY === 0);
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen((prev) => !prev);
    }

    useEffect(() => {
        const scrollHandler = () => {
            setTop(window.scrollY === 0);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top ? 'bg-white shadow-lg' : ''}`}>
            <div className="flex flex-row justify-between items-center py-2">
                {/* 📌 Logo Section */}
                <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <HashLink smooth to="/#hero">
                        <h1 className="font-extrabold text-4xl text-blue-900">ORG Name AND LOGO</h1>
                    </HashLink>
                </div>

                {/* 📌 Navigation Links & Mobile Menu */}
                <div className="relative flex flex-col items-center">
                    {/* 🍔 Mobile Menu Button */}
                    <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden space-x-6 lg:inline-block p-5">
                        <NavLinks />
                    </div>

                    {/* 📱 Mobile Navigation Menu (Fixed Issue with Transitions) */}
                    <div className={`absolute left-0 w-full bg-white shadow-xl rounded-md p-6 transition-all duration-300 transform lg:hidden ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'}`}>
                        <div className="flex flex-col space-y-6">
                            <NavLinks />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
