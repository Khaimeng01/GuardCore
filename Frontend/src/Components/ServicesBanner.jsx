import React from 'react'
import { useNavigate } from 'react-router-dom';
import services_banner from "../assets/services_banner.png";


const ServicesBanner = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="lg:flex lg:flex-row-reverse md:flex-col mb-[120px] lg:-mb-[120px] 2xl:-mb-[300px]">

                <div className="2xl:h-[1000px] relative overflow-hidden ml-auto xl:h-[800px] lg:h-[700px] lg:w-full md:h-[480px] md:w-[750px] md:mx-auto h-[250px] w-[350px] mx-auto">
                    <div className="absolute 2xl:bottom-[300px] 2xl:-right-96 xl:bottom-[180px] xl:-right-56 lg:bottom-[150px] lg:-right-44 md:bottom-0 md:right-0 right-0 bottom-[12px]">
                        <div className="relative">
                            <img src={services_banner} className="2xl:w-[1150px] object-cover xl:w-[800px] lg:w-[700px] md:w-[750px] [350px] w-[350px]" alt="" />
                        </div>
                    </div>
                </div>

                <div className='2xl:px-20 flex flex-col w-full max-h-[580px] xl:max-h-[700px] item-center justify-center gap-7 xl:px-0 xl:pl-10 lg:pl-7 lg:text-start md:text-center px-5'>
                    <div className="flex flex-col">
                        <h1 className='font-["Rajdhani"] font-semibold text-[#131313] 2xl:text-[54px] xl:text-[48px] lg:text-[38px] md:text-[34px] text-[28px]'>Our Services</h1>
                    </div>
                    <p className='font-["Rajdhani"]text-[#212121] leading-[17px] xl:leading-5 text-sm xl:text-base md:mx-16 lg:mx-0'>
                    At Guardcore Security Services, we offer a comprehensive range of professional security solutions tailored to meet the needs of individuals, businesses, and organizations. From static guards, mobile patrols, and event security to high-level protection, surveillance systems, and investigations — our services are designed to deliver safety, deter threats, and respond swiftly to any situation. Backed by a dedicated team and industry expertise, we provide trusted, result-oriented protection that sets the standard for excellence.                        </p>
                    <div className='flex flex-row gap-3 md:gap-6 lg:mx-0 md:mx-auto '>
                        {/* <button onClick={() => { navigate("/career#joinUs") }} className='rounded-lg font-["Montserrat"] font-bold text-xs px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 xl:text-base xl:px-9 bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] text-white transition-transform transform hover:scale-110 duration-150 ease-in'>JOIN US NOW</button> */}
                        {/* <button onClick={() => navigate("/contact")} className='font-["Montserrat"] text-xs font-bold px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 xl:text-base xl:px-9 border-2 border-[#AD1DEB] transition-all duration-150 ease-in hover:bg-[#131313] hover:text-white'>CONTACT US</button> */}
                        <button
                        onClick={() => navigate("/contact")}
                        className="h-12 w-36 bg-[#FF6A00] text-white font-['Montserrat'] text-xs font-bold rounded-[5px] xl:w-[170px] xl:h-[55px] xl:text-base transition-transform transform hover:scale-110 duration-150 ease-in"
                        >
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesBanner
