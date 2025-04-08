import React from "react"
import bg from "../assets/meet_team_bg.png"
import mem1 from "../assets/mem1.png"
import mem2 from "../assets/mem2.png"
import mem3 from "../assets/mem3.png"
import mem4 from "../assets/mem4.png"
import fb from "../assets/fb-grey.png"
import insta from "../assets/insta-grey.png"
import linkedin from "../assets/linkedin-grey.png"

import image1 from "../assets/homeTeam/1.png";
import image2 from "../assets/homeTeam/2.png";
import image3 from "../assets/homeTeam/3.png";
import image4 from "../assets/homeTeam/4.png";

const TeamMember = () => {
    return (
        <>
            <div className="flex flex-col gap-8 md:gap-12 xl:gap-0 lg:gap-20 mt-[150px]">
                <h1 className="font-['Rajdhani'] font-semibold text-center text-[32px] text-[#131313] xl:text-[44px] 2xl:text-[56px]">Board of Directors</h1>

                {/* FOR MOBILE, TABLET AND SMALL LAPTOPS */}
                <div className="flex flex-col w-full gap-12 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-16 lg:gap-0 xl:hidden">

                    {/* FISRT MEMBER */}
                    <div className="flex flex-col gap-4">
                        <div className="relative w-full">
                            {/* <img src={bg} alt="" className="absolute bottom-0 h-[133px] w-full object-fill z-10" /> */}
                            <img src={image1} alt="" className="relative z-20 h-[300px] mx-auto md:h-[350px] xl:h-[340px] xl:max-w-[300px] " />
                        </div>
                        <div className="flex flex-col items-center gap-2 xl:max-w-[350px]">
                            <h1 className="text-[22px] text-[#131313] text-['Rajdhani'] font-semibold"> MAJ GEN (R) DATO ZAINAL <br />
                            BIN ABDUL MANAF RMAF</h1>
                            <p className="text-[18px] font-['Rajdhani'] ">CHAIRMAN</p>
                            <p className="text-sm font-['Rajdhani']  text-center max-w-[350px]">
                            In the face of unprecedented challenges, our professionalism and vigilance are exceptional. Your efforts have not only maintained our reputation as a leader in the security industry but have also made a meaningful difference in the lives of those we serve.                                         
                            </p>
                            
                            {/* <div className="flex gap-4 flex-wrap">
                                <img src={fb} alt="" className="h-10 w-10  transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                <img src={insta} alt="" className="h-10 w-10  transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                <img src={linkedin} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                            </div> */}
                            {/* <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight min-h-[96px]">
                                    MAJ GEN (R) DATO ZAINAL <br />
                                    BIN ABDUL MANAF RMAF
                                    </h1>
                                    <h2 className="text-[18px] text-[#555] font-['Rajdhani'] font-medium text-center mt-2">
                                    CHAIRMAN
                                    </h2>

                                    <p className="text-center max-w-[320px] text-md font-['Rajdhani'] mt-2">
                                    In the face of unprecedented challenges, our professionalism and vigilance are exceptional. Your efforts have not only maintained our reputation as a leader in the security industry but have also made a meaningful difference in the lives of those we serve.                                         
                                    </p> */}
                        </div>
                    </div>

                    {/* SECOND MEMBER */}
                    <div className="flex flex-col gap-4">
                        <div className="relative w-full">
                            {/* <img src={bg} alt="" className="absolute bottom-0 h-[133px] w-full object-fill z-10" /> */}
                            <img src={image2} alt="" className="relative z-20 h-[300px] mx-auto md:h-[350px] xl:h-[340px] xl:max-w-[300px] " />
                        </div>
                        <div className="flex flex-col items-center gap-2 xl:max-w-[350px]">
                            <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold ">SAINEETHIAN MURUGIAH</h1>
                            <p className="text-[18px] font-['Rajdhani']"> MANAGING DIRECTOR</p>
                            <p className="text-sm font-['Rajdhani'] text-center max-w-[350px]">
                            As we embrace new technologies and methodologies, I am confident that we will continue to exceed our customers' expectations and set new standards of excellence in the industry. Our success is a testament to our collective efforts, and I have no doubt that together, we will achieve great things in the years to come.                                    
                            </p>
                            {/* <div className="flex gap-4 flex-wrap">
                                <img src={fb} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                <img src={insta} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                <img src={linkedin} alt="" className="h-10 w- transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                            </div> */}
                        </div>
                    </div>

                    {/* THIRD MEMBER */}
                    <div className="flex flex-col gap-4">
                        <div className="relative w-full">
                            {/* <img src={bg} alt="" className="absolute bottom-0 h-[133px] w-full object-fill z-10" /> */}
                            <img src={image3} alt="" className="relative z-20 h-[300px] mx-auto md:h-[350px] xl:h-[340px] xl:max-w-[300px] " />
                        </div>
                        <div className="flex flex-col items-center gap-2 xl:max-w-[350px]">
                            <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold">DATO T. MURUGIAH</h1>
                            <p className="text-[18px] font-['Rajdhani']">CHAIRMAN AND ADVISOR SECUREX BERHAD</p>
                            <p className="text-sm font-['Rajdhani'] text-center max-w-[350px]">
                            In these challenging times, our leadership stands as a beacon of strength and clarity. With an unwavering focus on excellence and innovation, we have solidified our reputation as a trusted leader in the security industry. Our commitment has made a profound impact on the safety and well-being of those we serve. Dedicated to upholding the highest standards, we continue to make a meaningful difference every day, ensuring trust, reliability, and excellence in everything we do.                                    
                            </p>
                            {/* <div className="flex gap-4 flex-wrap">
                                <img src={fb} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                <img src={insta} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                <img src={linkedin} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                            </div> */}
                        </div>
                    </div>

                    {/* FOURTH MEMBER */}
                    <div className="flex flex-col gap-4">
                        <div className="relative w-full">
                            {/* <img src={bg} alt="" className="absolute bottom-0 h-[133px] w-full object-fill z-10" /> */}
                            <img src={image4} alt="" className="relative z-20 h-[300px] mx-auto md:h-[350px] xl:h-[340px] xl:max-w-[300px]" />
                        </div>
                        <div className="flex flex-col items-center gap-2 xl:max-w-[350px]">
                            <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold">Chuah Guan Leong</h1>
                            <p className="text-[18px] font-['Rajdhani']">FINANCIAL ADVISOR</p>
                            <p className="text-sm font-['Rajdhani'] text-center max-w-[350px]">
                            Through strategic financial planning, we ensure stability and growth in the security industry. Our commitment to excellence and resilience strengthens our financial foundation, securing long-term success for our company, clients, and stakeholders.   
                            </p>
                            {/* <div className="flex gap-4 flex-wrap">
                                <img src={fb} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                <img src={insta} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                <img src={linkedin} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                            </div> */}
                        </div>
                    </div>
                </div>


                {/* FOR LARGE LAPTOPS AND DESKTOP */}
                <div className="hidden xl:flex xl:flex-col w-full mb-[400px] xl:-mt-24">
                    <div className="relative">
                        <div className="relative z-20 flex justify-evenly max-w-[1645px] mx-auto">

                            <div className="flex flex-col relative xl:top-[232px] 2xl:top-[232px] gap-[47px]">
                                <img src={image1} alt="" className="object-cover xl:h-[400px] xl:w-[300px] 2xl:w-[350px] 2xl:h-[529px]" />
                                <div className="flex flex-col xl:w-[300px] 2xl:w-[350px] items-center">
                                <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight min-h-[96px]">
                                    MAJ GEN (R) DATO ZAINAL <br />
                                    BIN ABDUL MANAF RMAF
                                    </h1>
                                    <h2 className="text-[18px] text-[#555] font-['Rajdhani'] font-medium text-center mt-2">
                                    CHAIRMAN
                                    </h2>

                                    <p className="text-center max-w-[320px] text-md font-['Rajdhani'] mt-2">
                                    In the face of unprecedented challenges, our professionalism and vigilance are exceptional. Your efforts have not only maintained our reputation as a leader in the security industry but have also made a meaningful difference in the lives of those we serve.                                         
                                    </p>
                                    {/* <div className="flex gap-4 flex-wrap">
                                        <img src={fb} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                        <img src={insta} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                        <img src={linkedin} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                    </div> */}
                                </div>
                            </div>

                            <div className="flex flex-col relative xl:top-[232px] 2xl:top-[232px] gap-[47px]">
                                <img src={image2} alt="" className="object-cover xl:h-[400px] xl:w-[300px] 2xl:w-[350px] 2xl:h-[529px]" />
                                <div className="flex flex-col xl:w-[300px] 2xl:w-[350px] items-center">
                                    <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-semibold min-h-[96px]">SAINEETHIAN MURUGIAH  </h1>
                                    <h2 className="text-[18px] text-[#555] font-['Rajdhani'] font-medium text-center">
                                    MANAGING DIRECTOR
                                    </h2>
                                    {/* <p className="text-center max-w-[320px] text-md font-['Rajdhani'] mt-2">
                                    In the face of unprecedented challenges, our professionalism and vigilance are exceptional. Your efforts have not only maintained our reputation as a leader in the security industry but have also made a meaningful difference in the lives of those we serve.                                         
                                    </p> */}
                                    <p className="text-center max-w-[320px] text-md font-['Rajdhani'] mt-2">
                                    As we embrace new technologies and methodologies, I am confident that we will continue to exceed our customers' expectations and set new standards of excellence in the industry. Our success is a testament to our collective efforts, and I have no doubt that together, we will achieve great things in the years to come.                                    
                                    </p>
                                    {/* <div className="flex gap-4 flex-wrap">
                                        <img src={fb} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                        <img src={insta} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                        <img src={linkedin} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                    </div> */}
                                </div>
                            </div>

                            <div className="flex flex-col relative xl:top-[232px] 2xl:top-[232px] gap-[47px]">
                                <img src={image3} alt="" className="object-cover xl:h-[400px] xl:w-[300px] 2xl:w-[350px] 2xl:h-[529px]" />
                                <div className="flex flex-col xl:w-[300px] 2xl:w-[350px] items-center">
                                    <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-semibold min-h-[96px]">DATO T. MURUGIAH  </h1>
                                    <h2 className="text-[18px] text-[#555] font-['Rajdhani'] font-medium text-center">
                                    CHAIRMAN AND ADVISOR SECUREX BERHAD
                                    </h2>

                                    {/* <p className="text-center max-w-[320px] text-md font-['Rajdhani'] mt-2">
                                    In the face of unprecedented challenges, our professionalism and vigilance are exceptional. Your efforts have not only maintained our reputation as a leader in the security industry but have also made a meaningful difference in the lives of those we serve.                                         
                                    </p> */}

                                    <p className="text-center max-w-[320px] text-md font-['Rajdhani'] mt-2">
                                    In these challenging times, our leadership stands as a beacon of strength and clarity. With an unwavering focus on excellence and innovation, we have solidified our reputation as a trusted leader in the security industry. Our commitment has made a profound impact on the safety and well-being of those we serve. Dedicated to upholding the highest standards, we continue to make a meaningful difference every day, ensuring trust, reliability, and excellence in everything we do.                                    
                                    </p>
                                    {/* <div className="flex gap-4 flex-wrap">
                                        <img src={fb} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                        <img src={insta} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                        <img src={linkedin} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                    </div> */}
                                </div>
                            </div>

                            <div className="flex flex-col relative xl:top-[232px] 2xl:top-[232px] gap-[47px]">
                                <img src={image4} alt="" className="object-cover xl:h-[400px] xl:w-[300px] 2xl:w-[350px] 2xl:h-[529px]" />
                                <div className="flex flex-col xl:w-[300px] 2xl:w-[350px] items-center">
                                    <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-semibold min-h-[96px]">Chuah Guan Leong </h1>
                                    <h2 className="text-[18px] text-[#555] font-['Rajdhani'] font-medium text-center">
                                    FINANCIAL ADVISOR
                                    </h2>
                                    {/* <p className="text-center max-w-[320px] text-md font-['Rajdhani'] mt-2">
                                    In the face of unprecedented challenges, our professionalism and vigilance are exceptional. Your efforts have not only maintained our reputation as a leader in the security industry but have also made a meaningful difference in the lives of those we serve.                                         
                                    </p> */}
                                    <p className="text-center max-w-[320px] text-md font-['Rajdhani'] mt-2">
                                    Through strategic financial planning, we ensure stability and growth in the security industry. Our commitment to excellence and resilience strengthens our financial foundation, securing long-term success for our company, clients, and stakeholders.   
                                    </p>                                
                                    {/* <div className="flex gap-4 flex-wrap">
                                        <img src={fb} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                        <img src={insta} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                        <img src={linkedin} alt="" className="h-10 w-10 transition duration-100 ease-in filter hover:brightness-0 cursor-pointer" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <img src={bg} alt="" className="absolute bottom-0 w-full xl:h-[250px] 2xl:h-[300px] object-fill z-10" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMember
