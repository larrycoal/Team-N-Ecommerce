import React from 'react';
import Card from './Card'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {  EffectCube} from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([EffectCube])
const Dress = () => {
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
        <div className="dress-wrapper">
            <div className="dress-model">
                <Swiper {...settings}>
                    <SwiperSlide>
                        <div style={{
                            height:"550px",
                            width:"400px",
                            background:"url(https://images.unsplash.com/photo-1583077873282-81173f513d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                            backgroundSize:"cover"
                        }}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div style={{
                            height:"550px",
                            width:"400px",
                            background:"url(https://images.unsplash.com/photo-1553816078-25e0948140f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                            backgroundSize:"cover"
                        }}></div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="dress-cards">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default Dress;