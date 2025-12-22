import MinistryCard from "../ui/MinistryCard";



const MinistrySection = () => {



    const MinistryList = [
        {
           title: "Home Affairs", 
           services: 3,
           desc: "Responsible for civil registration, immigration, national documents, and internal security.",
           ministry: "Ministry of Home Affairs, Immigration, Safety and Security",
        },
        
         {
            title: "Works & Transport", 
            services: 1,
            desc: "Manages transport licensing, vehicle registration, and public infrastructure.",
            ministry: "Ministry of Works and Transport",
         },
         {
            title: "Land & Agriculture", 
            services: 2,
            desc: "Handles land registration, agricultural services, and water resource management.",
            ministry: "Ministry of Agriculture, Water and Land Reform",
         },
         {
            title: "Foreign Affairs", 
            services: 1,
            desc: "Manages passport issuance, visa services, and international relations.",
            ministry: "Ministry of International Relations and Cooperation",
         },
         {
            title: "Trade & Industry", 
            services: 4,
            desc: "Oversees business registration, trade licensing, and industrial development.",
            ministry: "Ministry of Industrialisation and Trade",
         },
         {
            title: "Social Welfare", 
            services: 1,
            desc: "Deals with social welfare grants, poverty relief, and gender equality programs.",
            ministry: "Ministry of Gender Equality, Poverty Eradication and Social Welfare",
         },
    ];




     return (
        <div className="w-full min-h-screen flex flex-col px-15 py-6 gap-4">
                {/* Search part */}
                <div className="w-full flex py-2 gap-4 ">
                    <input className="w-full py-3 rounded-md px-5 border border-gray-300" placeholder="Search ministries ...." type="text" />
                </div>


                <div className="w-full min-h-screen flex text-gray-500 text-sm flex-col gap-3 py-3">
                <label>Showing 8 ministries</label>
                <div className="w-full py-2 flex flex-wrap items-center gap-4 justify-between">
                    {MinistryList.map((ministry, index) => (
                    <MinistryCard
                        key = {index}
                        title = {ministry.title}
                        services = {ministry.services}
                        desc = {ministry.desc}
                        ministry = {ministry.ministry}
                    />
                    ))}
                </div>
            </div>



        </div>
     );
}

export default MinistrySection;