import Header from "../components/Header";
import MinistrySection from "../components/MinistrySection";
import SmallHero from "../components/SmallHero";
import PageUi from "../ui/PageUi";





const Ministries = () => {



    
    const HeroList = [
        {
            title: "Government Ministries",
            desc: "Browse services by ministry. Select a ministry to view all the e-services they offer.",
        },
    ];



     return (
        <PageUi>
             <Header />
             {HeroList.map((hero, index) => (
             <SmallHero 
                key = {index}
                title = {hero.title}
                desc = {hero.desc}
             />
             ))}
             <MinistrySection />
         </PageUi>
     );
}

export default Ministries;








