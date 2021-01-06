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
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1609926380/fullAnkara_eaxkkj.png",
      text: "Trendy Ankara",
    },
    {
      img:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1609926331/fullAnkaraStand_fgpuwj.jpg",
      text: "Beautiful Bags",
    },
    {
      img:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1609926370/jumpsuit_ysdrie.jpg",
      text: "Stylish Attire",
    },
    {
      img:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1609926329/skinmePant_dklol4.jpg",
      text: "Sneakers",
    },
    {
      img:
        "https://res.cloudinary.com/dbdrtuscd/image/upload/v1609926374/pinaforeAndYoungPlaysuit_ftj6hs.jpg",
      text: "Original Watches",
    },
  ];
  const settings = {
    slidesPerView:2,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      clickable: false,
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
           marginLeft:"30px",
           fontSize:"1em"
          }}>
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
