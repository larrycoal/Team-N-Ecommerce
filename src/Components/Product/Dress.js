import React, { useContext } from "react";
import Card from "./Card";
import Showcase from "./Showcase";
import {hova,dress,suit,jeans} from '../../Resources/Data'
import { Context } from "../../Store/useContext";

const Dress = () => {
  let { state } = useContext(Context);

  const showDress = () => {
    let { product } = state;
    if (product === undefined) {
      return <div>loading</div>;
    }
    return product.map((dress) => (
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
    ));
  };
  return (
    <div className="dress-wrapper">
      <div className="dress-model">
        <Showcase
          bck1="https://res.cloudinary.com/dbdrtuscd/image/upload/v1598909785/Screenshot_2020-08-31_at_3.32.34_PM_z4qup9.png"
          bck2="https://images.unsplash.com/photo-1583077873282-81173f513d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          bck3="https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          bck4="https://images.unsplash.com/photo-1510649258574-b0be6c7ab447?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          prd1={hova}
          prd2={dress}
          prd3={suit}
          prd4={jeans}
          type="PRODUCT"
        />
      </div>
      <div className="dress-cards">{showDress()}</div>
    </div>
  );
};

export default Dress;
