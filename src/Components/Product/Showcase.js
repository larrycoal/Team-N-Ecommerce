import React,{useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Navigation } from "swiper";
import "swiper/swiper-bundle.css";

import {hova,dress,suit,jeans} from '../../Resources/Data'
import { Context } from "../../Store/useContext";
SwiperCore.use([EffectCube, Navigation]);

const Showcase = (props) => {
 
  let {dispatch} = useContext(Context)
  let settings = {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  }
  
const updateProduct=(data)=>{
  dispatch({type:"PRODUCT",payload:data})
}

  return (
    <Swiper {...settings} navigation>
      <SwiperSlide>
        <div
        className="cube-effect"
          style={{
            background: `url(${props.bck1})`
          }}
          
        >
            <h1 onClick={()=>updateProduct(hova)}>Explore Now</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="cube-effect"
          style={{
            background: `url(${props.bck2})`
          }}
        >
            <h1 onClick={()=>updateProduct(dress)}>See More....</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="cube-effect"
          style={{
            background: `url(${props.bck3})`
          }}
        >
            <h1 onClick={()=>updateProduct(suit)}>See More....</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="cube-effect"
          style={{
            background: `url(${props.bck4})`
          }}
        >
            <h1 onClick={()=>updateProduct(jeans)}>See More....</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Showcase;
