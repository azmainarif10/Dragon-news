import React from 'react';
import Aside from './Aside';
import RightSide from '../Components/RightSide';
import Card from './Card';
import useSelected from '../Utils/selected';

const Home = () => {
       const selected = useSelected()
    return(

       
        <div>
           <div className='w-11/12 flex mx-auto gap-8 mt-4'>
            
            <div className='w-3/12  '>
              <p className='text-2xl font-medium ml-2'>All catagory</p>
            <div className='flex'>
      
                <Aside /></div> 
            </div>
            <div className='w-6/12'>
            <p className='text-3xl font-bold mb-2.5'>This Catagory News:{selected.length}</p>
            <Card />
            </div>
            <div className='w-3/12'>
           
            <RightSide />
            </div>
           
           </div>
        </div>
    );
};

export default Home;