import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import services1_5 from "../assets/services1_5.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import services4 from "../assets/services4.png";
import services6 from "../assets/services6.png";

import image1 from "../assets/homeService/newImage1.png";
import image2 from "../assets/homeService/Service_2.png";
import image3 from "../assets/homeService/Service_3.png";
import image4 from "../assets/homeService/newImage4.png";

import image5 from "../assets/homeService/Service_5.png";
import image6 from "../assets/homeService/Service_6.png";

import image7 from "../assets/homeService/newImage7.png";

import image8 from "../assets/homeService/Service_8.png";
import image9 from "../assets/homeService/Service_9.png";
import image10 from "../assets/homeService/Service_10.png";

import image11 from "../assets/homeService/newImage11.png";

import image12 from "../assets/homeService/Service_12.png";

import image13 from "../assets/homeService/newImage13.png";

import image14 from "../assets/homeService/Service_14.png";
import image15 from "../assets/homeService/Service_15.png";
import image16 from "../assets/homeService/Service_16.png";

import image17 from "../assets/homeService/newImage17.png";

import image18 from "../assets/homeService/Service_18.png";
import image19 from "../assets/homeService/Service_19.png";



const ServicesAll = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1)); 
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);
  
  

  


  return (
    <div className='md:max-w-[850px] lg:max-w-[1140px] xl:max-w-[1180px] 2xl:max-w-[1350px] mx-auto space-y-9 drop-shadow-[10px_10px_10px_rgba(0,0,0,0.25)]'>
      
      <h1 className="text-[32px] lg:text-[38px] text-[#0A004B] font-semibold  text-center  mb-10 font-['Rajdhani']">
          Our Services
        </h1>

        <div className="flex flex-col w-full gap-12 xl:hidden px-4 mt-10">

          {/* First Service */}
            <div id="mobileService1" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto scroll-mt-28">
              <div className="w-full">
                <img src={image1} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight">
                Static Guards
                </h1>
                {/* <p className="text-[18px] font-['Rajdhani'] font-medium text-center">CHAIRMAN</p> */}
                <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
                <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
                Our trained and licensed static guards provide a constant, visible security presence to deter unauthorized access and ensure the safety of your premises. Whether stationed at entrances, reception areas, or strategic internal points, our guards are skilled in monitoring access, conducting routine patrols, and responding to incidents swiftly. Ideal for commercial buildings, residential complexes, construction sites, and retail outlets, static guards are a frontline defense that offer both a security presence and peace of mind          

                </p>
              </div>
            </div>

          {/* Second Service */}
          <div id="mobileService2" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
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
            <div id="mobileService3" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
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


             {/* 4 Service */}
            <div id="mobileService4" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
              <div className="w-full">
                <img src={image4} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
                  Bodyguards & Escorts
                </h1>
                <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
                <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
                  Our discreet and highly trained bodyguards provide personal protection services for individuals who require enhanced security in their daily lives or during special engagements. Whether you're a high-profile executive, public figure, or simply seeking added safety during travel or events, our personnel offer vigilant protection without disrupting your routine. From one-on-one escorts to full protection teams, we tailor our services based on threat levels, environment, and client preferences to ensure your safety and peace of mind.
                </p>
              </div>
            </div>

            {/* 5 Service */}
            <div id="mobileService5" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image5} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Security Surveys & Risk Analysis
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      Our comprehensive security surveys and risk analysis services identify vulnerabilities and potential threats to your premises, operations, and personnel. We conduct in-depth assessments of physical infrastructure, access control, surveillance systems, and existing security protocols. Based on our findings, we provide a detailed report with tailored recommendations to mitigate risks and strengthen your overall security posture. This proactive approach helps organizations prevent incidents before they occur and ensures compliance with industry standards.
    </p>
  </div>
</div>


            {/* 6 Service */}
            <div id="mobileService" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image6} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Mobile Patrol
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      Our mobile patrol services provide professional and responsive security coverage across your property through routine and random inspections. Equipped with marked vehicles and trained security personnel, we monitor for signs of intrusion, ensure access points are secure, and respond swiftly to any unusual activity. This service offers a visible deterrent to potential threats and ensures continuous vigilance over wide or multi-location premises such as business parks, residential areas, and industrial facilities.
    </p>
  </div>
</div>

