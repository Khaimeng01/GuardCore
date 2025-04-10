// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import ContactBanner from '../Components/ContactBanner';
// import Footer from '../Components/Footer';
// import ScrollToTop from '../Components/ScrollToTop';
// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';

// const Gallery = () => {
//     const [index, setIndex] = useState(-1);

//     // Utility to format Vite glob imports
//     const importImages = (globResult) => {
//         return Object.entries(globResult)
//             .map(([path, module]) => ({
//                 src: module.default,
//                 name: path,
//             }))
//             .sort((a, b) => a.name.localeCompare(b.name));
//     };
    

//     // Dynamically import images per category
//     const mainImages = importImages(import.meta.glob('../assets/galleryMain/*.{jpg,jpeg,png}', { eager: true }));
//     const guardsImages = importImages(import.meta.glob('../assets/galleryGuard/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true }));
//     const bodyguardsImages = importImages(import.meta.glob('../assets/bodyguards/*.{jpg,jpeg,png}', { eager: true }));
//     const teamImages = importImages(import.meta.glob('../assets/team/*.{jpg,jpeg,png}', { eager: true }));
//     const othersImages = importImages(import.meta.glob('../assets/others/*.{jpg,jpeg,png}', { eager: true }));

//     const allImages = [
//         ...mainImages,
//         ...guardsImages,
//         ...bodyguardsImages,
//         ...teamImages,
//         ...othersImages,
//     ];

//     // Offset helpers
//     const mainOffset = 0;
//     const guardsOffset = mainOffset + mainImages.length;
//     const bodyguardsOffset = guardsOffset + guardsImages.length;
//     const teamOffset = bodyguardsOffset + bodyguardsImages.length;
//     const othersOffset = teamOffset + teamImages.length;

    
//     // Grid renderer
//     const renderSection = (title, images, offset) => (
//         <div className="mb-12 w-full">
//             {/* <h2 className="text-xl font-bold mb-4">{title}</h2> */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {images.map((image, i) => (
//                     <div
//                         key={offset + i}
//                         className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
//                         onClick={() => setIndex(offset + i)}
//                     >
//                         <img
//                             src={image.src}
//                             alt={`Gallery ${offset + i + 1}`}
//                             className="w-full h-64 object-cover"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
    

//     return (
//         <>
//             <div className="bg-[#ECECEC] min-h-screen">
//                 <ScrollToTop />
//                 <Navbar />

//                 <div className="px-6 py-12 max-w-6xl mx-auto">
//                     <h1 className='font-["Rajdhani"] font-semibold text-[32px] text-[#131313] text-center md:text-[44px] xl:text-[56px] mb-12'>
//                         GALLERY
//                     </h1>

//                     {/* {renderSection('Main Gallery', mainImages, mainOffset)}
//                     {renderSection('Guards (1st Batch)', guardsImages, guardsOffset)}
//                     {renderSection('Bodyguards (2nd Batch)', bodyguardsImages, bodyguardsOffset)}
//                     {renderSection('Team (3rd Batch)', teamImages, teamOffset)}
//                     {renderSection('Others (4th Batch)', othersImages, othersOffset)} */}

//                     {renderSection('Gallery', mainImages, mainOffset)}

//                 </div>

//                 <Footer />
//             </div>

//             {/* Lightbox */}
//             <Lightbox
//                 open={index >= 0}
//                 close={() => setIndex(-1)}
//                 slides={allImages}
//                 index={index}
//                 on={{
//                     view: ({ index }) => setIndex(index),
//                 }}
//                 render={{
//                     slide: ({ slide, rect }) => (
//                         <>
//                             <img
//                                 src={slide.src}
//                                 alt="Gallery item"
//                                 style={{
//                                     maxHeight: rect.height,
//                                     maxWidth: rect.width,
//                                     margin: "0 auto",
//                                     display: "block",
//                                     objectFit: "contain",
//                                 }}
//                             />
//                             <div
//                                 style={{
//                                     position: "absolute",
//                                     top: "20px",
//                                     right: "60px",
//                                     backgroundColor: "rgba(0, 0, 0, 0.6)",
//                                     color: "white",
//                                     padding: "6px 12px",
//                                     borderRadius: "6px",
//                                     fontSize: "14px",
//                                     zIndex: 9999,
//                                 }}
//                             >
//                                 Image {index + 1} of {allImages.length}
//                             </div>
//                         </>
//                     ),
//                 }}
//             />
//         </>
//     );
// };

// export default Gallery;

import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useMemo } from 'react';


const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState('Main');
  const [hasLoadedExtraImages, setHasLoadedExtraImages] = useState(false);

  const importImages = (globResult) => {
    return Object.entries(globResult)
      .map(([path, module]) => ({
        src: module.default,
        name: path,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

//   const mainImages = importImages(import.meta.glob('../assets/galleryMain/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true }));
    
    const mainImages = useMemo(() =>
        importImages(import.meta.glob('../assets/galleryMain/*.{jpg,jpeg,png}', { eager: true }))
    , []);

    const [guards, setGuards] = useState([]);
    const [bodyguards, setBodyguards] = useState([]);
    const [team, setTeam] = useState([]);
    const [others, setOthers] = useState([]);

  const loadExtraImages = () => {
    if (!hasLoadedExtraImages) {
      setGuards(importImages(import.meta.glob('../assets/galleryGuard/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true })));
      setBodyguards(importImages(import.meta.glob('../assets/bodyguards/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp}', { eager: true })));
      setTeam(importImages(import.meta.glob('../assets/galleryOthers/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp}', { eager: true })));
      setOthers(importImages(import.meta.glob('../assets/galleryTeam/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp}', { eager: true })));
      setHasLoadedExtraImages(true);
    }
  };

  useEffect(() => {
    if (selectedCategory !== 'Main') {
      loadExtraImages();
    }
  }, [selectedCategory]);

  const allImages = [
    ...mainImages,
    ...guards,
    ...bodyguards,
    ...team,
    ...others,
  ];

  const offsets = {
    Main: 0,
    Guards: mainImages.length,
    Bodyguards: mainImages.length + guards.length,
    Team: mainImages.length + guards.length + bodyguards.length,
    Others: mainImages.length + guards.length + bodyguards.length + team.length,
  };

  const categoryMap = {
    Main: mainImages,
    Guards: guards.slice(0, 9),
    Bodyguards: bodyguards.slice(0, 9),
    Team: team.slice(0, 9),
    Others: others.slice(0, 9),
  };

  const handleImageClick = (localIndex) => {
    const globalIndex = offsets[selectedCategory] + localIndex;
    setIndex(globalIndex);
  };

  const categories = ['Main', 'Guards', 'Bodyguards', 'Team', 'Others'];


  return (
    <>
      <div className="bg-[#ECECEC] min-h-screen">
        <ScrollToTop />
        <Navbar />

        <div className="px-6 py-12 max-w-6xl mx-auto">
          <h1 className='font-["Rajdhani"] font-semibold text-[32px] text-[#131313] text-center md:text-[44px] xl:text-[56px] mb-12'>
            GALLERY
          </h1>

          {/* Category buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Main', 'Guards', 'Bodyguards', 'Team', 'Others'].map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full border ${selectedCategory === cat ? 'bg-[#1e1e1e] text-white' : 'bg-white text-black'} transition`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div> */}

          {/* Responsive filter buttons */}
{/* Responsive filter buttons */}
<div className="w-full mb-8">
{/* Mobile: Dropdown filter */}
    <div className="block md:hidden mb-6 ">
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
        </div>

        <Footer />
      </div>

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




