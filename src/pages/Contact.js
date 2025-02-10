import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('MLD | Molad e Konsult - Send us a message');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const clearErrors = () => setErrors([]);

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const emailParams = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            message: message
        };

        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                emailParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            );

            Notiflix.Report.success('Success', 'Your message has been sent successfully!', 'Okay');
            clearInput();
        } catch (error) {
            Notiflix.Report.failure('Error', 'Failed to send message. Please try again later.', 'Okay');
        }
        
        setIsSubmitting(false);
    };

    return (
        <>
            <NavBar />
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail}>
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Send us a message</h1>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input type="text" placeholder="First Name*" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg" />
                                <input type="text" placeholder="Last Name*" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg" />
                                <input type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg" />
                                <input type="number" placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg" />
                            </div>
                            <textarea placeholder="Message*" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg" />
                            <button type="submit" disabled={isSubmitting} className="mt-4 bg-blue-900 text-white py-3 px-6 rounded-lg w-full">{isSubmitting ? 'Sending...' : 'Send Message'}</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
