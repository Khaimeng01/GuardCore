// import React from 'react'
// import Navbar from '../Components/Navbar'
// import AboutBanner from "../Components/AboutBanner"
// import AboutIntro from '../Components/AboutIntro'
// import AboutMission from "../Components/AboutMission"
// import TeamMember from "../Components/TeamMember"
// import Footer from '../Components/Footer'
// import ScrollToTop from '../Components/ScrollToTop'

// const About = () => {
//     return (
//         <>
//             <body className='bg-[#ECECEC]'>
//                 <ScrollToTop />
//                 <Navbar />
//                 {/*<AboutBanner />*/}
//                 <AboutIntro />
//                 <AboutMission />
//                 <section id="trusted-clients">
//                 <TeamMember />

//                 </section>


//                 <Footer />
//             </body>
//         </>
//     )
// }

// export default About

// import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from "../Components/AboutBanner"
import AboutIntro from '../Components/AboutIntro'
import AboutMission from "../Components/AboutMission"
import TeamMember from "../Components/TeamMember"
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'

import React, { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const About = () => {

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

  const mainImages = importImages(import.meta.glob('../assets/galleryMain/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true }));

  const [guards, setGuards] = useState([]);
  const [bodyguards, setBodyguards] = useState([]);
  const [team, setTeam] = useState([]);
  const [others, setOthers] = useState([]);

  const loadExtraImages = () => {
    if (!hasLoadedExtraImages) {
      setGuards(importImages(import.meta.glob('../assets/galleryGuard/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true })));
      setBodyguards(importImages(import.meta.glob('../assets/bodyguards/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true })));
      setTeam(importImages(import.meta.glob('../assets/team/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true })));
      setOthers(importImages(import.meta.glob('../assets/others/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true })));
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
  
    return (
        <>
            <body className='bg-[#ECECEC]'>
            <div className="bg-[#ECECEC] min-h-screen">
        <ScrollToTop />
        <Navbar />

        <div className="px-6 py-12 max-w-6xl mx-auto">
          <h1 className='font-["Rajdhani"] font-semibold text-[32px] text-[#131313] text-center md:text-[44px] xl:text-[56px] mb-12'>
            GALLERY
          </h1>

          {/* Category buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Main', 'Guards', 'Bodyguards', 'Team', 'Others'].map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full border ${selectedCategory === cat ? 'bg-[#1e1e1e] text-white' : 'bg-white text-black'} transition`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
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
            </body>
        </>
    )
}

export default About




// const Gallery = () => {
  

//   return (
//     <>

//     </>
//   );
// };

// export default Gallery;
