import React, { useState } from 'react';
import cert1 from '../assets/infoCert/Cert_1.png';
import cert2 from '../assets/infoCert/Cert_2.png';
import cert3 from '../assets/infoCert/Cert_3.png';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaBuilding } from "react-icons/fa"; // Icon for company
import { HiOutlineIdentification } from "react-icons/hi"; // New icon for reg number



const InfoCompanyCoporate = () => {

    const [index, setIndex] = useState(-1);

    const certs = [
        { src: cert1, title: 'KDN License' },
        { src: cert2, title: 'KDN License' },
        { src: cert3, title: 'KDN License' },
    ];


  return (
    <div className="bg-[#ECECEC] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-[32px] lg:text-[38px]  text-[#0A004B]  font-semibold text-left mb-5 font-['Rajdhani']">
          Company Information
        </h1>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 w-full mb-10">
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

        <h2 className="text-[32px] lg:text-[38px] text-[#0A004B]  font-semibold text-left  mb-5 font-['Rajdhani']">
          Corporate Information
        </h2>

        {/* 5.2 Capital Info */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-10">
          {/* <h3 className="text-xl font-semibold text-gray-800 mb-4 font-['Rajdhani']">
            5.2 Capital Details
          </h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-[20px] text-gray-700 font-['Rajdhani']">
            <div>
                <span className="text-[21px] lg:text-[24px] text-gray-800 font-semibold">Approved Capital:</span>{' '}
                <span className="text-[19px] lg:text-[24px]  font-semibold text-[#0A004B]">RM2,000,000.00</span>

            </div>
            <div>
              <span className="text-[21px] lg:text-[24px] text-gray-800 font-semibold">Paid-Up Capital:</span>{' '}
            <span className="text-[19px] lg:text-[24px]  font-semibold text-[#0A004B]"> RM2,000,000.00</span>
            </div>
          </div>
        </div>

        <h3 className="text-[32px] lg:text-[38px] text-[#0A004B]  font-semibold text-left  mb-5 font-['Rajdhani']">
        Company Secretary
        </h3>

        {/* 5.3 Company Secretary */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-10">
          {/* <h3 className="text-xl font-semibold text-gray-800 mb-4 font-['Rajdhani']">
            5.3 Company Secretary
          </h3> */}

          <div className="space-y-4 text-[20px] text-gray-700 font-['Rajdhani']">
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <span className="font-semibold w-[120px] md:w-auto text-[21px] lg:text-[24px] text-gray-800">Name:</span>
              <span className="text-[21px] lg:text-[24px]">Pretam Singh A/L Kehar Singh</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:gap-2">
              <span className="font-semibold w-[120px] md:w-auto text-[21px] lg:text-[24px] text-gray-800">Address:</span>
              <span  className="text-[21px] lg:text-[24px]">
                50-5-1, Langkawi Apartment, Jalan Langkawi, Taman Setapak,
                53000, Kuala Lumpur
              </span>
            </div>
          </div>
        </div>

        <h4 className="text-[32px] lg:text-[38px] text-[#0A004B]  font-semibold text-left  mb-5 font-['Rajdhani']">
        Bankers
        </h4>

        {/* 5.4 Bankers */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-10">
          {/* <h3 className="text-xl font-semibold text-gray-800 mb-4 font-['Rajdhani']">
            5.4 Bankers
          </h3> */}

          <div className="text-[20px] text-gray-700 font-['Rajdhani']">
            <p>
              {/* <span className="font-semibold text-[21px] lg:text-[24px] text-gray-800">Bank:</span> Maybank Berhad */}
              <span className="text-[21px] lg:text-[24px] text-gray-800 font-semibold">Bank:</span>{' '}
            <span className="text-[19px] lg:text-[22px]  ">Maybank Berhad</span>
            </p>
          </div>
        </div>

        
        <h4 className="text-[29.5px] lg:text-[38px] text-[#0A004B]  font-semibold text-left  mb-5 font-['Rajdhani']">
        Licensing and Certifications
        </h4>

        {/* 5.5 Licensing and Certifications */}
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      {/* <h3 className="text-xl font-semibold text-gray-800 mb-6 font-['Rajdhani']">
        5.5 Licensing and Certifications
      </h3> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <div
            key={i}
            className="border rounded-lg p-4 shadow text-center hover:shadow-md transition-all cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <img
            src={cert.src}
            alt={cert.title}
            className="mx-auto h-[300px] sm:h-[250px] md:h-[230px] lg:h-[260px] object-contain mb-3 rounded"
            />


            {/* <p className="text-[17px] font-['Rajdhani'] font-medium">{cert.title}</p> */}
          </div>
        ))}
      </div>

      {/* Lightbox Preview */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={certs.map((c) => ({ src: c.src }))}
        index={index}
      />
    </div>

      </div>
    </div>
  );
};

export default InfoCompanyCoporate;
