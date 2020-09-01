import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectCube, Navigation]);

const Showcase = (props) => {
  let settings = {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  };
  return (
    <Swiper {...settings} navigation>
      <SwiperSlide>
        <div
        className="cube-effect"
          style={{
            background: `url(${props.bck1})`
          }}
          
        >
            <h1>Explore Now</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="cube-effect"
          style={{
            background: `url(${props.bck2})`
          }}
        >
            <h1>See More....</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Showcase;
