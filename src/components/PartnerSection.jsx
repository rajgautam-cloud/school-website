import React from "react";
import p1 from "../assests/p1.webp";
import p2 from "../assests/p2.webp";
import p3 from "../assests/p3.webp";
import p4 from "../assests/p4.webp";
const PartnerSection = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingBottom: "10vh",
        paddingLeft: "15%",
        paddingRight: "15%",
      }}
    >
      <div
        className="th-45 th-fw-600"
        style={{ paddingTop: "10vh", textAlign: "center" }}
      >
        Our Partners
      </div>
      <div className="th-18 th-font-grey th-fw-400 text-center py-3">
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue.
      </div>
      <div className="row th-font-white mx-0" style={{ paddingTop: "5vh" }}>
        <div className="col-md-3 col-sm-6 col-12">
          <div>
            <img
              src={p1}
              className="col-md-12"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div>
            <img
              src={p2}
              className="col-md-12"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div>
            <img
              src={p3}
              className="col-md-12"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div>
            <img
              src={p4}
              className="col-md-12"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
