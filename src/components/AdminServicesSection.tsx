import type React from "react";
import StatisticsCard from "../ui/StatisticsCard";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import RequestsCard from "../ui/RequestsCard";
import ServicesCard from "../ui/ServicesCard";




const AdminServicesSection: React.FC = () => {



    
    const [selectedMinistry, setSelectedMinistry] = useState(null);
    const ministry = [
        { name: 'All Ministries', code: 'All Ministries' },
        { name: 'Home Affairs', code: 'Home Affairs' },
        { name: 'Social Welfare', code: 'Social Welfare' },
        { name: 'Works & Transport', code: 'Works & Transport' },
        { name: 'Trade & Industry', code: 'Trade & Industry' },
        { name: 'Land & Agriculture', code: 'Land & Agriculture' },
        { name: 'Foreign Affairs', code: 'Foreign Affairs' },
    ]


    


    const StatisticsCardList = [
        {
            number: 12,
            category: "All",
            bgColor: "bg-blue-100"
        }, 
        {
            number: 6,
            category: "Pending",
            bgColor: "bg-gray-200"
        }, 
        {
            number: 1,
            category: "In Progress",
            bgColor: "bg-blue-100"
        }, 
        {
            number: 5,
            category: "Completed",
            bgColor: "bg-gray-200"
        }, 
    ];


      return (
        <div className="w-full min-h-screen flex flex-col gap-3 px-15 py-2">
            

             {/* Search part */}
            <div className="w-full flex py-2 gap-4 ">
                <input className="w-4/5 rounded-md px-5 border border-gray-300" placeholder="Search services ...." type="text" />
                <Dropdown value={selectedMinistry} onChange={(e) => setSelectedMinistry(e.value)} options={ministry} optionLabel="name" 
                placeholder="All Ministries" className="w-1/5 md:w-14rem" />
            </div>

            {/* Requests Part */}
            <div className="w-full py-3 flex flex-col gap-3"> 
                 <label className="text-sm text-gray-500">Showing 3 of 3 services</label>
                 <div className="flex w-full py-1 flex-col gap-2">
                    <ServicesCard />
                 </div>
            </div>

        </div>
      );
}

export default AdminServicesSection;