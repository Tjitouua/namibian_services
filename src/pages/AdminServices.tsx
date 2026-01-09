import AdminHeader from "../components/AdminHeader";
import AdminHomeSection from "../components/AdminHomeSection";
import AdminServicesSection from "../components/AdminServicesSection";
import SmallHero from "../components/SmallHero";
import PageUi from "../ui/PageUi";




const AdminServices = () => {


    
    const HeroList = [
        {
            title: "Service Management",
            desc: "Add, edit, and manage government services in the catalogue.",
        },
    ];


      return (
        <div className="w-full flex justify-between min-h-screen">
             {/* Header  */}
             <AdminHeader />
             <PageUi className="">
               {HeroList.map((hero, index) => (
                 <SmallHero className="!min-h-31 !bg-gray-100" 
                 key = {index} 
                 title = {hero.title} 
                 titleClassName="!text-2xl -mb-3"
                 desc = {hero.desc} 
                 descClassName="!text-sm"
                /> 
               ))}

               <AdminServicesSection />

             </PageUi>
        </div>
      )
}

export default AdminServices;



