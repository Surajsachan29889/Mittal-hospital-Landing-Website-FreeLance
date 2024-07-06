'use client'
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Map from "./utils/map";

function Footer() {
  return (
    <div className=" flex flex-col w-full lg:h-[50vh] h-[80vh] justify-center items-center bg-[#C9E4FF] lg:px-[7rem] pt-[2%]">
      <div className="flex lg:flex-row flex-col lg:justify-start lg:items-start justify-center items-center lg:gap-2 gap-5">
        <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center">
          <div className="flex  h-[100%] w-[40%] justify-center items-center"> 
            <img src="/MITTAL HOSPITAL.png" alt="Logo" className="w-[40%]"  />
            <h1 className="lg:text-[1.6vw] text-[5vw] whitespace-nowrap font-bold w-[100%]">Mittal Hospital</h1>
          </div>
          <div className="w-[50%]">
            <p className="lg:text-[1.1vw] text-[3vw] lg:text-left text-center text-[#909090] font-medium ">Compassinate Care, Trusted Expertise, and Cutting Edge Technology for your well-being</p>
          </div>
          <div className="flex justify-center items-center gap-[7%] ml-[2%] mt-[3%]">
            <div className="">
              <FaFacebook size={30} color="#248FF9" />
            </div>
            <div>
              <GrInstagram size={30} color="#248FF9" />
            </div>
            <div>
              <FaTwitter size={30} color="#248FF9" />
            </div>
            <div>
              <FaYoutube size={30} color="#248FF9" />
            </div>
          </div>     
        </div>
        <div className="mt-[2%] flex gap-[15%] w-[40%]">
          <div className="flex flex-col gap-3 text-[#909090]">
            <h1 className="text-pri font-bold">Links</h1>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact Us</h1>
            <h1>FAQ</h1>
          </div>
          <div className="flex flex-col gap-3 text-[#909090]">
            <h1 className="text-pri font-bold">Treatments</h1>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact Us</h1>
            <h1>FAQ</h1>
          </div>
          {/* <Map address="59/3N/2E, Tantpur Rd, Ayodhya
Kunj-A, Dashrath Kunj - B, Jodha Bai ka Rauza, Arjun Nagar, Agra, Uttar Pradesh
282001"/> */}
        </div>
      </div>
      <div className="h-[1.5px] w-[100%] bg-[#b6b6b6] mt-[2%] rounded-[50%]">
</div>
      <div className="flex justify-center items-center mt-4">
        <span className="text-[#868686]"> &copy; Copyright 2024</span>
      </div>
    </div>
  );
}

export default Footer;
