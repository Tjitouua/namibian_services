import type React from "react";
import StatisticsCard from "../ui/StatisticsCard";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import RequestsCard from "../ui/RequestsCard";




const AdminHomeSection: React.FC = () => {



    
    const [selectedStatus, setSelectedStatus] = useState(null);
    const status = [
        { name: 'All Status', code: 'All Status' },
        { name: 'Pending', code: 'Pending' },
        { name: 'In Progress', code: 'In Progress' },
        { name: 'Completed', code: 'Completed' },
    ]


    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = [
        { name: 'All Services', code: 'All Services' },
        { name: 'Birth Certificate Application', code: 'Birth Certificate Application' },
        { name: 'National ID Replacement', code: 'National ID Replacement' },
        { name: 'Passport Application', code: 'Passport Application' },
        { name: 'Social Welfare Grant', code: 'Social Welfare Grant' },
        { name: 'Business Registration', code: 'Business Registration' },
        { name: "Driver's License Renewal", code: "Driver's License Renewal"},
        { name: 'Marriage Cerficate', code: 'Marriage Cerficate' },
        { name: 'Land Title Registration', code: 'Land Title Registration' },
    ];

    


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
            {/* Statistics Div  */}
             <div className="w-full py-4 gap-5 flex items-center justify-between">
                {StatisticsCardList.map((stat, index) => (
                 <StatisticsCard 
                     key = {index}
                     number = {stat.number}
                     category = {stat.category}
                     bgColor = {stat.bgColor}
                 />
                ))}
             </div>

             {/* Search part */}
            <div className="w-full flex py-2 gap-4 ">
                <input className="w-4/5 rounded-md px-5 border border-gray-300" placeholder="Search services ...." type="text" />
                <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={status} optionLabel="name" 
                placeholder="All Status" className="w-1/5 md:w-14rem" />
                <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={categories} optionLabel="name" 
                placeholder="All Services" className="w-1/5 md:w-14rem" />
            </div>

            {/* Requests Part */}
            <div className="w-full py-3 flex flex-col gap-3"> 
                 <label className="text-sm text-gray-500">Showing 3 of 3 requests</label>
                 <div className="flex w-full py-1 flex-col gap-2">
                    <RequestsCard />
                 </div>
            </div>

        </div>
      );
}

export default AdminHomeSection;