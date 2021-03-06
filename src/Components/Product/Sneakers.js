import React,{useContext} from "react";
import { Context } from "../../Store/useContext";
import Showcase from "./Showcase";
import {sneakers,watches,shoes,bags} from '../../Resources/Data'
import Card from "./Card";

import { Zoom } from "react-reveal";

const Watches = () => {
  let { state } = useContext(Context);
    const showSneakers=()=>{
      let { productTwo } = state;
      if (productTwo === undefined) {
        return <div>loading</div>;
      }
      return productTwo.map((dress)=>(
        <Card
        height="14em"
        width="12em"
        url={dress.url}
        designer={dress.designer}
        desc={dress.desc}
        price={dress.price}
        class="product-card"
        title={dress.title}
        />
      ))
    }
  return (
    <div
      className="watches-wrapper"
      style={{
        margin:"20px"
      }}
    >
      <div className="sneaker">
        <div
        className="display">
        <Zoom>
        <Showcase
          bck1="https://images.unsplash.com/photo-1570688747103-4e3fba010eb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          bck2="https://images.unsplash.com/photo-1565250026886-ec2964652258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          bck3="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          bck4="https://images.unsplash.com/photo-1554342597-bfd585b46463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          prd1={sneakers}
          prd2={watches}
          prd3={shoes}
          prd4={bags}
          type="PRODUCT-TWO"
          store1="SNEAKERS"
          store2="WATCHES"
          store3="SHOES"
          store4="BAGS"
        />
        </Zoom>
        </div>
       {showSneakers()}
      </div>
    </div>
  );
};

export default Watches;
