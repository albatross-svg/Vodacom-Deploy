import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);

    function handleClick() {
        setisOpen(!isOpen);
    }

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-3 px-6 md:px-16">
                {/* Logo */}
                <div className="text-center font-semibold">
                    <HashLink smooth to="/#hero">
                        <h1 className="font-extrabold text-4xl text-blue-900">ORG Name AND LOGO</h1>
                    </HashLink>
                </div>

                {/* Mobile Toggle Button */}
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
                <div className="hidden lg:flex flex-1 justify-evenly items-center text-lg font-semibold">
                    <HashLink smooth to="/#hero" className="text-blue-900 hover:text-gray-600 transition">Home</HashLink>
                    <HashLink smooth to="/#about" className="text-blue-900 hover:text-gray-600 transition">About</HashLink>
                    <HashLink smooth to="/#services" className="text-blue-900 hover:text-gray-600 transition">Services</HashLink>
                    <HashLink smooth to="/#portfolio" className="text-blue-900 hover:text-gray-600 transition">Portfolio</HashLink>
                    <HashLink smooth to="/#contact" className="text-blue-900 hover:text-gray-600 transition">Contact Us</HashLink>
                </div>

                {/* Mobile Navigation */}
                <div className={`fixed transition-transform duration-300 ease-in-out flex flex-col justify-center items-center w-full bg-white lg:hidden shadow-xl top-14 p-6 ${isOpen ? "block" : "hidden"}`}>
                    <HashLink smooth to="/#hero" className="text-blue-900 hover:text-gray-600 transition py-2">Home</HashLink>
                    <HashLink smooth to="/#about" className="text-blue-900 hover:text-gray-600 transition py-2">About</HashLink>
                    <HashLink smooth to="/#services" className="text-blue-900 hover:text-gray-600 transition py-2">Services</HashLink>
                    <HashLink smooth to="/#portfolio" className="text-blue-900 hover:text-gray-600 transition py-2">Portfolio</HashLink>
                    <HashLink smooth to="/#contact" className="text-blue-900 hover:text-gray-600 transition py-2">Contact Us</HashLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
