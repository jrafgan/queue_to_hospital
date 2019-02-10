import React from 'react';
import LeftFooter from "./LeftFooter/LeftFooter";
import RightFooter from "./RightFooter/RightFooter";
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <LeftFooter/>
            <RightFooter/>
        </div>
    );
};

export default Footer;