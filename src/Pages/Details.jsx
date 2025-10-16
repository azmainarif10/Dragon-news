import React, { useEffect } from 'react';
import RightSide from '../Components/RightSide';
import useDetail from '../Utils/details';
import { Link } from 'react-router';

const Details = () => {
   
     useEffect(()=>{
        window.scrollTo(0,0)
     },[])
    const details = useDetail()
    return (
        <div>
            <div className='w-11/12 mx-auto gap-5 flex '>
            
            <div className='w-8/12 mt-3'>

              {

         details.map(detail=>{
                 return (
                     <div className='w-full'>
                <img className='w-full' src={detail.image_url} alt="" />
                <p className='py-3.5'>{detail.details}</p>
               <Link to={'/'}> <button className='btn bg-red-500 text-white'>  All News in this category</button></Link>  
               </div>
            
                 )
              })
              
             }
              </div>
            <div className='w-3/12 mt-3'>
             <RightSide></RightSide>
            </div>
            
            </div>
             
        </div>
    );
};

export default Details;