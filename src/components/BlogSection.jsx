import React from "react";
import blog1 from "../assests/blog1.jpeg";
import blog2 from "../assests/blog2.jpeg";
import blog3 from "../assests/blog3.jpeg";
import blog4 from "../assests/blog4.jpeg";
import blog5 from "../assests/blog5.jpeg";
const BlogSection = () => {
  return (
    <div
      style={{
        paddingLeft: "15%",
        paddingRight: "15%",
        backgroundColor: "#BAE7FF",
        paddingTop: "10vh",
        paddingBlock: "10vh",
      }}
    >
      <div className="row mx-0">
        <div
          className="col-md-6 col-12 my-3 px-0"
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <img
            src={blog1}
            className="col-12"
            style={{
              borderRadius: "20px",
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              height: "300px",
            }}
          />
          <div className="px-3 py-3">
            <div className="th-26 th-fw-600 py-3">
              A fun toddler coloring training on classroom
            </div>
            <div className="th-18 th-fw-50 pb-3  th-font-grey">
              Beautiful branding for changes by Never Now in Australia. changes
              is a platform for open discussion in an inclusive and
              collaborative environment, providing the...
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div
                className="col-12 my-3 px-0"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={blog2}
                  className="col-12"
                  style={{
                    borderRadius: "20px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    height: "150px",
                  }}
                />
                <div className="px-3 py-3">
                  <div className="th-18 th-fw-600 py-3">
                    Find out if a school fits the family’s needs
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                className="col-12 my-3 px-0"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={blog3}
                  className="col-12"
                  style={{
                    borderRadius: "20px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    height: "150px",
                  }}
                />
                <div className="px-3 py-3">
                  <div className="th-18 th-fw-600 py-3">
                    Summer math & literacy centres for kids
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div
                className="col-12 my-3 px-0"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={blog4}
                  className="col-12"
                  style={{
                    borderRadius: "20px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    height: "150px",
                  }}
                />
                <div className="px-3 py-3">
                  <div className="th-18 th-fw-600 py-3">
                    Find out if a school fits the family’s needs
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                className="col-12 my-3 px-0"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={blog5}
                  className="col-12"
                  style={{
                    borderRadius: "20px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    height: "150px",
                  }}
                />
                <div className="px-3 py-3">
                  <div className="th-18 th-fw-600 py-3">
                    Summer math & literacy centres for kids
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default BlogSection;
