import React from "react";
import cr1 from "../assests/cr1.svg";
import cr2 from "../assests/cr2.svg";
import cr3 from "../assests/cr3.svg";
const Curriculum = () => {
  return (
    <div style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
      <div className="th-45 th-fw-600 text-center">Standard Curriculum</div>
      <div style={{ paddingTop: "5vh" }} className="row mx-0">
        <div className="col-md-2 col-sm-1"></div>
        <div className="col-md-8 col-sm-10 row justify-content-around mx-0">
          <div className="col-md-4 col-sm-10">
            <div className="widget-container-mint justify-content-center text-center mx-2">
              <img src={cr1} className="col-md-4 py-3" />
              <div className="py-3 text-center th-25 th-fw-600">
                Kider(3-6 years)
              </div>
              <div className="th-18 px-2 th-font-grey">
                Lorem ipsum dolor, sit amet conseur adipisicing elit. Totam, ad
                das rrad erg
              </div>
              <div className="py-3 th-font-mint">Read more</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-10">
            <div className="widget-container-orange justify-content-center text-center mx-2">
              <img src={cr2} className="col-md-4" />
              <div className="py-3 text-center th-25 th-fw-600">
                Elementary School
              </div>
              <div className="th-18 px-2 th-font-grey">
                Lorem ipsum dolor, sit amet conseur adipisicing elit. Totam, ad
                das rrad erg
              </div>
              <div className="py-3 th-font-mint">Read more</div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="widget-container-purple justify-content-center text-center mx-2">
              <img src={cr3} className="col-md-4" />
              <div className="py-3 text-center th-25 th-fw-600">
                Middle(10-16 years)
              </div>
              <div className="th-18 px-2 th-font-grey">
                Lorem ipsum dolor, sit amet conseur adipisicing elit. Totam, ad
                das rrad erg
              </div>
              <div className="py-3 th-font-mint">Read more</div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-1"></div>
      </div>
    </div>
  );
};

export default Curriculum;
