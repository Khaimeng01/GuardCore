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
      
      <h1 className="text-[32px] lg:text-[38px] text-[#0A004B] font-semibold  text-center  mb-10 font-['Rajdhani']">
          Our Services
        </h1>

        <div className="flex flex-col w-full gap-12 xl:hidden px-4 mt-10">
            <div className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
              <div className="w-full">
                <img src={image1} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight">
                SECURITY GUARDS
                </h1>
                {/* <p className="text-[18px] font-['Rajdhani'] font-medium text-center">CHAIRMAN</p> */}
                <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
                <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
                Our trained and licensed static guards provide a constant, visible security presence to deter unauthorized access and ensure the safety of your premises. Whether stationed at entrances, reception areas, or strategic internal points, our guards are skilled in monitoring access, conducting routine patrols, and responding to incidents swiftly. Ideal for commercial buildings, residential complexes, construction sites, and retail outlets, static guards are a frontline defense that offer both a security presence and peace of mind          

                </p>
              </div>
            </div>
        </div>

        <div className="hidden xl:flex flex-col items-center w-full gap-16 mt-20">
            <div className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image1} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[300px] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight">
                  SECURITY GUARDS
                  </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  Our trained and licensed static guards provide a constant, visible security presence to deter unauthorized access and ensure the safety of your premises. Whether stationed at entrances, reception areas, or strategic internal points, our guards are skilled in monitoring access, conducting routine patrols, and responding to incidents swiftly. Ideal for commercial buildings, residential complexes, construction sites, and retail outlets, static guards are a frontline defense that offer both a security presence and peace of mind          
                  </p>
                </div>
              </div>
        </div>



      {/* First Service */}
      <div id="staticGuards" className='flex flex-col lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8'>
        <img src={image1} alt="Security Guards" className='max-w-[250px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px] rounded-lg' />
        <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
          <h1 className='font-["Rajdhani"] font-semibold text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap'>
            SECURITY GUARDS
          </h1>
          <p className='font-["Rajdhani"] text-20 lg:text-[23px] text-gray-800 text-justify  leading-4 md:leading-[22px]  '>
            Our trained and licensed static guards provide a constant, visible security presence to deter unauthorized access and ensure the safety of your premises. Whether stationed at entrances, reception areas, or strategic internal points, our guards are skilled in monitoring access, conducting routine patrols, and responding to incidents swiftly. Ideal for commercial buildings, residential complexes, construction sites, and retail outlets, static guards are a frontline defense that offer both a security presence and peace of mind          
          </p>
        </div>
      </div>

      {/* Second Service */}
      
      <div id="bouncers" className='flex flex-col-reverse lg:flex-row items-center justify-between rounded-[10px] bg-white pt-7 lg:pt-1 px-3 md:px-7 py-1 mx-4 sm:mx-10 2xl:justify-around 2xl:py-8'>
        <div className='lg:max-w-[470px] xl:max-w-[510px] space-y-7 py-7'>
          <h1 className='font-["Rajdhani"] font-semibold text-[#131313] text-2xl md:text-4xl text-center lg:text-start md:text-nowrap text-uppercase'>
            Management of Security <br></br>and Surveillance Systems
          </h1>
          <p className='font-["Rajdhani"] text-20 lg:text-[23px] text-gray-800 text-justify leading-4 md:leading-[22px]'>
          We offer end-to-end management of security and surveillance systems to ensure your assets and personnel remain protected at all times. Our services include the oversight of CCTV networks, alarm systems, access control mechanisms, and other integrated security technologies. With real-time monitoring and regular system audits, we ensure that your surveillance infrastructure is always functioning at optimal efficiency. This service is ideal for organizations looking to enhance safety, deter threats, and maintain full situational awareness across their premises          </p>
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
