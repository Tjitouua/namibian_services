import Header from "../components/Header";
import ServicesSection from "../components/ServicesSection";
import SmallHero from "../components/SmallHero";
import PageUi from "../ui/PageUi";



const Services = () => {
      return (
         <PageUi>
             <Header />
             <SmallHero />
             <ServicesSection />
         </PageUi>
      );
}

export default Services;