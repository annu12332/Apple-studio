import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-blue-950 shadow-sm">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-xl bg-black text-white"> <img className='w-[30px]' src={'logo.png'} alt="" />Apple Studio<sup className='text-xs'>BD</sup></a>
                </div>

                <div className="navbar-end">
                    <a className="btn rounded-full px-7 py-1 text-white border-3 border-[#7C83D3] bg-[#7C83D3] shadow-[0_0_25px_rgba(124,131,211,0.9)] 
  hover:shadow-[0_0_30px_rgba(124,131,211,0.9)] text-lg font-bold ">Buy Now </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;