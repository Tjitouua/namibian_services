import Header from "./Header";


interface HeroProps {
     title: string;
     desc: string;
}



const SmallHero: React.FC<HeroProps> = ({ title, desc }) => {
     return (
     //    <div className="bg-[url('/images/heroPic.jpg')] bg-center bg-cover">
        <div className="w-full min-h-70 -mt-20 flex flex-col items-center justify-center px-15 bg-[url('/images/heroPic4.jpg')] bg-center bg-cover">

            <div className="flex flex-col  text-white h-full w-full gap-5 justify-center items-center text-center">
                 <label className="text-4xl font-bold mt-10 text-blue-300">{title}</label>
                 <label className="text-xl text-gray-200">{desc}</label>
            </div>
               
        </div>
     //    </div>
     ); 
}

export default SmallHero;