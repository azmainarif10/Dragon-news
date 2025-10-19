import React, { useState } from 'react';

const Header = () => {
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
        </div>
    );
};

export default Header;