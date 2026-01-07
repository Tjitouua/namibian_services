import { IoArrowForward } from "react-icons/io5";
import { FaPlaneDeparture } from "react-icons/fa";


interface ServiceCardProps {
    icon: React.ReactNode;
    category: string;
    title: string;
    desc: string;
    processing_days: string;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ icon, category, title, desc, processing_days }) => {
    return (
        <div className="pb-3 flex flex-col  rounded-md w-full md:w-[46%] lg:w-[32%]">           
            {/* Image Div  */}
            {/* <div className="h-70 rounded-t-xl bg-[url('/images/passportPic.jpg')] bg-cover bg-center w-full"> */}

            {/* </div>  */}
            {/* Info Div  */}
            <div className="px-5 py-3 flex flex-col gap-2 border border-gray-300">
                {/* Top (Icon & Category) Div  */}
                <div className="w-full py-2 flex items-center justify-between">
                    {/* Icon Div  */}
                    <div className="py-3 px-3 bg-gray-300 text-xl text-black/70 flex items-center judtify-center rounded-sm">
                       {/* <FaPlaneDeparture /> */}
                       {icon}
                    </div>
                    {/* Category Div  */}
                    <div className="px-3 py-1 bg-gray-300 flex justify-center items-center rounded-md">{category}</div>
                </div>
                <label className="text-xl font-serif font-bold text-black/70">{title}</label>
                <label className="text-md">{desc}</label>
                <div className="w-full py-2 flex justify-between items-center">
                    <label className="text-[13px]">Processing: {processing_days} business days</label>
                    <button className="py-2 rounded-md flex gap-3 items-center justify-center cursor-pointer text-black px-3 hover:bg-blue-700 hover:text-white">Apply <IoArrowForward /></button>
                </div>
            </div>
        </div>
    );
} 

export default ServiceCard;