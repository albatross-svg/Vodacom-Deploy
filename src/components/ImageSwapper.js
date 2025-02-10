import React from "react";
import

// Store image paths in an array with .jpeg format
const images = [
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
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
}

// Function to display images in the grid
function displayImages() {
    const grid = document.getElementById("image-grid");
    grid.innerHTML = ""; // Clear the grid

    shuffleArray(images); // Shuffle images

    images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Shuffled Image";
        grid.appendChild(img);
    });
}

// Initial display
displayImages();

// Shuffle every 4 seconds
setInterval(displayImages, 4000);

