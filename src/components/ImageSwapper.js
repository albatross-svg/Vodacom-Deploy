import React, { useState, useEffect } from "react";
import StyledImageGrid from "./StyledImageGrid"; // Import the styled grid

// Manually import images
import img1 from "../images/image1.jpeg";
import img2 from "../images/image2.jpeg";
import img3 from "../images/image3.jpeg";
import img4 from "../images/image4.jpeg";
import img5 from "../images/image5.jpeg";
import img6 from "../images/image6.jpeg";
import img7 from "../images/image7.jpeg";
import img8 from "../images/image8.jpeg";
import img9 from "../images/image9.jpeg";
import img10 from "../images/image10.jpeg";
import img11 from "../images/image11.jpeg";
import img12 from "../images/image12.jpeg";
import img13 from "../images/image13.jpeg";
import img14 from "../images/image14.jpeg";
import img15 from "../images/image15.jpeg";
import img16 from "../images/image16.jpeg";

// Store images in an array
const imagePaths = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

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
  const [images, setImages] = useState(imagePaths); // Initialize with images

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(shuffleArray(imagePaths)); // Shuffle images every 4 seconds
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledImageGrid> {/* Use the styled component */}
      <div className="image-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Shuffled Image ${index + 1}`} />
        ))}
      </div>
    </StyledImageGrid>
  );
};

export default ImageFlipper;
