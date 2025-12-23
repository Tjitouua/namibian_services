import { Link } from "react-router-dom";


const Header = () => {
      return (
        <header className="w-full flex px-15 py-2 text-white shadow-sm shadow-white/20 items-center justify-between min-h-16 sticky top-0 z-50">
            {/* Content Part  */}
             <div className="min-h-15 flex items-end gap-8">
                {/* Logo Div  */}
                  <div className="w-16 h-16 bg-[url('/images/namibiaLogo.png')] bg-center bg-cover">
                     
                  </div>

                  <div className="flex flex-col justify-center min-h-15">
                  {/* <label className="text-sm">E-Services Portal</label> */}
                      <label className="text-2xl font-bold">Republic of Namibia</label>
                      <label className="text-sm">E-Services Portal</label>
                  </div>
             </div>
             {/* Navigation Part  */}
             <div className="min-h-16 items-center flex font-bold gap-4">
                 <nav className="h-14 items-center flex font-bold gap-4">
                    <ul className="flex">
                        <Link to="/" className="px-5 py-3 cursor-pointer hover:bg-blue-500">Home</Link>
                        <Link to="/services" className="px-5 py-3 cursor-pointer hover:bg-blue-500">Services</Link>
                        <Link to="/ministries" className="px-5 py-3 cursor-pointer hover:bg-blue-500">Ministries</Link>
                        <Link to="/login" className="px-5 py-3 cursor-pointer hover:bg-blue-500">Login</Link>
                    </ul>
                 </nav>
             </div>
        </header>
      );
}

export default Header;