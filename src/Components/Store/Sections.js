import React from "react";
import Cards from "./Cards";
import { suitData,watchData,dressData,jeansData } from "../../misc/utils";

export const Suit = () => {
  return (
    <div className="section_wrapper">
      <div className="header">
        <h3>Bespoke suits</h3>
      </div>
      <Cards suitData={suitData} />
    </div>
  );
};
export const Suit2 = () => {
  return (
    <div className="section_wrapper">
      <Cards suitData={watchData} />
      <div className="header" style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1575796398382-4e28b372a274?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')"
      }}>
        <h3>Stylish Watches</h3>
      </div>
    </div>
  );
};
export const Suit3 = () => {
  return (
    <div className="section_wrapper">
      <div className="header" style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1561375962-4e4db9d9afa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')"
      }}>
        <h3>Sun Dresses</h3>
      </div>
      <Cards suitData={dressData} />
    </div>
  );
};
export const Suit4 = () => {
  return (
    <div className="section_wrapper">
      <Cards suitData={jeansData} />
      <div className="header" style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')"
      }}>
        <h3>Bespoke suits</h3>
      </div>
    </div>
  );
};
