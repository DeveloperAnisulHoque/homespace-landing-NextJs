import React from 'react';
import LightGallery from 'lightgallery/react';

// Import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Define types for props
interface Image {
    full: string;
    thumb: string;
}

interface CustomGalleryProps {
    images: Image[];
    speed?: number;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Custom Gallery Component
const CustomGallery: React.FC<CustomGalleryProps> = ({ images = [], speed = 500, isOpen, setIsOpen }) => {
    const onInit = () => {
        console.log('LightGallery initialized');
    };

    if (!isOpen) return null; // If gallery is not open, don't render

    return (
        <div className="custom-gallery">
            <LightGallery
                onInit={onInit}
                speed={speed}
                plugins={[lgThumbnail, lgZoom]}
            >
                {images.map((img, index) => (
                    <a href={img.full} key={index}>
                        <img alt={`img-${index}`} src={img.thumb} />
                    </a>
                ))}
            </LightGallery>
            <button onClick={() => setIsOpen(false)} className="close-button">
                Close Gallery
            </button>
        </div>
    );
};

export default CustomGallery;
