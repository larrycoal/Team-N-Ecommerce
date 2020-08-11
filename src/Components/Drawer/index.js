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
        onClose={()=>{dispatch({type:"open-drawer"})}}
        onOpen={()=>{dispatch({type:"open-drawer"})}}
        >
            <Checkout/>
        </SwipeableDrawer>
    );
};

export default Drawer;