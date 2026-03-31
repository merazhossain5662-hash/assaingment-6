import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const NavDiv = () => {
  return (
    <div className=''>
      <div className="navbar bg-base-100 shadow-md py-1.5 px-8 pb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
      </ul>
    </div>
   <h1 className='text-4xl font-bold bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-transparent bg-clip-text'>DigiTools</h1>
  </div>
   <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end flex flex-row gap-2.5 text-lg text-black">
    <CiShoppingCart /><span>Login</span>
    <a className="btn text-lg p-3 bg-linear-to-r from-[#9514FA] to-[#4F39F6] rounded-4xl text-white">Get Started</a>
  </div>
</div>
    </div>
  );
};

export default NavDiv;