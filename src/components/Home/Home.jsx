import HeroSection from "./herosection.jsx"
import AboutSchool from "./about.jsx"
// import StatsSection from "./stats.jsx"
import  AcademicCarousel from './academics.jsx'
import WhyUs from "./whyus.jsx"
import ParentsTestimonials from "./parent.jsx"
import Toppers from "./Topper.jsx"
import Gallery from "./gallery.jsx"
import SupportSection from "./support.jsx"

export default function Home() {
    return ( 
        <>
        < HeroSection/>
        <AboutSchool/>
        {/* <StatsSection/> */}
        < AcademicCarousel/>
        <WhyUs/>
        <ParentsTestimonials/>
        <Toppers/>
        <Gallery/>
        <SupportSection/>
        </>
    )
}