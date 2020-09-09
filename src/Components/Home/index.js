import React, { useContext } from 'react';
import Header from '../header_footer/Header'
import Footer from '../header_footer/Footer'
import { Context } from "../../Store/useContext";


const Home = (props) => {
    let { state } = useContext(Context);
    const mode = ()=>{
        return state.dmode? "white":"black"
    }
    return (
        <div style={{
            backgroundColor:`${mode()}`,
        }}
        className="main-wrapper"
        >
            <Header/>
             {props.children}
            <Footer/>
        </div>
    );
};

export default Home;