import React from "react";
import Showcase from "./Showcase";
import {sneakers} from '../../Resources/Data'
import Card from "./Card";
const Watches = () => {

    const settings={
        effect: 'flip',
        grabCursor: true,
    }
    const showSneakers=()=>{
      return sneakers.map((dress)=>(
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
          settings={settings}
        />
        </div>
       {showSneakers()}
      </div>
    </div>
  );
};

export default Watches;
