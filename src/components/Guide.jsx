import React from "react";
import heromask from "../assets/img/hero_mask.png";
function Guide() {
   return (
      <article className="container mx-auto flex w-full flex-col md:flex-row md:items-center md:justify-evenly">
         <div className="flex w-full flex-col items-center text-center  md:w-1/3 md:flex-row md:items-start md:justify-start">
            <div className="flex items-center justify-center md:block">
               <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <span className="font-hat text-2xl font-bold text-primary">
                     01
                  </span>
               </div>
               <h3 className="py-2 font-hat text-2xl font-bold text-secondary md:hidden ">
                  Wear Mask
               </h3>
            </div>
            <div className="md:text-start">
               <h3 className="hidden p-2 py-2 font-hat text-2xl font-bold text-secondary md:block">
                  Wear Mask
               </h3>
               <p className="p-2 text-base text-slate-500 sm:max-w-4xl">
                  Continually seize impactful vortals rather than future-proof
                  supply chains. Uniquely exploit emerging niches via fully
                  tested meta-services. Competently pursue standards compliant
                  leadership skills vis-a-vis pandemic "outside the box"
                  thinking. Objectively
               </p>
            </div>
         </div>
         <img
            className="w-full object-contain md:h-[500px] md:w-[500px]"
            src={heromask}
            alt="heromask"
         />
      </article>
   );
}

export default Guide;
