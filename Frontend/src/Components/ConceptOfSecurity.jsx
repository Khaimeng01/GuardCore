import React from 'react';
import trainingImage from "../assets/serviceConceptOfSecurity/image_1.png";
import mainImage from "../assets/serviceConceptOfSecurity/main_Image.png";
import communication from "../assets/serviceConceptOfSecurity/communication.png";
import emergency from "../assets/serviceConceptOfSecurity/emergency.png";
import droneDog from "../assets/serviceConceptOfSecurity/droneDog.png";




const keyElements = [
  {
    title: 'Presentation and Grooming',
    description:
      'Every Guardcore officer undergoes grooming assessments and is trained in proper dress code, posture, and professional conduct. A well-groomed appearance reflects alertness, respect, and discipline.',
    image: trainingImage,
  },
  {
    title: 'Communication and Public Relations',
    description:
      'Officers are taught to engage courteously with the public, clients, and internal teams. From greeting visitors to responding to queries, communication is a critical part of service quality.',
    image: communication,
  },
  {
    title: 'Discipline and Code of Conduct',
    description:
      'Punctuality, integrity, and loyalty are not just expected — they are monitored and reinforced regularly. Officers are held to high ethical standards and operate under a strict duty code.',
    image: '/assets/serviceConceptOfSecurity/image_11.png',
  },
  {
    title: 'Technical Readiness',
    description:
      'In today’s landscape, guards must handle more than routine patrols. Our personnel are trained to use logbooks, communication devices, body cams, patrol apps, drones, and work with canine units if required.',
    image: droneDog,
  },
  {
    title: 'Mental & Emotional Preparedness',
    description:
      'Officers are equipped with soft skills to manage high-pressure situations. Modules on stress management, respect, and staying motivated are part of Guardcore’s ongoing development ethos.',
    image: emergency ,
  },
];

const ConceptOfSecurity = () => {
  return (
    <div className="bg-[#ECECEC] py-16 px-6">
              <h1 className="text-[32px] lg:text-[38px] text-[#0A004B] font-semibold  text-center  mb-10 font-['Rajdhani']">
              Concept of Security
        </h1>
      <div className="max-w-7xl bg-white mx-auto rounded-lg py-10 px-4 space-y-16">

        
        
        {/* 🔁 Updated Intro Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
          <div className="w-full lg:w-1/2">
            <img
              src={mainImage}
              alt="Concept of Security"
              loading="lazy"
              className="rounded-lg shadow-md object-cover w-full max-h-[500px]"
            />
          </div>

          <div className="w-full lg:w-1/2 text-[20px] lg:text-[24px] text-gray-800 font-['Rajdhani'] space-y-6 text-justify">
            {/* <h2 className="text-4xl font-bold text-[#0A004B] font-['Rajdhani']">
              Concept of Security
            </h2> */}
            <p>
              At <strong>Guardcore</strong>, security is not simply about placing guards on duty — it’s about developing professionals
              who are trained, disciplined, and purpose-driven. Our concept of security is comprehensive and rooted in
              core values, continuous development, and field readiness.
            </p>
          </div>
        </div>

        {/* 🔁 Key Elements */}
        <div className="space-y-10 ">
  {keyElements.map((element, idx) => (
    <div
      key={idx}
      className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl shadow-gray-400/60 border border-gray-200 p-6 gap-8 items-center"
      >
      {/* Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={element.image}
          alt={element.title}
          className="rounded-lg object-cover w-[fit] h-[400px]"
        />
      </div>

      {/* Text */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#0A004B] font-['Rajdhani']">
          {element.title}
        </h2>
        <div className="h-[3px] w-[40px] bg-yellow-400 rounded-sm"></div>
        <p className="text-md font-['Rajdhani'] text-[#333] leading-relaxed max-w-[600px] text-justify">
          {element.description}
        </p>
      </div>
    </div>
  ))}
</div>


        {/* 🔁 Closing Section */}
        <div className="mt-10 rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center">
          <div className="text-gray-800 text-base md:text-lg">
            <h3 className="text-2xl font-semibold text-[#0A004B] mb-4">
              Why Does It Matter?
            </h3>
            <p>
              Every Guardcore officer reflects our philosophy — that security is a profession built on responsibility and reputation. Our guards are trained to act not only as protectors but as community liaisons and crisis responders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptOfSecurity;
