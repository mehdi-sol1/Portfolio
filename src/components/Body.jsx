import React from "react";
import '../index.css'
import Typed from "react-typed"
import hero from '../assets/hero.png'
import {ImProfile} from "react-icons/im"
import {BsArrowDownCircle} from "react-icons/bs"

function Body(){
    return(
        < >
            <div className='flex w-screen h-screen mx-auto text-center  justify-center bg-background1'>
            
               
                <div className="flex flex-col align-middle mt-44 mb-8 mx-20 p-8">
                    
                    <p className="text-yellow-400 text-2xl font-roboto">Hi, my name is</p>
                    
                    <div className="flex flex-row my-2 font-poppin">
                            <h1 className="md:text-6xl   text-4xl font-bold antialiased text-white">Soltani</h1>
                            <h1 className="md:text-6xl   text-4xl font-bold antialiased text-blue-600">Mehdeddine</h1>                                                                   
                    </div>
                    
                    <div className="md:flex flex-row text-white my-8 text-xl font-kanit">
                        <p>I am a </p>
                        <Typed className="text-blue-600 text-xl mx-2" strings={[' Productive ',' Talented ',' Creative ']} typeSpeed={200} backSpeed={150} loop/>
                          <p className="">  Web Developer and a network engineer</p>
                        
                    </div> 
                    <div className="flex">
                            <button className="flex bg-gradient-to-r from-indigo-600 to-blue-500 mx-4 p-4 rounded-xl ">
                                <span className="text-white px-4 ">Download resume</span>
                                <ImProfile className="text-white" size={22} />
                            </button>
                       
                            <button className="flex align-middle border-2 p-4 rounded-xl border-blue-600">
                                <span className="text-white px-4">Get in Contanct</span>
                                <BsArrowDownCircle className="text-white" size={22} />
                            </button>                      
                    </div>
                </div>

                <div className="hidden h-screen w-full md:flex">
                    <img src={hero} alt="Hero Image" className="pt-20 w-[650px] h-[650px] " />
                </div>
            </div>
        </>
    )
}

export default Body;