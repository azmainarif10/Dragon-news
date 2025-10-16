import React, { use } from 'react';
import useCatagories from '../Utils/catagories';
import { AuthContext } from './AuthContext';

const Aside = () => {

    const catagories = useCatagories()
   
    const {setSelectedCatagories} = use(AuthContext)
    return (
        <div>
           {
          catagories.map(category=> {
            return(
                
            
            <div onClick={()=>{setSelectedCatagories(category.category_id)}}  key={category.category_id} className='flex flex-col  justify-center'>
                
                <p  className='mt-3'>{category.category_name}</p>
            </div>
           
            
            )
          })
           }
        </div>
    );
};

export default Aside;