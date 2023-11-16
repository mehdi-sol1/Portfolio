import React from 'react'
import about from '../assets/about.png'


function About () {
  return (
        <div className="flex h-screen w-screen bg-background2 text-center justify-between">

            <div className="hidden  md:flex ">
                    <img src={about} alt="Hero Image" className="pt-20 mx-10 w-[650px] h-[650px] " />
            </div>
            
            <div className='text-white  md:w-[50%] md:mr-16  mt-44 '>
              <h1 className=' font-kanit text-6xl'>About Me</h1>
              <p className='mt-16 px-8 font-pt  text-xl'>
                I am a passionate Network Engineering graduate with a solid foundation
                 in computer science. I am also an accomplished React developer with 
                 expertise in creating dynamic web applications. Ipossess strong
                  creative and analytical skills. I use diverse technical knowledge 
                  to solve complex problems
              </p>
            </div>

            
        </div>  
  )
}

export default About