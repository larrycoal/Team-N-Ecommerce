import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




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
          <img src="https://images.unsplash.com/photo-1541888627857-37d0cd590eca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="a polo" />
        </div>
        <div className="carousel_image">
          <img src="https://images.unsplash.com/photo-1560203125-033f79601481?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="a polo" />
      </div>
        <div className="carousel_image">
          <img src="https://images.unsplash.com/photo-1521317955574-882772c69723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="a polo" />
        </div>
      
        <div className="carousel_image">
          <img src="https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="a polo" />
      </div>
      
        <div className="carousel_image">
          <img src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="a polo" />
        </div>
    </Slider>
  );
};

export default Carousel;
