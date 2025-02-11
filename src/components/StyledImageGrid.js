body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
}

h1 {
    color: #333;
}

/* Outer Frame Container */
.frame-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px; /* Uniform padding */
    background-color: #ffffff;
    border: 8px solid #2137b4; /* Outer frame border */
    border-radius: 16px; /* Rounded corners */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* Shadow effect */
    max-width: 520px; /* Adjusted for uniform padding */
    margin: 20px auto;
    overflow: hidden; /* Prevents overflow issues */
}

#image-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 5px;
    width: 100%;
    height: 400px;
    padding: 20px;
    background-color: #6098c0;
    border-radius: 8px;
    box-sizing: border-box;
    overflow: visible; /* Allows zoomed images to show properly */
}

img {
    width: 90%; /* Ensure image fills grid cell */
    height: 90%;
    object-fit: cover;

    /* Frame Styles */
    border: 5px solid #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    background-color: #fff;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

img:hover {
    transform: scale(1.2); /* Increased zoom */
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.5);
    z-index: 10; /* Ensures image appears above others */
    position: relative; /* Prevents images from being cut off */
}
