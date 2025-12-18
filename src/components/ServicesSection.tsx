import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import ServiceCard from "../ui/ServiceCard";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { FaBabyCarriage } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";



const ServicesSection = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = [
        // { name: 'All', code: 'All' },
        { name: 'Civil Registration', code: 'Civil Registration' },
        { name: 'Identity Documents', code: 'Identity Documents' },
        { name: 'Travel Documents', code: 'Travel Documents' },
        { name: 'Business Services', code: 'Business Services' },
        { name: 'Business Services', code: 'Business Services' },
        { name: 'Transport', code: 'Transport' },
        { name: 'Social Services', code: 'Social Services' },
    ];



    const ServiceCardsList = [
        {
            icon: <FaPlaneDeparture />,
            category: "Travel Documents",
            title: "Passport Application",
            desc: "Apply for a new passport or renew an existing one for international travel.",
            processing_days: "15-20",
        },
        {
            icon: <FaIdCard />,
            category: "Identity Documents",
            title: "National ID Replacement",
            desc: "Replace a lost, stolen, or damaged National Identification Document.",
            processing_days: "10-15",
        },
        {
            icon: <IoIosBusiness />,
            category: "Business Services",
            title: "Business Registration",
            desc: "Register a new business entity or update existing business registration details.",
            processing_days: "5-7",
        },
        {
            icon: <FaBabyCarriage />,
            category: "Civil Registration",
            title: "Birth Certificate Application",
            desc: "Apply for a new birth certificate or request a certified copy of an existing birth certificate.",
            processing_days: "5-10",
        },
        {
            icon: <FaMapMarkedAlt />,
            category: "Property Services",
            title: "Land Title Registration",
            desc: "Register land ownership or transfer property titles.",
            processing_days: "30-60",
        },
        {
            icon: <FaIdCard />,
            category: "Transport",
            title: "Driver's License Renewal",
            desc: "Renew your driver's license before expiration or obtain a replacement.",
            processing_days: "3-5",
        },
    ];



     return (
        <div className="w-full min-h-screen flex flex-col px-15 py-6 gap-4">
            {/* Search part */}
            <div className="w-full flex py-2 gap-4 ">
                <input className="w-4/5 rounded-md px-5 border border-gray-300" placeholder="Search services ...." type="text" />
                <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={categories} optionLabel="name" 
                placeholder="All" className="w-1/5 md:w-14rem" />
            </div>


            <div className="w-full min-h-screen flex text-gray-500 text-sm flex-col gap-3 py-3">
                <label>Showing 8 services</label>
                <div className="w-full py-2 flex flex-wrap items-center gap-4 justify-between">
                    {ServiceCardsList.map((card, index) => (
                    <ServiceCard 
                        key = {index}
                        icon = {card.icon}
                        category = {card.category}
                        title = {card.title}
                        desc = {card.desc}
                        processing_days = {card.processing_days}
                    />
                    ))}
                </div>
            </div>


        </div>
     );
} 

export default ServicesSection;