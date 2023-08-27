import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi'
const Card = (props) => {
   let review = props.review;
   return (
      <div className="md:relative flex flex-col">
        
         <div className="text-center mt-5 flex flex-col justify-center">
            <div className="top-[30%] z-[10] mx-auto md:top-[-35%] lg:top-[-7rem] " >
            <img className="absolute aspect-square rounded-full w-[140px] h=[140px] z-25" src={review.image} />
            <div className="w-[140px] h-[140px] bg-gray-400 rounded-full -z-10 top-[-6px] left-[10px]"></div>
             </div>
            <p className="font-bold text-3xl capitalize text-white">
               {review.name}
            </p>
         </div>
         <div className="text-center mt-1">
            <p className="uppercase font-bold text-yellow-400 ">{review.job}</p>
         </div>
         <div className=" text-green-400 mx-auto mt-5">
            <BiSolidQuoteLeft />
         </div>
         <div className="mt-5 text-white">
            <p>{review.text}</p>
         </div>
         <div className=" text-green-400 mx-auto mt-5">
            <BiSolidQuoteRight />
         </div>

      </div>

   );
}
export default Card