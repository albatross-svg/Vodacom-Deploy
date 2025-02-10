import React, { useState, useEffect } from "react";
import styled from "styled-components";

// ✅ Styled Components for Frame & Grid
const FrameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 10px solid #2137b4;
  border-radius: 16px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  width: 500px; /* Ensure proper width */
  height: 500px;
  margin: 20px auto;
  padding: 20px;
  overflow: hidden;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* ✅ 4 Columns */
  grid-template-rows: repeat(4, 1fr); /* ✅ 4 Rows */
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #6098c0;
  border-radius: 8px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.5);
    z-index: 10;
    position: relative;
  }
`;

// ✅ Placeholder image links
const imagePaths = Array.from({ length: 16 }, (_, index) => `https://via.placeholder.com/120?text=Image${index + 1}`);

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const StyledImageGrid = () => {
  const [images, setImages] = useState(imagePaths);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(shuffleArray(imagePaths));
    }, 4000); // Shuffle every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <FrameContainer>
      <ImageGrid>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Shuffled Image ${index + 1}`} />
        ))}
      </ImageGrid>
    </FrameContainer>
  );
};

export default StyledImageGrid;
