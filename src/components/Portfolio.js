import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id="portfolio">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                    Products/Portfolio
                </h2>
                <div className="flex justify-center">
                    <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Portfolio Item 1 */}
                        <div className="bg-white transition-all ease-in-out duration-400ms overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                    Products/Portfolio 1
                                </h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    <strong>Service 1: Network Infrastructure Package</strong>  
                                    We provide comprehensive network solutions to ensure your organization stays connected and efficient. Our services include LAN and WAN installation, Wi-Fi setup, and designing and installing data center ventilation and air conditioning systems.
                                </p>
                                {/* Schedule Demo Button */}
                                <div className="flex justify-center my-4">
                                    <Link
                                        to="/get-demo"
                                        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                    >
                                        Schedule Demo
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item 2 */}
                        <div className="bg-white transition-all ease-in-out duration-400ms overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                    Products/Portfolio 2
                                </h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error nesciunt sunt nam libero. Deserunt fugit perspiciatis voluptatem? Modi similique officia perferendis voluptate est quas dignissimos quaerat recusandae omnis praesentium!
                                </p>
                                {/* Schedule Demo Button */}
                                <div className="flex justify-center my-4">
                                    <Link
                                        to="/get-demo"
                                        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                    >
                                        Schedule Demo
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item 3 */}
                        <div className="bg-white transition-all ease-in-out duration-400ms overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                                    Products/Portfolio 3
                                </h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, tempore non! Laboriosam est possimus iusto, tenetur quasi omnis eum ipsam, eos assumenda, minima quod sed impedit necessitatibus facere fugiat laudantium.
                                </p>
                                {/* Schedule Demo Button */}
                                <div className="flex justify-center my-4">
                                    <Link
                                        to="/get-demo"
                                        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                    >
                                        Schedule Demo
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
