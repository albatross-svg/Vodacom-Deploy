import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';
import emailjs from '@emailjs/browser';

const DemoProduct = () => {
    useDocTitle('MLD | Molad e Konsult - Demo our products');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        demoProducts: [],
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                demoProducts: checked
                    ? [...prev.demoProducts, value]
                    : prev.demoProducts.filter((item) => item !== value),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const clearErrors = () => {
        setErrors({});
    };

    const clearInput = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            demoProducts: [],
        });
    };

    const sendEmail = async () => {
        try {
            await axios.post('https://your-email-service.com/send', {
                to: 'your-email@gmail.com',
                subject: 'Demo Product Inquiry',
                body: `Name: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}\nProducts: ${formData.demoProducts.join(', ')}`
            });
            Notiflix.Report.success('Success', 'Your message has been sent successfully!', 'Okay');
            clearInput();
        } catch (error) {
            Notiflix.Report.failure('Error', 'Failed to send email. Please try again.', 'Okay');
        }
    };


const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
    };

    emailjs
        .send(
            'service_6dnc12f', // Replace with your EmailJS Service ID
            'template_mxkh6al', // Replace with your EmailJS Template ID
             templateParams,
            'Hlv4jON0yap-umwVG' // Replace with your EmailJS Public Key
        )
        .then((response) => {
            console.log('Email successfully sent!', response.status, response.text);
            Notiflix.Report.success('Success', 'Your message has been sent!', 'Okay');
            clearInput();
        })
        .catch((err) => {
            console.error('Email sending error:', err);
            Notiflix.Report.failure('Error', 'Message could not be sent. Try again!', 'Okay');
        });
};


    return (
        <>
            <NavBar />
            <div id="demo" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={handleSubmit} id="demoProductForm">
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Demo our products</h1>
                            </div>

                            {['business_management_system', 'school_management_portal', 'payroll_management_system', 'event_management_system'].map((product, index) => (
                                <div key={product} className="flex items-center my-4">
                                    <input
                                        id={`checkbox-${index}`}
                                        type="checkbox"
                                        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                        value={product}
                                        checked={formData.demoProducts.includes(product)}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor={`checkbox-${index}`} className="ml-3 text-lg font-medium text-gray-900">
                                        {product.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                                    </label>
                                </div>
                            ))}
                            {errors.products && <p className="text-red-500 text-sm">{errors.products}</p>}

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                {['firstName', 'lastName', 'email', 'phone'].map((field) => (
                                    <div key={field}>
                                        <input
                                            name={field}
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type={field === 'email' ? 'email' : field === 'phone' ? 'number' : 'text'}
                                            placeholder={`${field.replace(/([A-Z])/g, ' $1').toUpperCase()}*`}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                                    </div>
                                ))}
                            </div>

                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>

                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DemoProduct;
