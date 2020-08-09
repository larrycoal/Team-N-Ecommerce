import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const Footer = () => {
    return (
       <footer className="footer_wrapper">
           <div>
            <ul>
                <h2>Customer service</h2>
                <li>
                    <a href="/">Contact us</a>
                </li>
                <li>
                    <a href="/">FAQ</a>
                </li>
                <li>
                <a href="/">Return Policy</a>
                </li>
            </ul>
           </div>
           <div>
            <ul>
            <h2>About Hova's</h2>
                <li>
                    <a href="/">About us</a>
                </li>
                <li>
                    <a href="/">Sustanability</a>
                </li>
                <li>
                <a href="/">Vacancy</a>
                </li>
            </ul>
           </div>
           <div>
            <ul>
            <h2>Coporate Informations</h2>
                <li>
                    <a href="/">Terms and Conditions</a>
                </li>
                <li>
                    <a href="/">Store</a>
                </li>
                <li>
                <a href="/">Privacy Policy</a>
                </li>
            </ul>
           </div>
           <div>
            <h2>Subscribe to Our News Letter</h2>
            <form >
            <TextField  id="standard-basic" label="Email" color="secondary" />
            <Button size="medium">
                 Subscribe
            </Button>
            </form>
           </div>
       </footer>
    );
};

export default Footer;