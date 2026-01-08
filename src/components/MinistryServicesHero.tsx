import { IoMdArrowRoundBack } from "react-icons/io";


import Header from "./Header";



const MinistryServicesHero = () => {
     return (
     //    <div className="bg-[url('/images/heroPic.jpg')] bg-center bg-cover">
        <div className="w-full min-h-50 flex flex-col items-center justify-center px-15 bg-blue-500">

            <div className="flex flex-col w-full text-white h-full gap-2 justify-center pr-2 items-start">
                  {/* <button className="flex gap-4 rounded-lg cursor-pointer items-center justify-center px-5 py-2 hover:bg-blue-700"><IoMdArrowRoundBack /> Back to Ministries</button> */}
                  <label className="text-3xl font-bold text-blue-200">Home Affairs</label>
                  <div className="py-1 px-5 bg-gray-400/70"><label className="text-[12px]">Ministry of Home Affairs, Immigration, Safety and Security</label></div>
                  <label className="text-md text-center text-gray-200">Responsible for civil registration, immigration, national documents, and internal security.</label>
                  {/* <button className="flex gap-4 rounded-lg cursor-pointer items-center justify-center px-5 py-2 hover:bg-blue-700"><IoMdArrowRoundBack /> Back to Ministries</button> */}
               
            </div>
        </div>
     ); 
}

export default MinistryServicesHero;


// bg-[url('/images/heroPic5.jpg')] bg-center bg-cover