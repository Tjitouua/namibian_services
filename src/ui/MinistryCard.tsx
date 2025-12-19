import { IoArrowForward } from "react-icons/io5";



const MinistryCard = () => {
     return (
        <div className="flex items-start gap-2 w-[32%] py-6 px-3 border border-gray-300">
              {/* Namibian Logo  */}
              <div className="h-17 w-17 bg-[url('/images/namibiaLogo.png')] bg-cover bg-center">

              </div>
              {/* Info Div  */}
              <div className="px-3 w-[80%] flex flex-col gap-4">
                  <div className="w-full flex items-center justify-between">
                     <label className="text-xl font-serif font-bold text-black/80">Home Affairs</label>
                     <div className="px-3 py-1 bg-gray-300 flex justify-center items-center rounded-md text-black/80">3 services</div>
                  </div>
                  <label>Responsible for civil registration, immigration, national documents, and internal security.</label>
                  <label className="text-[11px] text-gray-500">Ministry of Home Affairs, Immigration, Safety and Security</label>
                  {/* Button  */}
                  <div className="w-full flex justify-end mt-2">
                      <button className="py-2 rounded-md flex gap-3 items-center justify-center cursor-pointer text-black px-3 hover:bg-blue-700 hover:text-white">View Services <IoArrowForward /></button>
                  </div>
              </div>
        </div>
     );
}

export default MinistryCard;