{/* 7 Service */}
<div id="mobileService7" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image7} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Guard Dogs
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      Our professionally trained guard dogs, handled by skilled security personnel, offer an enhanced layer of protection for high-risk or sensitive environments. With their acute senses and strong deterrent presence, these dogs are highly effective in detecting intruders, securing large perimeters, and supporting patrol activities. Whether used in commercial, industrial, or event settings, our canine units provide a proactive and powerful security solution that enhances the safety of your premises.
    </p>
  </div>
</div>


{/* 8 Service */}
<div id="mobileService8" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image8} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Corporate & Personal Threat Coverage
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      We provide tailored security solutions to mitigate threats against individuals, executives, and organizations. From corporate espionage and disgruntled employees to personal threats and targeted harassment, our team conducts thorough threat assessments and implements strategic protection plans. Whether it's securing office environments, residences, or travel routes, we offer discreet yet effective coverage to ensure safety, confidentiality, and business continuity in high-stakes or sensitive situations.
    </p>
  </div>
</div>


{/* 9 Service */}
<div id="mobileService9" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image9} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Event Security Management
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      We offer end-to-end security management for events of all sizes, ensuring the safety of guests, staff, and assets. From crowd control and access point monitoring to emergency response planning and VIP protection, our team is trained to handle dynamic environments with professionalism and discretion. Whether it's a corporate function, concert, festival, or private gathering, we work closely with organizers to deliver a seamless and secure experience for everyone involved.
    </p>
  </div>
</div>

{/* 10 Service */}
<div id="mobileService0" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image10} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Covert or Overt Investigations
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      We provide both covert (discreet) and overt (visible) investigation services tailored to a wide range of situations. Whether addressing concerns within the workplace, monitoring suspicious activity, or gathering critical information, our trained investigators operate with professionalism and precision. Using a combination of surveillance techniques, background checks, and fieldwork, we deliver reliable insights while maintaining the integrity and confidentiality of the investigation.
    </p>
  </div>
</div>

{/* 11 Service */}
<div id="mobileService11" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image11} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Armed Guards
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      Our armed guards are highly trained professionals equipped to protect people, property, and high-value assets in environments where an elevated level of security is required. Licensed and certified to carry firearms, they are prepared to respond swiftly and effectively to potential threats. Ideal for banks, VIP residences, critical infrastructure, and situations with increased risk, our armed security presence serves as a strong deterrent and a dependable line of defense.
    </p>
  </div>
</div>

{/* 12 Service */}
<div id="mobileService12" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image12} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Executive and Property Protection
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      We provide specialized security services to protect high-profile individuals and valuable properties from potential threats. Our team conducts risk assessments and develops tailored protection strategies, ensuring the safety of executives, dignitaries, and private residences or estates. With a combination of trained personnel, surveillance systems, and secure protocols, we offer discreet yet effective coverage that prioritizes both safety and privacy at all times.
    </p>
  </div>
</div>

{/* 13 Service */}
<div id="mobileService13" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image13} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Third-Party Liaison with Public Agencies
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      We act as a trusted intermediary between our clients and public agencies, including law enforcement, emergency services, and regulatory bodies. Our team ensures clear communication, efficient coordination, and compliance with relevant laws and protocols. Whether managing incident responses, securing permits, or assisting in investigations, we streamline interactions with authorities to protect our clients’ interests and uphold safety standards.
    </p>
  </div>
</div>

{/* 14 Service */}
<div id="mobileService14" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image14} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Management of Real and Potential Security Threats
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      Our team is trained to identify, assess, and respond to both actual and potential security threats with speed and precision. We implement proactive measures such as threat detection, incident planning, and real-time response strategies to safeguard people, assets, and operations. Whether it's a developing situation or a foreseeable risk, we offer expert support to neutralize threats before they escalate, ensuring safety and continuity across all environments.
    </p>
  </div>
</div>

{/* 15 Service */}
<div id="mobileService15" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image15} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Commercial Crimes Investigation
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      We conduct thorough investigations into commercial crimes such as fraud, embezzlement, intellectual property theft, and other financial misconduct. Our experienced team uses proven investigative techniques, forensic analysis, and intelligence gathering to uncover evidence, identify perpetrators, and support legal proceedings. Whether you're a business facing internal threats or seeking to resolve suspicious activity, we help protect your organization's assets, reputation, and legal standing.
    </p>
  </div>
