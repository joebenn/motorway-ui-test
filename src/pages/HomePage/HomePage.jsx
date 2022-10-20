import React from "react";

import ImageGallery from "../../containers/ImageGallery/ImageGallery";
import Form from "../../components/Form/Form";

import "./HomePage.css";


const HomePage = ({ images }) => {

    return (
        <div className="home-page-container">
            <div className="image-gallery-container">
                <ImageGallery images={images} />
            </div>

            <div className="form-container">
                <Form />
            </div>
        </div>
    )
}

export default HomePage;