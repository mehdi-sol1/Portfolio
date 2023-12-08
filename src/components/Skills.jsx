import React from 'react';
import skills from '../data/skills'
import Skill from './Skill';

function Skills() {
  return (
   <div className='flex flex-col items-center justify-center h-auto min-h-[500px] bg-background1 text-center py-5'>
      <h1 className='font-kanit text-white text-6xl mb-8'>Skills</h1>

      <div className='flex flex-wrap justify-center items-center w-[300px] md:w-[700px]'>    
        {skills.map(item => {
          return(
            <Skill key={item.id} data={item}/>
          )
        })}
      </div>
    </div>

  );
}

export default Skills;
