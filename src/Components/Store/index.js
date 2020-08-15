import React from "react";
import {Suit,Sundress,Watches,Jeans} from "./Sections";
import Slide from 'react-reveal/Slide'

const Store = () => {
  return (
    <Slide bottom>
    <div className="store_wrapper">
      <Suit />
      <Watches/>
      <Sundress/>
      <Jeans/>
    </div>
    </Slide>
  );
};

export default Store;
