import React from 'react'

export const RefreshPage = (props) => {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-6'>
        <h1 className='text-2xl font-extrabold'>No Tours left</h1>
        <button className='px-[4.2rem] py-2 rounded bg-gray-200 cursor-pointer hover:bg-gray-300' onClick={props.refreshHandler}>Refresh</button>
    </div>
  )
}
