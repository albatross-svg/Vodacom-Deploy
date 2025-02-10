import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer 
                className="relative bg-gray-100 border-t border-gray-300 shadow-inner"
                style={{
                    backgroundImage: "url('/path-to-your-logo.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="max-w-full mx-auto px-4 sm:px-6 py-12">

                    {/* Footer Grid */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-300 lg:ml-11">

                        {/* 1st block: MLD Box (Left) */}
                        <div className="col-span-12 lg:col-span-4">
                            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-700 text-center rounded-lg xl:w-80 mx-auto shadow-lg">
                                <h3 className="font-bold text-4xl mb-4 text-blue-900">MLD</h3>
                                <div className="text-md font-medium">
                                    <h5>#### Specific Location / Phone number</h5>
                                    <p>#### Woreda, Subcity,</p>
                                    <p>Addis Ababa, Ethiopia</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd & 3rd Blocks: Links + Services (Right-Aligned) */}
                        <div className="col-span-12 lg:col-span-6 flex flex-col lg:flex-row justify-end space-x-16 lg:pr-12">
                            {/* Links */}
                            <div className="text-right">
                                <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                                <ul className="text-md">
                                    <li className="mb-2">
                                        <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:underline transition duration-200 ease-in-out">About</HashLink>
                                    </li>
                                    <li className="mb-2">
                                        <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:underline transition duration-200 ease-in-out">Services</HashLink>
                                    </li>
                                    <li className="mb-2">
                                        <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:underline transition duration-200 ease-in-out">Contact</HashLink>
                                    </li>
                                </ul>
                            </div>

                            {/* Our Services */}
                            <div className="text-right">
                                <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                                <ul className="text-md">
                                    <li className="mb-2">
                                        <Link to="#" className="text-[#013289] hover:text-gray-900 hover:underline transition duration-200 ease-in-out">Service 1</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="#" className="text-[#013289] hover:text-gray-900 hover:underline transition duration-200 ease-in-out">Service 2</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="#" className="text-[#013289] hover:text-gray-900 hover:underline transition duration-200 ease-in-out">Service 3</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="#" className="text-[#013289] hover:text-gray-900 hover:underline transition duration-200 ease-in-out">Service 4</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Copyright Section */}
                    <div className="text-center text-gray-600 text-sm mt-10 border-t pt-4">
                        Copyright &copy; {new Date().getFullYear()}{" "}
                        <HashLink to="#" className="hover:text-gray-900 font-bold">
                            org name
                        </HashLink>. All rights reserved.
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;
