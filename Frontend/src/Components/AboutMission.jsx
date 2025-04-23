import React, { useEffect } from "react"
import aos from "aos"
import "aos/dist/aos.css"

import m1 from "../assets/aboutMission/Mission.png"
import p1 from "../assets/aboutMission/Vision.png"

const AboutMission = () => {
    useEffect(() => {
        aos.init({ once: "true" })
    }, [])

    return (
        <div className="w-full mt-[88px] custom-gradient flex flex-col px-5 py-8 gap-14 md:gap-[50px] lg:gap-[35px] xl:gap-[45px]">
            {/* Mission Section */}
            <div className="max-w-[1350px] mx-auto flex flex-col lg:flex-row items-center gap-10 xl:gap-[125px] 2xl:gap-[175px]" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-sine" data-aos-duration="500">
                <img
                    src={m1}
                    alt="Mission"
                    className="w-full max-w-[360px] xl:max-w-[400px] 2xl:max-w-[450px] object-contain"
                />
                <div className="flex flex-col gap-4 text-center lg:text-left px-4">
                    <h1 className="text-[32px] xl:text-[48px] 2xl:text-[64px] font-['Rajdhani'] font-bold text-[#131313] tracking-wide">
                        OUR MISSION
                    </h1>
                    <p className="text-[18px] sm:text-[20px] xl:text-[22px] 2xl:text-[24px] font-['Rajdhani'] text-[#212121] leading-relaxed max-w-[800px] text-justify">
                        At <span className="font-semibold">GUARDCORE Security Services</span>, our mission is clear: to create a safer and more secure environment for our clients. We understand the importance of peace of mind, and our dedicated team of highly trained security professionals is ready to stand guard, ensuring your safety and the security of your assets.
                    </p>
                </div>
            </div>

            {/* Vision Section */}
            <div className="max-w-[1350px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-10 xl:gap-[125px] 2xl:gap-[175px]" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-sine" data-aos-duration="500">
                <img
                    src={p1}
                    alt="Vision"
                    className="w-full max-w-[360px] xl:max-w-[400px] 2xl:max-w-[450px] object-contain"
                />
                <div className="flex flex-col gap-4 text-center lg:text-left px-4">
                    <h1 className="text-[32px] xl:text-[48px] 2xl:text-[64px] font-['Rajdhani'] font-bold text-[#131313] tracking-wide">
                        OUR VISION
                    </h1>
                    <p className="text-[18px] sm:text-[20px] xl:text-[22px] 2xl:text-[24px] font-['Rajdhani'] text-[#212121] leading-relaxed max-w-[800px] text-justify">
                        Our vision is to be a premier provider of innovative and reliable security solutions, setting the industry standard for excellence. We strive to create a safer world by delivering incomparable protection, fostering trust and empowering our dedicated team to exceed expectations.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMission
