import React from 'react';
import Logo from "./Logo/Logo";
import MakeAnAppointment from "./MakeAnAppointment/MakeAnAppointment";
import './Header.css'

const Header = (props) => {
    return (
        <div className='header'>
            <Logo/>
            <MakeAnAppointment onChange={props.onChange}/>
        </div>
    );
};

export default Header;