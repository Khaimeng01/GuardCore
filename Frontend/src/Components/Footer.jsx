import React from 'react'
import { useNavigate } from "react-router-dom"
// import logo from '../assets/logo-white.png'
import logo from '../assets/logo_guardcore.png';
import logo2 from '../assets/logo_guardcore.png';


import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import twitter from '../assets/twitter-icon.png'
import location from '../assets/location.png'
import phone_call from '../assets/phone_call.png'
import mail from '../assets/mail.png'
import { HashLink } from 'react-router-hash-link';



const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
<div className='xl:flex flex-col mt-20 bg-[#2F313F] text-white px-1 md:px-3 xl:px-0 pt-6 xl:pt-8 pb-5'>
<div className='xl:flex justify-between mx-auto w-full max-w-[600px] xl:max-w-[1350px] px-4 pb-6 xl:pb-0'>
                    <div className='flex flex-col justify-between space-y-11 xl:space-y-16 h-full'>
                        <div className='flex items-center justify-center xl:justify-normal gap-3'>
                            {/* <img src={logo} alt="logo" className='w-[58px] h-[68px] sm:w-[68px] sm:h-[78px]' /> */}
                                                <img 
                              src={logo} 
                              alt="logo" 
                              className="w-[80px] h-auto lg:w-[150px] lg:h-auto xl:w-[100px] xl:h-auto cursor-pointer" 
                              onClick={() => navigate('/')} 
                            />
                            <div className='space-y-1'>
                                <p className='font-["Rajdhani"] font-semibold text-[25px] cursor-pointer'  onClick={() => navigate('/')} >GUARDCORE</p>
                                <div className='h-0.5 bg-black cursor-pointer'  onClick={() => navigate('/')}></div>
                                <p className='font-["Rajdhani"] text-md font-semibold cursor-pointer'  onClick={() => navigate('/')}>Choose Guardcore Stay Hardcore</p>
                            </div>

                            
                        </div>
                        <div className='space-y-4'>
                            {/* <p className='font-["Philosopher"] text-lg'>FOLLOW US ON</p>
                            <div className='flex space-x-1'>
                                <img src={facebook} alt="facebook" className='w-[30px] h-[30px] hover:invert transition-all duration-100 ease-in cursor-pointer' />
                                <img src={instagram} alt="instagram" className='w-[30px] h-[30px] hover:invert transition-all duration-100 ease-in cursor-pointer' />
                                <img src={linkedin} alt="linkedin" className='w-[30px] h-[30px] hover:invert transition-all duration-100 ease-in cursor-pointer' />
                                <img src={twitter} alt="twitter" className='w-[30px] h-[30px] hover:invert transition-all duration-100 ease-in cursor-pointer' />
                            </div> */}
                            {/* <p className='text-[#D8D8D8] lg:w-[400px] font-["Philosopher"] text-sm leading-4 xl:leading-[18px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elitquis nostrud exercitation ullamco laboris
                            </p> */}
                        </div>
                    </div>
                    <div className='pt-10 space-y-5 hidden xl:block'>
                        <h1 className='font-["Rajdhani"] font-semibold text-xl '>QUICK LINKS</h1>
                        <div className='font-["Rajdhani"] space-y-2 text-[15px]'>
                            <p onClick={() => navigate("/")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>Home</p>
                            <p onClick={() => navigate("/about")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>About Us</p>
                            <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>Services</p>
                            {/* <p onClick={() => navigate("/career")} className='hover:translate-x-3 hover:text-black cursor-pointer transition-all duration-200 ease-in-out'>Career</p> */}
                            {/* <p onClick={() => navigate("/contact")} className='hover:translate-x-3 hover:text-black cursor-pointer transition-all duration-200 ease-in-out'>Contact Us</p> */}
                            <HashLink
    smooth
    to="/#contact"
    className="block hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out"
  >
    Contact
  </HashLink>

                            <p onClick={() => navigate("/info")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>Info</p>
                            <p onClick={() => navigate("/gallery")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>Gallery</p>
                        </div>
                    </div>
                    <div className='pt-10 space-y-5 hidden xl:block'>
                        <h1 className='font-["Rajdhani"] font-semibold text-xl'>SERVICES</h1>
                        <div className='font-["Rajdhani"] space-y-2 text-[15px]'>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
    Static Guards
  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
    Management of Security and Surveillance Systems
  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
    Design & Installation of Surveillance Systems
  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
    Bodyguards & Escorts
  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
    Security Surveys & Risk Analysis
  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
    Mobile Patrol
  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out '>
    View All Services 
  </p>
</div>

                    </div>
                    <div className='flex justify-between xl:hidden'>
                        <div className='pt-[10px] space-y-5'>
                            <h1 className='font-["Rajdhani"] font-semibold text-xl'>QUICK LINKS</h1>
                            <div className='font-["Rajdhani"] space-y-2 text-sm md:text-[15px]'>
                                <p onClick={() => navigate("/")} className='hover:translate-x-3 hover:text-black cursor-pointer transition-all duration-200 ease-in-out'>Home</p>
                                <p onClick={() => navigate("/about")} className='hover:translate-x-3 hover:text-black cursor-pointer transition-all duration-200 ease-in-out'>About Us</p>
                                <p onClick={() => navigate("/services")} className='hover:translate-x-3 hover:text-black cursor-pointer transition-all duration-200 ease-in-out'>Services</p>
                                {/* <p onClick={() => navigate("/career")} className='hover:translate-x-3 hover:text-black cursor-pointer transition-all duration-200 ease-in-out'>Career</p> */}
                                <HashLink
                                smooth
                                to="/#contact"
                                className="block hover:translate-x-3 hover:text-black cursor-pointer transition-all duration-200 ease-in-out"
                            >
                                Contact
                            </HashLink>                                
                            <p onClick={() => navigate("/info")} className='hover:translate-x-3 hover:text-black cursor-pointer transition-all duration-200 ease-in-out'>Info</p>
                                <p onClick={() => navigate("/gallery")} className='hover:translate-x-3 hover:text-black cursor-pointer transition-all duration-200 ease-in-out'>Gallery</p>
                            </div>
                        </div>
                        <div className='pt-[10px] space-y-5'>
                            <h1 className='font-["Rajdhani"] font-semibold text-xl'>SERVICES</h1>
                            <div className='font-["Rajdhani"] space-y-2 text-sm md:text-[15px]'>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
  Static Guards
  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
  Management of Security<br></br> and Surveillance Systems

  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
  Design & Installation <br></br>of Surveillance Systems
  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
  Bodyguards & Escorts
  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
  Security Surveys & Risk Analysis
  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
  Mobile Patrol
  </p>
  <p onClick={() => navigate("/services")} className='hover:translate-x-3  cursor-pointer transition-all duration-200 ease-in-out'>
  View All Services 
  </p>
</div>

                        </div>
                    </div>
                    <div className='pt-[70px] xl:pt-10 space-y-5 xl:w-[300px] mx-auto xl:mx-0'>
                        <h1 className='font-["Rajdhani"] font-semibold text-xl font-["Rajdhani"]'>CONTACTS</h1>
                        <div className='font-["Rajdhani"] space-y-4 xl:space-y-3 text-[15px]'>
                            <div className='flex space-x-3 font-["Rajdhani"]'>
                                <img src={location} alt="" className='h-6 w-6 rounded-full font-["Rajdhani"]' />
                                <p className='leading-4 xl:leading-5'>
                                No. 34-3, Persiaran 65c, Pekeliling business centre, off Jalan pahang barat, 53000 kl.                                    </p>
                            </div>
                            <div className='flex space-x-3 font-["Rajdhani"]'>
                                <img src={phone_call} alt="" className='h-6 w-6 rounded-full font-["Rajdhani"]' />
                                <p>+03-40319616</p>
                            </div>
                            <div className='flex space-x-3 font-["Rajdhani"]'>
                                <img src={mail} alt="" className='h-6 w-6 font-["Rajdhani"]' />
                                <p>info@guardcoresecurity.com</p>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        </>
    )
}

export default Footer
