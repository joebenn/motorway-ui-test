import React from "react";

import './MetaCard.css';

const MetaCard = ({ imageData }) => {

    return (
        <section className="meta-card-container">
            <div className="header-picture-container">
            <picture>
                <source srcSet={`${imageData.url}.webp`} type="image/webp" />
                <img src={`${imageData.url}.jpg`} alt={imageData?.alt_description} />
            </picture>
    
            </div>
            <div className="profile-picture-container">
            <picture>
                <source srcSet={`${imageData?.user?.profile_image}.webp`} type="image/webp" />
                <img src={`${imageData?.user?.profile_image}.jpg`} alt={imageData?.alt_description} />
            </picture>
            </div>
            <div className="profile-data-container">
                <h2 className="name">{imageData?.user?.name}</h2>
                <div className="location">{imageData?.user?.location}</div>
                <div className="bio">{imageData?.user?.bio}</div>
            </div>
            <div className="item-data-container">
                {imageData?.description &&
                    <div className="description">{imageData?.description}</div>
                }
                <div className="color" style={{background: imageData?.color}}></div>
                
            </div>
            <div className="footer-container">
            <div className="like-count">
                <div>Likes: {imageData?.likes}</div>
            </div>
            <div className="date">
                <div>{new Date(imageData?.created_at).toLocaleDateString()}</div>
            </div>
            </div>
        </section>
    )
}

export default MetaCard;