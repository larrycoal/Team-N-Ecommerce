import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import { Flip } from "react-reveal";
SwiperCore.use([Pagination, Autoplay]);

const Carousel = () => {
  const slides=[
    {
      img:"https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      text:"Lorem"
    },
    {
      img:"https://images.unsplash.com/photo-1560203125-033f79601481?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      text:"Lorem"
    },
    {
      img:"https://images.unsplash.com/photo-1521317955574-882772c69723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      text:"Lorem"
    },
    {
      img:"https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      text:"Lorem"
    }
  ]
  const settings = {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
  };
  const showSlides = ()=>{
    return slides.map((slide)=>(
      <SwiperSlide>
        <div
          className="carousel_image"
          style={{
            background:`url(${slide.img})`
          }}
        >
          <h1>
            <Flip left cascade>
              {slide.text}
            </Flip>
          </h1>
        </div>
      </SwiperSlide>
    ))
  }
  return (
    <Swiper {...settings} pagination>
      {showSlides()}
    </Swiper>
  );
};

export default Carousel;
