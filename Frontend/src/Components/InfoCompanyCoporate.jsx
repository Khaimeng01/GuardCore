import React, { useState } from 'react';
import cert1 from '../assets/infoCert/Cert_1.png';
import cert2 from '../assets/infoCert/Cert_2.png';
import cert3 from '../assets/infoCert/Cert_3.png';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';




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
        <h2 className="text-[32px] lg:text-[38px] text-[#0A004B]  font-semibold text-left text-[#131313] mb-5 font-['Rajdhani']">
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

        <h3 className="text-[32px] lg:text-[38px] text-[#0A004B]  font-semibold text-left text-[#131313] mb-5 font-['Rajdhani']">
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

        <h4 className="text-[32px] lg:text-[38px] text-[#0A004B]  font-semibold text-left text-[#131313] mb-5 font-['Rajdhani']">
        Bankers
        </h4>

        {/* 5.4 Bankers */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-10">
          {/* <h3 className="text-xl font-semibold text-gray-800 mb-4 font-['Rajdhani']">
            5.4 Bankers
          </h3> */}

          <div className="text-[20px] text-gray-700 font-['Rajdhani']">
            <p>
              <span className="font-semibold text-[21px] lg:text-[24px] text-gray-800">Bank:</span> Maybank Berhad
            </p>
          </div>
        </div>

        
        <h4 className="text-[29.5px] lg:text-[38px] text-[#0A004B]  font-semibold text-left text-[#131313] mb-5 font-['Rajdhani']">
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
              className="mx-auto h-48 object-contain mb-3"
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
