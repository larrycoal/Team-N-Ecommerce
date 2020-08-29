import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {  EffectCube} from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectCube])
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
        <Swiper {...settings}>
        <SwiperSlide>
            <div style={{
                height:"550px",
                width:"400px",
                background:`url(${props.bck1})`,
                backgroundSize:"cover"
            }}></div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{
                height:"550px",
                width:"400px",
                background:`url(${props.bck2})`,
                backgroundSize:"cover"
            }}></div>
        </SwiperSlide>
    </Swiper>
    );
};

export default Showcase;