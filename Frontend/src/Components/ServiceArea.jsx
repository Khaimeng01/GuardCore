import React from 'react';

const ServiceAreas = () => {
  const serviceAreas = [
    "Condominiums & Apartments",
    "Gated and Guarded Communities",
    "Hotels & Resorts",
    "Shopping Malls",
    "Warehouses & Factories",
    "Highway Toll and R&R",
    "Educational Institutions & Hostels",
    "Government Departments & Commercial Buildings",
    "Showrooms & Sales Galleries",
    "Banks",
    "Events",
    "Commercial Areas",
    "Corporate Offices"
  ];

  return (
    <div className="bg-[#ECECEC] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-3xl font-semibold text-center text-[#131313] mb-8">
        </h2> */}

        {/* <h1 className='font-["Rajdhani"] font-semibold text-3xl text-[#131313] text-center mb-8'>
        Our Service Areas
        </h1> */}

        <h1 className="text-[32px] lg:text-[38px] text-[#0A004B] font-semibold  text-center  mb-10 font-['Rajdhani']">
        Our Service Areas
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          {/* Responsive layout: single column on mobile, two columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {serviceAreas.slice(0, serviceAreas.length / 2).map((area, index) => (
                <div key={index} className="flex items-start gap-2 hover:scale-105 transition-transform duration-200">
                  <span className="text-[#0A004B] text-xl font-bold">&#8250;</span>
                  <p className="text-lg text-[#131313] font-semibold hover:text-[#0A004B] transition-colors duration-200">
                    {area}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {serviceAreas.slice(serviceAreas.length / 2).map((area, index) => (
                <div key={index} className="flex items-start gap-2 hover:scale-105 transition-transform duration-200">
                  <span className="text-[#0A004B] text-xl font-bold">&#8250;</span>
                  <p className="text-lg text-[#131313] font-semibold hover:text-[#0A004B] transition-colors duration-200">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
