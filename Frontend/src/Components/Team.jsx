import React, { useEffect } from "react";
// import team2 from "../img/team/team-2.jpg";
// import team5 from "../img/team/team-3.jpg";
// import Bal from "../img/team/Balreen.jpeg";
// import Tash from "../img/team/Tash.jpeg";
// import Surjit from "../img/team/Surjit.jpeg";
// import Syarifah from "../img/team/Syarifah.jpeg";
// import Shazlin from "../img/team/Shazlin.jpeg";
// import Raj from "../img/team/Raj.jpeg";



//import team5 from "../img/team/Tashreen.jpg";


// aos
import AOS from "aos";
import "aos/dist/aos.css";

// custom styles
// import "./Team.css";
import TeamImage from "./TeamImage";

//Images
import image1 from "../assets/homeTeam/1.png";
import image2 from "../assets/homeTeam/2.png";
import image3 from "../assets/homeTeam/3.png";
import image4 from "../assets/homeTeam/4.png";

const Team = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        
        <div className="text-[#7A6960] pt-20 px-10">

            {/* <h1 data-aos="fade-right" className=" text-gray-900 text-3xl font-semibold text-center"> */}
            <h1 className=" text-gray-900 text-[38px] font-semibold text-center font-['Rajdhani']">
                 Board of Directors
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



            <div className="flex flex-col justify-center sm:flex-row gap-6 p-5 lg:p-0 items-center">
                <TeamImage image={image1} name={"MAJ GEN (R) DATO ZAINAL BIN ABDUL MANAF RMAF "} role={"CHAIRMAN"} />
                <TeamImage image={image2} name={"SAINEETHIAN MURUGIAH "} role={"MANAGING DIRECTOR"} />
                <TeamImage image={image3} name={"DATO T. MURUGIAH"} role={"CHAIRMAN AND ADVISOR SECUREX BERHAD"} />
                <TeamImage image={image4} name={"Chuah Guan Leong "} role={"FINANCIAL ADVISOR"} />


                {/* <TeamImage image={Bal} name={"Balreen Sidhu"} role={"Partner"} />
                <TeamImage image={Surjit} name={"Surjit Sidhu"} role={"Partner"} /> */}


            </div>

            <div className="pb-5"></div>

            <div className="flex flex-col justify-center xs:flex-row gap-6 p-5 lg:p-0 items-center">
                {/* <TeamImage image={Raj} name={"Prajjwal Raj Shrestha"} role={"Photography Director"} />
                <TeamImage image={Shazlin} name={"Nurshaiza Shazlin"} role={"Associate"} />
                <TeamImage image={Syarifah} name={"Syarifah Nurnajirah"} role={"Associate"} /> */}
            </div>

        </div>
    );
};

export default Team;
