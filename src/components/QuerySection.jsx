import React from "react";
import MediaQuery from "react-responsive";
import co1 from "../assests/co1.jpeg";
import co2 from "../assests/co2.jpeg";
import co3 from "../assests/co3.jpeg";
import co4 from "../assests/co4.jpeg";
const QuerySection = () => {
  return (
    <>
      {" "}
      <MediaQuery minWidth={767}>
        <div
          className="row mx-0 mx-0"
          style={{
            paddingTop: "10vh",
            paddingBottom: "10vh",
            backgroundColor: "#f1f1f1",
          }}
        >
          <div className="col-md-2 "></div>
          <div className="col-md-4 py-3">
            <div className="row mx-0">
              <div className="col-md-7">
                <img
                  src={co4}
                  className="col-md-12"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col-md-5" style={{ position: "relative" }}>
                <img
                  src={co3}
                  className="col-md-12"
                  style={{
                    borderRadius: "20px",
                    position: "absolute",
                    bottom: "0",
                  }}
                />
              </div>
            </div>
            <div className="row mx-0 py-3">
              <div className="col-md-1"></div>
              <div className="col-md-6">
                <img
                  src={co2}
                  className="col-md-12"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col-md-5">
                <img
                  src={co1}
                  className="col-md-12"
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-4 col-sm-12"
            style={{ backgroundColor: "white", borderRadius: "20px" }}
          >
            <div className="p-3" style={{ marginTop: "4vh" }}>
              <div className="th-22 th-fw-500">Ask About Kids Act</div>
              <div className="my-2">
                <div className="py-3">
                  <input
                    className=" input-form col-md-12"
                    placeholder="Your Name"
                  />
                </div>
                <div className="py-3">
                  <input
                    className=" input-form col-md-12"
                    placeholder="Email Address"
                  />
                </div>
                <div className="py-3">
                  <input
                    className=" input-form col-md-12"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="py-3">
                  <input
                    className=" input-form col-md-12"
                    placeholder="Studying Class"
                  />
                </div>
                <div className="py-3">
                  <input
                    className=" input-form col-md-12"
                    placeholder="Type your requirements"
                  />
                </div>
                <div className="py-3">
                  <button className="primary-button col-md-12">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div
          className="row mx-0 mx-0"
          style={{
            paddingTop: "10vh",
            paddingBottom: "10vh",
            backgroundColor: "#f1f1f1",
          }}
        >
          <div className="col-2 "></div>
          <div className="col-12 py-3 text-center">
            <div className="row mx-0 ">
              <div className="col-12 py-2">
                <img
                  src={co4}
                  className="col-9"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col-12 py-2">
                <img
                  src={co3}
                  className="col-9"
                  style={{
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div className="row mx-0 py-3">
              <div className="col-12">
                <img
                  src={co2}
                  className="col-9 py-2"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col-12">
                <img
                  src={co1}
                  className="col-9 py-2"
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              className="col-10 "
              style={{ backgroundColor: "white", borderRadius: "20px" }}
            >
              <div className="p-3" style={{ marginTop: "4vh" }}>
                <div className="th-22 th-fw-500">Ask About Kids Act</div>
                <div className="my-2">
                  <div className="py-3">
                    <input
                      className=" input-form col-12"
                      placeholder="Your Name"
                    />
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
                    <button className="primary-button col-md-12">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default QuerySection;
