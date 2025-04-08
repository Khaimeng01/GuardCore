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
                {/* MOBILE & TABLET VERSION */}
<div className="flex flex-col w-full gap-12 xl:hidden px-4 mt-10">

{/* MEMBER 1 */}
<div className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image1} alt="Maj Gen (R) Dato Zainal" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight">
      MAJ GEN (R) DATO ZAINAL <br /> BIN ABDUL MANAF RMAF
    </h1>
    <p className="text-[18px] font-['Rajdhani'] font-medium text-center">CHAIRMAN</p>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      In the face of unprecedented challenges, our professionalism and vigilance are exceptional. 
      Your efforts have not only maintained our reputation as a leader in the security industry 
      but have also made a meaningful difference in the lives of those we serve.
    </p>
  </div>
</div>

{/* MEMBER 2 */}
<div className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image2} alt="Saineethian Murugiah" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight">
      SAINEETHIAN MURUGIAH
    </h1>
    <p className="text-[18px] font-['Rajdhani'] font-medium text-center">MANAGING DIRECTOR</p>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      As we embrace new technologies and methodologies, I am confident that we will continue to exceed 
      our customers' expectations and set new standards of excellence in the industry. 
      Our success is a testament to our collective efforts, and I have no doubt that together, 
      we will achieve great things in the years to come.
    </p>
  </div>
</div>

{/* MEMBER 3 */}
<div className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image3} alt="Dato T. Murugiah" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight">
      DATO T. MURUGIAH
    </h1>
    <p className="text-[18px] font-['Rajdhani'] font-medium text-center">CHAIRMAN & ADVISOR SECUREX BERHAD</p>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      In these challenging times, our leadership stands as a beacon of strength and clarity. 
      With an unwavering focus on excellence and innovation, we have solidified our reputation 
      as a trusted leader in the security industry. Our commitment has made a profound impact 
      on the safety and well-being of those we serve.
    </p>
  </div>
</div>

{/* MEMBER 4 */}
<div className="flex flex-col gap-4 bg-white shadow-sm rounded-xl p-6 max-w-[400px] mx-auto">
  <div className="w-full">
    <img src={image4} alt="Chuah Guan Leong" className="rounded-lg w-full h-auto max-h-[350px] object-contain" />
  </div>
  <div className="flex flex-col items-center gap-2">
    <h1 className="text-[22px] text-[#131313] font-['Rajdhani'] font-semibold text-center leading-tight">
      CHUAH GUAN LEONG
    </h1>
    <p className="text-[18px] font-['Rajdhani'] font-medium text-center">FINANCIAL ADVISOR</p>
    <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm my-1"></div>
    <p className="text-sm font-['Rajdhani'] text-center text-justify text-[#333] leading-relaxed">
      Through strategic financial planning, we ensure stability and growth in the security industry. 
      Our commitment to excellence and resilience strengthens our financial foundation, 
      securing long-term success for our company, clients, and stakeholders.
    </p>
  </div>
</div>

</div>


                


                {/* FOR LARGE LAPTOPS AND DESKTOP */}

                <div className="hidden xl:flex flex-col items-center w-full gap-16 mt-20">
  
  {/* CARD 1 */}
  <div className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
    <div className="flex-1 flex justify-center">
      <img src={image1} alt="Maj Gen (R) Dato Zainal" className="rounded-lg object-cover w-[300px] h-[400px]" />
    </div>
    <div className="flex flex-col gap-4 flex-1">
      <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight">
        MAJ GEN (R) DATO ZAINAL <br /> BIN ABDUL MANAF RMAF
      </h1>
      <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN</h2>
      <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
      <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
        In the face of unprecedented challenges, our professionalism and vigilance are exceptional. 
        Your efforts have not only maintained our reputation as a leader in the security industry 
        but have also made a meaningful difference in the lives of those we serve.
      </p>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
    <div className="flex-1 flex justify-center">
      <img src={image2} alt="Saineethian Murugiah" className="rounded-lg object-cover w-[300px] h-[400px]" />
    </div>
    <div className="flex flex-col gap-4 flex-1">
      <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight">
        SAINEETHIAN MURUGIAH
      </h1>
      <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">MANAGING DIRECTOR</h2>
      <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
      <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
        As we embrace new technologies and methodologies, I am confident that we will continue to exceed 
        our customers' expectations and set new standards of excellence in the industry. 
        Our success is a testament to our collective efforts, and I have no doubt that together, 
        we will achieve great things in the years to come.
      </p>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
    <div className="flex-1 flex justify-center">
      <img src={image3} alt="Dato T. Murugiah" className="rounded-lg object-cover w-[300px] h-[400px]" />
    </div>
    <div className="flex flex-col gap-4 flex-1">
      <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight">
        DATO T. MURUGIAH
      </h1>
      <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">CHAIRMAN & ADVISOR SECUREX BERHAD</h2>
      <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
      <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
        In these challenging times, our leadership stands as a beacon of strength and clarity. 
        With an unwavering focus on excellence and innovation, we have solidified our reputation 
        as a trusted leader in the security industry. Our commitment has made a profound impact 
        on the safety and well-being of those we serve.
      </p>
    </div>
  </div>

  {/* CARD 4 */}
  <div className="flex flex-row bg-white rounded-xl shadow-lg p-8 max-w-[1200px] w-full gap-12 items-center">
    <div className="flex-1 flex justify-center">
      <img src={image4} alt="Chuah Guan Leong" className="rounded-lg object-cover w-[300px] h-[400px]" />
    </div>
    <div className="flex flex-col gap-4 flex-1">
      <h1 className="text-[32px] text-[#131313] font-['Rajdhani'] font-bold leading-tight">
        CHUAH GUAN LEONG
      </h1>
      <h2 className="text-[20px] text-[#1c1c1c] font-semibold font-['Rajdhani']">FINANCIAL ADVISOR</h2>
      <div className="h-[3px] w-[50px] bg-yellow-400 rounded-sm my-1"></div>
      <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
        Through strategic financial planning, we ensure stability and growth in the security industry. 
        Our commitment to excellence and resilience strengthens our financial foundation, 
        securing long-term success for our company, clients, and stakeholders.
      </p>
    </div>
  </div>

</div>





            </div>
        </>
    )
}

export default TeamMember
