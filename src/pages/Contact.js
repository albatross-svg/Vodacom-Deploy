import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const Contact = () => {
    useDocTitle('MLD | Molad e Konsult - Contact Us');

    return (
        <>
            <NavBar />
            <div id="contact" className="flex flex-col items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-blue-900 uppercase">Contact Us</h1>
                    <div className="w-24 border-b-4 border-blue-900 my-4 mx-auto"></div>
                </div>

                {/* Contact Button */}
                <a
                    href="mailto:info@orgname.com"
                    className="bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
                >
                    Send Us a Message
                </a>

                {/* Social Media Buttons */}
                <div className="flex space-x-4 mt-8">
                    <a
                        href="https://www.facebook.com/ENLIGHTENEERING/"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-900 text-white p-3 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
                    >
                        <i className="fab fa-facebook-f text-xl"></i>
                    </a>

                    <a
                        href="https://t.me/yourtelegram"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-900 text-white p-3 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
                    >
                        <i className="fab fa-telegram-plane text-xl"></i>
                    </a>

                    <a
                        href="mailto:info@orgname.com"
                        className="bg-blue-900 text-white p-3 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
                    >
                        <i className="fas fa-envelope text-xl"></i>
                    </a>

                    <a
                        href="https://www.tiktok.com/@yourtiktok"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-900 text-white p-3 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
                    >
                        <i className="fab fa-tiktok text-xl"></i>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
