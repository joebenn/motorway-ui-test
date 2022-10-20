import React, {useState, useEffect} from "react";

import './ImageCard.css';

const ImageCard = ({ image, openSelectedHandler }) => {
    
    return (
        <div 
            className="image-card-wrapper"
            onClick={() => openSelectedHandler(image)}
        >
            <picture>
                <source srcSet={`${image.url}.webp`} type="image/webp" />
                <img src={`${image.url}.jpg`} alt={image?.alt_description} />
            </picture>
        </div>
    )
}

export default ImageCard;