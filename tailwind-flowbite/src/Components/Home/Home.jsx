import React from "react";
import { Link } from "react-router-dom";
import backGround from "../../assets/bg-home.jpg";
import Button from "../Cssstyles/Button";

function Home() {
  return (
    <div className="relative mx-20 mt-10 md:mx-0">
      <img
        src={backGround}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm rounded-3xl"
      />
      <div className="flex flex-col items-end justify-center h-full relative">
        <div className="mr-32 m-40 flex flex-col gap-y-20 ">
          <Link to="/about">

            <Button text="Join as a user"/>
          </Link>
          <Link to="/about" className="mt-8">
            <Button text="Join as a mess"/>
          </Link>
        </div>
      </div>
    </div>
//     <div classNameName="relative">
      
//       <img src={backGround} alt="background" classNameName="absolute inset-0 w-full h-full object-cover filter blur-lg"/>

      
//       <div classNameName="mr-40 mt-44 relative">
//         <div classNameName="flex flex-col gap-y-20 w-fit float-right md:float-right">
//           <span classNameName="w-fit">
//             <Link to="/about">
//               <button
//                 classNameName=" text-2xl
//       cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-full
//       border-blue-600
//       border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
//       active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
//               >
//                 Join as a user
//               </button>
//             </Link>
//           </span>
//           <span classNameName="w-fit">
//             <Link to="/about">
//               <button
//                 classNameName="text-2xl cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-full
// border-blue-600
// border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
// active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
//               >
//                 Join as a user
//               </button>
//             </Link>
//           </span>
//         </div>
//       </div>
//     </div>
  );
}

export default Home;
