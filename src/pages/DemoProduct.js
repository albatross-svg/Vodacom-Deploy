import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import emailjs from 'emailjs-com';
import axios from 'axios';
import Notiflix from 'notiflix';

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

    // Handle form data changes
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

    // Clear form errors
    const clearErrors = () => {
        setErrors({});
    };

    // Clear form input fields
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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Disable the submit button to prevent multiple submissions
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Loading...';

        // Prepare form data for backend API submission
        const formDataToSend = new FormData();
        formDataToSend.append('first_name', formData.firstName);
        formDataToSend.append('last_name', formData.lastName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone_number', formData.phone);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('products', formData.demoProducts.join(','));

        // Prepare template parameters for EmailJS
        const templateParams = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone_number: formData.phone,
            message: formData.message,
            products: formData.demoProducts.join(', '),
        };

        try {
            // 📩 Send form data to backend API
            const response = await axios.post(
                process.env.REACT_APP_DEMO_REQUEST_API,
                formDataToSend,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            // 🎉 Notify success from API response
            Notiflix.Report.success('Success', response.data.message, 'Okay');

            // 📧 Send email using EmailJS
            emailjs.init('Hlv4jON0yap-umwVG'); // Your EmailJS Public Key
            await emailjs.send(
                'service_6dnc12f',   // Your EmailJS Service ID
                'template_ttpebks',  // Your EmailJS Template ID
                templateParams,
                'Hlv4jON0yap-umwVG'  // Your EmailJS Public Key
            );

            console.log('Email successfully sent!');
            clearInput(); // Clear the form after successful submission
        } catch (error) {
            const { response } = error;

            if (response) {
                if (response.status === 500) {
                    Notiflix.Report.failure('An error occurred', response.data.message, 'Okay');
                }
                if (response.data.errors) {
                    setErrors(response.data.errors);
                }
            } else {
                Notiflix.Report.failure('Network Error', 'Please check your internet connection and try again.', 'Okay');
            }
        } finally {
            // Re-enable the submit button
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        }
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

                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Office Address</h2>
                                    <p className="text-gray-400">Ilo Awela, Ota, Ogun State</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">Tel: 08055384406</p>
                                    <div className="mt-5">
                                        <h2 className="text-2xl">Send an E-mail</h2>
                                        <p className="text-gray-400">info@mld.ng</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a
                                    href="https://www.facebook.com/ENLIGHTENEERING/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black hover:animate-pulse">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/enlighteneering-inc-"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black hover:animate-pulse">
                                        <circle cx="4.983" cy="5.009" r="2.188" />
                                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DemoProduct;
