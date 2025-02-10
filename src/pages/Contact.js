import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import facebookLogo from '../assets/facebook.png'; // Add your logo images in the assets folder
import telegramLogo from '../assets/telegram.png';
import gmailLogo from '../assets/gmail.png';
import tiktokLogo from '../assets/tiktok.png';

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

                {/* Social Media Buttons with Logos */}
                <div className="flex space-x-6 mt-8">
                    <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer">
                        <img src={facebookLogo} alt="Facebook" className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" />
                    </a>

                    <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer">
                        <img src={telegramLogo} alt="Telegram" className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" />
                    </a>

                    <a href="mailto:info@orgname.com">
                        <img src={gmailLogo} alt="Gmail" className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" />
                    </a>

                    <a href="https://www.tiktok.com/@yourtiktok" target="_blank" rel="noreferrer">
                        <img src={tiktokLogo} alt="TikTok" className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300" />
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
