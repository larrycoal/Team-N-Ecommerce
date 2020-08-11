import React, { useContext } from "react";
import { Context } from "../../Store/useContext";
import { Avatar} from "@material-ui/core";
const Checkout = () => {
  let { state } = useContext(Context);

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
      return <div>empty</div>;
    }
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
      <div>{displayTrolley()}</div>
      <div>total</div>
    </div>
  );
};

export default Checkout;
