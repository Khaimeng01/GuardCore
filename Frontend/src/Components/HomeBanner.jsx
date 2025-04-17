import React from 'react';
import { useNavigate } from "react-router-dom";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/homeBanner/Image_5.png";
import banner3 from "../assets/homeBanner/Image_3.png";
import banner4 from "../assets/homeAboutUs/Image_3.png";


import { FaWhatsapp } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';


const HomeBanner = () => {
    const navigate = useNavigate();

    const banner = {
        img: banner4 ,
        title: "CHOOSE GUARDCORE",
        subtitle: "STAY HARDCORE",
        description: "Guardcore Security Services is your trusted partner in safeguarding what matters most. We provide professional, results-driven security solutions for individuals, businesses, and communities. Our team is dedicated to delivering reliable protection with unmatched professionalism and commitment.",
        button1: {
            text: "CONTACT US",
            gradient: "bg-[#FF6A00]",
            textColor: "text-white"
          }
          
          ,
        button2: { text: "VISIT WEBSITE", border: "border-[#6100AB]", textColor: "text-black" },
    };

    return (
        <div className='w-screen h-auto flex flex-col px-5 py-1 items-center pb-0 mx-auto gap-5 sm:gap-10 md:gap-12 lg:flex-row-reverse lg:gap-10 lg:pt-16 lg:max-w-[1138px] xl:pl-8 xl:max-w-[1338px] 2xl:max-w-[1518px] 2xl:gap-6 2xl:pt-8 2xl:pl-10 2xl:pr-0'>
            
            <img
  src={banner.img}
  alt=""
  className="object-contain w-full h-auto max-h-[480px] sm:max-h-[540px] md:max-h-[600px] lg:max-h-[580px] xl:max-h-[620px]"
/>


            <div className='flex flex-col justify-center w-full h-auto sm:px-8 md:items-center lg:items-start xl:px-0'>
                <h1 className='font-["Rajdhani"] font-semibold text-[38px] text-[#131313] mb-3 sm:text-[44px] md:text-[56px] md:tracking-wide lg:text-[40px] xl:text-[56px] 2xl:text-[65px]'>{banner.title}</h1>
                <h1 className='font-["Rajdhani"] font-semibold text-[38px] text-[#131313] mb-3 sm:text-[44px] md:text-[56px] md:tracking-wide lg:text-[40px] xl:text-[56px] 2xl:text-[65px]'>{banner.subtitle}</h1>
                <div className='flex items-center gap-2 mb-5 xl:gap-4'>
                    <div className='w-[47px] h-[2px] bg-black md:w-[56px] xl:w-[78px]'></div>
                    <p className='font-["Rajdhani"] font-semibold text text-[18px] sm:text-[20px] md:text-[22px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px]'>Trusted Security Solutions</p>
                </div>
                <p className='font-["Rajdhani"] text-[#3F3F3F] text-md font-medium mb-4 sm:text-[18px] sm:leading-6 md:text-center md:max-w-[670px] lg:text-base lg:text-start xl:text-[18px] xl:max-w-[570px] xl:mb-11'>
                    {banner.description}
                </p>
                <div className='flex flex-row gap-3 md:gap-6'>
                    {/* <button
                        onClick={() => window.open("https://wa.link/ydw72i", "_blank")}
                        className="flex items-center justify-center gap-2 px-5 py-4 rounded-[10px] bg-[#25D366] hover:bg-[#1DA851] text-white font-['Montserrat'] font-bold text-xs sm:text-sm md:text-base transition-all duration-300"
                        >
                        <FaWhatsapp size={18} />
                        WhatsApp
                    </button> */}
                    {/* <button onClick={() => navigate("/contact")} className={`rounded-lg font-["Montserrat"] font-bold text-xs px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 xl:text-base xl:px-9 bg-gradient-to-r ${banner.button1.gradient} ${banner.button1.textColor} transition-transform transform hover:scale-110 duration-150 ease-in`}>
                        {banner.button1.text}
                    </button> */}
                    <HashLink smooth to="/#contact">
                        <button className={`rounded-lg font-["Montserrat"] font-bold text-xs px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 xl:text-base xl:px-9 bg-gradient-to-r ${banner.button1.gradient} ${banner.button1.textColor} transition-transform transform hover:scale-110 duration-150 ease-in`}>
                            {banner.button1.text}
                        </button>
                    </HashLink>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
