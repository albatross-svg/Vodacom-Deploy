import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer
            className="bg-gray-100 border-t border-gray-200 py-12 relative"
            style={{
                backgroundImage: `url('/path-to-your-company-logo.png')`, // 🔹 Replace with actual logo path
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.1, // 🔹 Adjust opacity as needed
            }}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Footer Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    
                    {/* 1st Block: MLD Box (Left) */}
                    <div className="bg-gray-200 p-8 rounded-lg border-b-4 border-blue-900 shadow-md">
                        <h3 className="text-4xl font-bold text-gray-800 mb-4">MLD</h3>
                        <div className="text-md text-gray-600 font-medium">
                            <h5>#### Specific Location / Phone number</h5>
                            <p>#### Woreda, Subcity</p>
                            <p>Addis Ababa, Ethiopia</p>
                        </div>
                    </div>

                    {/* 2nd Block: Links (Centered) */}
                    <div className="flex flex-col items-center">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md space-y-2">
                            <li>
                                <HashLink to="#" className="text-[#013289] hover:text-gray-900 transition-all">About</HashLink>
                            </li>
                            <li>
                                <HashLink to="#" className="text-[#013289] hover:text-gray-900 transition-all">Services</HashLink>
                            </li>
                            <li>
                                <HashLink to="#" className="text-[#013289] hover:text-gray-900 transition-all">Contact</HashLink>
                            </li>
                        </ul>
                    </div>

                    {/* 3rd Block: Our Services (Right-Aligned) */}
                    <div className="text-right">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                        <ul className="text-md space-y-2">
                            <li>
                                <Link to="#" className="text-[#013289] hover:text-gray-900 transition-all">Service 1</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-[#013289] hover:text-gray-900 transition-all">Service 2</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-[#013289] hover:text-gray-900 transition-all">Service 3</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-[#013289] hover:text-gray-900 transition-all">Service 4</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Copyright Section */}
                <div className="text-center text-gray-500 text-sm mt-10">
                    Copyright &copy; {new Date().getFullYear()}{" "}
                    <HashLink to="#" className="hover:text-gray-900">
                        org name
                    </HashLink>. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
