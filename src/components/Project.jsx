import React from 'react'
import img from '../assets/dental.png'
import Tag from './Tag'


function Project (props){
  
  const project=props.data;
  
  return (
    <div className='mt-8 mb-8 mx-12 h-[400px] w-[300px] bg-gray-700 rounded-3xl transition-transform hover:scale-105 hover:bg-slate-600'>
      <div className='justify-center items-center align-middle flex'>
        <img src={project.image} className='w-[290px] h-[250px] m-1 rounded-t-3xl' />
      </div>

      <div class="w-[280px] leading-6 justify-center items-center align-middle flex-col">
        <h1 class='text-white text-2xl font-outfit'>{project.title}</h1>
        <p className='text-justify mx-3 text-slate-300'>{project.desc}</p>
      </div>
    </div>

  )
}

export default Project