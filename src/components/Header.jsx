import React from "react";
import '../index.css'

function Header() {
  return (
    <div className="flex justify-center items-center bg-background2 p-3 ">
        <div className=" p-3 space-x-10">
            <a href="#" className="text-text1 hover:text-text2 hover:border-b">About</a> 
            {/* This is a comment inside JSX <div className="flexborder-l border-blue-700"></div>  */} 
            <a href="#" className="text-text1 hover:text-text2 hover:border-b">Skills</a>    
            <a href="#" className="text-text1 hover:text-text2 hover:border-b">Projects</a>     
            <a href="#" className="text-text1 hover:text-text2 hover:border-b">Contact Me</a>
            <a href="#" className="text-text1 hover:text-text2 hover:border-b">Socials</a>
        </div>
    </div>
  );
}

export default Header;
