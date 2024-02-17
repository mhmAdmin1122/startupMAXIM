import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      {/* desktop-tab-view-navbar */}
      <div className="desktop-tab-view-navbar">
        <header className="flex flex-nowrap max-[620px]:flex-col justify-between pt-3 pb-3 pl-16 pr-16 bg-[var(--text-black)] h-auto text-white w-full items-center">
          <div className="header">
            <p>
              <FaLocationDot /> 2470 Camellia Ln NE, Atlanta, GA
            </p>
            <p>
              <FaEnvelope /> Contactus@startupmaxim.com
            </p>
            <p>
              <FaPhone /> +92-303-642-4939
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="Header-icon">Follow:</h1>
            <div className="facebook-icon">
              <FaFacebook />
            </div>
            <div className="linkedin-icon">
              {" "}
              <FaLinkedin />
            </div>
            <div className="instagram-icon">
              <FaInstagram />
            </div>
            <div className="twitter-icon">
              <FaTwitter />
            </div>
          </div>
        </header>
      </div>

      {/* Mobile-View-Navbar */}
      <div className="Mobile-View-Navbar">
        <Link href="mailto:contactus@startupmaxim.com" className="mail-box text-[10px] flex items-center gap-2">
          <FaEnvelope />
          <b>contactus@startupmaxim.com</b>
        </Link>
        <Link href="tel:+923036424939" className="phone-call text-[10px] flex items-center gap-2">
          <FaPhone />
          <b>+92-303-642-4939</b>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
