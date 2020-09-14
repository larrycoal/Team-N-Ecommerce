import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Subscribe = () => {
  return (
    <div className="subscribe-wrapper">
      <h2
        style={{
          marginBottom: "5px",
        }}
      >
        Subscribe to Our News Letter
      </h2>
      <p>lorem ipsum dolore orem ipsum doloret orem ipsum dolorett</p>

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
        }}
      >
        Subscribe
      </Button>
    </div>
  );
};

export default Subscribe;
