import React from "react";
import { IconButton } from "@material-ui/core";
import { LocalMallOutlined } from "@material-ui/icons";

const Card = (props) => {
  return (
    <div
      className="product-card"
      style={{
        height: `${props.height}`,
        width: `${props.width}`,
        background: `url(${props.url})`,
        backgroundSize: "cover",
      }}
    >
      <div className="desc">
        <div style={{
            flexGrow:"1",
            alignSelf:"center",
            marginTop:"50px"
        }}>
          <h1>heading</h1>
        </div>
        <div style={{
            display:"flex",
            justifyContent:"space-between"
        }}>
          <div>
            <h1>hello</h1>
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
