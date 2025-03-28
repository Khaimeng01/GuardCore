////import React, { useState } from 'react';
////import Navbar from '../Components/Navbar';
////import ContactBanner from '../Components/ContactBanner';
////import Footer from '../Components/Footer';
////import ScrollToTop from '../Components/ScrollToTop';
////import Lightbox from 'yet-another-react-lightbox';
////import 'yet-another-react-lightbox/styles.css';

////import creativeImg from '../images/Creative5.png';

////const Gallery = () => {
////    const [index, setIndex] = useState(-1); // -1 means lightbox is closed

////    const images = [
////        { src: creativeImg },
////        { src: creativeImg },
////        { src: creativeImg },
////        { src: creativeImg },
////        { src: creativeImg },
////        // { src: anotherImage },
////    ];

////    return (
////        <>
////            <div className="bg-[#ECECEC] min-h-screen">
////                <ScrollToTop />
////                <Navbar />

////                {/* Gallery Section */}
////                <div className="px-6 py-12 max-w-6xl mx-auto">
////                    <h1 className="text-gray-900 text-3xl font-semibold text-center">
////                        Gallery
////                    </h1>

////                    <div className="flex justify-center items-center mt-2 mb-8">
////                        <div className="bg-blue-400 h-1 w-16 rounded"></div>
////                    </div>

////                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
////                        {images.map((image, i) => (
////                            <div
////                                key={i}
////                                className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
////                                onClick={() => setIndex(i)}
////                            >
////                                <img
////                                    src={image.src}
////                                    alt={`Gallery ${i + 1}`}
////                                    className="w-full h-64 object-cover"
////                                />
////                            </div>
////                        ))}
////                    </div>
////                </div>

////                <Footer />
////            </div>

////            {/* Lightbox Viewer */}
////            <Lightbox
////                open={index >= 0}
////                close={() => setIndex(-1)}
////                slides={images}
////                index={index}
////            />
////        </>
////    );
////};

////export default Gallery;

import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import ContactBanner from '../Components/ContactBanner';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Import your images from src/images
import creativeImg from '../images/Creative5.png';



const Gallery = () => {
    const [index, setIndex] = useState(-1); // -1 means lightbox closed

    // Full gallery images
    const images = [
        { src: creativeImg },
        { src: creativeImg },
        { src: creativeImg },
        { src: creativeImg },
        { src: creativeImg },
        { src: creativeImg },
        { src: creativeImg },
        { src: creativeImg },
        { src: creativeImg },
        { src: creativeImg },

        // { src: anotherImage },
    ];

    // Only show 6 in the grid
    const gridImages = images.slice(0, 9);

    return (
        <>
            <div className="bg-[#ECECEC] min-h-screen">
                <ScrollToTop />
                <Navbar />

                {/* Gallery Section */}
                <div className="px-6 py-12 max-w-6xl mx-auto">
                    <h1 className="text-gray-900 text-3xl font-semibold text-center">
                        GALLERY
                    </h1>

                    <div className="flex justify-center items-center mt-2 mb-8">
                        <div className="bg-blue-400 h-1 w-16 rounded"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {gridImages.map((image, i) => (
                            <div
                                key={i}
                                className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                                onClick={() => setIndex(i)}
                            >
                                <img
                                    src={image.src}
                                    alt={`Gallery ${i + 1}`}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <Footer />
            </div>

            {/* Lightbox viewer for all images */}
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={images}
                index={index}
            />
        </>
    );
};

export default Gallery;

