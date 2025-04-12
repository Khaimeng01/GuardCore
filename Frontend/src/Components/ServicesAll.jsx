import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import services1_5 from "../assets/services1_5.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import services4 from "../assets/services4.png";
import services6 from "../assets/services6.png";

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

          {/* First Service */}
            <div id="staticGuards" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
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

          {/* Second Service */}
          <div id="ManagementofSecurityandSurveillanceSystems" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
              <div className="w-full">
                <img src={image2} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
                Management of Security and Surveillance Systems
                </h1>
                {/* <p className="text-[18px] font-['Rajdhani'] font-medium text-center">CHAIRMAN</p> */}
                <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
                <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
                Our trained and licensed static guards provide a constant, visible security presence to deter unauthorized access and ensure the safety of your premises. Whether stationed at entrances, reception areas, or strategic internal points, our guards are skilled in monitoring access, conducting routine patrols, and responding to incidents swiftly. Ideal for commercial buildings, residential complexes, construction sites, and retail outlets, static guards are a frontline defense that offer both a security presence and peace of mind          

                </p>
              </div>
            </div>

          {/* Third Service */}
            <div id="Design&InstallationofSurveillance Systems" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
              <div className="w-full">
                <img src={image3} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
                Design & Installation of Surveillance Systems
                </h1>
                {/* <p className="text-[18px] font-['Rajdhani'] font-medium text-center">CHAIRMAN</p> */}
                <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
                <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
                We specialize in the customized design and professional installation of advanced surveillance systems tailored to your specific security needs. Our experts conduct thorough site assessments to identify vulnerable areas and recommend the most effective solutions, including CCTV cameras, motion detectors, alarm systems, and remote access capabilities. Using cutting-edge technology and best practices, we ensure seamless integration and comprehensive coverage to protect your property around the clock.        

                </p>
              </div>
            </div>

              {/* Third Service */}
              <div id="Design&InstallationofSurveillance Systems" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
              <div className="w-full">
                <img src={image3} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
                Design & Installation of Surveillance Systems
                </h1>
                {/* <p className="text-[18px] font-['Rajdhani'] font-medium text-center">CHAIRMAN</p> */}
                <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
                <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
                We specialize in the customized design and professional installation of advanced surveillance systems tailored to your specific security needs. Our experts conduct thorough site assessments to identify vulnerable areas and recommend the most effective solutions, including CCTV cameras, motion detectors, alarm systems, and remote access capabilities. Using cutting-edge technology and best practices, we ensure seamless integration and comprehensive coverage to protect your property around the clock.        

                </p>
              </div>
            </div>

        </div>

        <div className="hidden xl:flex flex-col items-center w-full gap-16 mt-20">
          
          {/* First Service */}
          <div id="staticGuards" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
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

          {/* Second Service */}
          <div  id="ManagementofSecurityandSurveillanceSystems" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image2} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                  Management of Security and Surveillance Systems
                  </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  We offer end-to-end management of security and surveillance systems to ensure your assets and personnel remain protected at all times. Our services include the oversight of CCTV networks, alarm systems, access control mechanisms, and other integrated security technologies. With real-time monitoring and regular system audits, we ensure that your surveillance infrastructure is always functioning at optimal efficiency. This service is ideal for organizations looking to enhance safety, deter threats, and maintain full situational awareness across their premises.                  </p>
                </div>
            </div>


          {/* Third Service */}
          <div id="Design&InstallationofSurveillance Systems" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image3} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    Design & Installation of Surveillance Systems
                  </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  We specialize in the customized design and professional installation of advanced surveillance systems tailored to your specific security needs. Our experts conduct thorough site assessments to identify vulnerable areas and recommend the most effective solutions, including CCTV cameras, motion detectors, alarm systems, and remote access capabilities. Using cutting-edge technology and best practices, we ensure seamless integration and comprehensive coverage to protect your property around the clock.        
                  </p>         
                  </div>
            </div>

                      {/* Fourth Service */}
          <div id="Design&InstallationofSurveillance Systems" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image4} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    Bodyguards & Escorts
                  </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  Our discreet and highly trained bodyguards provide personal protection services for individuals who require enhanced security in their daily lives or during special engagements. Whether you're a high-profile executive, public figure, or simply seeking added safety during travel or events, our personnel offer vigilant protection without disrupting your routine. From one-on-one escorts to full protection teams, we tailor our services based on threat levels, environment, and client preferences to ensure your safety and peace of mind.
                  </p>         
                  </div>
            </div>

                      {/* 5 Service */}
            <div id="Design&InstallationofSurveillance Systems" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image5} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    Security Surveys & Risk Analysis
                  </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  Our comprehensive security surveys and risk analysis services identify vulnerabilities and potential threats to your premises, operations, and personnel. We conduct in-depth assessments of physical infrastructure, access control, surveillance systems, and existing security protocols. Based on our findings, we provide a detailed report with tailored recommendations to mitigate risks and strengthen your overall security posture. This proactive approach helps organizations prevent incidents before they occur and ensures compliance with industry standards.                  </p>         
                  </div>
            </div>

                      {/* 6 Service */}
            <div id="Design&InstallationofSurveillance Systems" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image6} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Mobile Patrol
                  </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  Our mobile patrol services provide professional and responsive security coverage across your property through routine and random inspections. Equipped with marked vehicles and trained security personnel, we monitor for signs of intrusion, ensure access points are secure, and respond swiftly to any unusual activity. This service offers a visible deterrent to potential threats and ensures continuous vigilance over wide or multi-location premises such as business parks, residential areas, and industrial facilities.                  </p>         
                  </div>
            </div>

                      {/* 7 Service */}

            <div id="Design&InstallationofSurveillance Systems" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image7} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Guard Dogs                  
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  Our professionally trained guard dogs, handled by skilled security personnel, offer an enhanced layer of protection for high-risk or sensitive environments. With their acute senses and strong deterrent presence, these dogs are highly effective in detecting intruders, securing large perimeters, and supporting patrol activities. Whether used in commercial, industrial, or event settings, our canine units provide a proactive and powerful security solution that enhances the safety of your premises.                   </p>         
                  </div>
            </div>

            
            <div id="Design&InstallationofSurveillance Systems" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image8} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Corporate & Personal Threat Coverage                    
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  We provide tailored security solutions to mitigate threats against individuals, executives, and organizations. From corporate espionage and disgruntled employees to personal threats and targeted harassment, our team conducts thorough threat assessments and implements strategic protection plans. Whether it's securing office environments, residences, or travel routes, we offer discreet yet effective coverage to ensure safety, confidentiality, and business continuity in high-stakes or sensitive situations.                  </p>         
                  </div>
            </div>

              
        </div>



      
    </div>
  );
};

export default ServicesAll;
