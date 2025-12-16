import Header from "./Header";



const Hero = () => {
     return (
        <div className="w-full min-h-screen -mt-20 flex flex-col items-center justify-center px-10 bg-[url('/images/heroPic.jpg')] bg-center bg-cover">

            <div className="flex flex-col  text-white gap-9 justify-center items-center text-center">
                <label className="text-7xl font-bold">Namibia Government</label>
                <label className="text-7xl font-bold text-blue-800">E-Services Portal</label>
                <label className="text-xl max-w-200">Access government e-services, submit requests, and track your applications from anywhere, at any time. Serving you better, digitally.</label>
                <div className="w-full flex items-center justify-center gap-8">
                   <button className="px-10 py-3 rounded-md bg-blue-800 cursor-pointer hover:bg-transparent hover:border hover:border-white">Browse Services</button>
                   <button className="px-10 py-3 rounded-md border border-white cursor-pointer hover:bg-blue-800">Submit Request</button>
                </div>
            </div>
               
        </div>
     ); 
}

export default Hero;