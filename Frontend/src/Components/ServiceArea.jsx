// import React from 'react';

// const ServiceAreas = () => {
//   const serviceAreas = [
//     "Condominiums & Apartments",
//     "Gated and Guarded Communities",
//     "Hotels & Resorts",
//     "Shopping Malls",
//     "Warehouses & Factories",
//     "Highway Toll and R&R",
//     "Educational Institutions & Hostels",
//     "Government Departments & Commercial Buildings",
//     "Showrooms & Sales Galleries",
//     "Banks",
//     "Events",
//     "Commercial Areas",
//     "Corporate Offices"
//   ];

//   return (
//     <div className="bg-[#ECECEC] py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-semibold text-center text-[#131313] mb-8">
//           Our Service Areas
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {serviceAreas.map((area, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <h3 className="text-lg font-semibold text-[#131313]">{area}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceAreas;

//Part2
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
        <h2 className="text-3xl font-semibold text-center text-[#131313] mb-8">
          Our Service Areas
        </h2>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          {/* Desktop view - two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {serviceAreas.slice(0, serviceAreas.length / 2).map((area, index) => (
                <div key={index} className="hover:scale-105 transition-transform duration-200">
                  <p className="text-lg text-[#131313] font-semibold">{area}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {serviceAreas.slice(serviceAreas.length / 2).map((area, index) => (
                <div key={index} className="hover:scale-105 transition-transform duration-200">
                  <p className="text-lg text-[#131313] font-semibold">{area}</p>
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

