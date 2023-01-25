import React from "react";
import t1 from "../assests/t1.jpeg";
import t2 from "../assests/t2.jpeg";
import t3 from "../assests/t3.jpeg";
import t4 from "../assests/t4.jpeg";
const StaffSection = () => {
  return (
    <div style={{ backgroundColor: "#A5C347", paddingBottom: "10vh" }}>
      <div
        className="th-font-white th-45 th-fw-600"
        style={{ paddingTop: "10vh", textAlign: "center" }}
      >
        Our Qualified Staffs
      </div>
      <div className="row th-font-white py-3">
        <div className="col-2"></div>
        <div className="col-2">
          <div>
            <img src={t1} className="col-12" style={{ borderRadius: "10px" }} />
          </div>
          <div className="text-center">
            <div className="th-16 th-fw-500 py-3">Instructor/Teacher</div>
            <div className="th-25 th-fw-600">John Parker (PHD)</div>
            <button className="secondary-button my-3"> 9876543210</button>
          </div>
        </div>
        <div className="col-2">
          <div>
            <img src={t2} className="col-12" style={{ borderRadius: "10px" }} />
          </div>
          <div className="text-center">
            <div className="th-16 th-fw-500 py-3">Instructor/Teacher</div>
            <div className="th-25 th-fw-600">Lida Jones</div>
            <button className="secondary-button my-3"> 654312210</button>
          </div>
        </div>
        <div className="col-2">
          <div>
            <img src={t3} className="col-12" style={{ borderRadius: "10px" }} />
          </div>
          <div className="text-center">
            <div className="th-16 th-fw-500 py-3">Instructor/Teacher</div>
            <div className="th-25 th-fw-600">Michael Jordan</div>
            <button className="secondary-button my-3"> 8765435210</button>
          </div>
        </div>
        <div className="col-2">
          <div>
            <img src={t4} className="col-12" style={{ borderRadius: "10px" }} />
          </div>
          <div className="text-center">
            <div className="th-16 th-fw-500 py-3">Instructor/Teacher</div>
            <div className="th-25 th-fw-600">Lilly Thomas</div>
            <button className="secondary-button my-3"> 98712310</button>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default StaffSection;
