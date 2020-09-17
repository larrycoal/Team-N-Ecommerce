import React, { useContext,useEffect,useState } from "react";
import { Context } from "../../Store/useContext";
import { Avatar,Button } from "@material-ui/core";
const Checkout = () => {
  let { state,dispatch } = useContext(Context);
  let [Total,setTotal]= useState(0)
  let [Gtotal,setGtotal]= useState(0)
  


  useEffect(()=>{
  if(state.cart.length>0){
    let check = 0
    let tax = 0
    let gT = 0
    state.cart.map((cart)=>{
      check= check + parseInt(cart.price)
      tax =0.05*check
      gT =tax+check
      setGtotal(gT)
      setTotal(check)
     return(
        {
          total:`${check}`,
          grandTotal:`${gT}`
        } 
     )
    })
  }
  },[state.cart])

  const showModal =()=>{
    console.log(state)
    dispatch({type:"DRAWER"})
    dispatch({type:"MODAL"})
  }

  const displayTrolley = () => {
    if (state.cart.length > 0) {
      return state.cart.map((cart) => (
        <div className="checkout-bottom">
          <div>
            <Avatar alt="product img" src={cart.image} />
          </div>
          <div>
            <p>in stock</p>
            <h3>{cart.name}</h3>
            <p>${cart.price}.00</p>
          </div>
        </div>
      ));
    } else {
      return (
        <div style={{
          textAlign:"center"
        }}>
          <h2>
          Your Cart is Empty
          </h2>
        </div>
      );
    }
  };
  const displayTotal = () => {
    return (
      <div className="checkout-total">
        <div>
          <span>Total:</span>
          <span>{Total}</span>
        </div>
        <div>
          <span>Tax</span>
          <span>5%</span>
        </div>
        <div>
          <span>Grand Total:</span>
    <span>{Gtotal}</span>
        </div>
        <Button variant="outlined" color="secondary" onClick={()=>showModal()}>
          Check Out
        </Button>
      </div>
    );
  };
  return (
    <div className="checkout-wrapper">
      <div
        className="checkout-top"
        style={{
          margin: "0 auto",
        }}
      >
        <h2>Trolley</h2>
      </div>
      <div
      style={{
        overflow:"scroll"
      }}
      >{displayTrolley()}</div>
      <div>{displayTotal()}</div>
    </div>
  );
};

export default Checkout;
