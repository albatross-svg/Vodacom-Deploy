

import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import ImageSwapper from "../components/ImageSwapper"; // Importing the advanced image swapper

const Hero = () => {
  return (
    <div className="hero" id="hero">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Hero Section */}
      <div
        className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
        data-aos="zoom-in"
      >
        <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
          
          {/* Left Side: Welcome Message */}
          <div
            className="lg:w-1/2 flex flex-col justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
              Welcome to Vodacom Trading
            </h1>
            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
              Your trusted partner in network infrastructure, computer
              maintenance, and building installations across Ethiopia.
            </div>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <Link
                to="/contact"
                className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side: Image Swapper (Grid) */}
          <div
            className="flex lg:justify-end w-full lg:w-1/2 relative"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            {/* Container for the Image Swapper */}
            <div className="frame-container">
              <div id="image-grid">
                <ImageSwapper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
