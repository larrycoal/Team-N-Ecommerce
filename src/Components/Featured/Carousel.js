import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import lady from "../../Resources/images/lady.jpg";
import polo from "../../Resources/images/polo.jpg";
import oge from "../../Resources/images/oge_bck.jpg";
import shirts from "../../Resources/images/shirts.jpg";
import suits from "../../Resources/images/suits.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade:true
  };
  return (
    <Slider {...settings}>
        <div className="carousel_image">
          <img src={polo} alt="a polo" />
        </div>
        <div className="carousel_image">
          <img src={oge} alt="a polo" />
      </div>
        <div className="carousel_image">
          <img src={shirts} alt="a polo" />
        </div>
      
        <div className="carousel_image">
          <img src={lady} alt="a polo" />
      </div>
      
        <div className="carousel_image">
          <img src={suits} alt="a polo" />
        </div>
    </Slider>
  );
};

export default Carousel;
