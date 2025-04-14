import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import image1 from "../assets/homeService/Service_1.png";
import image2 from "../assets/homeService/Service_2.png";
import image3 from "../assets/homeService/Service_3.png";
import image4 from "../assets/homeService/Service_4.png";
import image5 from "../assets/homeService/Service_5.png";
import image6 from "../assets/homeService/Service_6.png";
import image7 from "../assets/homeService/Service_7.png";
import image8 from "../assets/homeService/Service_8.png";
import image9 from "../assets/homeService/Service_9.png";
import image10 from "../assets/homeService/Service_10.png";
import image11 from "../assets/homeService/Service_11.png";
import image12 from "../assets/homeService/Service_12.png";
import image13 from "../assets/homeService/Service_13.png";
import image14 from "../assets/homeService/Service_14.png";
import image15 from "../assets/homeService/Service_15.png";
import image16 from "../assets/homeService/Service_16.png";
import image17 from "../assets/homeService/Service_17.png";
import image18 from "../assets/homeService/Service_18.png";

const services = [
  { title: "Security Guards", image: image1 },
  { title: "Management of Security and Surveillance Systems", image: image2 },
  { title: "Design & Installation of Surveillance Systems", image: image3 },
  { title: "Bodyguards & Escorts", image: image4 },
  { title: "Security Surveys & Risk Analysis", image: image5 },
  { title: "Mobile Patrol", image: image6 },
  { title: "Guard Dogs", image: image7 },
  { title: "Corporate & Personal Threat Coverage", image: image8 },
  { title: "Event Security Management", image: image9 },
  { title: "Covert or Overt Investigations", image: image10 },
  { title: "Armed Guards", image: image11 },
  { title: "Executive and Property Protection", image: image12 },
  { title: "Third-Party Liaison with Public Agencies", image: image13 },
  { title: "Management of Real and Potential Security Threats", image: image14 },
  { title: "Commercial Crimes Investigation", image: image15 },
  { title: "Legal Action / Litigation", image: image16 },
  { title: "House Security Management", image: image17 },
  { title: "Gathering of Evidence", image: image18 }
];

const toSlug = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const ServicesAll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const scrollToSection = () => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };
      scrollToSection();
      const timeoutId = setTimeout(scrollToSection, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [location]);

  return (
    <div className='md:max-w-[850px] lg:max-w-[1140px] xl:max-w-[1180px] 2xl:max-w-[1350px] mx-auto space-y-9'>
      <h1 className="text-[32px] lg:text-[38px] text-[#0A004B] font-semibold text-center mb-10 font-['Rajdhani']">
        Our Services
      </h1>

      {/* Mobile View */}
      <div className="flex flex-col w-full gap-12 xl:hidden px-4 mt-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            id={toSlug(service.title)}
            className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto"
          >
            <div className="w-full">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg w-full h-auto max-h-[350px] object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
                {service.title}
              </h1>
              <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
              <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
                {/* Replace with the actual content for each service */}
                Description for {service.title} goes here.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden xl:flex flex-col items-center w-full gap-16 mt-20">
        {services.map((service, idx) => (
          <div
            key={idx}
            id={toSlug(service.title)}
            className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center"
          >
            <div className="flex-1 flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg object-cover w-[fit] h-[400px]"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                {service.title}
              </h1>
              <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
              <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                {/* Replace with the actual content for each service */}
                Description for {service.title} goes here.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAll;