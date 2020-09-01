import React from 'react';
import Dress from './Dress'
import Best from './Best'

const Product = () => {
    return (
        <div className="product-wrapper">
            <div className="product-content">
                <Dress/>
                <Best/>
            </div>
        </div>
    );
};

export default Product;