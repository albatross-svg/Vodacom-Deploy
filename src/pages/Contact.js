import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const Contact = () => {
    useDocTitle('MLD | Molad e Konsult - Contact Us');

    return (
        <>
            <NavBar />
            <div id="contact" className="flex flex-col items-center pt-20 mt-8 w-full bg-white py-12 lg:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-blue-900 uppercase">Contact us</h1>
                    <div className="w-24 border-b-4 border-blue-900 my-4 mx-auto"></div>
                </div>

                {/* Social Media Buttons - Responsive Layout */}
                <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8 mt-8">
                    <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                            alt="Facebook"
                            className="w-28 h-28 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-300"
                        />
                    </a>

                    <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                            alt="Telegram"
                            className="w-28 h-28 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-300"
                        />
                    </a>

                    <a href="mailto:info@orgname.com">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                            alt="Gmail"
                            className="w-28 h-28 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-300"
                        />
                    </a>

                    <a href="https://www.tiktok.com/@yourtiktok" target="_blank" rel="noreferrer">
                        <img
                            src="https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338429_960_720.png"
                            alt="TikTok"
                            className="w-28 h-28 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-transform duration-300"
                        />
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
