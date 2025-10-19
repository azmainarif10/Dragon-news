import React, { use } from 'react';
import useCatagories from '../Utils/catagories';
import { AuthContext } from './AuthContext';
import { NavLink } from 'react-router';

const Aside = () => {

    const catagories = useCatagories()
   
    const {setSelectedCatagories} = use(AuthContext)
    return (
        <div className='flex flex-col gap-2'>
           {
          catagories.map(category=> {
            return(
                
            
            <NavLink onClick={()=>{setSelectedCatagories(category.id)}}  key={category.id} className='flex btn border-0 gap-6 flex-col  justify-center'>
                
                <p>{category.name}</p> 
                </NavLink> 
           
           
            
            )
          })
           }
        </div>
    );
};

export default Aside;