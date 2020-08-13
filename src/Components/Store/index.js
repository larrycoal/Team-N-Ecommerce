import React from "react";
import {Suit,Sundress,Watches,Jeans} from "./Sections";

const Store = () => {
  return (
    <div className="store_wrapper">
      <Suit />
      <Watches/>
      <Sundress/>
      <Jeans/>
    </div>
  );
};

export default Store;
