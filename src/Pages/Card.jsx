import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="flex w-full flex-col">
  <div className="   grid h-20 place-items-center">content</div>
  <div>
    <div className="shadow-sm">
  <div className="card-body">
  
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
    
    <div className='mx-8'>
          <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
    </div>
  
 
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

</div>
  </div>
  <div className=" grid h-20 place-items-center">content</div>
</div>
        </div>
    );
};

export default Card;