import React from "react";
import co1 from "../assests/co1.jpeg";
import co2 from "../assests/co2.jpeg";
import co3 from "../assests/co3.jpeg";
import co4 from "../assests/co4.jpeg";
const QuerySection = () => {
  return (
    <div
      className="row"
      style={{
        paddingTop: "10vh",
        paddingBottom: "10vh",
        backgroundColor: "#f1f1f1",
      }}
    >
      <div className="col-2"></div>
      <div className="col-4 py-3">
        <div className="row">
          <div className="col-7">
            <img
              src={co4}
              className="col-12"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="col-5" style={{ position: "relative" }}>
            <img
              src={co3}
              className="col-12"
              style={{
                borderRadius: "20px",
                position: "absolute",
                bottom: "0",
              }}
            />
          </div>
        </div>
        <div className="row py-3">
          <div className="col-1"></div>
          <div className="col-6">
            <img
              src={co2}
              className="col-12"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="col-5">
            <img
              src={co1}
              className="col-12"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
      <div className="col-1"></div>
      <div
        className="col-4"
        style={{ backgroundColor: "white", borderRadius: "20px" }}
      >
        <div className="p-3" style={{ marginTop: "4vh" }}>
          <div className="th-22 th-fw-500">Ask About Kids Act</div>
          <div className="my-2">
            <div className="py-3">
              <input className=" input-form col-12" placeholder="Your Name" />
            </div>
            <div className="py-3">
              <input
                className=" input-form col-12"
                placeholder="Email Address"
              />
            </div>
            <div className="py-3">
              <input
                className=" input-form col-12"
                placeholder="Phone Number"
              />
            </div>
            <div className="py-3">
              <input
                className=" input-form col-12"
                placeholder="Studying Class"
              />
            </div>
            <div className="py-3">
              <input
                className=" input-form col-12"
                placeholder="Type your requirements"
              />
            </div>
            <div className="py-3">
              <button className="primary-button col-12">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default QuerySection;
