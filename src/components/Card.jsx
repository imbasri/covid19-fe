import React from "react";
function Card(props) {
   return (
      <div className="group z-30 mb-4 flex h-[500px] w-[90%] rounded-lg border border-b-4 p-3 pb-2 shadow transition-all duration-300 hover:border-b-4 hover:border-b-orange-500/80">
         <div className="flex w-full flex-col items-center">
            <img
               src={props.src}
               alt={props.src}
               className="h-[300px] w-[300px] transition-all duration-300 group-hover:rotate-3 group-hover:scale-105"
            />
            <h4 className="pt-5 font-hat text-lg font-bold text-secondary">
               {props.header}
            </h4>
            <p className="max-w-1/2 py-5 text-base text-slate-600">
               {props.text}
            </p>
         </div>
      </div>
   );
}

export default Card;
