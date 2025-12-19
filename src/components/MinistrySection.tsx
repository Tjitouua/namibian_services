import MinistryCard from "../ui/MinistryCard";



const MinistrySection = () => {
     return (
        <div className="w-full min-h-screen flex flex-col px-15 py-6 gap-4">
                {/* Search part */}
                <div className="w-full flex py-2 gap-4 ">
                    <input className="w-full py-3 rounded-md px-5 border border-gray-300" placeholder="Search ministries ...." type="text" />
                </div>


                <div className="w-full min-h-screen flex text-gray-500 text-sm flex-col gap-3 py-3">
                <label>Showing 8 ministries</label>
                <div className="w-full py-2 flex flex-wrap items-center gap-4 justify-between">
                    <MinistryCard />
                    <MinistryCard />
                    <MinistryCard />
                    <MinistryCard />
                    <MinistryCard />
                    <MinistryCard />
                </div>
            </div>



        </div>
     );
}

export default MinistrySection;