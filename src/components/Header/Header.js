import React from 'react';
import Logo from "./Logo/Logo";
import MakeAnAppointment from "./MakeAnAppointment/MakeAnAppointment";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <Logo/>
           <MakeAnAppointment/>
        </div>
    );
};

export default Header;