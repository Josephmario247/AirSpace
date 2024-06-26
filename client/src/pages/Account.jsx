import React, { useState } from "react";
import { estate_keys } from "../assets/images";
import { BsEnvelopePaper, BsPersonAdd } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import {  toast} from 'react-hot-toast'

export default function Account() {
  const [signupInputs, setSignupInputs] = useState({
    firstname: "",
    lastname:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:""
  });
    const [loginInputs, setLoginInputs] = useState({
      email:"",
      password:""
    })
    const handleChange = (e) => {
      setSignupInputs(prev => ( {...prev, [e.target.name]: e.target.value}));
      console.log(signupInputs)
    }
  const handleSignup = async(e) => {
     e.preventDefault();
     if(signupInputs.confirmPassword  !== signupInputs.password){
       toast.error("Passwords do not match", {id: "123"})
  }
  else if (signupInputs.phone.length !== 14) {
    toast.error("Phone number must be 14 digits long.", { id: "123"});
  }
  else{
    toast.loading("Please await for account creating ... ", {id: "123"});
    try {
      const res = await fetch("http://localhost:3000/auth/signup", {
        headers: {
          "content-Type": "application/json"
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(signupInputs)
      })
      if (res.error) throw Error;
      toast.success(res.message, {id: "123"})
    } catch (error) {
      console.log({error})
      toast.error(error.message,  {id: "123"})
    }
  }
}
  return (
    <main className="flex flex-col relative">
      <div className="bg-main relative">
        <div className="bg-main relative min-h-[65vh] h-[70vh] px-4">
          <img
            src={estate_keys}
            alt="estate_keys"
            className=" opacity-50 absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative container py-10 mx-auto text-white flex flex-col justify-center h-full gap-2">
            <h3 className="text-3xl md:text-4xl font-bold">
              Login/Signup
            </h3>
            <p className="text-base md:text-lg">
              Having an account gives you tremendous access to more
            </p>
          </div>
        </div>
      </div>

      <div className="relative px-4 -mt-10 mb-20 z-20">
        <form onSubmit={handleSignup} className="bg-white container mx-auto shad p-5 rounded-lg grid md:grid-cols-2 w-full max-w-screen-md gap-3 md:gap-5">
          <div className="flex items-center gap-4 md:col-span-2">
            <div className="bg-orange-400 rounded-full h-10 w-10 md:h-16 md:w-16 grid place-items-center text-main text-xl md:text-3xl">
              <BsPersonAdd />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-main capitalize">
              Creat an account to get Started
            </h3>
          </div>
          <input
            type="text"
            name="firstname"
            value={signupInputs.firstname}
            onChange={handleChange}
            placeholder="Edwin"
            required
            className="rounded-md border-2 border-slate-200 py-2 px-4 text-sm md:text-base outline-none hover:border-main"
          />
          <input
            type="text"
            name="lastname"
            value={signupInputs.lastname}
            onChange={handleChange}
            placeholder="brenford"
            required
            className="rounded-md border-2 border-slate-200 py-2 px-4 text-sm md:text-base outline-none hover:border-main"
          />
          <input
            type="email"
            name="email"
            value={signupInputs.email}
            onChange={handleChange}
            placeholder="Edwin@gmail.com"
            required
            className="rounded-md border-2 border-slate-200 py-2 px-4 text-sm md:text-base outline-none hover:border-main"
          />

          <div className="rounded-md border-2 border-slate-200 py-2 px-4 text-sm md:text-base outline-none hover:border-main">
            <PhoneInput
              flags={flags}
              defaultCountry="NG"
              international
              onChange={(value) => setSignupInputs(prev => ({...prev, phone: value}))}
              value={signupInputs.phone}
            />
          </div>

          <input
            type="password"
            name="password"
            value={signupInputs.password}
            onChange={handleChange}
            placeholder="******"
            minLength={8}
            required
            className="rounded-md border-2 border-slate-200 py-2 px-4 text-sm md:text-base outline-none hover:border-main"
          />

          <input
            type="password"
            name="confirmPassword"
            value={signupInputs.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            className="rounded-md border-2 border-slate-200 py-2 px-4 text-sm md:text-base outline-none hover:border-main"
          />

          <button
            type="submit"
            className="rounded-full py-2 px-4 text-sm md:text-base outline-none bg-main text-white w-max"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}

