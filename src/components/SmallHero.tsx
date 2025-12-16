



import Header from "./Header";



const SmallHero = () => {
     return (
        <div className="w-full min-h-70 -mt-20 flex flex-col items-center justify-center px-15 bg-[url('/images/heroPic.jpg')] bg-center bg-cover">

            <div className="flex flex-col  text-white gap-5 justify-center items-center text-center">
                 <label className="text-4xl font-bold mt-10 text-blue-800">Government Services</label>
                 <label className="text-xl text-gray-200">Browse and apply for various government e-services available to Namibian citizens.</label>
            </div>
               
        </div>
     ); 
}

export default SmallHero;