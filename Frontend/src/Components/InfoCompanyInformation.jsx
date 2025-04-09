// Part2
import React from 'react';
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaBuilding } from "react-icons/fa"; // Icon for company
import { HiOutlineIdentification } from "react-icons/hi"; // New icon for reg number


const CompanyInformation = () => {
  return (
    <div className="bg-[#ECECEC] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] lg:text-[38px]  text-[#0A004B]  font-semibold text-left mb-5 font-['Rajdhani']">
          Company Information
        </h2>

        {/* Entire card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 w-full">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Info Section */}
            <div className="w-full lg:w-3/5">

              {/* Company Name */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 bg-black text-white rounded-full p-2 text-xl flex items-center justify-center w-10 h-10">
                  <FaBuilding />
                </div>
                <div>
                  <h2 className="text-[24px] text-gray-800 font-semibold font-['Rajdhani']">
                    Company Name
                  </h2>
                  <p className="text-[18px] text-gray-700 font-['Rajdhani']">
                    Guardcore Security Services Sdn Bhd
                  </p>
                </div>
              </div>

              {/* Registration Number */}
            {/* Registration Number */}
            <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 bg-black text-white rounded-full p-2 text-xl flex items-center justify-center w-10 h-10">
                <HiOutlineIdentification />
            </div>
            <div>
                <h2 className="text-[24px] text-gray-800 font-semibold font-['Rajdhani']">
                Registration Number
                </h2>
                <p className="text-[18px] text-gray-700 font-['Rajdhani']">
                11326544-K
                </p>
            </div>
            </div>


              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 bg-black text-white rounded-full p-2 text-xl flex items-center justify-center w-10 h-10">
                  <IoLocationOutline />
                </div>
                <div>
                  <h2 className="text-[24px] text-gray-800 font-semibold font-['Rajdhani']">
                    Head Office
                  </h2>
                  <p className="text-[18px] text-gray-700 font-['Rajdhani']">
                    No. 34-3, Persiaran 65c, Pekeliling business centre, off Jalan Pahang Barat, 53000 KL.
                  </p>

                  <h2 className="text-[24px] text-gray-800 font-semibold mt-4 font-['Rajdhani']">
                    Branches
                  </h2>
                  <div className="flex flex-wrap gap-2 text-[18px] text-gray-700 mt-1 font-['Rajdhani']">
                    {["PULAU PINANG", "PAHANG", "PERAK", "KUALA LUMPUR", "SABAH", "JOHOR", "MELAKA"].map((branch, idx) => (
                      <span key={idx} className="bg-gray-100 px-2 py-1 rounded">
                        {branch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Number */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 bg-black text-white rounded-full p-2 text-xl flex items-center justify-center w-10 h-10">
                  <IoCallOutline />
                </div>
                <div>
                  <h2 className="text-[24px] text-gray-800 font-semibold font-['Rajdhani']">
                    Contact Number
                  </h2>
                  <p className="text-[18px] text-gray-700 font-['Rajdhani']">+03-40319616</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 bg-black text-white rounded-full p-2 text-xl flex items-center justify-center w-10 h-10">
                  <TfiEmail />
                </div>
                <div>
                  <h2 className="text-[24px] text-gray-800 font-semibold font-['Rajdhani']">
                    Email Address
                  </h2>
                  <p className="text-[18px] text-gray-700 font-['Rajdhani']">info@guardcoresecurity.com</p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="w-full lg:w-2/5 h-64 lg:h-auto rounded-xl overflow-hidden shadow-sm">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6908278985393!2d101.69086338365302!3d3.175835944753833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4819feb95669%3A0xcb57c60fac70c17c!2s34%2C%20Persiaran%2065c%2C%20Pekeliling%2C%2053000%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1743999893190!5m2!1sen!2smy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
