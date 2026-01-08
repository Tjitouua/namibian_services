import { IoHome } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";




const AdminHeader = () => {
       return (
           <div className="h-screen w-[25%] sticky z-0 top-0 bg-gray-200 flex flex-col gap-5 py-10 px-3 ">
               {/* Top part Div  */}
                <div className="min-h-15 flex items-end gap-5 px-2 pb-5 border-b border-black">
                {/* Logo Div  */}
                  <div className="w-16 h-16 bg-[url('/images/namibiaLogo.png')] bg-center bg-cover">
                     
                  </div>

                  <div className="flex flex-col justify-center min-h-15">
                  {/* <label className="text-sm">E-Services Portal</label> */}
                      <label className="text-lg font-bold">Republic of Namibia</label>
                      <label className="text-sm">E-Services Portal</label>
                  </div>
                </div>


                {/* Navigation Part  */}
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-6 ml-2">Navigation</label>
                    <div className="flex items-center w-full gap-6 py-3 px-2 hover:bg-gray-300 cursor-pointer"><IoHome /> Home</div>
                    <div className="flex items-center w-full gap-6 py-3 px-2 hover:bg-gray-300 cursor-pointer"><IoSettingsSharp /> Manage Services</div>
                </div>



           </div>
       );
}

export default AdminHeader;