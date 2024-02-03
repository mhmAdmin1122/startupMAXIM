import React from "react";
import logo from "@/public/img/logo2.png";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";

const Head = () => {
  return (
    <header className="headerAdmin flex items-center justify-between bg-[#dafe59b2] py-3 px-[60px]">
      <Link href="/Admin/Home" className="admin_header logobox">
        <Image src={logo} alt="logo" width={200} className="cursor-pointer" />
      </Link>
      <div className="admin_header tabsbox text-xl font-medium flex items-start gap-6">
        <Link href="/Admin/Home">Home</Link>
        <Link href="/Admin/Blog">Blog</Link>
        <Link href="/Admin/Contact">Contact</Link>
        <Link href="/Admin/Newsletter">Newsletter</Link>
        <Link href="/Admin/Projects">Projects</Link>
        <Link href="/Admin/Services">Services</Link>
        <Link href="/Admin/Testmonials">Testmonials</Link>
        <Link href="/Admin/Tools">Tools</Link>
      </div>
      <div className="admin_header profbox flex items-center gap-2 text-xl font-bold bg-[#00bf63] px-5 py-3 text-[#fff] rounded-md hover:bg-[#febd59] transition-all ease-in-out duration-700">
        <FaUser />
        <h2 className="user_auth cursor-pointer">Admin</h2>
      </div>
    </header>
  );
};

export default Head;
