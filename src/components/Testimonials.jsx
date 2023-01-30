import React from "react";
import test1 from "../assests/test1.jpeg";
import test2 from "../assests/test2.jpeg";
import test3 from "../assests/test3.jpeg";
import test4 from "../assests/test4.jpeg";
import test5 from "../assests/test5.jpeg";
import test6 from "../assests/test6.jpeg";
import tp1 from "../assests/tp1.svg";
import tp2 from "../assests/tp2.svg";
import tp3 from "../assests/tp3.svg";
import tp4 from "../assests/tp4.svg";
const Testimonials = () => {
  return (
    <div>
      <div
        style={{ paddingTop: "10vh", paddingLeft: "15%", paddingRight: "15%" }}
      >
        <div className="row align-center">
          <div className="col-md-6 col-12">
            <div className="th-35 th-fw-700 pb-2">Clients Testimonials</div>
            <div className="py-3 my-2">
              Clients Testimonials Cum sociis natoque penatibus et magnis dis
              parturient montes. nascetur ridiculus mus. rhoncus ut, imperdiet
              a, venenatis vitae, justo. Aliquam lorem ante natoque penatibus et
              magnis dis parturient nascetur ridiculus mus
            </div>
            <div className="testimonial-container">
              <div className="th-24 th-font-white py-3">John Cena</div>
              <div className="th-18 th-font-white py-3">
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 px-3">
            <div className="row my-3">
              <div className="col-md-4 col-12">
                <img
                  className="col-12 py-2"
                  style={{ borderRadius: "15px" }}
                  src={test1}
                />
              </div>
              <div className="col-md-4 col-12">
                <img
                  className="col-12 py-2"
                  style={{ borderRadius: "15px" }}
                  src={test2}
                />
              </div>
              <div className="col-md-4 col-12">
                <img
                  className="col-12 py-2"
                  style={{ borderRadius: "15px" }}
                  src={test3}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12">
                <img
                  className="col-12 py-2"
                  style={{ borderRadius: "15px" }}
                  src={test4}
                />
              </div>
              <div className="col-md-4 col-12">
                <img
                  className="col-12 py-2"
                  style={{ borderRadius: "15px" }}
                  src={test5}
                />
              </div>
              <div className="col-md-4 col-12">
                <img
                  className="col-12 py-2"
                  style={{ borderRadius: "15px" }}
                  src={test6}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ paddingTop: "20vh", paddingLeft: "15%", paddingRight: "15%" }}
      >
        <div className="row mx-0 d-flex justify-content-center">
          <div className="col-12">
            <div className="row d-flex justify-content-around text-nowrap">
              <div
                className="px-3 col-md-2 col-sm-6 col-12 text-center "
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                <div className="rhombus-icon th-green d-flex justify-content-center">
                  <img src={tp1} className="rhombus-image" />
                </div>
                <div className="pt-3 mt-3 th-25 th-fw-600">2345</div>
                <div className="th-20 th-font-grey">Student Passed</div>
              </div>
              <div
                className="px-3 col-md-2 col-sm-6 col-10 text-center"
                style={{ whiteSpace: "nowrap" }}
              >
                <div className="rhombus-icon th-blue  d-flex justify-content-center">
                  <img src={tp2} className="rhombus-image" />
                </div>
                <div className="pt-3 mt-3 th-25 th-fw-600">2345</div>
                <div className="th-20 th-font-grey">Qualified Staffs</div>
              </div>
              <div
                className="px-3 col-md-2 col-sm-6 col-10 text-center"
                style={{ whiteSpace: "nowrap" }}
              >
                <div className="rhombus-icon th-pink  d-flex justify-content-center">
                  <img src={tp3} className="rhombus-image" />
                </div>
                <div className="pt-3 mt-3 th-25 th-fw-600">2345</div>
                <div className="th-20 th-font-grey">Course in trails</div>
              </div>
              <div
                className="px-3 col-md-2 col-sm-6 col-10 text-center"
                style={{ whiteSpace: "nowrap" }}
              >
                <div className="rhombus-icon th-yellow  d-flex justify-content-center">
                  <img src={tp4} className="rhombus-image" />
                </div>
                <div className="pt-3 mt-3 th-25 th-fw-600">2345</div>
                <div className="th-20 th-font-grey">Equipments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
