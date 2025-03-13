import React from "react";
import { assets } from "../assets/assets";

export default function Header() {
  return (
    <div className=" flex flex-col md:flex-row flex-wrap rounded-lg  bg-blue-700 justify-between items-center ">
      <div>
        <p>
          Book Appointement <br />
          With Trusted Doctors
        </p>
        <div>
            <img src={assets.group_profiles} alt="" />
            <p>
            Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment hassle-free
            </p>
        </div>
        <a href="">
            Book Appointement <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      <div className="w-1/2 ">
        <img className="" src={assets.header_img} alt="" />


        
      </div>
    </div>
  );
}
