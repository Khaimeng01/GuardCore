import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import ContactBanner from '../Components/ContactBanner';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    // Utility to format Vite glob imports
    const importImages = (globResult) => {
        return Object.entries(globResult)
            .map(([path, module]) => ({
                src: module.default,
                name: path,
            }))
            .sort((a, b) => a.name.localeCompare(b.name));
    };
    

    // Dynamically import images per category
    const mainImages = importImages(import.meta.glob('../assets/galleryMain/*.{jpg,jpeg,png}', { eager: true }));
    const guardsImages = importImages(import.meta.glob('../assets/galleryGuard/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true }));
    const bodyguardsImages = importImages(import.meta.glob('../assets/bodyguards/*.{jpg,jpeg,png}', { eager: true }));
    const teamImages = importImages(import.meta.glob('../assets/team/*.{jpg,jpeg,png}', { eager: true }));
    const othersImages = importImages(import.meta.glob('../assets/others/*.{jpg,jpeg,png}', { eager: true }));

    const allImages = [
        ...mainImages,
        ...guardsImages,
        ...bodyguardsImages,
        ...teamImages,
        ...othersImages,
    ];

    // Offset helpers
    const mainOffset = 0;
    const guardsOffset = mainOffset + mainImages.length;
    const bodyguardsOffset = guardsOffset + guardsImages.length;
    const teamOffset = bodyguardsOffset + bodyguardsImages.length;
    const othersOffset = teamOffset + teamImages.length;

    
    // Grid renderer
    const renderSection = (title, images, offset) => (
        <div className="mb-12 w-full">
            {/* <h2 className="text-xl font-bold mb-4">{title}</h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((image, i) => (
                    <div
                        key={offset + i}
                        className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                        onClick={() => setIndex(offset + i)}
                    >
                        <img
                            src={image.src}
                            alt={`Gallery ${offset + i + 1}`}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
    

    return (
        <>
            <div className="bg-[#ECECEC] min-h-screen">
                <ScrollToTop />
                <Navbar />

                <div className="px-6 py-12 max-w-6xl mx-auto">
                    <h1 className='font-["Rajdhani"] font-semibold text-[32px] text-[#131313] text-center md:text-[44px] xl:text-[56px] mb-12'>
                        GALLERY
                    </h1>

                    {/* {renderSection('Main Gallery', mainImages, mainOffset)}
                    {renderSection('Guards (1st Batch)', guardsImages, guardsOffset)}
                    {renderSection('Bodyguards (2nd Batch)', bodyguardsImages, bodyguardsOffset)}
                    {renderSection('Team (3rd Batch)', teamImages, teamOffset)}
                    {renderSection('Others (4th Batch)', othersImages, othersOffset)} */}

                    {renderSection('Gallery', mainImages, mainOffset)}

                </div>

                <Footer />
            </div>

            {/* Lightbox */}
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={allImages}
                index={index}
                on={{
                    view: ({ index }) => setIndex(index),
                }}
                render={{
                    slide: ({ slide, rect }) => (
                        <>
                            <img
                                src={slide.src}
                                alt="Gallery item"
                                style={{
                                    maxHeight: rect.height,
                                    maxWidth: rect.width,
                                    margin: "0 auto",
                                    display: "block",
                                    objectFit: "contain",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "20px",
                                    right: "60px",
                                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                                    color: "white",
                                    padding: "6px 12px",
                                    borderRadius: "6px",
                                    fontSize: "14px",
                                    zIndex: 9999,
                                }}
                            >
                                Image {index + 1} of {allImages.length}
                            </div>
                        </>
                    ),
                }}
            />
        </>
    );
};

export default Gallery;

