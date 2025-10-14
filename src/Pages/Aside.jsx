import React from 'react';
import useCatagories from '../Utils/catagories';

const Aside = () => {

    const catagories = useCatagories()
    console.log(catagories)
    return (
        <div>
           {
          catagories.map(category=> {
            return(
            <div key={category.category_id} className='flex flex-col justify-center'>
                
                <p>{category.category_name}</p>
            </div>
            )
          })
           }
        </div>
    );
};

export default Aside;