import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

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
  return (
    <section className="bg-[#ECECEC] py-16 px-6" id="customer-relationship">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-[32px] lg:text-[38px] text-[#0A004B] font-semibold  text-center  mb-10 font-['Rajdhani']">
      Customer Relationship Management
        </h1>
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 space-y-6">

          <p className="text-20 lg:text-[24px] text-gray-800 font-['Rajdhani']  text-justify">
            Guardcore's client support systems are designed to ensure seamless communication,
            timely updates, and streamlined coordination. Whether it’s through shift scheduling,
            incident reporting, or general feedback, our tools help us stay connected and responsive
            to every client’s needs.
          </p>

          {/* Swiper Carousel */}
          <div className="w-full mt-6">
          <Swiper
  modules={[Autoplay, Pagination, Navigation]}
  autoplay={{ delay: 3000 }}
  pagination={{ clickable: true }}
  navigation={true}
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
        className="w-full h-[300px] lg:h-[500px] object-cover rounded-lg"
        loading="lazy"
      />
    </SwiperSlide>
  ))}
</Swiper>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerRelationshipManagement;
