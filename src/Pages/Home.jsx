import React from 'react';
import Aside from './Aside';

const Home = () => {
    
    return(

       
        <div>
           <div className='w-11/12 flex mx-auto gap-8 mt-4'>
            
            <div className='w-3/12  bg-green-600'>

            <div className='flex justify-center'><Aside /></div> 
            </div>
            <div className='w-6/12 bg-blue-600'>Esrat</div>
            <div className='w-3/12 bg-pink-500'>Esha</div>
           
           </div>
        </div>
    );
};

export default Home;