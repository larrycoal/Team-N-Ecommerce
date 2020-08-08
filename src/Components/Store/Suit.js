import React from 'react';
import Cards from './Cards'
import {suitData} from '../../misc/utils'


const Suit = () => {
    return (
        <div className="suit_wrapper">
            <div className="header">
                <h3>Bespoke suits</h3>
            </div>
                <Cards
                suitData={suitData}
                />
        </div>
    );
};

export default Suit;