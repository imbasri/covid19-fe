import React from "react";
import icon from "../assets/img/icon_covid.svg";
import {
   Facebook,
   Youtube,
   Vimeo,
   Twitter,
} from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";
function Footer() {
   return (
      <footer className="container mx-auto w-full text-center">
         <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex items-center justify-center">
               <img src={icon} alt="icon_covid19" className="mr-2 md:w-10" />
               <span className="block font-hat text-base font-bold text-secondary">
                  Covid-19
               </span>
            </div>
            <div className="my-4 w-1/2  p-10 md:ml-10 md:p-2">
               <ul className="flex w-full flex-wrap items-center justify-center  gap-4 font-hat text-sm font-bold text-secondary">
                  <li>
                     <Link to={"#"}>Overview</Link>
                  </li>
                  <li>
                     <Link to={"#"}>Symptomps</Link>
                  </li>
                  <li>
                     <Link to={"#"}>Prevention</Link>
                  </li>
                  <li>
                     <Link to={"#"}>Treatment</Link>
                  </li>
               </ul>
            </div>
            <div className="my-4">
               <ul className="flex w-full flex-wrap items-center justify-center gap-10 ">
                  <li>
                     {
                        <Link to={"#"} target="_blank">
                           <Facebook
                              color="default"
                              size={30}
                              className=" w-auto cursor-pointer md:w-5"
                           />
                        </Link>
                     }
                  </li>
                  <li>
                     {
                        <Link to={"#"} target="_blank">
                           <Youtube
                              color="default"
                              size={30}
                              className=" w-auto cursor-pointer md:w-5"
                           />
                        </Link>
                     }
                  </li>
                  <li>
                     {
                        <Link to={"#"} target="_blank">
                           <Twitter
                              color="default"
                              size={30}
                              className=" w-auto cursor-pointer md:w-5"
                           />
                        </Link>
                     }
                  </li>
                  <li>
                     {
                        <Link to={"#"} target="_blank">
                           <Vimeo
                              color="default"
                              size={30}
                              className=" w-auto cursor-pointer md:w-5"
                           />
                        </Link>
                     }
                  </li>
               </ul>
            </div>
            <span className="my-5 flex justify-center text-center text-sm font-bold text-secondary md:hidden">
               2023 @ All rights coding☕ by imbasri
            </span>
         </div>
         <span className="my-5 hidden justify-center text-center text-sm font-bold text-secondary md:block">
            2023 @ All rights coding☕ by imbasri
         </span>
      </footer>
   );
}

export default Footer;
