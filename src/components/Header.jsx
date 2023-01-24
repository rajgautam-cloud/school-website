import React from "react";
import logo from "../assests/logo.webp";
import "../style.scss";
const Header = () => {
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-3">
        <img className="py-2" src={logo} style={{ height: "70px" }} />
      </div>
      <div className="col-2"></div>
      <div className="col-5">
        <div className="row py-4" style={{ textAlign: "center" }}>
          <div className="col th-18 th-fw-600 th-font-green">Home</div>
          <div className="col th-18 th-fw-600 th-font-red">About</div>
          <div className="col th-18 th-fw-600 th-font-mint">Facilities</div>
          <div className="col th-18 th-fw-600 th-font-green">Blog</div>
          <div className="col th-18 th-fw-600 th-font-purple">Admission</div>
          <div className="col th-18 th-fw-600 th-font-yellow">Alumni</div>
          <div className="col th-18 th-fw-600 th-font-pink">Shop</div>
          <div className="col th-18 th-fw-600 th-font-blue">Contact</div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default Header;
