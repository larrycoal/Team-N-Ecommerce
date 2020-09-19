import React,{useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Navigation } from "swiper";
import "swiper/swiper-bundle.css";


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
  dispatch({type:`${props.type}`,payload:data})
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
            <h1 onClick={()=>updateProduct(props.prd1)}>{props.store1}</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="cube-effect"
          style={{
            background: `url(${props.bck2})`
          }}
        >
            <h1 onClick={()=>updateProduct(props.prd2)}>{props.store2}</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="cube-effect"
          style={{
            background: `url(${props.bck3})`
          }}
        >
            <h1 onClick={()=>updateProduct(props.prd3)}>{props.store3}</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
        className="cube-effect"
          style={{
            background: `url(${props.bck4})`
          }}
        >
            <h1 onClick={()=>updateProduct(props.prd4)}>{props.store4}</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Showcase;
