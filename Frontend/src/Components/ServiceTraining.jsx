import React from 'react';
import trainingImage from "../assets/serviceOurComitment/Training.png"; // use the actual training image

const TrainingAndDevelopment = () => {
  return (
    <div className="bg-[#ECECEC] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[32px] lg:text-[38px] text-[#0A004B] font-semibold  text-center  mb-10 font-['Rajdhani']">
          Training & Development
        </h1>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 space-y-10">
          {/* Image on the right in desktop */}
          <div className="flex flex-col lg:flex-row-reverse gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={trainingImage}
                alt="Training & Development"
                loading="lazy"
                className="rounded-lg shadow-md object-cover w-full max-h-[500px]"
              />
            </div>

            {/* Description */}
            <div className="w-full lg:w-1/2 text-[20px] lg:text-[24px] text-gray-800 font-['Rajdhani'] space-y-6 text-justify">
              <p>
                At <strong>Guardcore</strong>, we believe security excellence begins with preparation. We are deeply committed to equipping our personnel with the skills, discipline, and confidence required to meet modern security challenges.
              </p>
            </div>
          </div>

          {/* Subsections */}
          <div className="space-y-8 text-[17px] text-gray-800 font-['Rajdhani']">
            {/* 4.1.2.1 */}
            <div>
              <h4 className="text-[20px] lg:text-[26px] font-semibold mb-2">Career Development</h4>
              <p className="text-[18px] lg:text-[23px] text-justify">
                We provide continuous growth opportunities for our employees. From their first day, recruits are supported with structured career development programs that include coaching, feedback channels, and training aligned with our Industrial Relations Policy.
              </p>
            </div>

            {/* 4.1.2.2 */}
            <div>
              <h4 className="text-[20px] lg:text-[26px] font-semibold mb-2">Training Program</h4>
              <p className="text-[18px] lg:text-[23px] text-justify mb-4">
                Newly selected guards undergo one week of foundational training at our facility, including both classroom and practical instruction. Depending on client needs, they are also trained in specific protocols, threat responses, and SOPs tailored to their assignments.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[18px] lg:text-[22px] text-gray-800">
                <li><strong>Security Post Operations:</strong> SOPs, post manning, access control, and search techniques</li>
                <li><strong>Communication:</strong> Public relations, walkie-talkie/phone usage, visitor logs, handover duty</li>
                <li><strong>Emergency Response:</strong> First aid, lift entrapment, firefighting, evacuation procedures</li>
                <li><strong>Basic Safety Measures:</strong> Fire safety, basic rescue, and safety drills</li>
              </ul>
            </div>

            {/* 4.1.2.3 */}
            <div>
              <h4 className="text-[20px] lg:text-[26px] font-semibold mb-2">The Guardcore Standard</h4>
              <p className="text-[18px] lg:text-[23px] text-justify mb-4">
                Security at Guardcore isn’t just about presence — it’s about professionalism. Our personnel are trained in grooming, discipline, and ethics. Each guard is taught how to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[18px] lg:text-[22px] text-gray-800">
                <li>Maintain a sharp and professional appearance</li>
                <li>Communicate effectively with the public and clients</li>
                <li>Demonstrate loyalty, stress management, and respect</li>
                <li>Use logbooks, patrol systems, and even modern tools like drones</li>
              </ul>
              <p className="mt-4 text-[18px] lg:text-[23px] text-justify">
                This rigorous training ensures our team members are prepared, confident, and capable of delivering security services with the highest level of integrity.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrainingAndDevelopment;
