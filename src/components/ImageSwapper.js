import '../components/styles.css'; // Adjust path if needed
import React, { useState, useEffect } from 'react';

// Placeholder images (replace with actual image paths)
const images = Array.from({ length: 16 }, (_, index) => `https://via.placeholder.com/150?text=Image${index + 1}`);

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
