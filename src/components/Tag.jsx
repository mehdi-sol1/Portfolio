import React from 'react'

export default function Tag(props) {
    const tag=props;
  return (
    <div className='rounded-full blorder border-1 bg-slate-500 hover:bg-blue-500 font-albert text-white'>
        {tag}
    </div>
  )
}
