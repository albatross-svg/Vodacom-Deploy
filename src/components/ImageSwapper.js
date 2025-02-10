import React, { useState, useEffect } from "react";

// Store image paths in an array with .jpeg format
const imagePaths = [
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
];

// Function to shuffle images
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ImageShuffler = () => {
  const [images, setImages] = useState(imagePaths);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(shuffleArray(imagePaths));
    }, 4000); // Shuffle every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="frame-container">
      <div id="image-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Shuffled Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageShuffler;
