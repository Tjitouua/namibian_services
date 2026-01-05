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


const SignUpSection = () => {

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

         navigate('/signup')
    }



    return (
        <div className="w-full min-h-screen flex px-15">
        <div className="w-[70%] min-h-screen text-black/80 flex flex-col justify-center gap-17">
           <label className="font-bold text-7xl">Get Started</label>
           <label className="text-lg">Create your account to access the Namibia Government E-Services Portal.
            Once registered, you can apply for services, track applications, manage your personal information,
             and receive updates from government offices, all securely and conveniently, from anywhere, at any
              time. Joining the portal ensures you stay connected and informed digitally.</label>
             <div className="flex gap-10 items-center">
                   <FaSquareXTwitter className="text-6xl cursor-pointer"/>
                   <FaFacebook className="text-6xl cursor-pointer"/>
                   <GrInstagram className="text-6xl cursor-pointer"/>
                   <TbBrandYoutubeFilled className="text-6xl cursor-pointer"/>
                   <ImWhatsapp className="text-6xl cursor-pointer"/>
             </div>
        </div>
        <div className="min-h-screen py-13 w-[30%] flex justify-end items-center">
                    
        <div className="px-6 py-15 flex flex-col border border-gray-200 items-center text-gray-800 gap-5 rounded-sm bg-white shadow-lg">
            {/* User icon  */}
            <div className="w-15 h-15 rounded-full bg-gray-200 flex justify-center items-center">
               <FaRegUser className="text-2xl" />
            </div>

            {/* Titles  */}
            <div className="flex flex-col items-center gap-2">
            <label className="text-2xl font-bold">Welcome</label>
            <label className="text-sm text-gray-500 text-center max-w-70">Create your user account to access the E-Services Portal.</label>
            </div>

            {/* Username and Password div  */}
            <div className="flex text-sm gap-2 text-gray-500 w-full flex-col">
                {/* Email Div  */}
               <label>Email Address</label>
               <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                <MdOutlineEmail className="text-lg" />
               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
               </div>

               {emailError && <p className="text-red-600 text-xs">{emailError}</p>}

               {/* Username Div  */}
               <label>Username</label>
               <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                <MdOutlineEmail className="text-lg" />
               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="JohnDoe123" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
               </div>

               {emailError && <p className="text-red-600 text-xs">{emailError}</p>}

               {/* Password Div  */}
              <label>Password</label>
               <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                <MdLockOutline className="text-lg" />
               <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
               </div>

               {passwordError && <p className="text-red-600 text-xs">{passwordError}</p>}

               {/* Confirm Password Div  */}
              <label>Confirm Password</label>
               <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                <MdLockOutline className="text-lg" />
               <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Re-enter your password" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
               </div>

               {passwordError && <p className="text-red-600 text-xs">{passwordError}</p>}

              

            </div>
            
               {/* Button  */}
               <button onClick={handleLogin} className="rounded-md flex 
               items-center justify-center bg-blue-500
                w-full py-2 text-white cursor-pointer 
                hover:bg-transparent hover:text-black hover:border hover:bg-gray-500">Sign Up</button>

                <label className="text-[12px] text-gray-500">Already have an account? <Link to="/login" className="text-blue-950 hover:underline">Login</Link></label>
        </div>

    </div>
    </div>
    );
}

export default SignUpSection;