import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import MainInfo from "./components/MainInfo";

function App() {
  return (
    <div>
      <InfoHeader />
      <Header />
      <MainInfo />
    </div>
  );
}

export default App;