</div>

{/* 16 Service */}
<div id="mobileService16" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image16} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Legal Action / Litigation
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      We provide support in initiating or responding to legal action related to security matters, working closely with legal professionals to build strong, evidence-based cases. Our services include documentation, witness statements, evidence collection, and expert testimony when needed. Whether pursuing litigation or defending against claims, we ensure our clients are well-prepared and represented throughout the legal process.
    </p>
  </div>
</div>

{/* 17 Service */}
<div id="mobileService17" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image17} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      House Security Management
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      We offer comprehensive in-house security management services, embedding experienced security professionals within your organization to oversee daily operations and long-term strategies. From managing personnel and access control to coordinating emergency response plans and ensuring compliance with safety protocols, our team becomes an integral part of your security infrastructure. This hands-on approach ensures consistent protection, streamlined communication, and a strong security culture across your organization.
    </p>
  </div>
</div>

{/* 18 Service */}
<div id="mobileService18" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image18} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
      Gathering of Evidence
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      We assist in the collection of reliable and relevant information to support decision-making, investigations, or legal processes. Using a variety of methods—such as observation, interviews, and documentation—we gather evidence in a professional and confidential manner. Our goal is to provide clear, factual insights that can be used to understand situations better, resolve disputes, or take further action when necessary.
    </p>
  </div>
</div>

{/* 19 Service */}
<div id="mobileService19" className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image19} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight text-uppercase">
    Specialized Security Services
    </h1>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
    Guardcore offers advanced protection through a select group of specialized officers trained for high-risk environments and investigative tasks. Our unarmed guards maintain secure, customer-facing environments. Armed guards are equipped for high-value, high-security sites. Meanwhile, our investigation unit delivers discreet, results-driven intelligence for sensitive corporate or private cases.    </p>
  </div>
