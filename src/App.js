import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import MainInfo from "./components/MainInfo";
import PartnerSection from "./components/PartnerSection";
import QuerySection from "./components/QuerySection";
import StaffSection from "./components/StaffSection";
import WhySection from "./components/WhySection";

function App() {
  return (
    <div>
      <InfoHeader />
      <Header />
      <MainInfo />
      <WhySection />
      <QuerySection />
      <StaffSection />
      <PartnerSection />
    </div>
  );
}

export default App;
