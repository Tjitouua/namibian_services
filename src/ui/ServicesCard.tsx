import { FiUser } from "react-icons/fi";
import { LiaIdCard } from "react-icons/lia";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuIdCard } from "react-icons/lu";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";


import { PiBuildingApartment } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { LuTag } from "react-icons/lu";



const ServicesCard = () => {
       return (
        <div className="w-full py-7 border text-gray-500 cursor-pointer px-5 border-gray-300 bg-white rounded-lg flex flex-col gap-2">
            {/* Top Part  */}
            <div className="flex items-start gap-3 justify-between">
                {/* Info Div  */}
                 <div className="flex flex-col gap-1">
                    <label className="text-lg font-serif font-bold text-black/70">Passport Application</label>
                    {/* <label className="text-[12px]">NAM-2024-001235</label> */}
                 </div>
                 {/* Buttons Div  */}
                 <div className="flex gap-2">
                     <button className="py-1 px-3 rounded-sm border border-gray-300 flex gap-2 items-center justify-center cursor-pointer"><FiEdit /> Edit</button>
                     <button className="py-1 px-3 rounded-sm border border-gray-300 flex gap-2 items-center justify-center cursor-pointer text-red-500"><RiDeleteBin5Line /></button>
                 </div>
            </div>

            <label className="text-sm">Apply for a new passport or renew an existing one for international travel.</label>

            {/* Contact Div */}
            <div className="w-full py-2 flex-wrap flex items-center justify-start gap-6">
                <div className="flex py-1 px-3 rounded-2xl border border-gray-300 items-center gap-2 text-sm"><PiBuildingApartment /> Foreign Affairs</div>
                <div className="flex py-1 px-3 rounded-2xl border border-gray-300 items-center gap-2 text-sm"><LuTag /> Travel Documents</div>
                <div className="flex py-1 px-3 rounded-2xl border border-gray-300 items-center gap-2 text-sm"><FiClock  /> 15-20 business days</div>
                <div className="flex py-1 px-3 rounded-2xl border border-gray-300 items-center gap-2 text-sm"><TbWorld /> Online</div>
            </div>

            

        </div>
       );
}

export default ServicesCard;