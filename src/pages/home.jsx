import React from "react";
import Button from "../elements/Button";
import heroimg from "../assets/img/hero_img.png";
import aboutimg from "../assets/img/icon_about.png";
import bgIcon from "../assets/img/icon_covid.png";
import { useNavigate } from "react-router-dom";
function Home() {
   const navigate = useNavigate();
   return (
      <>
         {/* Hero Start */}
         <section className=" bg-linier m-auto ">
            <div className="mt-16 w-full justify-between lg:flex">
               <div
                  id="hero-left"
                  className="flex w-full max-w-[600px] flex-col justify-center p-3 lg:ml-20 lg:w-1/2"
               >
                  <h1 className="pb-3 font-hat text-lg font-extrabold text-primary">
                     COVID-19 Alert
                  </h1>
                  <span className="block pb-3 font-hat text-lg font-bold text-secondary lg:text-4xl">
                     Stay at Home quarantine To stop Corona virus
                  </span>
                  <p className="max-w-md text-sm text-slate-500 md:max-w-xl md:text-xl lg:max-w-lg lg:text-lg ">
                     There is no specific medicine to prevent or treat
                     coronavirus disease (COVID-19). People may need supportive
                     care to.
                  </p>
                  <span className="shadows-sm w-full  overflow-hidden md:w-full">
                     <Button
                        styles="hover:bg-primary/80 shadow-black bg-primary py-2 px-3 md:px-10 rounded-full font-semibold lg:text-lg text-white mt-10 cursor-pointer text-sm"
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
         {/* Hero End */}
         {/* what covid Start */}
         <section className=" mt-4">
            <div className="flex w-full flex-1 flex-col-reverse items-center justify-between md:flex-row">
               <div id="about" className="w-full md:w-1/2">
                  <img
                     src={aboutimg}
                     alt="about"
                     className="w-full bg-no-repeat object-cover"
                  />
               </div>
               <div className="relative w-full p-3 md:mr-10 md:max-w-lg lg:max-w-3xl">
                  <h2 className="pb-3 font-hat text-lg font-extrabold text-primary">
                     What Is Covid-19
                  </h2>
                  <span className="block pb-2 font-hat text-lg font-bold text-secondary lg:text-4xl">
                     Coronavirus
                  </span>
                  <p className="font-hat text-sm lg:text-lg">
                     Corona viruses are a type of virus. There are many
                     different kinds, and some cause disease. A newly identified
                     type has caused a recent outbreak of respiratory illness
                     now called COVID-19.Lauren Sauer, M.S., the director of
                     operations with the Johns Hopkins Office of Critical Event
                     Preparedness and Response
                  </p>
                  <div className="shadows-sm w-full overflow-hidden md:w-full  ">
                     <Button
                        // onclick={navigate("#home")}
                        styles="hover:bg-[#FA5652]/80 hover:text-white shadow-black bg-gradient-to-r bg-center from-[#FA5652]/30 to-[#FA5652]/30 to py-2 px-4 md:px-10 rounded-full font-semibold lg:text-lg text-[#FA5652] mt-10 cursor-pointer text-sm "
                        title="Learn More"
                     />
                  </div>
                  <span className="absolute -bottom-72 -right-40 -z-30">
                     <img src={bgIcon} alt="Icon" className="w-64" />
                     <img src={bgIcon} alt="Icon" className="w-9xl" />
                  </span>
               </div>
            </div>
         </section>
         {/* what covid End */}
      </>
   );
}

export default Home;
