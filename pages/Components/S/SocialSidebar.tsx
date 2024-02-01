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
    <aside className="social">
        <ul>
            <li><Image src={Instagram} alt="" className="social-image insta" /><Link href={'#'}> Instagram</Link></li>
            <li><Image src={Upwork} alt="" className="social-image upwork" /><Link href={'#'}> Upwork</Link></li>
            <li><Image src={Fiverr} alt="" className="social-image fiverr" /><Link href={'#'}> Fiverr</Link></li>
            <li><Image src={Facebook} alt="" className="social-image facebook" /><Link href={'#'}> Facebook</Link></li>
            <li><Image src={Linkedin} alt="" className="social-image linkedin" /><Link href={'#'}> Linkedin</Link></li>
        </ul>
    </aside>
  );
};

export default SocialSidebar;
