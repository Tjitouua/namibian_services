import AdminHeader from "../components/AdminHeader";
import AdminHomeSection from "../components/AdminHomeSection";
import SmallHero from "../components/SmallHero";
import PageUi from "../ui/PageUi";




const AdminHome = () => {


    
    const HeroList = [
        {
            title: "Admin Dashboard",
            desc: "Manage citizen requests, update statuses, and add internal notes.",
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

               <AdminHomeSection />

             </PageUi>
        </div>
      )
}

export default AdminHome;