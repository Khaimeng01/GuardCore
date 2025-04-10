import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState('Security Guards');
  const [hasLoadedExtraImages, setHasLoadedExtraImages] = useState(false);

  const importImages = (globResult) => {
    return Object.entries(globResult)
      .map(([path, module]) => ({
        src: module.default,
        name: path,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const [guards, setGuards] = useState([]);
  const [bodyguards, setBodyguards] = useState([]);
  const [team, setTeam] = useState([]);
  const [others, setOthers] = useState([]);

  const loadExtraImages = () => {
    if (!hasLoadedExtraImages) {
      setGuards(importImages(import.meta.glob('../assets/galleryCategory1/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp}', { eager: true })));
      setBodyguards(importImages(import.meta.glob('../assets/galleryBodyGuard/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp}', { eager: true })));
      setTeam(importImages(import.meta.glob('../assets/galleryTeam/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp}', { eager: true })));
      setOthers(importImages(import.meta.glob('../assets/galleryOthers/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp}', { eager: true })));
      setHasLoadedExtraImages(true);
    }
  };

  useEffect(() => {
    loadExtraImages();
  }, []);

  const categoryMap = {
    'Security Guards': guards.slice(0, 9),
    'Bodyguards': bodyguards.slice(0, 9),
    'Team': team.slice(0, 9),
    'More': others.slice(0, 9),
  };

  const fullCategoryMap = {
    'Security Guards': guards,
    'Bodyguards': bodyguards,
    'Team': team,
    'More': others,
  };

  const handleImageClick = (localIndex) => {
    setIndex(localIndex);
  };

  const categories = ['Security Guards', 'Bodyguards', 'Team', 'More'];

  return (
    <>
      <div className="bg-[#ECECEC] min-h-screen">
        <ScrollToTop />
        <Navbar />

        <div className="px-6 py-12 max-w-6xl mx-auto">
          <h1 className='font-["Rajdhani"] font-semibold text-[32px] text-[#131313] text-center md:text-[44px] xl:text-[56px] mb-12'>
            GALLERY
          </h1>

          {/* Responsive filter buttons */}
          <div className="w-full mb-8">
            {/* Mobile: Dropdown filter */}
            <div className="block md:hidden mb-6">
              <label htmlFor="mobile-category" className="block text-md font-medium text-gray-700 mb-2">
                Select a category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop: Grid layout buttons */}
            <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full border ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                  } transition-all duration-200`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categoryMap[selectedCategory]?.map((image, i) => (
              <div
                key={i}
                className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                onClick={() => handleImageClick(i)}
              >
                <img
                  src={image.src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          {/* View More Photos Button */}
          {fullCategoryMap[selectedCategory].length > 9 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setIndex(9)} // open Lightbox at 10th photo
                className="inline-block px-6 py-2 bg-[#0C0C50] text-white rounded-full hover:opacity-90 transition-all duration-200"
                >
                + View More Photos
              </button>
            </div>
          )}
        </div>

        <Footer />
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={fullCategoryMap[selectedCategory]}
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
                  margin: '0 auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '60px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  zIndex: 9999,
                }}
              >
                Image {index + 1} of {fullCategoryMap[selectedCategory].length}
              </div>
            </>
          ),
        }}
      />
    </>
  );
};

export default Gallery;
