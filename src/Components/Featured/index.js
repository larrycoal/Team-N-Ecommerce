import React from "react";
import Carousel from "./Carousel";

const Featured = () => {
  return (
    <div className="featured_wrapper" style={{
      height:`${window.innerHeight}px`
    }}>
      <Carousel />
      <div className="featured_text">
        <div
         className="top"
        > Hova's</div>
         <div className="bottom">
          Home of sleek beautiful dresses for ladies and gentlemen, this store dope gann. I no even dey play he too make sense
      </div>
      </div>
    </div>
  );
};

export default Featured;
