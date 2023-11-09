import React from "react";
import '../index.css'
import Typed from "react-typed"
import hero from '../assets/hero.png'

function Body(){
    return(
        < >
            <div className='flex w-full h-screen mx-auto text-center  justify-center bg-background1'>
            
               
                <div className="flex flex-col align-middle mt-44 mb-8 mx-20 p-8">
                    
                    <p className="text-yellow-400 text-2xl font-roboto">Hi, my name is</p>
                    
                    <div className="flex flex-row my-8 font-poppin">
                            <h1 className="md:text-6xl   text-4xl font-bold antialiased text-white">Soltani</h1>
                            <h1 className="md:text-6xl   text-4xl font-bold antialiased text-blue-600">Mehdeddine</h1>                                                                   
                    </div>
                    
                    <div className="flex text-white my-8 text-2xl font-kanit">
                        <p>a
                        <Typed className="text-blue-600" strings={[' Productive ',' Talented ',' Creative ']} typeSpeed={200} backSpeed={150} loop/>
                            Web Developer and a network engineer
                        </p>
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