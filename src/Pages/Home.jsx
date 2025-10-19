import React, { use } from 'react';
import Aside from './Aside';
import RightSide from '../Components/RightSide';
import Card from './Card';
import useSelected from '../Utils/selected';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

import Marquee from "react-fast-marquee";
import { AuthContext } from './AuthContext';

const Home = () => {
       const selected = useSelected()
        const {selectedCatagories} = use(AuthContext)

   const filteredNews = selectedCatagories === 0 
     ? selected
     
     : selected.filter(select=>select.category_id == selectedCatagories)
  
    return(

          <>

          <Header />
          <div className='bg-base-200 flex w-11/12 mx-auto items-center gap-3 mt-2.5'>
             
             <button className='btn bg-[#D72050] text-white'>Latest</button>
              <Marquee pauseOnHover={true} speed={70} >
               <div className='flex gap-10'>
                    <p className='text-xl font-bold'>
                
                Shaquille O’Neal auctions a 1000 size 22 Reeboks for $999.32 each!
             </p>
               <p className='text-xl font-bold'>
                
                Shaquille O’Neal auctions a 1000 size 22 Reeboks for $999.32 each!
             </p>
               </div>
               

              </Marquee>
           
          </div>
          <Navbar ></Navbar>
        <div>
           
           <div className='w-11/12 flex mx-auto gap-8 mt-4'>
            
            <div className='w-3/12  sticky top-0 h-fit'>
              <p className='text-2xl font-medium ml-2'>All catagory</p>
            <div className='flex'>
      
                <Aside  /></div> 
            </div>
            <div className='w-6/12'>
            <p className='text-3xl font-bold mb-2.5'>This Catagory News:{filteredNews.length}</p>
            <Card />
            </div>
            <div className='w-3/12 sticky top-0 h-fit'>
           
            <RightSide />
            </div>
           
           </div>
        </div>
        </>
    );
};

export default Home;