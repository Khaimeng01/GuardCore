import React from "react"
import Navbar from '../Components/Navbar'
import ServicesBanner from "../Components/ServicesBanner"
import ServicesAll from "../Components/ServicesAll"
import Footer from "../Components/Footer"
import ScrollToTop from "../Components/ScrollToTop"
import ServiceAreas from "../Components/ServiceArea"
import OurCommitment from "../Components/ServiceComiment"
import TrainingAndDevelopment from "../Components/ServiceTraining"
import ConceptOfSecurity from "../Components/ConceptOfSecurity"
import ServiceCTA from "../Components/ServiceCTA"
import CustomerRelationshipManagement from "../Components/CustomerRelationshipManagement"

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

                <ConceptOfSecurity/>

                <CustomerRelationshipManagement/>
                <ServiceCTA/>



                <Footer />
            </body>
        </>
    )
}

export default Services
