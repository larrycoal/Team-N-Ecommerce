import React from 'react';
import Dress from './Dress'
import Best from './Best'
import Sneakers from './Sneakers'
const Product = () => {
    return (
        <div className="product-wrapper">
            <div className="product-content">
                <Dress/>
                <Best/>
                <Sneakers/>
            </div>
        </div>
    );
};

export default Product;