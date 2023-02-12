import React from "react";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

// assets
import aboutimg from "../assets/img/icon_about.png";
import bgIcon from "../assets/img/icon_covid.png";
import heroimg from "../assets/img/hero_img.png";
import ctg_air from "../assets/img/ctg_air.png";
import ctg_hand from "../assets/img/ctg_hand.png";
import ctg_objek from "../assets/img/ctg_objek.png";
import symtopmps from "../assets/img/hero_symtomps.png";
import Guide from "../components/Guide";

import hero_mask from "../assets/img/hero_mask.png";
import hero_hands from "../assets/img/hero_hands.png";
import hero_rag from "../assets/img/hero_rag.png";
import hero_contact from "../assets/img/hero_contact.png";
import Footer from "../components/Footer";
function Home() {
   const navigate = useNavigate();

   const cardContent = [
      {
         src: ctg_air,
         header: "Air Transmission",
         text: "Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify",
      },
      {
         src: ctg_hand,
         header: "Human Contacts",
         text: "Washing your hands is one of thesimplest ways you can protect",
      },
      {
         src: ctg_objek,
         header: "Containted Objects",
         text: "Use the tissue while sneezing,In this way, you can protect your droplets.",
      },
   ];
   const guideContent = [
      {
         id: 1,
         src: hero_mask,
         judul: "wear masks",
         detail: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively `,
      },
      {
         id: 2,
         src: hero_hands,
         judul: "Wash Your Hands",
         detail: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals `,
      },
      {
         id: 3,
         src: hero_rag,
         judul: "Use nose -  rag",
         detail: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively `,
      },
      {
         id: 4,
         src: hero_contact,
         judul: "Avoid contacts",
         detail: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic`,
      },
   ];

   return (
      <>
         {/* Hero Start */}
         <section className="bg-linier m-auto ">
            <div className="mt-16 w-full justify-between py-1 lg:flex">
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
         <section className="relative mx-auto mt-4 w-full overflow-hidden">
            <div className="flex w-full flex-col-reverse items-center justify-between md:flex-row">
               <div id="about" className="w-full md:w-1/2">
                  <img
                     src={aboutimg}
                     alt="about"
                     className="w-full bg-no-repeat object-cover"
                  />
               </div>
               <div className="overflow-hiddem  w-full p-3 md:mr-10 md:max-w-lg lg:max-w-3xl">
                  <h2 className="pb-3 font-hat text-lg font-extrabold text-primary">
                     What Is Covid-19
                  </h2>
                  <span className="block pb-2 font-hat text-lg font-bold text-secondary lg:text-4xl">
                     Coronavirus
                  </span>
                  <p className="break-words text-start font-hat text-xs text-slate-500 sm:max-w-xl sm:text-base lg:text-lg">
                     Corona viruses are a type of virus. There are many
                     different kinds, and some cause disease. A newly identified
                     type has caused a recent outbreak of respiratory illness
                     now called COVID-19.Lauren Sauer, M.S., the director of
                     operations with the Johns Hopkins Office of Critical Event
                     Preparedness and Response
                  </p>
                  <div className="shadows-sm w-full md:w-full ">
                     <Button
                        // onclick={navigate("#home")}
                        styles="hover:bg-[#FA5652]/80 hover:text-white shadow-black bg-gradient-to-r bg-center from-[#FA5652]/30 to-[#FA5652]/30 to py-2 px-4 md:px-10 rounded-full font-semibold lg:text-lg text-[#FA5652] mt-10 cursor-pointer text-sm"
                        title="Learn More"
                     />
                  </div>
               </div>
               <div className="absolute -right-24 top-10 -z-30">
                  <img src={bgIcon} alt="Icon" className="w-48 sm:w-64" />
                  <img src={bgIcon} alt="Icon" className="sm:w-9xl w-24 " />
               </div>
            </div>
         </section>
         {/* what covid End */}
         {/* contagion start */}
         <section className="bg-hero-pattern mx-auto my-10 w-full bg-no-repeat text-center">
            <h2 className="pb-3 font-hat text-lg font-extrabold text-primary">
               Covid-19
            </h2>
            <span className="block pb-2 font-hat text-lg font-bold text-secondary lg:text-4xl">
               Contagion
            </span>
            <p className="md:max-w-10 mx-auto px-3 pb-10 text-base text-slate-500 md:w-[500px]">
               Corona viruses are a type of virus. There are many different
               kinds, and some cause disease. A newly identified type.
            </p>
            <div className=" md:bg-hero-pattern mx-auto mb-6 flex w-full flex-col items-center justify-center md:container md:flex-row md:gap-5 md:px-2">
               {/* map */}
               {cardContent &&
                  cardContent.map((card, index) => {
                     return (
                        <Card
                           key={index}
                           src={card.src}
                           header={card.header}
                           text={card.text}
                        />
                     );
                  })}
            </div>
         </section>
         {/* contagion end */}
         {/* symtomps start */}
         <section className="mx-auto mb-10 w-full md:container">
            <div className="w-full text-center">
               <h2 className="pb-3 font-hat text-lg font-extrabold text-primary">
                  Covid-19
               </h2>
               <span className="block pb-2 font-hat text-lg font-bold text-secondary lg:text-4xl">
                  Symptomps
               </span>
               <p className="md:max-w-10 mx-auto px-3 pb-10 text-base text-slate-500 md:w-[500px] lg:w-[700px]">
                  Corona viruses are a type of virus. There are many different
                  kinds, and some cause disease. A newly identified type has
                  caused a recent outbreak of respiratory
               </p>
               <div className="mx-auto w-full overflow-hidden">
                  <img
                     src={symtopmps}
                     alt="symtopmps"
                     className="mx-auto h-auto w-full scale-[1.3] object-contain transition-all duration-300 sm:scale-100 "
                  />
               </div>
            </div>
         </section>
         {/* symtomps end */}

         {/* We Do Start */}
         <section className="mx-auto md:container">
            <div className="text-center">
               <h2 className="pb-3 font-hat text-lg font-extrabold text-primary">
                  Covid-19
               </h2>
               <span className="block pb-2 font-hat text-lg font-bold text-secondary lg:text-4xl">
                  What should we do
               </span>
               <p className="md:max-w-10 mx-auto px-3 pb-10 text-base text-slate-500 md:w-[500px]">
                  Corona viruses are a type of virus. There are many different
                  kinds, and some cause disease. A newly identified type has
                  caused.
               </p>
            </div>
            <div className="bg-virus w-full">
               {guideContent &&
                  guideContent.map((guide) => {
                     return (
                        <Guide
                           key={guide.id}
                           id={guide.id}
                           src={guide.src}
                           judul={guide.judul}
                           detail={guide.detail}
                        />
                     );
                  })}
            </div>
         </section>
         {/* We Do End */}
         {/* Footer */}
         <Footer />
      </>
   );
}

export default Home;
