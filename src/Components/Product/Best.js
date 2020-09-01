import React from "react";
import { Rating } from "@material-ui/lab";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";
import "swiper/swiper-bundle.css";

import {deals} from '../../Resources/Data'
import Card from "./Card";
SwiperCore.use([EffectCoverflow, Navigation]);
const Best = () => {
  const settings = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: true,
  };

 const showDeals = ()=>{
     return deals.map((deal)=>(
        <SwiperSlide>
            <Card
              height="250px"
              url={deal.url}
              designer={deal.designer}
              desc={deal.desc}
              price={deal.price}
            />
          </SwiperSlide>
     ))
 }


  return (
    <div
     className="deals-wrapper"
    >
      <div style={{
          margin:"20px"
      }}>
        <h1>Our Best Deals</h1>
        <Rating defaultValue={5} size="large" />
      </div>
      <div
        style={{
          width: "70vw",
          margin: "0 auto",
        }}
      >
        <Swiper {...settings} navigation>
          {showDeals()}
        </Swiper>
      </div>
    </div>
  );
};

export default Best;
