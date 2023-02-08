import React from "react";
import Button from "../elements/Button";
import heroimg from "../assets/img/hero_img.png";
function Home() {
   return (
      // Hero Start
      <section className="max-[1440px] bg-linier m-auto lg:container">
         <div className="mt-16 w-full justify-between lg:flex">
            <div
               id="hero-left"
               className="flex w-full max-w-[600px] flex-col justify-center p-3 lg:w-1/2"
            >
               <h1 className="pb-3 font-hat text-lg font-extrabold text-primary">
                  COVID-19 Alert
               </h1>
               <span className="block pb-3 font-hat text-lg font-bold text-secondary lg:text-4xl">
                  Stay at Home quarantine To stop Corona virus
               </span>
               <p className="max-w-md text-sm text-slate-500 md:max-w-xl md:text-xl lg:max-w-lg lg:text-lg ">
                  There is no specific medicine to prevent or treat coronavirus
                  disease (COVID-19). People may need supportive care to.
               </p>
               <span className="shadows-sm w-full overflow-hidden md:w-full">
                  <Button
                     styles="hover:bg-primary/80 shadow-black bg-primary py-2 px-10 rounded-full font-bold lg:text-lg text-white mt-10"
                     title="Let Us Help"
                  />
               </span>
            </div>
            <div className="w-full bg-no-repeat md:w-full lg:w-1/2">
               <img
                  src={heroimg}
                  alt="hero_img"
                  className="w-fit object-cover lg:w-full"
               />
            </div>
         </div>
      </section>
      // Hero End
   );
}

export default Home;
