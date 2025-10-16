import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Pages/AuthContext';

const Navbar = () => {

  const {user,logOut} = use(AuthContext)
    const[currentDate] =  useState(new Date())
       
    const formatedDate = currentDate.toLocaleDateString("en-US",{
   weekday:"long",
   month:"long",
    day:"numeric",
    year:"numeric"
    })

    return (
        <div>
             <img className='mx-auto mt-4' src="/logo.png" alt="" />
              <p className='text-center text-lg mt-2'>Journalism Without Fear or Favor</p>
               <p className='text-center text-2xl mt-2'>{formatedDate}</p>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to={'/'}> Home </Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/career'}>Career</Link>
      </ul>
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-4 px-1">
        <Link to={'/'}> Home </Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/career'}>Career</Link>
    </ul>
  </div>
  <div className="navbar-end">
    
    
   {
    user ? (<Link onClick={logOut} className="btn mr-10"> Logout </Link>) :(<Link to={'/login'} className="btn mr-10">Login </Link>)
   }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;