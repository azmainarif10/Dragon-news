import React, { use } from 'react';
import { FaBookmark, FaEye, FaShare, FaStar, } from 'react-icons/fa';
import useSelected from '../Utils/selected';
import { AuthContext } from './AuthContext';
import { Link } from 'react-router';

const Card = () => {
      const {selectedCatagories} = use(AuthContext)
    
    const selected = useSelected()
    
   
     const filteredNews = selectedCatagories === 0 
     ? selected
     
     : selected.filter(select=>select.category_id == selectedCatagories)
    return (

       

            filteredNews.map(select=>{
       return(
        <div key={select.id}>
           
            <div className="flex w-full flex-col mb-6 border-[1px] border-gray-400 rounded-sm ">
  <div className=" py-3 grid h-17">
        
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 ml-3'>
                    <div className="w-10 rounded-full">
                   <img
                  className='rounded-full'
                  alt="Tailwind CSS Navbar component"
                   src={select.author.img} />
                     </div>

                     <div>
                        <p>{select.author.name}</p>
                        <p>{select.author.published_date}</p>
                     </div>
                </div>
                <div className='flex gap-2 mr-3'>
                    <FaBookmark/>
                    <FaShare />
                </div>
            </div>
        </div>
  </div>
  <div>
    <hr className='text-gray-400'></hr>
    <div className="shadow-sm">
  <div className="card-body">
  
    <p className='text-[20px] font-medium'>{select.title}</p>
  </div>
    
    <div className='mx-8  '>
          <img
          className='rounded-xl'
      src={select.image_url}
      alt="Shoes" />
    </div>
  
 
        <p className='py-3 px-2.5'>
            
            {
            select.details.length>200
            ?`${select.details.slice(0,200)}....` :
                  select.details  }
        <Link to={`/details/${select.id}`} className='text-blue-600 underline' > Read More </Link>  
                  </p>

</div>
  </div>
  <hr className='text-gray-400' />
  <div className=" grid h-12 mt-1 ">
     
     <div className='flex justify-between items-center'>

        <div >
            <div className='flex gap-2 items-center ml-3'>
                 <FaStar className='text-orange-500' />
             <FaStar className='text-orange-500' />
             <FaStar className='text-orange-500' />
             <FaStar className='text-orange-500' />
             <FaStar  className='text-orange-500' />
            <p>{select.rating.number}</p>
            </div>
            
        </div>
        <div className='flex  gap-2 items-center mr-3'>
           <FaEye />
           <p>{select.total_view}</p>
        </div>
     </div>

   </div>
</div>
        </div>
       )
            })
        
    );
};

export default Card;