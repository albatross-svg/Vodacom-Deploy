import '../styles.css'; // Adjust path if needed
import React, { useState, useEffect } from 'react';

// Import 16 images (adjust accordingly)
import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';
import img5 from '../images/image5.jpg';
import img6 from '../images/image6.jpg';
import img7 from '../images/image7.jpg';
import img8 from '../images/image8.jpg';
import img9 from '../images/image9.jpg';
import img10 from '../images/image10.jpg';
import img11 from '../images/image11.jpg';
import img12 from '../images/image12.jpg';
import img13 from '../images/image13.jpg';
import img14 from '../images/image14.jpg';
import img15 from '../images/image15.jpg';
import img16 from '../images/image16.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

const ImageSwapper = () => {
    const [currentImages, setCurrentImages] = useState(images.slice(0, 16));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImages((prevImages) => {
                const newImages = [...prevImages];
                const randomIndex = Math.floor(Math.random() * images.length);
                const gridIndex = Math.floor(Math.random() * newImages.length);
                newImages[gridIndex] = images[randomIndex]; // Swap a random image
                return [...newImages];
            });
        }, 2000); // Change every 2 sec

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="frame-container">
            <div id="image-grid">
                {currentImages.map((img, index) => (
                    <img key={index} src={img} alt={`img-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default ImageSwapper;
