import React from "react";
import reviews from "./data";
import Testimonial from "./Components/Testimonial"
import {useState} from "react"
const App = () => {
  return (
    <div className="App w-[100vw] flex flex-col h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-yellow-400 h-[4px] w-1/5 mt-1"></div>
        <Testimonial reviews={reviews}/>
      </div>
     


    </div>
  )
};

export default App;
