import React from "react";
import logo from "../assests/light-logo.webp";
import blog1 from "../assests/footer-blog1.jpeg";
import blog2 from "../assests/footer-blog2.jpeg";
const Footer = () => {
  return (
    <div
      className="footer-background"
      style={{
        paddingTop: "10vh",
        paddingBottom: "10vh",
        paddingLeft: "15%",
        paddingRight: "15%",
      }}
    >
      <div className="row mx-0">
        <div className="col-md-3 col-sm-12 px-3">
          <img src={logo} className="col-10" />
          <div className="th-16 th-font-white py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            tempore rem dolorem modi veniam sapiente, nulla alias blan
          </div>
        </div>
        <div className="col-md-3 col-sm-12 px-3">
          <div className="th-25 th-font-white th-fw-700 py-3">About School</div>
          <div className="th-16 th-font-white th-fw-500 py-1">
            ▶️
            <span className="px-2">General Information</span>
          </div>
          <div className="th-16 th-font-white th-fw-500 py-1">
            ▶️
            <span className="px-2">Who we are </span>
          </div>
          <div className="th-16 th-font-white th-fw-500 py-1">
            ▶️
            <span className="px-2">Our school teachers</span>
          </div>
          <div className="th-16 th-font-white th-fw-500 py-1">
            ▶️
            <span className="px-2">School History</span>
          </div>
          <div className="th-16 th-font-white th-fw-500 py-1">
            ▶️
            <span className="px-2">Specialised Program</span>
          </div>
          <div className="th-16 th-font-white th-fw-500 py-1">
            ▶️
            <span className="px-2">Language Training</span>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 px-3">
          <div className="th-25 th-font-white th-fw-700 py-3">Recent Posts</div>
          <div className="row py-3">
            <div className="col-5">
              <img
                src={blog1}
                className="col-12"
                style={{ borderRadius: "20px" }}
              />
            </div>
            <div className="col-7">
              <div className="th-16 th-font-white th-fw-600">
                Reading Practice for students
              </div>
              <div className="th-14 th-font-white py-2">November 14, 20022</div>
            </div>
          </div>
          <hr style={{ color: "white", height: "2px" }}></hr>
          <div className="row py-3">
            <div className="col-5">
              <img
                src={blog2}
                className="col-12"
                style={{ borderRadius: "20px" }}
              />
            </div>
            <div className="col-7">
              <div className="th-16 th-font-white th-fw-600">
                A team dedicated to football matches{" "}
              </div>
              <div className="th-14 th-font-white py-2">November 14, 20022</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 px-3">
          <div className="th-25 th-font-white th-fw-700 py-3">
            Keep in touch
          </div>

          <div className="th-16 th-font-white py-3">
            Our School is perfect environment for language studies.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
