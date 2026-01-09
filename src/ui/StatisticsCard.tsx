import type React from "react";



interface StatisticsCardProps {
     number: number;
     category: string;
     bgColor: string;
};


const StatisticsCard: React.FC<StatisticsCardProps> = ({ number, category, bgColor = "bg-blue-100" }) => {
      return (
        <div className={`py-5 bg-blue-100 rounded-xl flex flex-col items-center justify-center w-1/4 ${bgColor}`}>
             <label className="text-xl font-serif font-bold">{number}</label>
             <label>{category}</label>
        </div>
      );
}

export default StatisticsCard;