import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { ImWhatsapp } from "react-icons/im";


const LoginSection = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const handleLogin = () => {

        let valid = true;

         setEmailError("");
         setPasswordError("");

         if (!email) {
            setEmailError("Please enter your email.");
            valid=false;
         }

         if (!password) {
           setPasswordError("Please enter your password.");
           valid=false;
         }

         if (!valid) return;

         navigate('/admin_home')
    }



    return (
        <div className="w-full min-h-screen flex px-15 gap-5">
        <div className="w-[70%] hidden min-h-screen text-black/80 md:flex flex-col justify-center gap-17">
           <label className="font-bold text-7xl">Welcome Back</label>
           <label className="text-lg">Sign in to access your Namibia Government E-Services Portal dashboard. From here,
            you can easily apply for services, track your applications, manage your information, and stay informed about
             important updates. Secure, convenient, and always available — serving you better, digitally.</label>
             <div className="flex gap-10 items-center">
                   <FaSquareXTwitter className="text-6xl cursor-pointer"/>
                   <FaFacebook className="text-6xl cursor-pointer"/>
                   <GrInstagram className="text-6xl cursor-pointer"/>
                   <TbBrandYoutubeFilled className="text-6xl cursor-pointer"/>
                   <ImWhatsapp className="text-6xl cursor-pointer"/>
             </div>
        </div>
        <div className="min-h-screen py-13 w-full md:w-[30%] flex justify-center md:justify-end items-center">
                    
        <div className="px-6 py-15 flex flex-col border border-gray-200 items-center text-gray-800 gap-5 rounded-sm bg-white shadow-lg">
            {/* User icon  */}
            <div className="w-15 h-15 rounded-full bg-gray-200 flex justify-center items-center">
               <FaRegUser className="text-2xl" />
            </div>

            {/* Titles  */}
            <div className="flex flex-col items-center gap-2">
            <label className="text-2xl font-bold">Welcome Back</label>
            <label className="text-sm text-gray-500">Sign in to access your account</label>
            </div>

            {/* Username and Password div  */}
            <div className="flex text-sm gap-2 text-gray-500 w-full flex-col">
                {/* Email Div  */}
               <label>Email Address</label>
               <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                <MdOutlineEmail className="text-lg" />
               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
               </div>

               {emailError && <p className="text-red-600 text-xs">{emailError}</p>}

               {/* Password Div  */}
              <label>Password</label>
               <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                <MdLockOutline className="text-lg" />
               <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
               </div>

               {passwordError && <p className="text-red-600 text-xs">{passwordError}</p>}

               {/* Forgot Password  */}
               <div className="w-full flex gap-20 justify-between items-center">
                   {/* Remember Me  */}
                   <div className="flex gap-1 items-center">
                      <input type="checkbox" />
                      <label className="text-[12px]">Remember Me</label>
                   </div>
                   {/* Forgot Password  */}
                   <div className="">  
                      <Link to="#" className="text-blue-950 text-[12px] hover:underline">Forgot Password?</Link>
                   </div>
               </div>

            </div>
            
               {/* Button  */}
               <button onClick={handleLogin} className="rounded-md flex 
               items-center justify-center bg-blue-500
                w-full py-2 text-white cursor-pointer 
                hover:bg-transparent hover:text-black hover:border hover:bg-gray-500">Login</button>

                <label className="text-[12px] text-gray-500">Don't have An Account? <Link to="/signup" className="text-blue-950 hover:underline">Register Now.</Link></label>
        </div>

    </div>
    </div>
    );
}

export default LoginSection;