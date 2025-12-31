import React from 'react';

import logoImg from '../../assets/logo.png'
import coinImg from '../../assets/pngtree-a-golden-dollar-coin-clipart-png-image_15741054.png'
const NavBar = () => {
    return (
        <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <img src={logoImg} alt="" className='w-[60px]'/>
  </div>
  <div className="">
    <button className='btn flex items-center gap-2'>
      <span className="font-semibold ">600000000</span>
    <span className='font-semibold'>Coin</span>
    <img  src={coinImg} alt="" style={{
      width:"30px"
    }} />
    </button>
  </div>
</div>
    );
};

export default NavBar;