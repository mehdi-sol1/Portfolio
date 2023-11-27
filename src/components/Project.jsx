import React from 'react'
import img from '../assets/dental.png'

const Project = () => {
  return (
    <div className='mt-8 mx-12 h-[400px] w-[300px] bg-gray-700 rounded-3xl transition-transform hover:scale-105 hover:bg-slate-600'>
      <div className='justify-center items-center align-middle flex'>
        <img src={img} className='w-[290px] h-[250px] m-1 rounded-t-3xl' />
      </div>

      <div class="w-[280px] leading-6 justify-center items-center align-middle flex-col">
        <h1 class='text-white text-3xl font-outfit'>Dental Clinic</h1>
        <p className='text-justify mx-3 text-slate-300'>Created a Management system that helps dental clinic to manage their patients, staff, medicines, and all related documents of the patients</p>
      </div>
    </div>

  )
}

export default Project