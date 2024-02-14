import React from "react";
import {
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaCircleUser,
  FaShareFromSquare,
  FaVideo,
  FaWindows,
} from "react-icons/fa6";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import dropdownlogo from "@/public/img/football-removebg-preview.png";
import bannar from "@/public/Startup Growth Academy - Coming Soon Poster.webp";

const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };
  const toggleSearchInputs = () => {
    setShowSearchInput(!showSearchInput);
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: any) => {
    setIsActive((current) => !current);
  };

  return (
    <header className="w-full flex text-xl items-center font-medium justify-around border-2 py-2">
      <Link href="/" className="logoBoX">
        <Image src={logo} alt="logo-pic" className="w-[120px]" />
      </Link>

      <div className="tabsBox">
        <Link href="/">Home</Link>
        <Link href="/Services">Services</Link>
        <Link href="/Tool">Tool</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </div>

      <form className="searches flex items-center bg-[#000] text-2xl text-[#fff] py-6 px-10 gap-4 rounded-[60px]">
        <button className="iconsBox ">
          <FaSearch />
        </button>
        {/* <input type="text" className="bg-transparent text-lg" placeholder="Enter your search" /> */}
        <button></button>
      </form>
      
     
    </header>
  );
};

export default Header;
