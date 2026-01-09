import { FiUser } from "react-icons/fi";
import { LiaIdCard } from "react-icons/lia";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuIdCard } from "react-icons/lu";
import { RiCalendarEventLine } from "react-icons/ri";




const RequestsCard = () => {
       return (
        <div className="w-full py-7 border text-gray-500 cursor-pointer px-5 border-gray-300 bg-white rounded-lg flex flex-col gap-2">
            {/* Top Part  */}
            <div className="flex items-start gap-3 justify-between">
                {/* Info Div  */}
                 <div className="flex flex-col gap-1">
                    <label className="text-lg font-serif font-bold text-black/70">National ID Replacement</label>
                    <label className="text-[12px]">NAM-2024-001235</label>
                 </div>
                 {/* Buttons Div  */}
                 <div className="flex gap-2">
                     <div className="py-1 px-3 bg-green-200 border border-green-400 rounded-xl text-[12px]">Completed</div>
                 </div>
            </div>

            <label className="text-sm">Lost my National ID during relocation. Need urgent replacement.</label>

            {/* Contact Div */}
            <div className="w-full py-3 border-b border-gray-300 pb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm"><FiUser /> Maria Nekongo</div>
                <div className="flex items-center gap-2 text-sm"><LuIdCard /> 90050200002</div>
                <div className="flex items-center gap-2 text-sm"><FiPhone /> +264 81 345 6789</div>
                <div className="flex items-center gap-2 text-sm"><HiOutlineMail /> marianekongo87@gmail.com</div>
            </div>

            {/* Dates Div  */}
            <div className="flex items-center gap-15 mt-4"> 
                 <div className="flex items-center gap-4 text-sm"><RiCalendarEventLine /> 1 Dec 2025, 11:15 am</div>
                 <div className="flex items-center gap-4 text-sm"><RiCalendarEventLine /> 28 Dec 2024, 01:30 pm</div>
            </div>

        </div>
       );
}

export default RequestsCard;