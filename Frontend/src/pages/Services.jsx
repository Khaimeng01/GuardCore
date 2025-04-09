import React from "react"
import Navbar from '../Components/Navbar'
import ServicesBanner from "../Components/ServicesBanner"
import ServicesAll from "../Components/ServicesAll"
import Footer from "../Components/Footer"
import ScrollToTop from "../Components/ScrollToTop"
import ServiceAreas from "../Components/ServiceArea"
import OurCommitment from "../Components/ServiceComiment"
import TrainingAndDevelopment from "../Components/ServiceTraining"

const Services = () => {
    return (
        <>
            <body className="bg-[#ECECEC]">
                <ScrollToTop />
                <Navbar />
                
                <ServicesBanner />
                <OurCommitment/>
                <TrainingAndDevelopment/>
                <ServicesAll />
                <ServiceAreas/>
                <Footer />
            </body>
        </>
    )
}

export default Services
