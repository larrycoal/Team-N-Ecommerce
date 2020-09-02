import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Navigation,EffectFlip } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectCube, Navigation,EffectFlip]);

const Showcase = (props) => {
 
  return (
    <Swiper {...props.settings} >
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
