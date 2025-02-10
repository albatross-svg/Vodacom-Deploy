import React, { useState, useEffect } from "react";
import StyledImageGrid from "./StyledImageGrid"; // Styled wrapper

// Function to import all images dynamically
const importAll = (context) => context.keys().map(context);
const imagePaths = importAll(require.context("../images", false, /\.(jpeg|jpg|png)$/)); // Adjust path if needed

// Function to shuffle images
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ImageFlipper = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(shuffleArray(imagePaths)); // Set shuffled images initially

    const interval = setInterval(() => {
      setImages(shuffleArray(imagePaths)); // Shuffle every 4 seconds
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledImageGrid> {/* Styled grid wrapper */}
      <div className="image-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Shuffled Image ${index + 1}`} />
        ))}
      </div>
    </StyledImageGrid>
  );
};

export default ImageFlipper;
