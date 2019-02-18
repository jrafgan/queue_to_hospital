import React from 'react';
import bishkekGerb from '../../assets/bishkek_gerb.png'

const Logo = () => {
    return (
        <div className='logo'><img className='gerb' src={bishkekGerb} alt='Bishkek Gerb' /></div>
    );
};

export default Logo;