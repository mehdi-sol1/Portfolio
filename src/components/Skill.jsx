import React from 'react'
import img from '../assets/c.png'

export default function (props) {
    const data=props.data;
  return (
    <div className='flex w-[120px] h-[120px] bg-gray-800 rounded-2xl items-center justify-center m-2 transition-transform hover:scale-125 hover:bg-white'>
        <img src={data.image} className='w-[90px] h-[90px] m-1 rounded-t-3xl' />
        <div className='hidden group-hover:block'>
        {/* Additional content you want to render on hover */}
        <p className='text-white'>This content appears on hover!</p>
      </div>
    </div>
  )
}
