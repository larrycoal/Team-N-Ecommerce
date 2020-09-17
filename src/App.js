import React from "react";
import Home from "./Components/Home";
import "./Resources/Stylesheet.css";
import Featured from "./Components/Featured";
import Product from "./Components/Product";
import Drawer from "./Components/Drawer";
import Subscribe from "./Components/Subscribe";
import Modal from "./Components/Modal";
import { Context } from "./Store/useContext";
import { reducer,initialState} from "./Store/useReducer";
import { useReducer} from "react";

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
        <Home>
          <Featured />
          <Product/>
          <Subscribe/>
          <Drawer />
          <Modal/>
        </Home>
    </Context.Provider>
  );
};

export default App;
