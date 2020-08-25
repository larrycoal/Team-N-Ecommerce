import React from "react";
import Home from "./Components/Home";
import "./Resources/Stylesheet.css";
import Featured from "./Components/Featured";
//import Store from "./Components/Store";
import Drawer from "./Components/Drawer";
import { Context } from "./Store/useContext";
import { reducer,initialState} from "./Store/useReducer";
import { useReducer} from "react";

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div>
        <Home>
          <Featured />
          <Drawer />
        </Home>
      </div>
    </Context.Provider>
  );
};

export default App;
