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
            <li><Link href={'#'}><Image src={Instagram} alt="" className="social-image insta" /></Link></li>
            <li><Link href={'#'}><Image src={Upwork} alt="" className="social-image upwork" /></Link></li>
            <li><Link href={'#'}><Image src={Fiverr} alt="" className="social-image fiverr" /></Link></li>
            <li><Link href={'#'}><Image src={Facebook} alt="" className="social-image facebook" /></Link></li>
            <li><Link href={'#'}><Image src={Linkedin} alt="" className="social-image linkedin" /></Link></li>
        </ul>
    </aside>
  );
};

export default SocialSidebar;
