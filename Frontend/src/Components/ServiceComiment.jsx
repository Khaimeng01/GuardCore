import React from 'react';
import image1 from "../assets/serviceOurComitment/comit_1.png";

const OurCommitment = () => {
  return (
    <div className="bg-[#ECECEC] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        {/* <h2 className="text-[32px] md:text-[42px] font-bold font-['Rajdhani'] text-[#131313] mb-10">
          4.1.1 Our Commitment
        </h2> */}

        <h1 className="text-[32px] lg:text-[38px]  text-[#0A004B]  font-semibold text-center lg:text-left mb-10 font-['Rajdhani']">
        Our Commitment 
        </h1>

        {/* 🌟 Full Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 space-y-10">

          {/* Image + Description */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={image1}
                alt="Our Commitment"
                loading="lazy"
                className="rounded-lg shadow-md object-cover w-full  max-h-[500px]  "
                />
            </div>

            {/* Main Description */}
            <div className="w-full lg:w-1/2 text-20 lg:text-[24px] text-gray-800 font-['Rajdhani'] space-y-6 text-justify">
              <p>
                <strong>Guardcore Security Services</strong> stands on the foundation of integrity,
                discipline, and proactive protection. Our commitment is demonstrated through the
                excellence we demand from our personnel, the trust we build with our clients, and the
                responsibility we uphold within our communities. We don’t just provide services — we
                cultivate a culture of readiness, reliability, and respect.
              </p>
            </div>
          </div>

          {/* Subsections */}
          <div className="space-y-8 text-[17px] text-gray-800 font-['Rajdhani']">
            {/* 4.1.1.1 */}
            <div>
              <h4 className="text-20 lg:text-[26px] font-['Rajdhani'] font-semibold mb-2">
                Towards Our Employees
              </h4>
              <p className='text-18 lg:text-[23px] text-gray-800 font-["Rajdhani"] text-justify'>
                Recognizing the rigorous nature of the security industry, we undertake a thorough recruitment
                and vetting process. Selected candidates undergo intensive training — both theoretical and
                practical — to become highly disciplined professionals. Our personnel are equipped with the
                mindset, skills, and conduct necessary to respond effectively in all scenarios, consistently
                upholding the Guardcore standard.
              </p>
            </div>

            {/* 4.1.1.2 */}
            <div>
            <h4 className="text-20 lg:text-[26px] font-['Rajdhani'] font-semibold mb-2">
            Towards Our Clients
              </h4>
              <p className='text-18 lg:text-[23px] text-gray-800 font-["Rajdhani"] text-justify'>
                We provide tailored, results-driven security programs built on a foundation of reliability and
                trust. Through continuous training, stringent internal monitoring, and commitment to quality,
                we ensure every client receives proactive and professional service. Our solutions are designed
                to meet unique challenges while ensuring peace of mind.
              </p>
            </div>

            {/* 4.1.1.3 */}
            <div>
            <h4 className="text-20 lg:text-[26px] font-['Rajdhani'] font-semibold mb-2">
                Towards Society
              </h4>
              <p className='text-18 lg:text-[23px] text-gray-800 font-["Rajdhani"] text-justify'>
                We play an active role in community safety and crime prevention by collaborating with
                police-led programs and civil initiatives such as Rukun Tetangga. Guardcore supports public
                interest by promoting lawful behavior, participating in neighborhood outreach, and maintaining
                readiness to assist during emergencies. Our role extends beyond guarding — we help build safer
                communities.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurCommitment;
