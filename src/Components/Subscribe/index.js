import React,{useContext} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Context } from "../../Store/useContext";

const Subscribe = () => {
  let { state } = useContext(Context);
  return (
    <div className="subscribe-wrapper"
    style={{
      backgroundColor:`${state.dmode?"#f5f5f5":"#424242"}`
    }}
    >
      <div className="subscribe-container"
      style={{
        color:`${state.dmode?"black":"white"}`
      }}>
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
