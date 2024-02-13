import Image from "next/image";
import Link from "next/link";
import React from "react";
import Facebook from "@/public/img/icons8-facebook.svg";
import Instagram from "@/public/img/icons8-instagram.svg";
import Fiverr from "@/public/img/icons8-fiverr.svg";
import Upwork from "@/public/img/icons8-upwork.svg";
import Linkedin from "@/public/img/icons8-linkedin.svg";

const SocialSidebar = () => {
  return  (
    <aside className="social-bar">
        <ul>
            <li className="first"><Link href={'#'}>Instagram</Link><Image src={Instagram} alt="" className="social-image insta" /></li>
            <li className="second"><Link href={'#'}>Upwork</Link><Image src={Upwork} alt="" className="social-image upwork" /></li>
            <li className="third"><Link href={'#'}>Fiverr</Link><Image src={Fiverr} alt="" className="social-image fiverr" /></li>
            <li className="forth"><Link href={'#'}>Facebook</Link><Image src={Facebook} alt="" className="social-image facebook" /></li>
            <li className="fifth"><Link href={'#'}>LinkedIn</Link><Image src={Linkedin} alt="" className="social-image linkedin" /></li>
        </ul>
    </aside>
  );
};

export default SocialSidebar;