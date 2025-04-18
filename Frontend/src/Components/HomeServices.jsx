import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import aos from "aos"
import "aos/dist/aos.css"
// import image1 from "../assets/s1.jpeg"
//import image2 from "../assets/s2.jpeg"
// import image3 from "../assets/s3.jpeg"
// import image4 from "../assets/s4.jpeg"

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
import useIsMobile from './useIsMobile';
import { HashLink } from 'react-router-hash-link';


const HomeServices = () => {

    const isMobile = useIsMobile();


    const navigate = useNavigate()
    useEffect(() => {
        aos.init({
            once: "true",
            // offset: 120, // or try 80, this triggers the animation when it's 100px into view

        })
    }, [])

    return (
        <>
            <div className='flex flex-col space-y-[156px] mt-[34px] items-center px-5 md:mt-[80px] xl:mt-[192px]'>
                <h1 className='font-["Rajdhani"] font-semibold text-[42px] text-[#131313] font-["Rajdhani"]  text-center md:text-[44px] xl:text-[56px]'>OUR SERVICES</h1>
                
                
                <div className='flex flex-col gap-[100px] items-center md:grid md:grid-rows-3 md:grid-cols-2 md:gap-7 md:gap-y-[80px] xl:grid-cols-3 xl:grid-rows-2 xl:gapx-[80px]'>
                    
                    {/* Service 1 */}
                    <div className='lg:min-h-[314px]  min-w-[350px] h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image1} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center lg:min-h-[64px] '>STATIC GUARDS</p>

                            <button
                                
                                onClick={() => navigate(
                                    `/services#${isMobile ? 'mobileService1' : 'serviceDesktop1'}`
                                  )}
                                // onClick={() =>
                                //     navigate(isMobile ? "/services#staticGuardsMobile" : "/services#staticGuards")
                                //   }
                                  
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image2} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center lg:min-h-[64px]'>MANAGEMENT OF SECURITY AND SURVEILLANCE SYSTEMS                            </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate(
                                    `/services#${isMobile ? 'mobileService2' : 'serviceDesktop2'}`
                                  )}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image3} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center'>DESIGN & INSTALLATION OF SURVEILLANCE SYSTEMS                            </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                    {/* Service 4 */}                   
                    <div className='lg:min-h-[314px] min-w-[350px] h-auto w-auto bg-white flex flex-col items-center px-2 pb-5  rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image4} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center lg:min-h-[64px]'>BODYGUARDS & ESCORTS</p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 5 */} 
                    <div className='min-h-[314px] min-w-[350px] h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image5} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col items-center gap-4'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center'>SECURITY SURVEYS & RISK ANALYSIS</p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 6 */} 
                    <div className='lg:min-h-[314px] min-w-[350px] h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image6} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center lg:min-h-[64px]'>MOBILE PATROL</p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 7 */} 
                    <div className='lg:min-h-[314px] min-w-[350px] h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image7} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center lg:min-h-[64px]'>GUARD DOGS</p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 8 */} 
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image8} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center'>CORPORATE & PERSONAL THREAT COVERAGE </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 9 */} 
                    <div className='lg:min-h-[314px] min-w-[350px] h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image9} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center lg:min-h-[64px]'>EVENT SECURITY MANAGEMENT  </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 10 */} 
                    <div className='min-h-[314px] h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image10} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center'>COVERT OR OVERT INVESTIGATIONS  </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 11 */} 
                    <div className='lg:min-h-[314px] min-w-[350px] h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image11} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center lg:min-h-[64px]'>ARMED GUARDS </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 12 */} 
                    <div className='min-h-[314px] min-w-[350px] h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image12} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center'>EXECUTIVE AND PROPERTY PROTECTION  </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 13 */} 
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image13} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center'>THIRD-PARTY LIAISON WITH PUBLIC AGENCIES </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 14 */} 
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image14} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center'>MANAGEMENT OF REAL AND POTENTIAL SECURITY THREATS </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 15 */} 
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image15} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center'>COMMERCIAL CRIMES INVESTIGATION  </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 16 */} 
                    <div className='lg:min-h-[314px] min-w-[350px] h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image16} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center lg:min-h-[64px]'>LEGAL ACTION / LITIGATION  </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>


                     {/* Service 17 */} 
                    <div className='h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image17} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center'>IN-HOUSE SECURITY MANAGEMENT  </p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>

                     {/* Service 18*/} 
                    <div className='lg:min-h-[314px]  min-w-[350px] h-auto w-auto bg-white flex flex-col items-center px-2 pb-5 rounded-xl shadow-lg max-w-[460px] xl:px-8 xl:pb-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-sine" data-aos-duration="250">
                        <img src={image18} alt="" className='h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[10px] border-[#ECECEC] z-10' />
                        <div className='flex flex-col gap-4 items-center'>
                            <p className='text-3xl 2xl:text-3xl font-["Rajdhani"] font-semibold text-center lg:min-h-[64px]'>GATHERING OF EVIDENCE</p>
                            {/* <p className='text-sm font-["Red_Hat_Display"] text-[#131313] text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo adipisci et ut exercitationem eaque enim, neque atque ab ducimus.</p> */}
                            <button
                                onClick={() => navigate("/services")}
                                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-5 py-4 relative overflow-hidden group"
                                >
                                <span className="absolute inset-0 bg-[#FF6A00] transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10 group-hover:text-white">FIND OUT MORE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeServices
