import React,{useContext} from "react";
import { Context } from "../../Store/useContext";
import Showcase from "./Showcase";
import {sneakers,sneakers2,sneakers3,sneakers4} from '../../Resources/Data'
import Card from "./Card";



const Watches = () => {
  let { state } = useContext(Context);
    const showSneakers=()=>{
      let { productTwo } = state;
      if (productTwo === undefined) {
        return <div>loading</div>;
      }
      return productTwo.map((dress)=>(
        <Card
        height="350px"
        width="300px"
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
        height: "750px",
        margin:"20px"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "400px auto 400px",
          gridTemplateRows: "1fr 1fr",
          margin: "0 auto",
          width: "90vw",
          rowGap:"20px"
        }}
      >
        <div
          style={{
            gridColumn: "2",
            gridRow: "1/3",
            overflow:"hidden",
            
          }}
        >
          <Showcase
          bck1="https://images.unsplash.com/photo-1570688747103-4e3fba010eb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          bck2="https://images.unsplash.com/photo-1587502374328-2cd906d3bb0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          bck3="https://images.unsplash.com/photo-1570688747103-4e3fba010eb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          bck4="https://images.unsplash.com/photo-1587502374328-2cd906d3bb0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          prd1={sneakers}
          prd2={sneakers2}
          prd3={sneakers3}
          prd4={sneakers4}
          type="PRODUCT-TWO"
        />
        </div>
       {showSneakers()}
      </div>
    </div>
  );
};

export default Watches;
