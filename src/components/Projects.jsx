import React from 'react'
import Project from './Project'
import data from '../data/projects'

function Projects()
{
  return (
    <div className='flex-row h-auto min-h-[700px] w-screen bg-background2 text-center justify-center pt-12'>
        <h1 className=' font-kanit text-white text-6xl'>Projects</h1>
        
        <div className='flex flex-wrap justify-center mt-12'>
                {data.map(item => {
                 return(
                  <Project key={item.id} data={item}/>
                 )
                })}
               
        </div>
    </div>
  )
}

export default Projects