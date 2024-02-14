import React from "react";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgMenuHotdog } from "react-icons/cg";

const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const toggleSearchInputs = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleClick = (event: any) => {
    setIsActive((current) => !current);
  };

  return (
    <header className="w-full flex text-xl items-center font-medium justify-around py-2">
      <Link href="/" className="logoBoX">
        <Image src={logo} alt="logo-pic" className="w-[85px]" />
      </Link>

      <div className="tabsBox">
        <Link href="/">Home</Link>
        <Link href="/Services">Services</Link>
        <Link href="/Tool">Tool</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </div>
      <div className="flex items-center gap-6 bg-[#000] px-[20px] py-[10px] rounded-[60px] text-[20px] text-[#fff]">
        <FaSearch className="cursor-pointer" />
        <div className="bg-gray-600 w-[1.3px] h-[30px]"></div>
        <CgMenuHotdog className="text-[#fff] modal-menu-ico cursor-pointer text-[30px]" />
      </div>
    </header>
  );
};

export default Header;
