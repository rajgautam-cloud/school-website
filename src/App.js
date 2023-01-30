import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import BlogSection from "./components/BlogSection";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeCarousel from "./components/HomeCarousel";
import InfoHeader from "./components/InfoHeader";
import MainInfo from "./components/MainInfo";
import PartnerSection from "./components/PartnerSection";
import QuerySection from "./components/QuerySection";
import StaffSection from "./components/StaffSection";
import Testimonials from "./components/Testimonials";
import WhySection from "./components/WhySection";

function App() {
  return (
    <div className="mx-0">
      <InfoHeader />
      <Header />
      <HomeCarousel />
      <MainInfo />
      <Curriculum />
      <WhySection />
      <QuerySection />
      <BlogSection />
      <StaffSection />
      <Testimonials />
      <PartnerSection />
      <Footer />
    </div>
  );
}
export default App;
