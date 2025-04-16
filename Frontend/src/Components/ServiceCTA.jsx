import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const ServiceCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#ECECEC] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10 w-full mb-10">
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="text-[32px] lg:text-[38px] text-[#0A004B] font-semibold font-['Rajdhani']">
              Experience the Guardcore Standard
            </h1>
            <p className="text-[18px] text-gray-700 font-['Rajdhani']">
              Hire the team that’s trained, trusted, and always ready.
            </p>

            {/* <div className="w-full flex justify-start">
              <button
                onClick={() => navigate("/contact")}
                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-8 py-4 rounded-md shadow-md hover:brightness-110 transition-all duration-300"
              >
                Contact Us Today
              </button>
            </div> */}

<div className="w-full flex justify-start">
              <HashLink
                smooth
                to="/#contact"
                className="text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-[#FF6A00] to-[#FF9F40] px-8 py-4 rounded-md shadow-md hover:brightness-110 transition-all duration-300"
              >
                Contact Us Today
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA;
