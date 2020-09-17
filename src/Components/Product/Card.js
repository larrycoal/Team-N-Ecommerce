import React, { useState, useContext } from "react";
import { IconButton } from "@material-ui/core";
import { LocalMallOutlined } from "@material-ui/icons";
import { Context } from "../../Store/useContext";
import { Flip,Slide } from "react-reveal";

const Card = (props) => {
  let { dispatch } = useContext(Context);
  let [display, setDisplay] = useState("none");
  const showDesigner = () => {
    setDisplay("inline");
  };
  const addToCart = () => {
    let merc = {
      image: props.url,
      price: props.price,
      name: props.designer,
    };
    dispatch({ type: "ADD-CART", payload: merc });
  };

  return (
    <Slide bottom>
    <div
      className={props.class}
      style={{
        height: `${props.height}`,
        width: `${props.width}`,
        background: `url(${props.url})`,
        backgroundSize: "cover",
        borderRadius: "5px",
      }}
      onMouseEnter={showDesigner}
      onMouseLeave={() => setDisplay("none")}
    >
      <div className="desc">
        <div
          className="top"
          style={{
            display: `${display}`,
          }}
        >
          <h1>
            <Flip left cascade>
              {props.title}
            </Flip>
          </h1>
        </div>
        <div className="bottom">
          <div
            style={{
              marginLeft: "5px",
              textAlign: "left",
            }}
          >
            <h1>{props.designer}</h1>
            <p>{props.desc}</p>
            <p style={{
              color:"yellow"
            }}>${props.price}</p>
          </div>
          <div>
            <IconButton
              style={{
                color: "white",
              }}
              size="large"
              onClick={() => {
                addToCart();
              }}
            >
              <LocalMallOutlined />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
    </Slide>
  );
};

export default Card;
