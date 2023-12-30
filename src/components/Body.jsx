import React from "react";
import "../index.css";
import Typed from "react-typed";
import { ImProfile } from "react-icons/im";
import { BsArrowDownCircle } from "react-icons/bs";

function Body() {
  return (
    <>
      <div className="flex w-screen h-screen mx-auto text-center justify-center bg-background1">
        {/* Blob 1 */}
        <div className="absolute mix-blend-lighten blur-3xl animate-blob top-[35%] left-[50%] transform  w-72 h-72 bg-purple-400 rounded-full z-0 glow opacity-25"></div>
        {/* Blob 2 */}
        <div className="absolute mix-blend-lighten blur-3xl animate-blob2 top-[50%] left-[35%] transform  w-72 h-72 bg-green-300 rounded-full z-0 glow opacity-25"></div>
        {/* Blob 3 */}
        <div className="absolute mix-blend-lighten blur-3xl animate-blob3 top-[25%] left-[35%] transform w-72 h-72 bg-blue-300 rounded-full z-0 glow opacity-25"></div>

        <div className="flex flex-col align-middle mt-44 mb-8 mx-20 p-8">
          <p className="text-yellow-400 text-2xl font-roboto">Hi, my name is</p>

          <div className="flex flex-row my-2 font-poppin">
            <h1 className="md:text-6xl text-4xl font-bold antialiased text-white">Soltani</h1>
            <h1 className="md:text-6xl text-4xl font-bold antialiased text-blue-600">Mehdeddine</h1>
          </div>

          <div className="md:flex flex-row text-white my-8 text-xl font-kanit">
            <p>I am a </p>
            <Typed className="text-blue-600 text-xl mx-2" strings={[" Productive ", " Talented ", " Creative "]} typeSpeed={200} backSpeed={150} loop />
            <p className=""> Web Developer and a network engineer</p>
          </div>

          <div className="flex justify-center">
            <button className="flex bg-gradient-to-r from-indigo-600 to-blue-500 mx-4 p-4 rounded-xl">
              <span className="text-white px-4 ">Download resume</span>
              <ImProfile className="text-white" size={22} />
            </button>

            <button className="flex align-middle border-2 p-4 rounded-xl border-blue-600">
              <span className="text-white px-4">Get in Contanct</span>
              <BsArrowDownCircle className="text-white" size={22} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
