import React,{useContext} from 'react';
import { SwipeableDrawer } from "@material-ui/core";
import {Context} from "../../Store/useContext"

import Checkout from './Checkout'

const Drawer = () => {
let {state,dispatch} =useContext(Context)
    return (
        <SwipeableDrawer 
        anchor="right" 
        open={state.open}
        onClose={()=>{dispatch({type:"DRAWER"})}}
        onOpen={()=>{dispatch({type:"DRAWER"})}}
        >
            <Checkout/>
        </SwipeableDrawer>
    );
};

export default Drawer;