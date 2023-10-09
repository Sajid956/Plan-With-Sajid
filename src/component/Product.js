import React from 'react';
import { Card } from './Card';

export const Product = (props) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-10'>
        <h1 className='text-[3.2rem] font-extrabold border-dashed border-blue-900 rounded-2xl border-[7px] px-[4.8rem] py-[0.3rem]  mt-[3rem]'>Plan With Sajid</h1>

        <div className='max-w-[1300px] flex justify-center flex-wrap gap-6 mt-[15px] mb-[18px]'>
            {
                props.temp.map(toursData => {
                    return (<Card key = {toursData.id} {...toursData} removeCardHandler = {props.removeCardHandler}></Card>)
                })
            }
        </div>
    </div>
  )
}
