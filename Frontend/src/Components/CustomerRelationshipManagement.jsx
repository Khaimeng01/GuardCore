import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Auto-import all JPEG images from serviceCRM folder
const imageModules = import.meta.glob('../assets/serviceCRM/*.jpeg', {
  eager: true,
  import: 'default',
});

const crmImages = Object.entries(imageModules).map(([path, src]) => ({
  src,
  alt: path.split('/').pop().replace('.jpeg', '').replace(/[-_]/g, ' '),
}));

const CustomerRelationshipManagement = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const handleImageClick = (index) => {
    setLightboxIndex(index);
  };

  return (
    <section className="bg-[#ECECEC] py-16 px-6" id="customer-relationship">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[32px] lg:text-[38px] text-[#0A004B] font-semibold text-center mb-10 font-['Rajdhani']">
          Customer Relationship Management
        </h1>
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 space-y-6">
          <p className="text-20 lg:text-[24px] text-gray-800 font-['Rajdhani'] text-justify">
            Guardcore's client support systems are designed to ensure seamless communication,
            timely updates, and streamlined coordination. Whether it’s through shift scheduling,
            incident reporting, or general feedback, our tools help us stay connected and responsive
            to every client’s needs.
          </p>

          {/* Swiper Carousel */}
          <div className="w-full mt-6">
            <Swiper
          modules={[Autoplay, Pagination]} // remove Navigation
          autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              className="rounded-lg overflow-hidden"
            >
              {crmImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    onClick={() => handleImageClick(index)}
                    className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-cover mx-auto rounded-lg cursor-pointer"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Lightbox View */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={crmImages}
        index={lightboxIndex}
        on={{
          view: ({ index }) => setLightboxIndex(index),
        }}
        render={{
          slide: ({ slide, rect }) => (
            <>
              <img
                src={slide.src}
                alt={slide.alt}
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
                Image {lightboxIndex + 1} of {crmImages.length}
              </div>
            </>
          ),
        }}
      />
    </section>
  );
};

export default CustomerRelationshipManagement;
