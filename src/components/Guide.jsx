import React from "react";
import heromask from "../assets/img/hero_mask.png";
function Guide(props) {
   return (
      <article
         className={` container mx-auto flex w-full flex-col md:items-center md:justify-evenly ${
            props.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
         }  `}
      >
         <div className="flex w-full flex-col items-center text-center  md:w-2/3 md:flex-row md:items-start md:justify-start md:px-5 lg:w-1/3 lg:px-0">
            <div className="flex items-center justify-center md:block">
               <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <span className="font-hat text-2xl font-bold text-primary">
                     {`0${props.id}`}
                  </span>
               </div>
               <h3 className="py-2 font-hat text-2xl font-bold text-secondary md:hidden ">
                  {props.judul}
               </h3>
            </div>
            <div className="md:text-start">
               <h3 className="hidden p-2 py-2 font-hat text-2xl font-bold text-secondary md:block md:py-0 lg:text-4xl">
                  {props.judul}
               </h3>
               <p className="p-2 text-base text-slate-500 sm:max-w-4xl lg:text-2xl">
                  {props.detail}
               </p>
            </div>
         </div>
         <img
            className="mx-auto w-3/4 object-contain p-4 md:mx-0 md:h-[40%] md:w-[40%]"
            src={props.src}
            alt={props.judul}
         />
      </article>
   );
}

export default Guide;
