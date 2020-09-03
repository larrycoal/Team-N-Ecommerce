import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import { Flip } from "react-reveal";
SwiperCore.use([Pagination, Autoplay]);

const Carousel = () => {
  const slides = [
    {
      img:
        "https://www.lucine-a.com/wp-content/uploads/2018/07/African-Fashion-Festival-3.jpg",
      text: "Trendy Ankara",
    },
    {
      img:
        "https://images.unsplash.com/photo-1591348278900-019a8a2a8b1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      text: "Beautiful Bags",
    },
    {
      img:
      "https://t3.ftcdn.net/jpg/01/77/39/20/240_F_177392031_pCMnvyMiuiwEun0hyRIYaRPxBCJf9PNo.jpg",
      text: "Stylish Attire",
    },
    {
      img:
        "https://t4.ftcdn.net/jpg/02/82/49/43/240_F_282494334_om0DBFChHJGhrOeBZyTDNJW9s1r8Koly.jpg",
      text: "Sneakers",
    },
    {
      img:
        "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      text: "Original Watches",
    },
  ];
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
  const showSlides = () => {
    return slides.map((slide) => (
      <SwiperSlide>
        <div
          className="carousel_image"
          style={{
            background: `url(${slide.img})`,
          }}
        >
          <div style={{
            position:"fixed",
           top:"40%",
           transform:"translate(-50% -50%)",
           width:"fit-content",
           marginLeft:"30px"
          }}>
            <h2>Home Of</h2>
            <h1>
              <Flip left cascade>
                {slide.text}
              </Flip>
            </h1>
          </div>
        </div>
      </SwiperSlide>
    ));
  };
  return (
    <Swiper {...settings} pagination>
      {showSlides()}
    </Swiper>
  );
};

export default Carousel;
