import React from 'react';
import Card from './Card'
import Showcase from './Showcase'
const Dress = () => {
    return (
        <div className="dress-wrapper">
            <div className="dress-model">
                <Showcase
                bck1="https://images.unsplash.com/photo-1583077873282-81173f513d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                bck2="https://images.unsplash.com/photo-1553816078-25e0948140f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
            </div>
            <div className="dress-cards">
                <Card
                height="350px"
                width="300px"
                url="https://res.cloudinary.com/dbdrtuscd/image/upload/v1598539037/product4_m2ngy8.png"
                />
                <Card
                 height="350px"
                 width="300px"
                 url="https://res.cloudinary.com/dbdrtuscd/image/upload/v1598539029/product2_sj7ks6.png"
                />
                <Card
                 height="350px"
                 width="300px"
                 url="https://res.cloudinary.com/dbdrtuscd/image/upload/v1598538909/product1_lp6n7f.png"
                />
            </div>
        </div>
    );
};

export default Dress;