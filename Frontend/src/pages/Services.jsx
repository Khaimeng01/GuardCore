import React from "react"
import Navbar from '../Components/Navbar'
import ServicesBanner from "../Components/ServicesBanner"
import ServicesAll from "../Components/ServicesAll"
import Footer from "../Components/Footer"
import ScrollToTop from "../Components/ScrollToTop"
import ServiceAreas from "../Components/ServiceArea"

const Services = () => {
    return (
        <>
            <body className="bg-[#ECECEC]">
                <ScrollToTop />
                <Navbar />
                <ServicesBanner />
                <ServicesAll />
                <ServiceAreas/>
                <Footer />
            </body>
        </>
    )
}

export default Services
