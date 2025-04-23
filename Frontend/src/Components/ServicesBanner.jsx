import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import services_banner from "../assets/serviceBanner/service_MainImage.png";
import { HashLink } from 'react-router-hash-link';


import aos from "aos"
import "aos/dist/aos.css"

const ServicesBanner = () => {
    const navigate = useNavigate()

    useEffect(() => {
        aos.init({
            once: "true",
        })
    }, [])
    return (
        <div className="w-full bg-[#131313] ">
        <div
            className="mx-auto max-w-[1773px] flex flex-col pb-10 items-center md:pb-12 lg:flex-row-reverse lg:py-3"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
        >
            {/* Image section */}
            <div className="w-full lg:w-1/2 relative object-cover">
                <img
                    src={services_banner}
                    alt="Guardcore Intro"
                    className="w-full h-auto object-cover z-10 relative"
                />
                {/* Optional gradient overlay */}
                {/* <div className="absolute bottom-0 left-0 right-0 h-[50px] md:h-[100px] xl:h-[200px] bg-gradient-to-b from-transparent to-[#131313] z-20"></div> */}
            </div>

            {/* Text section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5 px-5 md:items-center lg:items-start xl:gap-7">
                <h1 className="text-[32px] font-['Rajdhani'] text-white xl:text-[44px] 2xl:text-[56px]">
                Our Services
                </h1>
                <p className="text-[#939393] font-['Rajdhani']text-[15px] leading-[17px] xl:leading-6 max-w-[660px]  text-justify xl:text-[16px] 2xl:text-[18px] ">
                At Guardcore Security Services, we offer a comprehensive range of professional security solutions tailored to meet the needs of individuals, businesses, and organizations. From static guards, mobile patrols, and event security to high-level protection, surveillance systems, and investigations — our services are designed to deliver safety, deter threats, and respond swiftly to any situation. Backed by a dedicated team and industry expertise, we provide trusted, result-oriented protection that sets the standard for excellence.                </p>
                {/* <button
                    onClick={() => navigate("/contact")}
                    className="h-12 w-36 bg-[#FF6A00] text-white font-['Montserrat'] text-xs font-bold rounded-[5px] xl:w-[170px] xl:h-[55px] xl:text-base transition-transform transform hover:scale-110 duration-150 ease-in"
                >
                    CONTACT US
                </button> */}
                <HashLink
  smooth
  to="/#contact"
  className="h-12 w-36 bg-[#FF6A00] text-white font-['Montserrat'] text-xs font-bold rounded-[5px] xl:w-[170px] xl:h-[55px] xl:text-base transition-transform transform hover:scale-110 duration-150 ease-in flex items-center justify-center"
>
  CONTACT US
</HashLink>

            </div>
        </div>
    </div>
    )
}

export default ServicesBanner
