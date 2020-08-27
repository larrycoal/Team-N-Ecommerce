import React from "react";
import { IconButton } from "@material-ui/core";
import { LocalMallOutlined } from "@material-ui/icons";

const Card = () => {
  return (
    <div
      className="product-card"
      style={{
        height: "350px",
        width: "300px",
        background:
          "url(https://res.cloudinary.com/dbdrtuscd/image/upload/v1598539037/product4_m2ngy8.png)",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display:"flex",
          position: "absolute",
          zIndex:"22",
          justifyContent:"space-between",
          alignItems:"flex-end",
          width:"300px",
          height:"350px",
          color:"white"
        }}
      >
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
  );
};

export default Card;
