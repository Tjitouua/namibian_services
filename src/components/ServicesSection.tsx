import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import ServiceCard from "../ui/ServiceCard";



const ServicesSection = () => {

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


     return (
        <div className="w-full min-h-screen flex flex-col px-15 py-6 gap-4">
            {/* Search part */}
            <div className="w-full flex py-2 gap-4 ">
                <input className="w-4/5 rounded-md px-5 border border-gray-300" placeholder="Search services ...." type="text" />
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-1/5 md:w-14rem" />
            </div>


            <div className="w-full min-h-screen flex text-gray-500 text-sm flex-col gap-3 py-3">
                <label>Showing 8 services</label>
                <div className="w-full py-2 flex items-center justify-between">
                    <ServiceCard />
                </div>
            </div>


        </div>
     );
} 

export default ServicesSection;