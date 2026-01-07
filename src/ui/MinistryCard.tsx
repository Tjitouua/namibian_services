// import type React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


interface MinistryProps {
    title: string;
    services: number;
    desc: string;
    ministry: string;
}



const MinistryCard: React.FC<MinistryProps> = ({ title, services, desc, ministry }) => {


    const navigate = useNavigate();



    const Navigate = () => {
        navigate('/ministry_of_finance')
    }
    




     return (
        <div className="flex items-start gap-2 w-full lg:w-[45%] xl:w-[32%] py-6 px-4 border border-gray-300">
              {/* Info Div  */}
              <div className="px-3 w-full flex flex-col gap-1">
                  <div className="w-full flex items-center justify-between">
                     {/* Namibian Logo  */}
                     <div className="h-17 w-17 bg-[url('/images/namibiaLogo.png')] bg-cover bg-center">

                     </div>
                     <div className="px-3 py-1 bg-gray-300 flex justify-center items-center rounded-md text-black/80">{services} services</div>
                  </div>
                  <label className="text-xl font-serif font-bold text-black/70">{title}</label>
                  <label>{desc}</label>
                  <hr className="text-gray-300 my-1"/>
                  <label className="text-[11px] text-gray-500">{ministry}</label>
                  {/* Button  */}
                  <div className="w-full flex justify-end">
                      <button onClick={Navigate} className="py-2 rounded-md flex gap-3 items-center justify-center cursor-pointer text-black px-3 hover:bg-blue-700 hover:text-white">View Services <IoArrowForward /></button>
                  </div>
              </div>
        </div>
     );
}

export default MinistryCard;