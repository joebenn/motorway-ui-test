import React, {useState, useEffect} from "react";
import ImageCard from "../../components/ImageCard/ImageCard";
import MetaCard from "../../components/MetaCard/MetaCard";

import "./ImageGallery.css";


const ImageGallery = ({ images }) => {

    const [selected, setSelected] = useState({
        'open': false
    });

    const openSelectedHandler = (image) => {
        setSelected({
            'open': true,
            'selectedImg': image,
        })
    }

    return (
        <div className="image-gallery-container">
            <div className="gallery">
                { images &&
                    images.map((image) => (
                        <ImageCard 
                            key={image.id} 
                            image={image}
                            openSelectedHandler={openSelectedHandler}
                        />
                    ))
                }
            </div>
            <div className="selection">
                { selected.open ?
                    <MetaCard imageData={selected.selectedImg}/>
                    :
                    <div className="selection-message">
                        Select a car to view
                    </div>
                }    
            </div>
        </div>

    )
}

export default ImageGallery;