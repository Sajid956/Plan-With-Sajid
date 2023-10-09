import React from 'react'
import { useState } from 'react';

export const Card = (toursData) => {

  const [readmore, setReadmore] = useState(false);
  const description = readmore ? toursData.info : `${toursData.info.substring(0, 200)}....`;

  function clickHandler () {
   setReadmore(!readmore);
  }
    
  return (
    <div className='w-[400px] h-max p-[10px] border-[2px] flex flex-col gap-2 shadow-md shadow-gray-200 rounded-lg'>
        <img src= {toursData.image} alt='cardImage' className='h-[380px] object-cover' />
        <p className='text-2xl font-bold text-green-600 mt-2'>₹ {toursData.price}</p>
        <h2 className='text-[1.7rem] font-bold -mt-2'>{toursData.name}</h2>
        <p>{description} <span className='cursor-pointer text-[#12b0e8]' onClick={clickHandler}>{readmore ? 'Show Less' : 'Read More'}</span></p>

        <button className=' w-[70%] mx-auto mt-[2rem] text-[18px] font-bold tracking-wide bg-red-100 border-red-800 border-[1px] rounded-lg py-1 hover:bg-red-500 hover:text-white' onClick={() => toursData.removeCardHandler(toursData.id)}>Not Interested</button>
    </div>
  )
}
