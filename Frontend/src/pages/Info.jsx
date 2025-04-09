import React from "react"
import Navbar from '../Components/Navbar'
import ServicesBanner from "../Components/ServicesBanner"
import ServicesAll from "../Components/ServicesAll"
import Footer from "../Components/Footer"
import ScrollToTop from "../Components/ScrollToTop"
import ServiceAreas from "../Components/ServiceArea"
import CompanyInformation from "../Components/InfoCompanyInformation"
import CompanyCoporate from "../Components/InfoCompanyCoporate";

const Info = () => {
    return (
        <>
            <body className="bg-[#ECECEC]">
                <ScrollToTop />
                <Navbar />
                {/* <CompanyInformation/> */}
                <CompanyCoporate/>
                {/* <ServicesBanner />
                <ServicesAll />
                <ServiceAreas/> */}
                <Footer />
            </body>
        </>
    )
}

export default Info
