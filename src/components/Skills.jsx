import React from 'react';
import c from '../assets/c.png';
import reactt from '../assets/react.png';
import reactn from '../assets/reactn.png';
import tailwind from '../assets/tailwind.png';
import html from '../assets/html.png';

function Skills() {
  return (
    <div className='flex w-full h-screen text-center justify-center bg-background1 text-white'>
      <div className='mt-20'>
        <h1 className='text-6xl font-poppin'>skills</h1>
      </div>

      <div className='w-full mx-8  overflow-hidden'>
        <div className='flex items-center gap-36 h-80 animate-tape'>
          <img src={c} alt='Hero Image' className='w-[150px] h-[150px]' />
          <img src={tailwind} alt='Hero Image' className='w-[150px] h-[150px]' />
          <img src={reactt} alt='Hero Image' className='w-[150px] h-[150px]' />
          <img src={reactn} alt='Hero Image' className='w-[150px] h-[150px]' />
          <img src={html} alt='Hero Image' className='w-[150px] h-[150px]' />
        </div>
      </div>
    </div>
  );
}

export default Skills;
