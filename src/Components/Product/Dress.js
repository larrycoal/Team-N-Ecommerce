import React from "react";
import Card from "./Card";
import Showcase from "./Showcase";
import {dress} from '../../Resources/Data'

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
  const showDress = ()=>{
    return dress.map((dress)=>(
      <Card
          height="350px"
          width="300px"
          url={dress.url}
          designer={dress.designer}
          desc={dress.desc}
          price={dress.price}
          class="product-card"
          title={dress.title}
        />
    ))
  }
  return (
    <div className="dress-wrapper">
      <div className="dress-model">
        <Showcase
          bck1="https://images.unsplash.com/photo-1583077873282-81173f513d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          bck2="https://images.unsplash.com/photo-1553816078-25e0948140f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          settings={settings}
        />
      </div>
      <div className="dress-cards">
        {showDress()}
      </div>
    </div>
  );
};

export default Dress;