</div>


        </div>

        <div className="hidden xl:flex flex-col items-center w-full gap-16 mt-20">
          

                      {/* First Service */}
          <div  id="staticGuard" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center scroll-mt-28">
                <div className="flex-1 flex justify-center">
                  <img src={image1} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                  Static Guards
                  </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  Our trained and licensed static guards provide a constant, visible security presence to deter unauthorized access and ensure the safety of your premises. Whether stationed at entrances, reception areas, or strategic internal points, our guards are skilled in monitoring access, conducting routine patrols, and responding to incidents swiftly. Ideal for commercial buildings, residential complexes, construction sites, and retail outlets, static guards are a frontline defense that offer both a security presence and peace of mind          
                   </p>
                </div>
            </div>

          {/* Second Service */}
          <div  id="serviceDesktop2" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
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
          <div id="serviceDesktop3" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
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
          <div id="serviceDesktop4" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
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
            <div id="serviceDesktop5" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
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
            <div id="serviceDesktop6" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
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

            <div id="serviceDesktop7" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
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

                                  {/* 8 Service */}

            <div id="serviceDesktop8" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
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


                {/* 9 Service */}

                <div id="serviceDesktop9" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image9} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Event Security Management                  
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  We offer end-to-end security management for events of all sizes, ensuring the safety of guests, staff, and assets. From crowd control and access point monitoring to emergency response planning and VIP protection, our team is trained to handle dynamic environments with professionalism and discretion. Whether it's a corporate function, concert, festival, or private gathering, we work closely with organizers to deliver a seamless and secure experience for everyone involved.                  </p>         
                  </div>
            </div>

                            {/* 10 Service */}

                            <div id="serviceDesktop10" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image10} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Covert or Overt Investigations                   
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  We provide both covert (discreet) and overt (visible) investigation services tailored to a wide range of situations. Whether addressing concerns within the workplace, monitoring suspicious activity, or gathering critical information, our trained investigators operate with professionalism and precision. Using a combination of surveillance techniques, background checks, and fieldwork, we deliver reliable insights while maintaining the integrity and confidentiality of the investigation.                  </p>         
                  </div>
            </div>

             {/* 11 Service */}

             <div id="serviceDesktop11" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image11} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Armed Guards                
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  Our armed guards are highly trained professionals equipped to protect people, property, and high-value assets in environments where an elevated level of security is required. Licensed and certified to carry firearms, they are prepared to respond swiftly and effectively to potential threats. Ideal for banks, VIP residences, critical infrastructure, and situations with increased risk, our armed security presence serves as a strong deterrent and a dependable line of defense.                  </p>         
                  </div>
            </div>


             {/* 12 Service */}

             <div id="serviceDesktop12" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image12} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Executive and Property Protection           
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  We provide specialized security services to protect high-profile individuals and valuable properties from potential threats. Our team conducts risk assessments and develops tailored protection strategies, ensuring the safety of executives, dignitaries, and private residences or estates. With a combination of trained personnel, surveillance systems, and secure protocols, we offer discreet yet effective coverage that prioritizes both safety and privacy at all times.                  </p>         
                  </div>
            </div>

            {/* 13 Service */}

            <div id="serviceDesktop13" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image13} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Third-Party Liaison with Public Agencies           
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  We act as a trusted intermediary between our clients and public agencies, including law enforcement, emergency services, and regulatory bodies. Our team ensures clear communication, efficient coordination, and compliance with relevant laws and protocols. Whether managing incident responses, securing permits, or assisting in investigations, we streamline interactions with authorities to protect our clients’ interests and uphold safety standards.                  </p>         
                  </div>
            </div>

            {/* 14 Service */}

            <div id="serviceDesktop14" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image14} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Management of Real and Potential Security Threats           
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  Our team is trained to identify, assess, and respond to both actual and potential security threats with speed and precision. We implement proactive measures such as threat detection, incident planning, and real-time response strategies to safeguard people, assets, and operations. Whether it's a developing situation or a foreseeable risk, we offer expert support to neutralize threats before they escalate, ensuring safety and continuity across all environments.                  </p>         
                  </div>
            </div>

                        {/* 15 Service */}
            <div id="serviceDesktop15" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image15} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Commercial Crimes Investigation           
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  We conduct thorough investigations into commercial crimes such as fraud, embezzlement, intellectual property theft, and other financial misconduct. Our experienced team uses proven investigative techniques, forensic analysis, and intelligence gathering to uncover evidence, identify perpetrators, and support legal proceedings. Whether you're a business facing internal threats or seeking to resolve suspicious activity, we help protect your organization's assets, reputation, and legal standing.                  </p>         
                  </div>
            </div>

            {/* 16 Service */}
            <div id="serviceDesktop16" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image16} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Legal Action / Litigation     
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  We provide support in initiating or responding to legal action related to security matters, working closely with legal professionals to build strong, evidence-based cases. Our services include documentation, witness statements, evidence collection, and expert testimony when needed. Whether pursuing litigation or defending against claims, we ensure our clients are well-prepared and represented throughout the legal process.                  </p>         
                  </div>
            </div>

                        {/* 17 Service */}
                        <div id="serviceDesktop17" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image17} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    House Security Management     
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  We offer comprehensive in-house security management services, embedding experienced security professionals within your organization to oversee daily operations and long-term strategies. From managing personnel and access control to coordinating emergency response plans and ensuring compliance with safety protocols, our team becomes an integral part of your security infrastructure. This hands-on approach ensures consistent protection, streamlined communication, and a strong security culture across your organization.                  </p>         
                  </div>
            </div>

             {/* 18 Service */}
             <div id="serviceDesktop18" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image18} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Gathering of Evidence   
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  We assist in the collection of reliable and relevant information to support decision-making, investigations, or legal processes. Using a variety of methods—such as observation, interviews, and documentation—we gather evidence in a professional and confidential manner. Our goal is to provide clear, factual insights that can be used to understand situations better, resolve disputes, or take further action when necessary.                  </p>         
                  </div>
            </div>

            {/* 19 Service */}
            <div id="serviceDesktop19" className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
                <div className="flex-1 flex justify-center">
                  <img src={image19} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[fit] h-[400px]" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight text-uppercase">
                    {/* Security Surveys & Risk Analysis */}
                    Specialized Security Services
                    </h1>
                  {/* <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2> */}
                  <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
                  <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
                  Guardcore offers advanced protection through a select group of specialized officers trained for high-risk environments and investigative tasks. Our unarmed guards maintain secure, customer-facing environments. Armed guards are equipped for high-value, high-security sites. Meanwhile, our investigation unit delivers discreet, results-driven intelligence for sensitive corporate or private cases.                  </p>         
                  </div>
            </div>

            
              
        </div>



      
    </div>
  );
};

export default ServicesAll;
