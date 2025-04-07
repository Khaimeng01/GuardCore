import React from 'react'
import Navbar from '../Components/Navbar'
import HomeBanner from '../Components/HomeBanner'
import HomeAbout from "../Components/HomeAbout"
import HomeServices from "../Components/HomeServices"
import HomeCertificate from "../Components/HomeCertificate"
import CustomerReview from "../Components/CustomerReview"
import TrustedClients from "../Components/TrustedClients"
import Footer from "../Components/Footer"
import ScrollToTop from '../Components/ScrollToTop'
import ContactUS from '../Components/ContactUs'
import Team from '../Components/Team'
import TrustedPartners from '../Components/TrustedPartners'

const Home = () => {
    return (
        <>
            <body className="bg-[#ECECEC]">
                <ScrollToTop />
                <Navbar />
                <HomeBanner />
                <HomeAbout />
                
                <HomeServices />
                <Team/>
               {/* <HomeCertificate /> */}
               {/* <CustomerReview />*/}
                
                <TrustedClients />
                <TrustedPartners />

                <ContactUS />
                <Footer />
            </body>
        </>
    )
}

export default Home
