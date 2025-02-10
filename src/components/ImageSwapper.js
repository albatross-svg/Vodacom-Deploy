import React, { useState, useEffect } from "react";
import StyledImageGrid from "./StyledImageGrid"; // Import the styled grid

// Dynamically import images from the "images" folder
const imagePaths = Array.from({ length: 16 }, (_, i) => require(`../images/image${i + 1}.jpeg`));

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ImageFlipper = () => {
  const [images, setImages] = useState(imagePaths);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(shuffleArray(imagePaths));
    }, 4000); // Shuffle every 4 seconds

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
