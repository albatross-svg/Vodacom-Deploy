import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
                    {/* Top area: Blocks */}
                    <div className="flex justify-between items-start flex-wrap py-8 md:py-12 border-t border-gray-200 lg:ml-11">
                        
                        {/* 1st block - MLD Box (Left) */}
                        <div className="w-full lg:w-1/3">
                            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80">
                                <h3 className="font-bold text-4xl mb-4">MLD</h3>
                                <div className="text-md font-medium text-gray-600">
                                    <h5>#### Specifc Location/ Phone number</h5>
                                    <p>#### Woreda, Subcity,</p>
                                    <p>Addis Ababa,</p>
                                    <p>Ethiopia</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd block - Links (Middle) */}
                        <div className="w-full lg:w-1/3 text-center">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                                </li>                            
                            </ul>
                        </div>

                        {/* 3rd block - Our Services (Shifted Left + Centered List) */}
                        <div className="w-full lg:w-1/3 lg:ml-[-3rem] text-center">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                            <ul className="text-md inline-block text-left">
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Service 1 Name</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Service 2 Name</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Service 3 Name</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Service 4 Name</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Copyright */}
                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-gray-200 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()}{"  "}
                                <HashLink to="#" className="hover:text-gray-900">
                                    org name
                                </HashLink>. All rights reserved.
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
