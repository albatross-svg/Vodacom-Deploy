import React, { useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

export default function DemoRequestForm() {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [demoProducts, setDemoProducts] = useState([]);
    
    const handleProductChange = (event) => {
        const { name, checked } = event.target;
        setDemoProducts(prevProducts =>
            checked ? [...prevProducts, name] : prevProducts.filter(product => product !== name)
        );
    };

    const clearErrors = () => {
        setErrors({});
    };

    const clearInput = () => {
        setDemoProducts([]);
    };

    function sendEmail(e) {
        e.preventDefault();
        setLoading(true);
        clearErrors();

        const fData = new FormData(e.target);
        fData.append('products', JSON.stringify(demoProducts));

        axios.post(process.env.REACT_APP_DEMO_REQUEST_API, fData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(response => {
            setLoading(false);
            clearInput();
            Notiflix.Report.success('Success', response.data.message, 'Okay');
        })
        .catch(error => {
            setLoading(false);
            const { response } = error;
            if (response?.status === 500) {
                Notiflix.Report.failure('An error occurred', response.data.message, 'Okay');
            }
            if (response?.data?.errors) {
                setErrors(response.data.errors);
            }
        });
    }

    return (
        <form onSubmit={sendEmail}>
            <div>
                <input type="checkbox" id="checkbox-business" name="Business Management System" onChange={handleProductChange} />
                <label htmlFor="checkbox-business">Business Management System</label>
            </div>
            <div>
                <input type="checkbox" id="checkbox-pos" name="Point of Sale System" onChange={handleProductChange} />
                <label htmlFor="checkbox-pos">Point of Sale System</label>
            </div>
            <div>
                <input type="checkbox" id="checkbox-crm" name="CRM System" onChange={handleProductChange} />
                <label htmlFor="checkbox-crm">CRM System</label>
            </div>
            {errors.products && <p className="error-text">{errors.products.join(', ')}</p>}
            <button type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Send Message'}
            </button>
        </form>
    );
}
