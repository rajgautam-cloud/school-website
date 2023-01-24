import React from "react";
import background from "../assests/baackground.svg";
import c1 from "../assests/c1.svg";
import c2 from "../assests/c2.svg";
import c3 from "../assests/c3.svg";
import c4 from "../assests/c4.svg";
const MainInfo = () => {
  return (
    <div style={{ backgroundColor: "skyblue" }} className="py-3">
      {/* <img src={background} /> */}
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2 ">
          <div className=" d-flex justify-content-center">
            <div className="center" style={{ backgroundColor: "#ff236c" }}>
              <img src={c1} style={{ height: "40px", width: "40px" }} />
            </div>
          </div>
          <div className="text-center th-24 th-fw-700 py-3">Our team</div>
        </div>

        <div className="col-2">
          <div className="d-flex justify-content-center">
            <div className="center mx-0" style={{ backgroundColor: "#00d2dc" }}>
              <img src={c2} style={{ height: "40px" }} />
            </div>
          </div>
          <div className="text-center th-24 th-fw-700 py-3">
            Kids Enrollment
          </div>
        </div>
        <div className="col-2 ">
          <div className="d-flex justify-content-center">
            <div className="center" style={{ backgroundColor: "#a5c347" }}>
              <img src={c3} style={{ height: "40px" }} />
            </div>
          </div>
          <div className="text-center th-24 th-fw-700 py-3">Alumni Club</div>
        </div>
        <div className="col-2">
          <div className=" d-flex justify-content-center">
            <div className="center" style={{ backgroundColor: "#f0aa00" }}>
              <img src={c4} style={{ height: "40px" }} />
            </div>
          </div>
          <div className="text-center th-24 th-fw-700 py-3">Best Amenities</div>
        </div>
        <div className="col-2 px-0 mx-0"></div>
      </div>
    </div>
  );
};

export default MainInfo;
