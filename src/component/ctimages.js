import React from "react";
import "./style.css"; // If you have a separate CSS file for styling

// Import the image from the image folder
import blank from "./images/blank.png"; // Adjust the path as needed

const Img = () => {
    return ( 
        <div className="ctimg">
            {/* Use the imported image */}
            <img src={blank} alt="moveus blank" />
        </div>
    );
};

export default Img;
