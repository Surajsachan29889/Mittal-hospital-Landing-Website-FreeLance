'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import VercelLogo from "../public/vercel.svg";
import Link from "next/link";
import { AiFillHome, AiFillPhone, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-[#ffffff39] shadow-xl backdrop-blur-[10px] z-20">
      <div className="h-[13vh] w-full px-[2rem] lg:px-[10rem] flex justify-between items-center">
        <div className="w-[30%] lg:w-[10%]">
          <Image src={VercelLogo} alt="Vercel Logo" />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
        <div
          className={`flex lg:gap-12 gap-5 font-extrabold items-center justify-center w-full lg:w-auto fixed lg:static top-[13vh] left-0 lg:top-0 bg-white lg:bg-transparent h-screen lg:h-auto transition-all duration-300 ease-in-out ${
            menuOpen ? 'opacity-100 z-20 transform translate-y-0' : 'opacity-0 lg:opacity-100 -z-10 lg:z-0 transform -translate-y-full lg:translate-y-0'
          } flex-col lg:flex-row`}
        >
          <div className="border-b-[#53bdff] hover:border-b-[.5rem] duration-75 flex gap-2 justify-center items-center lg:my-0 my-4">
            <AiFillHome />
            <Link href="#">
              <span className="mt-[.5px]">Home</span>
            </Link>
          </div>
          <div className="border-b-[#53bdff] hover:border-b-[.5rem] duration-100 lg:my-0 my-4">
            <Link href="#">
              <span>About Us</span>
            </Link>
          </div>
          <div className="border-b-[#53bdff] hover:border-b-[.5rem] duration-75 lg:my-0 my-4">
            <Link href="#">
              <span>Our Service</span>
            </Link>
          </div>
          <div className="border-b-[#53bdff] hover:border-b-[.5rem] duration-75 flex gap-1 justify-center items-center lg:my-0 my-4">
            <AiFillPhone />
            <Link href="#">
              <span>1234567890</span>
            </Link>
          </div>
          <div className="my-4 lg:my-0">
            <button className="w-[12rem] h-[3rem] bg-[#53bdff] text-[1rem] text-white rounded-lg btn-book duration-100">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
