import type React from "react";
import StatisticsCard from "../ui/StatisticsCard";




const AdminHomeSection: React.FC = () => {


    const StatisticsCardList = [
        {
            number: 12,
            category: "All",
            bgColor: "bg-blue-100"
        }, 
        {
            number: 6,
            category: "Pending",
            bgColor: "bg-orange-100"
        }, 
        {
            number: 1,
            category: "In Progress",
            bgColor: "bg-red-100"
        }, 
        {
            number: 5,
            category: "Completed",
            bgColor: "bg-orange-100"
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
        </div>
      );
}

export default AdminHomeSection;