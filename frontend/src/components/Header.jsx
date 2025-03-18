import React from "react";
import { assets } from "../assets/assets";

export default function Header() {
  return (
    <div className=" flex flex-col md:flex-row flex-wrap rounded-lg px-8 md:px-10  lg:px-20 bg-[var(--primary-color)]  ">
      <div className="text-white  md:w-1/2 flex flex-col justify-center m-auto   md:py-[20vh] md:mb-[-30px] items-start gap-6 py-10 ">
        <p className="text-4xl md:text-5xl font-semibold md:leading-tight lg:leading-tight ">
          Book Appointement <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col  md:flex-row gap-3 text-sm font-light md:items-center">
            <img className="w-28" src={assets.group_profiles} alt="" />
            <p >
            Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment hassle-free
            </p>
        </div>
        <a id="book" className="flex   items-center gap-4 bg-white text-black px-8 py-3 rounded-lg text-sm transition-colors duration-75 hover:bg-blue-50 " href="#speciality">
            Book Appointement <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      <div className="md:w-1/2  relative">
        <img className="w-full md:absolute bottom-0 h-[20%] md:h-[80%] rounded-lg" src={assets.header_img} alt="" />


        
      </div>
    </div>
  );
}
