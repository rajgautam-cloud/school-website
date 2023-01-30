import React from "react";
import thinking from "../assests/thinking.webp";
import brain from "../assests/brain.svg";
import infrastructure from "../assests/infra.svg";
import pattern from "../assests/patterns.svg";
const WhySection = () => {
  return (
    <div
      className="background-overlay row mx-0 d-flex justify-content-center"
      style={{ paddingLeft: "15%", paddingRight: "15%" }}
    >
      <div className="col-md-6 col-sm-10" style={{ paddingTop: "13vh" }}>
        <div className="th-40 th-fw-700 th-font-white align-center">
          Why our schools are the<br></br> right fit for your child ?
        </div>
        <div className="th-20 th-font-white py-3 align-center">
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet.
        </div>
        <div className="py-3 ">
          <div
            className="point-container row my-3 mx-0"
            style={{ alignItems: "center" }}
          >
            <div className="col-md-2">
              <img
                src={brain}
                style={{ height: "50px", width: "50px" }}
                className=""
              />
            </div>
            <div className="col-md-10 th-18 th-fw-500">
              Well trained professionals
            </div>
          </div>
          <div
            className="point-container row my-3"
            style={{ alignItems: "center" }}
          >
            <div className="col-md-2">
              <img
                src={infrastructure}
                style={{ height: "50px", width: "50px" }}
                className=""
              />
            </div>
            <div className="col-md-10 th-18 th-fw-500">
              Awesome Infrastructure
            </div>
          </div>
          <div
            className="point-container row my-3"
            style={{ alignItems: "center" }}
          >
            <div className="col-md-2">
              <img
                src={pattern}
                style={{ height: "50px", width: "50px" }}
                className=""
              />
            </div>
            <div className="col-md-10 th-18 th-fw-500">
              International Lesson Patterns
            </div>
          </div>
        </div>
      </div>
      <div className=" col-md-5 col-sm-10 d-flex justify-content-center">
        <img
          src={thinking}
          style={{ paddingTop: "10vh", paddingBottom: "10vh", width: "30vw" }}
          className="image-thinking"
        />
      </div>
    </div>
  );
};

export default WhySection;
