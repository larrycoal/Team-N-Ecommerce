import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { LocalMallOutlined } from "@material-ui/icons";
import {Flip} from 'react-reveal'

const Card = (props) => {
  let [display, setDisplay] = useState("none");
  const showDesigner=()=>{
    setDisplay("inline")
  }
  return (
    <div
      className={props.class}
      style={{
        height: `${props.height}`,
        width: `${props.width}`,
        background: `url(${props.url})`,
        backgroundSize: "cover",
        borderRadius:"5px"
      }}
      onMouseEnter={showDesigner}
      onMouseLeave={()=>setDisplay("none")}
    >
      <div className="desc">
        <div
          style={{
            flexGrow: "1",
            alignSelf: "center",
            marginTop: "50px",
            display: `${display}`,
          }}>
         <h1>
         <Flip left cascade>
          {props.title}
          </Flip>
         </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            alignItems: "flex-end",
          }}
        >
          <div style={{
              marginLeft:"5px",
              textAlign:"left"
          }}>
            <h1>{props.designer}</h1>
            <p>{props.desc}</p>
            <p>#{props.price}</p>
          </div>
          <div>
            <IconButton size="large" color="primary">
              <LocalMallOutlined />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
