import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from "../Components/AboutBanner"
import AboutIntro from '../Components/AboutIntro'
import AboutMission from "../Components/AboutMission"
import TeamMember from "../Components/TeamMember"
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'

const About = () => {
    return (
        <>
            <body className='bg-[#ECECEC]'>
                <ScrollToTop />
                <Navbar />
                {/*<AboutBanner />*/}
                <AboutIntro />
                <AboutMission />
                <section id="trusted-clients">
                    z<TeamMember />

                </section>


                <Footer />
            </body>
        </>
    )
}

export default About
