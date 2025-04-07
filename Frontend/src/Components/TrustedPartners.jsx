import React from 'react'
import Marquee from "react-fast-marquee";
import c1 from "../assets/homeTrustedPartners/Partner_1.png"
import c2 from  "../assets/homeTrustedPartners/Partner_2.png"
import c3 from  "../assets/homeTrustedPartners/Partner_3.png"
import c4 from  "../assets/homeTrustedPartners/Partner_4.png"
import c5 from  "../assets/homeTrustedPartners/Partner_5.png"
import c6 from  "../assets/homeTrustedPartners/Partner_6.png"



const TrustedPartners = () => {
    return (
        <>
            <section id="trusted-clients" className="py-16">
                {/*<h1 className='mt-[100px] md:mt-[90px] xl:mt-[192px] mb-14 lg:mb-16 text-[#131313] font-["otomanopee-one"] text-center text-[32px] md:text-[44px] xl:text-[56px]'>OUR TRUSTED CLIENTS</h1>*/}
                <h1 className=" text-gray-900 text-[38px] font-semibold text-center font-['Rajdhani']">

                 Our Partners
            </h1>

            <div className="flex justify-center items-center mt-2">
                <div className="bg-[#0C004F] h-1 w-16 rounded"></div>
            </div>
{/* 
            <h1 className='text-[32px] text-[#131313] font-["Playfair_Display"] text-center md:text-[44px] xl:text-[56px]'>BOARD OF DIRECTORS</h1>

            <div className="flex justify-center items-center mt-2">
                <div className="bg-blue-400 h-1 w-16 rounded"></div>
            </div>  */}

            <p className="text-[#0C004F] text-center mt-7 mb-10 text-lg px-4 leading-relaxed">
</p>

                <Marquee autoFill gradient gradientWidth={20} gradientColor='#ECECEC'>
                    <div className='flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10'>
                        {/* <img src={c1} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' /> */}
                        <img src={c2} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' />
                        <img src={c3} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' />
                        <img src={c4} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' />
                        <img src={c5} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' />
                        <img src={c6} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' />
                        <img src={c1} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full pr-4 md:pr-6 lg:pr-8 xl:pr-10' />
                    </div>
                </Marquee>
            </section>


           
        </>
    )
}

export default TrustedPartners
