import React from "react";
import '../index.css'
import { useState } from "react";
import {IoLogoDesignernews} from"react-icons/io"
import {TfiMenu} from"react-icons/tfi"
import {AiOutlineClose} from"react-icons/ai"
import {BsLinkedin,BsGithub} from "react-icons/bs"
import {RiTwitterXLine} from "react-icons/ri"

function Header() {
  const [nav,setNav]=useState(false)
  const navchange = () => (setNav(!nav))
  return (
    <div className="flex w-full h-[80px] justify-between items-center bg-background2   p-4 "> 
          
          <div className="p-6">
             <IoLogoDesignernews className="text-white p-2 rounded  bg-blue-500 " size={50}/>
          </div>
          {/* dekstop */}
          <div className="hidden uppercase md:flex ">          
              <a href="#" className="text-text1 hover:text-sky-500  font-bold hover:border-b px-5 py-2">Skills</a>    
              <a href="#" className="text-text1 hover:text-sky-500  font-bold hover:border-b px-5 py-2">About</a> 
              <a href="#" className="text-text1 hover:text-sky-500  font-bold hover:border-b px-5 py-2">Projects</a>     
              <a href="#" className="text-text1 hover:text-sky-500  font-bold hover:border-b px-5 py-2">Contact Me</a>
              <a href="#" className="text-text1 hover:text-sky-500  font-bold hover:border-b px-5 py-2 ">Socials</a>     
          </div>
          
          <div onClick={navchange} className="flex p-6 md:hidden z-10">
             {nav ?   <AiOutlineClose className="text-white" size={20 } /> : <TfiMenu className="text-white" size={20 } /> }
          </div>       

           {/* mobile */}
          {/* <div className="flex absolute align-middle justify-center top-[50%] left-0 w-full h-screen "> */}
          <div className= {!nav ? "hidden":"absolute top-0 left-0 w-full h-screen bg-background1 flex  justify-center items-center z-9"}>
              <ul className="space-y-6 uppercase ">
                <li><a href="#" className="text-text1 hover:text-sky-500 font-bold text-4xl ">About</a></li>
                <li><a href="#" className="text-text1 hover:text-sky-500 font-bold text-4xl ">Skills</a></li>
                <li><a href="#" className="text-text1 hover:text-sky-500 font-bold text-4xl ">Projects</a></li>
                <li><a href="#" className="text-text1 hover:text-sky-500 font-bold text-4xl ">Contact Me</a></li>
                <li><a href="#" className="text-text1 hover:text-sky-500 font-bold text-4xl ">Socials</a></li>
              </ul>
            </div>

            {/* SOCIAL ICONS */}
            <div className={nav ? "hidden" : " flex fixed top-[35%] left-0"}>
              <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center bg-blue-600 ml-[-100px] hover:ml-[0px] duration-500" >
                  <a target="_blank" href="https://www.linkedin.com/in/mehdeddine-soltani/" className="flex justify-between items-center w-full text-white p-5 font-bold">
                        LinkedIn <BsLinkedin className="text-white" size={20} />
                  </a>
                </li>

                <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#1B1B1B] ml-[-100px] hover:ml-[0px] duration-500" >
                  <a target="_blank" href="https://github.com/mehdi-sol1" className="flex justify-between items-center w-full text-white p-5 font-bold">
                        Github <BsGithub className="text-white" size={20} />
                  </a>
                </li>

                <li className="w-[160px] h-[60px] flex justify-between items-center bg-white ml-[-100px] hover:ml-[0px] duration-500" >
                  <a target="_blank" href="https://twitter.com/Mehdeddine_Dev" className="flex justify-between items-center w-full text-black p-5 font-bold">
                        Twitter <RiTwitterXLine className="text-black" size={20} />
                  </a>
                </li>

              </ul>
            </div>
    </div>

  );
}

export default Header;
