import Header from "../components/Header";
import LoginSection from "../components/LoginSection";
import SmallHero from "../components/SmallHero";
import PageUi from "../ui/PageUi";




const Login = () => {

    const HeroList = [
        {
            title: "Login",
            desc: "Log in as a user or administrator to access your dashboard and services.",
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


             <LoginSection />
    </PageUi>
   );

}

export default Login;