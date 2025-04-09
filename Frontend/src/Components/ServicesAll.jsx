import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import services1_5 from "../assets/services1_5.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import services4 from "../assets/services4.png";
import services6 from "../assets/services6.png";

import image1 from "../assets/homeService/Service_1.png";


const ServicesAll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [location]);

  return (
    <div className='md:max-w-[850px] lg:max-w-[1140px] xl:max-w-[1180px] 2xl:max-w-[1350px] mx-auto space-y-9 drop-shadow-[10px_10px_10px_rgba(0,0,0,0.25)]'>
      
      <div id="securityGuards" className='flex flex-col lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8'>
        <img src={image1} alt="Security Guards" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
        <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
          <h1 className='font-["Rajdhani"] font-semibold text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>
            SECURITY GUARDS
          </h1>
          <p className='font-["Rajdhani"] text-20 lg:text-[23px] text-gray-800  leading-4 md:leading-[22px] text-justify '>
            Our trained and licensed static guards provide a constant, visible security presence to deter unauthorized access and ensure the safety of your premises. Whether stationed at entrances, reception areas, or strategic internal points, our guards are skilled in monitoring access, conducting routine patrols, and responding to incidents swiftly. Ideal for commercial buildings, residential complexes, construction sites, and retail outlets, static guards are a frontline defense that offer both a security presence and peace of mind          
          </p>
        </div>
      </div>
      
      <div id="bouncers" className='flex flex-col-reverse lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8'>
        <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
          <h1 className='font-["otomanopee-one"] text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>
            BOUNCERS/BODY GUARDS
          </h1>
          <p className='font-["Philosopher"] text-[#212121] text-sm md:text-[15px] leading-4 md:leading-[22px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <img src={services2} alt="Bouncers" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
      </div>

      <div id="ladySecurity" className='flex flex-col lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8'>
        <img src={services3} alt="Lady Security Guards" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
        <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
          <h1 className='font-["otomanopee-one"] text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>
            LADY SECURITY GUARDS
          </h1>
          <p className='font-["Philosopher"] text-[#212121] text-sm md:text-[15px] leading-4 md:leading-[22px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div id="gunmen" className='flex flex-col-reverse lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8'>
        <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
          <h1 className='font-["otomanopee-one"] text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>
            GUNMEN/REVOLVER MEN/PSO
          </h1>
          <p className='font-["Philosopher"] text-[#212121] text-sm md:text-[15px] leading-4 md:leading-[22px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <img src={services4} alt="Gunmen" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
      </div>

      <div id="securitySupervisors" className='flex flex-col lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8'>
        <img src={services1_5} alt="Security Supervisors" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
        <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
          <h1 className='font-["otomanopee-one"] text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>
            SECURITY SUPERVISORS
          </h1>
          <p className='font-["Philosopher"] text-[#212121] text-sm md:text-[15px] leading-4 md:leading-[22px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>


      <div id="securityOfficers" className='flex flex-col-reverse lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8'>
        <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
          <h1 className='font-["otomanopee-one"] text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>
            SECURITY OFFICERS
          </h1>
          <p className='font-["Philosopher"] text-[#212121] text-sm md:text-[15px] leading-4 md:leading-[22px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <img src={services6} alt="Security Officers" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]' />
      </div>

    </div>
  );
};

export default ServicesAll;
