import React from "react";
import Slider from "react-slick";


const Cards = (props) => {
  let {suitData} =props
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  }


  return (
    <div className="cards">
      <Slider {...settings}>
        {suitData.map((suit)=>(
          <div className="image">
          <img src={suit.image} alt="suit" />
          <div className="disc" style={{
            width:"100%"
          }}>
            <div style={{
            textAlign:"center"
          }}>
            <h4>{suit.name}</h4>
            <p>lorem ipsum d oloret  lorem ipsum dey doloret</p>
            </div>
            <div style={{
              marginTop:"5px",
              fontWeight:"bold"
            }}>
            <p>${suit.price}</p>
            
            </div>
          </div>
        </div>
        ))}
      </Slider>
      </div>
  );
};

export default Cards;
