import React, { useState, useEffect } from "react";
import "./ImageShuffler.css"; // Import the CSS file

const ImageShuffler = () => {
    // Store image paths in an array with .jpeg format
    const [images, setImages] = useState([
        "image1.jpeg",
        "image2.jpeg",
        "image3.jpeg",
        "image4.jpeg",
        "image5.jpeg",
        "image6.jpeg",
        "image7.jpeg",
        "image8.jpeg",
        "image9.jpeg",
        "image10.jpeg",
        "image11.jpeg",
        "image12.jpeg",
        "image13.jpeg",
        "image14.jpeg",
        "image15.jpeg",
        "image16.jpeg",
    ]);

    // Function to shuffle images
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap
        }
        return array;
    };

    // Shuffle images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setImages((prevImages) => shuffleArray([...prevImages]));
        }, 4000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="frame-container">
            <h1>Shuffled Image Grid</h1>
            <div id="image-grid">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Shuffled Image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageShuffler;
