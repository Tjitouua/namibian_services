import Header from "../components/Header";
import SignUpSection from "../components/SignUpSection";
import SmallHero from "../components/SmallHero";
import PageUi from "../ui/PageUi";




const SignUp = () => {

    const HeroList = [
        {
            title: "SignUp",
            desc: "Create a new user account to access your dashboard and services securely and conveniently.",
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


             <SignUpSection />
    </PageUi>
   );

}

export default SignUp;