import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Subscribe = () => {
  return (
    <div className="subscribe-wrapper">
      <div className="subscribe-container">
      <h2
        style={{
          marginBottom: "5px",
        }}
      >
        Subscribe to Our News Letter
      </h2>
      <p>subscribe to our news letter and be the first to hear about our new deals and offers</p>

      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Email"
        color="secondary"
        type="email"
        style={{
          width: "200px",
        }}
      />
      <Button
        size="medium"
        style={{
          color: "red",
          marginLeft: "20px",
          width:"100px"
        }}
      >
        Subscribe
      </Button>
      </div>
    </div>
  );
};

export default Subscribe;
