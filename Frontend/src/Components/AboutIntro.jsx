import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import aos from "aos"
import "aos/dist/aos.css"
import { HashLink } from 'react-router-hash-link';

import introImage from "../assets/aboutIntro/aboutIntro_1.png"

const AboutIntro = () => {
    const navigate = useNavigate()

    useEffect(() => {
        aos.init({
            once: "true",
        })
    }, [])

    return (
        <div className="w-full bg-[#131313] ">
            <div
                className="mx-auto max-w-[1773px] flex flex-col pb-10 items-center md:pb-12 lg:flex-row-reverse lg:py-10"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
            >
                {/* Image section */}
                <div className="w-full lg:w-1/2 relative object-cover">
                    <img
                        src={introImage}
                        alt="Guardcore Intro"
                        className="w-full h-auto object-cover z-10 relative"
                    />
                    {/* Optional gradient overlay */}
                    {/* <div className="absolute bottom-0 left-0 right-0 h-[50px] md:h-[100px] xl:h-[200px] bg-gradient-to-b from-transparent to-[#131313] z-20"></div> */}
                </div>

                {/* Text section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-5 px-5 md:items-center lg:items-start xl:gap-7">
                    <h1 className="text-[32px] font-['Rajdhani'] text-white xl:text-[44px] 2xl:text-[56px]">
                    GUARDCORE SECURITY SERVICES
                    </h1>
                    <p className="text-[#939393] font-['Rajdhani']text-[15px] leading-[17px] xl:leading-6 max-w-[660px] md:text-center lg:text-left xl:text-[16px] 2xl:text-[18px]">
                        Empowering Safety, Ensuring Protection. Welcome to GUARDCORE Security Services — your trusted partner in protecting what matters most. As a leading provider of professional security solutions, we are proud of our unwavering commitment to delivering exceptional protection for individuals, businesses, and communities. The name GUARDCORE stands as a testament to the professionalism and dedication of our team. We offer services that are both result-driven and tailored to our clients' unique needs.
                    </p>
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

export default AboutIntro
