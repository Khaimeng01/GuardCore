import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import logo from '../assets/logo-removebg-preview.png';
import logo from '../assets/logo_guardcore.png';

import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const navigate = useNavigate();

    return (
        <>
            {/*
            <div className='lg:flex justify-between items-center lg:px-[85px] py-3 lg:py-4 space-y-4 lg:space-y-0 text-center w-full bg-gradient-to-r from-[#3E187A] to-[#994ECC] text-white'>
                <div>
                    <p className='font-["Red_Hat_Display"] lg:tracking-widest text-xs lg:text-sm xl:text-base'><span className='font-["otomanopee-one"]'>CONTACT US ON : </span> +91 74395 37213 &nbsp;+91 94748 12394</p>
                </div>
                <div>
                    <p className='font-["Red_Hat_Display"] tracking-widest text-xs lg:text-sm xl:text-base'><span className='font-["otomanopee-one"]'>MAIL US ON : </span> &nbsp;surakshasecurity@gmail.com</p>
                </div>
            </div>
            */}

            {/* Navbar */}
            {/* FOR MOBILE, TABLET AND SMALL LAPTOPS */}
            <header id="site-header" className="sticky top-0 z-50">
            <div className='sticky top-0 flex justify-between items-center px-5 py-1 lg:hidden z-50 bg-[#ECECEC]/35 backdrop-blur-lg'>
                <div className='logo flex items-center space-x-2'>
                    {/* <img src={logo} alt="logo" className='w-[47px] h-[55px]' onClick={() => navigate('/')} /> */}
                    <img 
  src={logo} 
  alt="logo" 
  className="w-[130px] h-auto lg:w-[150px] lg:h-auto xl:w-[200px] xl:h-auto" 
  onClick={() => navigate('/')} 
/>
                    <div className='space-y-0.5'>
                        <p className='font-["Rajdhani"] font-semibold text-[20px] '  onClick={() => navigate('/')}>GUARDCORE</p>
                        <div className='h-0.5 bg-black'  onClick={() => navigate('/')}></div>
                        <p className='font-["Rajdhani"] text-[11px] font-semibold'  onClick={() => navigate('/')}>Choose Guardcore Stay Hardcore</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-1 cursor-pointer' onClick={toggleMenu}>
                    <div className='h-[3px] w-6 bg-black'></div>
                    <div className='h-[3px] w-6 bg-black'></div>
                    <div className='h-[3px] w-6 bg-black'></div>
                </div>
            </div>

            <div className={`fixed z-50 top-0 left-0 w-screen h-screen bg-[#ECECEC] transition-transform flex-col duration-300 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-[110%]'} lg:hidden`}>
                <button className='absolute top-2 right-6 text-black text-4xl' onClick={toggleMenu}>&times;</button>
                <div className='flex flex-col items-center justify-center h-full space-y-10 font-["Rajdhani"] list-none text-2xl'>
                    <li onClick={() => navigate('/')}>HOME</li>
                    <li onClick={() => navigate('/about')}>ABOUT</li>
                    <li onClick={() => navigate('/services')}>SERVICES</li>
                    <li className='relative group' onClick={() => navigate('/info')}>INFO</li>
                    <li className="relative group">
                        <HashLink smooth to="/#contact">CONTACT</HashLink>
                    </li>
                    <li className='relative group' onClick={() => navigate('/gallery')}>GALLERY</li>
                </div>
            </div>

            {/* FOR LARGE LAPTOPS AND DESKTOP */}
            <div className='sticky top-0 px-6 xl:px-20 z-50 bg-[#ECECEC]/35 backdrop-blur-lg'>
                <div className='hidden lg:flex justify-between items-center w-full px-14 py-1 rounded-[10px]'>
                    <div className='flex items-center gap-2'>
                        {/* <img src={logo} alt="logo" className='lg:w-[48px] lg:h-[56px] xl:w-[58px] xl:h-[66px] '  onClick={() => navigate('/')} /> */}
                        <img 
                            src={logo} 
                            alt="logo" 
                            className="lg:w-[48px] lg:h-auto xl:w-[130px] xl:h-auto cursor-pointer" 
                            onClick={() => navigate('/')} 
                            />

                        <div>
                            <p className='font-["Rajdhani"] font-semibold text-[25px] cursor-pointer'  onClick={() => navigate('/')} >GUARDCORE</p>
                            <div className='h-0.5 bg-black cursor-pointer'  onClick={() => navigate('/')}></div>
                            <p className='font-["Rajdhani"] text-md font-semibold cursor-pointer'  onClick={() => navigate('/')}>Choose Guardcore Stay Hardcore</p>
                        </div>
                    </div>
                    <div className='items flex items-center gap-72'>
                        <div className='flex'>
                            <ul className='nav-ul flex font-["Rajdhani"] text-[18px] font-extrabold space-x-5 xl:space-x-10 items-center cursor-pointer'>
                                <li className='relative group' onClick={() => navigate('/')}>HOME</li>
                                <li className='relative group' onClick={() => navigate('/about')}>ABOUT</li>
                                <li className='relative group' onClick={() => navigate('/services')}>SERVICES</li>
                                <li className='relative group' onClick={() => navigate('/info')}>INFO</li>

                                {/*<li className='relative group' onClick={() => navigate('/career')}>CAREERS</li>*/}
                                {/*<li className='relative group' onClick={() => window.location.href = "#trusted-clients"}>CONTACT</li>*/}
                                {/*<li className='relative group' onClick={() => window.location.replace("/#trusted-clients")}>*/}
                                {/*    CONTACT*/}
                                {/*</li>*/}
                                {/*<li*/}
                                {/*    className='relative group'*/}
                                {/*    onClick={() => navigate("/#trusted-clients")}*/}
                                {/*>*/}
                                {/*    CONTACT*/}
                                {/*</li>*/}
                                <li className="relative group">
                                    <HashLink smooth to="/#contact">CONTACT</HashLink>
                                </li>
                                <li className='relative group' onClick={() => navigate('/gallery')}>GALLERY</li>
                            {/*    <button className='bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] text-white p-2 rounded-md transition-all transform hover:scale-110 duration-150 ease-in'>BROCHURE</button>*/}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            </header>

        </>
    )
}

export default Navbar
