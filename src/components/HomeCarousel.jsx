import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import robot from "../assests/robot1.jpeg";
import kids from "../assests/kids.avif";
import bag from "../assests/bag.webp";
const HomeCarousel = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
      <div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            {" "}
            <img src={kids} className="carousel-image" />
          </div>

          <div className="col-md-6 col-sm-12"> </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6 col-sm-12"> </div>
          <div className="col-md-6 col-sm-12">
            {" "}
            <img src={robot} className="carousel-image" />
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            {" "}
            <img src={bag} className="carousel-image" />
          </div>

          <div className="col-md-6 col-sm-12"> </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
