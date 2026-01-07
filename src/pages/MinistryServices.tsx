import Header from "../components/Header";
import MinistryServicesHero from "../components/MinistryServicesHero";
import MinistryServicesSection from "../components/MinistryServicesSection";
import ServicesSection from "../components/ServicesSection";
import PageUi from "../ui/PageUi";



const MinistryServices = () => {


      return (
         <PageUi>
             <Header />
             <MinistryServicesHero />
             <MinistryServicesSection />
         </PageUi>
      );
}

export default MinistryServices;