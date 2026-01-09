import Header from "./Header";


interface HeroProps {
     title: string;
     desc: string;
     className?: string;
     titleClassName?: string;
     descClassName?: string;
}



const SmallHero: React.FC<HeroProps> = ({ title, desc, className, titleClassName, descClassName }) => {
     return (
     //    <div className="bg-[url('/images/heroPic.jpg')] bg-center bg-cover">
        <div className={`w-full min-h-50 flex flex-col items-center justify-center px-15 bg-gray-200 ${className}`}>

            <div className={"flex flex-col  text-black/80 h-full w-full gap-2 items-start justify-center text-center"}>
                 <label className={`text-3xl font-bold ${titleClassName}`}>{title}</label>
                 <label className={`text-md text-gray-600 ${descClassName}`}>{desc}</label>
            </div>
               
        </div>
     //    </div>
     ); 
}

export default SmallHero;