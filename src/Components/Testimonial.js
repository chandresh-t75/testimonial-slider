import Card from "./Card"
import {useState} from "react"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Testimonial = (props) => {
   let reviews = props.reviews;
   
   const [initial,setInitial]=useState(0);
   function leftClick(){
      
      if(initial-1<0){
         setInitial(reviews.length-1);
      }
     else{
          setInitial(initial-1);
     }
      
   
   }
   function rightClick(){
      if(initial+1>=reviews.length){
         setInitial(0);
      }
     else{
          setInitial(initial+1);
     }
   }
   function surpriseClick(){
      let randomIndex= Math.floor(Math.random()*reviews.length);
      setInitial(randomIndex);
   }

   return (
      <div className="w-[85vw] md:-[700px] bg-black flex flex-col justify-center rounded-xl items-center mt-10 p-2 md:p-10  transition-all duration-500   hover:shadow-md hover:shadow-green-500">

         <Card review={reviews[initial]}></Card>


         <div className="flex text-3xl mt-5 gap-4 text-green-600 font-bold mx-auto text-center">
            <button onClick={leftClick}  className="cursor-pointer bg-white rounded-full hover:text-yellow-500 "><FiChevronLeft /></button>
            <button onClick={rightClick} className="cursor-pointer bg-white rounded-full hover:text-yellow-500 "><FiChevronRight /></button>
         </div>
         <div>
            <button onClick={surpriseClick} className="mt-5 bg-yellow-500 hover:bg-green-600 transition-all duration-200  cursor-pointer text-white px-10 py-2 font-bold text-lg rounded-md">  Suprise Me </button>
         </div>

      </div>
   );
}
export default Testimonial