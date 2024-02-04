import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Div */}
        <div className="flex-1  flex justify-center items-center flex-col">
          <Link to="/" className="  text-sm  font-bold dark:text-white">
            <img
              src={logo}
              alt=""
              className="h-28 bg-black rounded-full object-contain object-center overflow-hidden "
            />
            {/* <span className="bg-[#008080] text-white m-1 px-2 rounded">Dev</span>
        Dose */}
          </Link>
          <p className="font-bold mt-5"> Code. Share. Connect</p>
        </div>
        {/* Right Div */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Your Email" />
              <TextInput type="email" placeholder="Email" id="email" />
            </div>
            <div className="">
              <Label value="Your Password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button className="bg-[#008080]" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 mt-3 text-sm">
            <span>Already Have an Account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
